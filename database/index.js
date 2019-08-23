const mysql = require("mysql");
const randomDataGenerator = require("../database/RandomDataGenerator.js");

const db = mysql.createConnection({
    user: 'root',
    password: '',
    database: 'photos'
})

db.connect((err) => {
    if (err){
        console.log(err);
        return;
    }else{
        console.log('connected to database')
    }
})



module.exports.db = db;