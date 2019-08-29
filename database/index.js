const mysql = require("mysql");
const seeder = require("./seeder.js");

const db = mysql.createConnection({
    user: 'root',
    password: '',
    database: 'photos'
})

db.connect((err) => {
    if (err) {
        console.log(err);
        return;
    } else {
        
    }
})

const photos = seeder.photos;

const randomPhotos = (cb) => {
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
            cb(data)
        }
    });
}

const allPhotos = (cb) => {
    let allData = photos;
    db.query("TRUNCATE TABLE photo")
    for (let i = 0; i < allData.length; i++) {
        let currentData = allData[i];
        let sql = `INSERT INTO photo (linstingId, url, description) values (?, ?, ?)`
        db.query(sql, [currentData.listingId, `https://fu11m3tal.s3-us-west-1.amazonaws.com/${i+1}.jpg`, currentData.description], (err, data) => {
            if(err) {
                console.log(err);
            } else {
                cb(data)
            }
        })
    }
}


module.exports = {db, randomPhotos, allPhotos};