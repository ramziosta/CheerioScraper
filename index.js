const scraper = require('./scraper');
const saver = require('./saver');

async function main() {
  const data = await scraper.getData();
  saver.saveData(data);
}

main();

