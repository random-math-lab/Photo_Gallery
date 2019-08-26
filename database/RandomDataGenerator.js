
const faker = require('faker');




var randomDescription = () => {
    return faker.random.words(10);
}

var RandomDataGenerator =  () => {
    var dataSet = [];
    var data = {
        id: undefined, 
        listingId: undefined, 
        url: undefined, 
        description: undefined
    };


    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    };

    for (var i = 0; i < 100; i++) {
        var data = {};
        data.id = i;
        data.listingId = getRandomInt(10);
        data.url = `https://fu11m3tal.s3-us-west-1.amazonaws.com/${i+1}.jpg`;
        data.description = randomDescription();
        dataSet.push(data);
    }
    return dataSet;
};




module.exports = {
    RandomDataGenerator,
};