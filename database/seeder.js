
const faker = require('faker');


var getrandomDescription = (wordCount) => {
    return faker.random.words(wordCount);
}

var getRandomUrl = (i) => {
    return `https://fu11m3tal.s3-us-west-1.amazonaws.com/${i+1}.jpg`
}

var getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

var seeder = (dataCount) => {
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
        data.description = getrandomDescription(10);
        dataSet.push(data);
    }
    return dataSet;
};



module.exports.seeder = seeder