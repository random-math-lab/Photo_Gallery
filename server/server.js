const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');
const RandomDataGenerator = require('../database/RandomDataGenerator.js')
const app = express();
const PORT = 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('client/dist'));

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

// app.get('/', (req, res) => {
//     db.((result) => {
//         res.send(result)
//     })
// });


let allData = RandomDataGenerator.RandomDataGenerator();

db.db.query("TRUNCATE TABLE photo")

for (let i = 0; i < allData.length; i++) {
    let currentData = allData[i];
    let sql = `INSERT INTO photo (linstingId, url, description) values (?, ?, ?)`
    db.db.query(sql, [currentData.listingId, currentData.url, currentData.description])
}
