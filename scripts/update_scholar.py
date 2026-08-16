import json
import os
import sys
from datetime import datetime, timezone

from scholarly import scholarly


SCHOLAR_ID = "2SUBIBkAAAAJ"
OUTPUT_FILE = os.path.join("client", "src", "data", "publications.json")


def normalize_title(title):
    return " ".join((title or "").lower().split())


def guess_publication_type(venue):
    venue_lower = (venue or "").lower()

    conference_terms = [
        "conference",
        "proceedings",
        "symposium",
        "workshop",
        "congress",
    ]

    if any(term in venue_lower for term in conference_terms):
        return "Conference"

    return "Journal"


def load_existing_data():
    if not os.path.exists(OUTPUT_FILE):
        return {"publications": [], "metrics": {}}

    with open(OUTPUT_FILE, "r", encoding="utf-8") as file:
        return json.load(file)


def main():

    print(f"Fetching Google Scholar profile: {SCHOLAR_ID}")

    # Avoid waiting indefinitely
    scholarly.set_timeout(30)
    scholarly.set_retries(2)

    existing_data = load_existing_data()

    existing_lookup = {
        normalize_title(pub.get("title")): pub
        for pub in existing_data.get("publications", [])
    }

    print("Finding Scholar author profile...")

    author = scholarly.search_author_id(SCHOLAR_ID)

    print("Loading publications and metrics...")

    author = scholarly.fill(
        author,
        sections=[
            "basics",
            "indices",
            "counts",
            "publications",
        ],
    )

    scholar_publications = author.get("publications", [])

    print(f"Scholar returned {len(scholar_publications)} publications.")

    publications = []

    for index, publication in enumerate(
        scholar_publications,
        start=1,
    ):

        bib = publication.get("bib", {})

        title = (bib.get("title") or "").strip()

        if not title:
            continue

        authors_raw = bib.get("author", "")

        if isinstance(authors_raw, str):
            authors = [
                author_name.strip()
                for author_name in authors_raw.split(" and ")
                if author_name.strip()
            ]
        elif isinstance(authors_raw, list):
            authors = authors_raw
        else:
            authors = []

        year_raw = (
            bib.get("pub_year")
            or bib.get("year")
            or 0
        )

        try:
            year = int(year_raw)
        except (TypeError, ValueError):
            year = 0

        venue = (
            bib.get("citation")
            or bib.get("venue")
            or bib.get("journal")
            or bib.get("conference")
            or ""
        )

        citations = publication.get(
            "num_citations",
            0,
        )

        author_pub_id = publication.get(
            "author_pub_id",
            "",
        )

        if author_pub_id:
            scholar_url = (
                "https://scholar.google.com/citations?"
                f"view_op=view_citation&hl=en"
                f"&user={SCHOLAR_ID}"
                f"&citation_for_view={author_pub_id}"
            )
        else:
            scholar_url = (
                "https://scholar.google.com/citations?"
                f"user={SCHOLAR_ID}&hl=en"
            )

        previous = existing_lookup.get(
            normalize_title(title),
            {},
        )

        publications.append({
            "id": index,
            "title": title,
            "authors": authors,
            "year": year,
            "venue": venue,
            "type": previous.get(
                "type",
                guess_publication_type(venue),
            ),
            "citations": citations or 0,
            "url": scholar_url,
            "abstract": previous.get(
                "abstract",
                "",
            ),
            "keywords": previous.get(
                "keywords",
                [],
            ),
        })

    publications.sort(
        key=lambda pub: (
            pub.get("year", 0),
            pub.get("citations", 0),
        ),
        reverse=True,
    )

    for index, publication in enumerate(
        publications,
        start=1,
    ):
        publication["id"] = index

    citations_by_year = {
        str(year): citations
        for year, citations
        in author.get(
            "cites_per_year",
            {},
        ).items()
    }

    metrics = {
        "totalCitations": author.get(
            "citedby",
            0,
        ),
        "hIndex": author.get(
            "hindex",
            0,
        ),
        "i10Index": author.get(
            "i10index",
            0,
        ),
        "citationsByYear": citations_by_year,
    }

    output = {
        "publications": publications,
        "metrics": metrics,
        "lastUpdated": datetime.now(
            timezone.utc
        ).isoformat(),
        "scholarProfile": (
            "https://scholar.google.com/citations?"
            f"user={SCHOLAR_ID}&hl=en"
        ),
    }

    os.makedirs(
        os.path.dirname(OUTPUT_FILE),
        exist_ok=True,
    )

    with open(
        OUTPUT_FILE,
        "w",
        encoding="utf-8",
    ) as file:
        json.dump(
            output,
            file,
            indent=2,
            ensure_ascii=False,
        )

    print("")
    print("Google Scholar update completed.")
    print(
        f"Publications: {len(publications)}"
    )
    print(
        f"Total citations: "
        f"{metrics['totalCitations']}"
    )
    print(
        f"h-index: {metrics['hIndex']}"
    )
    print(
        f"i10-index: {metrics['i10Index']}"
    )


if __name__ == "__main__":
    try:
        main()

    except Exception as error:
        print(
            f"Google Scholar update failed: {error}"
        )
        sys.exit(1)
