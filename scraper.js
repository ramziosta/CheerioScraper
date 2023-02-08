const axios = require('axios');
const cheerio = require('cheerio');

async function getData() {
    // change the url to the site you are trying to scrape
  const response = await axios.get('https://github.com/');
  const $ = cheerio.load(response.data);

  const data = [];

  // Extract the data using CSS selectors 
  // if looking for data from headlines use h1, looking for data from paragraphs, use p, looking for a list, use li, etc...
  $('p').each((index, element) => {
    const item = $(element).text();
    data.push(item);
  });

  return data;
}

module.exports = { getData };


//the data that is scraped is: the site is github, and the data scraped ar all the paragraphs. The data is available in the data.json file