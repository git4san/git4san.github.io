from scholarly import scholarly
import matplotlib.pyplot as plt

# Replace with your Google Scholar User ID
user_id = "2SUBIBkAAAAJ"

# Search for the author using their Google Scholar user ID
author = scholarly.search_author_id(user_id)
author = scholarly.fill(author, sections=["basics", "indices", "publications", "citedby_graph"])

# Open the markdown file to write the publication data
with open("scholar_publications.md", "w") as f:
    # Start markdown document
    f.write("# My Google Scholar Publications\n\n")
    
    # Add profile picture if available
    profile_pic = author.get("url_picture", "")
    if profile_pic:
        f.write(f"![Profile Picture]({profile_pic})\n\n")
    
    # Write citation metrics if available
    f.write(f"- **Total Citations:** {author.get('citedby', 'N/A')}\n")
    f.write(f"- **H-index:** {author.get('hindex', 'N/A')}\n")
    f.write(f"- **i10-index:** {author.get('i10index', 'N/A')}\n\n")
    
    # Create and add citation history if data is available
    citation_history = author.get("citedby_graph", [])
    if citation_history:
        f.write("### Citation History\n")
        for year, citations in enumerate(citation_history):
            f.write(f"- **Year {2000 + year}**: {citations} citations\n")
        f.write("\n")
        
        # Plot and save the citation history as a PNG image
        years = list(range(2000, 2000 + len(citation_history)))
        plt.figure(figsize=(10, 5))
        plt.bar(years, citation_history, color="#4285f4")
        plt.xlabel("Year")
        plt.ylabel("Citations")
        plt.title("Citation History")
        plt.savefig("static/citation_history.png")  # Adjust the path based on your site's setup
        plt.close()  # Close the plot to avoid display issues
        
        # Add the citation history image to the markdown
        f.write("![Citation History](../static/citation_history.png)\n\n")
    
    # Group publications by year
    publications_by_year = {}

    for pub in author['publications']:
        # Retrieve all possible details about the publication with fallback options
        title = pub['bib'].get('title', 'No title')
        authors = pub['bib'].get('author', 'Unknown authors')
        year = pub['bib'].get('pub_year', 'No year')
        venue = pub['bib'].get('venue', 'No venue')
        pages = pub['bib'].get('pages', 'No pages')
        url = pub.get('pub_url', None)
        citation_count = pub.get('num_citations', 'N/A')

        # Format publication entry with available information
        pub_entry = f"- **{title}**\n  - *{authors}* ({year})\n  - _{venue}_, {pages} (Cited by: {citation_count})"
        
        # Add a hyperlink if the URL is available
        if url:
            pub_entry = f"- **[{title}]({url})**\n  - *{authors}* ({year})\n  - _{venue}_, {pages} (Cited by: {citation_count})"

        # Add entry to the year group
        if year not in publications_by_year:
            publications_by_year[year] = []
        publications_by_year[year].append(pub_entry)

    # Write publications grouped by year, sorted in descending order
    f.write("## Publications\n\n")
    for year, pubs in sorted(publications_by_year.items(), reverse=True):
        f.write(f"### {year}\n")
        for pub in pubs:
            f.write(f"{pub}\n")
        f.write("\n")

print("Publication data saved to scholar_publications.md")
