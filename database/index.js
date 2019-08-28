const mysql = require("mysql");
const data = require("./seeder.js");

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

const randomPhotos = (cb) => {
    let randomIds = [];
    for(var i = 0; i < 12; i++ ) {
        let randomId = Math.ceil(Math.random()*100);
        while( randomIds.indexOf(randomId) >= 0 ) {
            randomId = Math.ceil(Math.random()*100);
        }
        randomIds.push(randomId);       
    }
    console.log(randomIds)
    let queryString = 'SELECT * FROM photo WHERE id=? OR id=? OR id=? OR id=? OR id=? OR id=? OR id=? OR id=? OR id=? OR id=? OR id=? OR id=?'
    db.query(queryString, randomIds, (err, data) => {
        cb(null, data)
    });
}




module.exports = db;