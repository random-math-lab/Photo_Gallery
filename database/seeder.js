
const faker = require('faker');

var randomDescription = (wordCount) => {
    return faker.random.words(wordCount);
}

var getRandomUrl = (i) => {
    return `https://fu11m3tal.s3-us-west-1.amazonaws.com/${i+1}.jpg`
}

var getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

var seeder =  (dataCount) => {
    var dataSet = [];
    var data = {
        id: undefined, 
        listingId: undefined, 
        url: undefined, 
        description: undefined
    };

    for (var i = 0; i < dataCount; i++) {
        var data = {};
        data.id = i;
        data.listingId = getRandomInt(10);
        data.url = getRandomUrl(i);
        data.description = randomDescription(10);
        dataSet.push(data);
    }
    return dataSet;
};

var photos = seeder(100)

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
    db.db.query(queryString, randomIds, (err, data) => {
        if(err) {
            console.log(err);
        } else {
            cb(data)
        }
    });
}

const allPhotos = (cb) => {
    let allData = photos;
    db.db.query("TRUNCATE TABLE photo")
    for (let i = 0; i < allData.length; i++) {
        let currentData = allData[i];
        let sql = `INSERT INTO photo (linstingId, url, description) values (?, ?, ?)`
        db.db.query(sql, [currentData.listingId, `https://fu11m3tal.s3-us-west-1.amazonaws.com/${i+1}.jpg`, currentData.description], (err, data) => {
            if(err) {
                console.log(err);
            } else {
                cb(data)
            }
        })
    }
}

module.exports = {photos, randomPhotos, allPhotos}