const fs = require('fs');

function saveData(data) {
  fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
}

module.exports = { saveData };
