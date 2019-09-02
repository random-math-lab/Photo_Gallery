import React from 'react';
import { shallow, mount, render } from 'enzyme';
const seeder = require('../database/seeder.js')

describe('Database', () => {
    var data = seeder.seeder(100)
    var dataEntry = data[0]

    test('should generate 100 data points', () => {
        expect(data.length).toBe(100);
    
    });
    
    test('should have data with properties id, listingId, url, description', () => {
        expect(dataEntry).toHaveProperty('id');
        expect(dataEntry).toHaveProperty('listingId');
        expect(dataEntry).toHaveProperty('url');
        expect(dataEntry).toHaveProperty('description');
    });    
});
  
