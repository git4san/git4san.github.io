from scholarly import scholarly

# Replace with your Google Scholar User ID
user_id = "2SUBIBkAAAAJ"

# Search for the author using their Google Scholar user ID
author = scholarly.search_author_id(user_id)
author = scholarly.fill(author, sections=["basics", "indices", "publications"])

# Prepare author profile details
author_name = author.get("name", "Unknown Author")
affiliation = author.get("affiliation", "No affiliation available")
profile_pic = author.get("url_picture", "")  # URL to author's profile picture
citation_count = author.get("citedby", "N/A")
h_index = author.get("hindex", "N/A")
i10_index = author.get("i10index", "N/A")
citation_history = author.get("citedby_graph", [])  # Citation history data

# Generate markdown file
with open("scholar_publications.md", "w") as f:
    # Author profile section
    f.write(f"# {author_name}'s Google Scholar Profile\n\n")
    f.write(f"![Profile Picture]({profile_pic})\n\n" if profile_pic else "")
    f.write(f"**Affiliation**: {affiliation}\n\n")
    f.write(f"**Total Citations**: {citation_count}\n")
    f.write(f"**H-index**: {h_index}\n")
    f.write(f"**i10-index**: {i10_index}\n\n")

    # Display citation history as a list
    f.write("### Citation History\n")
    for year, citations in enumerate(citation_history):
        f.write(f"- **Year {2000 + year}**: {citations} citations\n")

    # Publications section
    f.write("\n## Publications\n")
    publications_by_year = {}

    for pub in author['publications']:
        title = pub['bib'].get('title', 'No title')
        year = pub['bib'].get('pub_year', 'No year')
        venue = pub['bib'].get('venue', 'No venue')
        url = pub.get('pub_url', None)
        citation_count = pub.get('num_citations', 'N/A')

        pub_entry = (
            f"- **[{title}]({url})** ({year}) - _{venue}_ (Cited by: {citation_count})"
            if url
            else f"- **{title}** ({year}) - _{venue}_ (Cited by: {citation_count})"
        )

        if year not in publications_by_year:
            publications_by_year[year] = []
        publications_by_year[year].append(pub_entry)

    # Write publications grouped by year
    for year, pubs in sorted(publications_by_year.items(), reverse=True):
        f.write(f"### {year}\n")
        for pub in pubs:
            f.write(f"{pub}\n")
        f.write("\n")

print("Publication data saved to scholar_publications.md")
