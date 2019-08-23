import React from 'react';
import { LoremIpsum } from "lorem-ipsum";


const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

var RandomDataGenerator =  () => {
    var dataSet = [];
    
    var data = {
        id: undefined, 
        listingId: undefined, 
        Photo: undefined, 
        Description: undefined
    };


    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    };

    for (var i = 0; i < 100; i++) {
        var data = {};
        data.id = i;
        data.listingId = getRandomInt(10);
        data.url = "photourl";
        data.description = `${lorem.generateParagraphs(1)}`;
        dataSet.push(data);
    }
    return dataSet;
};

var sampleData = {
    id: 8, 
    listingId: 71, 
    photo: "https://www.flickr.com/photos/39908901@N06/7531261890/", 
    description: "Stunning view of the master cave bedroom. Marble floors and countertops with all natural lighting"
};

var dataSet = RandomDataGenerator();

export default RandomDataGenerator;