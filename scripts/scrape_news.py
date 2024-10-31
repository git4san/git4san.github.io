import requests
from bs4 import BeautifulSoup
import os
import shutil
from datetime import datetime

# Step 1: Set the RSS feed URLs for scraping
rss_feeds = {
    'Cybersecurity': 'https://www.cyberscoop.com/feed/',  # Example RSS feed for cybersecurity
    'Machine Learning': 'https://machinelearningmastery.com/feed/',  # Example RSS feed for ML
    'Artificial Intelligence': 'https://www.aitrends.com/feed/'  # Example RSS feed for AI
}

# Step 2: Prepare the base output directory
base_path = '/Users/sanu/san_git/My_Website/content/post/'
timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")  # Create a timestamp for uniqueness

# Step 3: Check for existing news folders and delete them
for folder in os.listdir(base_path):
    if folder.startswith('news_'):
        folder_path = os.path.join(base_path, folder)
        print(f'Deleting old folder: {folder_path}')  # Debugging output
        shutil.rmtree(folder_path)

# Step 4: Process each RSS feed
for category, feed_url in rss_feeds.items():
    # Create a new directory for each feed
    feed_folder_name = f'news_{timestamp}_{category.replace(" ", "_")}'  # Example: news_20241025_134516_Cybersecurity
    feed_folder_path = os.path.join(base_path, feed_folder_name)
    os.makedirs(feed_folder_path, exist_ok=True)

    # Define the path for index.md for the current feed
    output_path = os.path.join(feed_folder_path, 'index.md')

    # Step 5: Initialize a set for unique titles
    unique_titles = set()

    # Open index.md for writing (this will create a new file)
    with open(output_path, 'w') as f:
        f.write('# Latest News\n\n')  # Write header

        print(f'Scraping {category} from {feed_url}...')  # Debugging output
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'}
        response = requests.get(feed_url, headers=headers)

        if response.status_code != 200:
            print(f'Failed to retrieve {feed_url} with status code: {response.status_code}')
            continue  # Skip to the next feed if there's an issue

        soup = BeautifulSoup(response.text, 'xml')  # Use XML parser for RSS feeds
        items = soup.find_all('item')  # Find all item entries in the RSS feed
        print(f'Found {len(items)} articles in {category}.')  # Debugging output

        for item in items:
            title_element = item.find('title')  # Find the title
            link_element = item.find('link')  # Find the link
            pub_date_element = item.find('pubDate')  # Find the publication date

            if title_element and link_element:
                title = title_element.text.strip()  # Remove extra whitespace
                post_url = link_element.text.strip()  # Get the link
                pub_date = pub_date_element.text.strip() if pub_date_element else 'No date available'

                # Check for uniqueness before writing
                if title not in unique_titles:
                    f.write(f'## Title: {title}\n')
                    f.write(f'**Published:** {pub_date}\n')
                    f.write(f'[Read more]({post_url})\n\n')  # Ensure proper Markdown link format
                    f.write('---\n')  # Separator
                    unique_titles.add(title)  # Add to unique titles
                else:
                    print(f'Duplicate found and skipped: {title}')  # Debugging output

    # Final check to confirm the content written
    if unique_titles:
        print(f'Created {output_path} with {len(unique_titles)} unique news items in {category}.')
    else:
        print(f'No new unique items to write to {output_path}.')
