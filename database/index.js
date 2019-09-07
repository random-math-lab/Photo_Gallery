const mysql = require('mysql');
const seeder = require('./seeder.js') 

const db = mysql.createConnection({
    host: '172.17.0.2',
    user: 'root',
    password: 'default',
    database: 'photos'
})

db.connect((err) => {
    if (err) {
        console.log(err);
        return;
    } else {
        
    }
})

const listingPhotos = (cb) => {
    let randomIds = [];
    for(var i = 0; i < 12; i++ ) {
        let randomId = Math.ceil(Math.random()*100);
        while( randomIds.indexOf(randomId) >= 0 ) {
            randomId = Math.ceil(Math.random()*100);
        }
        randomIds.push(randomId);       
    }
    let queryString = 'SELECT * FROM photo WHERE id=? OR id=? OR id=? OR id=? OR id=? OR id=? OR id=? OR id=? OR id=? OR id=? OR id=? OR id=?'
    db.query(queryString, randomIds, (err, data) => {
        if(err) {
            console.log(err);
        } else {
            cb(null, data)
        }
    });
}
var photos = seeder.seeder(100);

db.query("TRUNCATE TABLE photo")
for (let i = 0; i < photos.length; i++) {
    let currentData = photos[i];
    let sql = `INSERT INTO photo (listingId, url, description) values (?, ?, ?)`
    db.query(sql, [currentData.listingId, `https://fu11m3tal.s3-us-west-1.amazonaws.com/${i+1}.jpg`, currentData.description])
}

module.exports.db = db;
module.exports.listingPhotos = listingPhotos;