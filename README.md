# Web Scraping App

This is a simple web scraping app that allows you to extract data from a website and save it to a file.

## Prerequisites

- Node.js and npm installed on your computer
- A website to scrape data from

## How to run the app

1. Clone the repository: `git clone https://github.com/your-repo-url.git`
2. Navigate to the project directory: `cd web-scraping-app`
3. Install the dependencies: `npm install`
4. Run the app: `node index.js`

The app will scrape the data from the website, and save it to a file named "data.json".

## How to modify the app

1. Change the URL: Open the file `scraper.js` and modify the `axios.get` method to use the URL you want to scrape.

    // change the url to the site you are trying to scrape
  const response = await axios.get('https://github.com/');

2. Change the CSS selector: Open the file `scraper.js` and modify the CSS selector in the `$('css-selector')` method to match the elements you want to extract.

  // Extract the data using CSS selectors 
  // if looking for data from headlines use h1, looking for data from paragraphs, use p, looking for a list, use li, etc...
  $('p').each((index, element) => {
    const item = $(element).text();
    data.push(item);
  });


## Where to find the data

The extracted data is saved to a file named "data.json". You can find this file in the project directory.

## Disclaimer

Please use ethical web scraping techniques, and always check for site permissions and `robots.txt` files before scraping data from a website. Scraping data from websites without permission can be illegal and can harm the website owner.
