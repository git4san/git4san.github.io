import json
import os
import re
import sys
from datetime import datetime, timezone

from scholarly import scholarly

SCHOLAR_ID = "2SUBIBkAAAAJ"
OUTPUT_FILE = os.path.join("client", "src", "data", "publications.json")
PROFILE_URL = f"https://scholar.google.com/citations?user={SCHOLAR_ID}&hl=en"


def normalize_title(value: str) -> str:
    value = (value or "").casefold()
    value = re.sub(r"[^\w\s]", " ", value)
    return re.sub(r"\s+", " ", value).strip()


def load_existing_data():
    try:
        with open(OUTPUT_FILE, "r", encoding="utf-8") as handle:
            return json.load(handle)
    except FileNotFoundError:
        return {"publications": [], "metrics": {}}


def parse_authors(raw):
    if isinstance(raw, list):
        return [str(a).strip() for a in raw if str(a).strip()]
    if not raw:
        return []
    text = str(raw).strip()
    if " and " in text:
        return [part.strip() for part in text.split(" and ") if part.strip()]
    return [part.strip() for part in text.split(",") if part.strip()]


def parse_year(raw):
    try:
        return int(raw)
    except (TypeError, ValueError):
        return 0


def classify_type(venue: str, existing_type: str | None = None) -> str:
    if existing_type in {"Journal", "Conference"}:
        return existing_type

    value = (venue or "").casefold()
    conference_markers = (
        "conference", "proceedings", "symposium", "workshop", "congress",
        "annual meeting", "international conf", "ieee conf", "acm asia"
    )
    if any(marker in value for marker in conference_markers):
        return "Conference"
    return "Journal"


def publication_url(pub):
    author_pub_id = pub.get("author_pub_id")
    if author_pub_id:
        return (
            "https://scholar.google.com/citations?"
            f"view_op=view_citation&hl=en&user={SCHOLAR_ID}"
            f"&citation_for_view={author_pub_id}"
        )
    return pub.get("pub_url") or PROFILE_URL


def main():
    existing = load_existing_data()
    previous_by_title = {
        normalize_title(item.get("title", "")): item
        for item in existing.get("publications", [])
    }

    print(f"Fetching Google Scholar profile {SCHOLAR_ID}...")
    author = scholarly.search_author_id(SCHOLAR_ID)
    if not author:
        raise RuntimeError("Google Scholar profile could not be retrieved")

    author = scholarly.fill(
        author,
        sections=["basics", "indices", "counts", "publications"],
        sortby="year",
        publication_limit=0,
    )

    output_publications = []
    for pub in author.get("publications", []):
        bib = pub.get("bib", {}) or {}
        title = str(bib.get("title") or "").strip()
        if not title:
            continue

        previous = previous_by_title.get(normalize_title(title), {})
        authors = parse_authors(bib.get("author"))
        year = parse_year(bib.get("pub_year") or bib.get("year"))
        venue = str(
            bib.get("citation")
            or bib.get("venue")
            or bib.get("journal")
            or bib.get("conference")
            or previous.get("venue")
            or ""
        ).strip()

        output_publications.append({
            "id": 0,
            "title": title,
            "authors": authors or previous.get("authors", []),
            "year": year or previous.get("year", 0),
            "venue": venue,
            "type": classify_type(venue, previous.get("type")),
            "citations": int(pub.get("num_citations") or 0),
            "url": publication_url(pub),
            "abstract": previous.get("abstract", ""),
            "keywords": previous.get("keywords", []),
        })

    if not output_publications:
        raise RuntimeError("Scholar returned no publications; refusing to overwrite existing data")

    output_publications.sort(
        key=lambda item: (item.get("year", 0), item.get("citations", 0), item.get("title", "")),
        reverse=True,
    )
    for index, item in enumerate(output_publications, start=1):
        item["id"] = index

    cites_per_year = author.get("cites_per_year", {}) or {}
    citations_by_year = {
        str(year): int(count)
        for year, count in sorted(cites_per_year.items(), key=lambda pair: int(pair[0]))
    }

    metrics = {
        "totalCitations": int(author.get("citedby") or 0),
        "hIndex": int(author.get("hindex") or 0),
        "i10Index": int(author.get("i10index") or 0),
        "citationsByYear": citations_by_year,
    }

    result = {
        "publications": output_publications,
        "metrics": metrics,
        "lastUpdated": datetime.now(timezone.utc).isoformat(),
        "scholarProfile": PROFILE_URL,
    }

    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)
    temp_file = OUTPUT_FILE + ".tmp"
    with open(temp_file, "w", encoding="utf-8") as handle:
        json.dump(result, handle, indent=2, ensure_ascii=False)
        handle.write("\n")
    os.replace(temp_file, OUTPUT_FILE)

    print(
        f"Updated {len(output_publications)} publications; "
        f"citations={metrics['totalCitations']}, "
        f"h-index={metrics['hIndex']}, i10-index={metrics['i10Index']}"
    )


if __name__ == "__main__":
    try:
        main()
    except Exception as exc:
        print(f"Scholar update failed: {exc}", file=sys.stderr)
        sys.exit(1)
