import React from 'react';
import { shallow, mount, render } from 'enzyme';
const db = require('../database/seeder.js')

describe('Database', () => {
    test('should generate 100 data points', () => {
        expect(db.photos.length).toBe(100);
    
    });
    
    test('should have data with properties id, listingId, url, description', () => {
        expect(db.photos[0]).toHaveProperty('id');
        expect(db.photos[0]).toHaveProperty('listingId');
        expect(db.photos[0]).toHaveProperty('url');
        expect(db.photos[0]).toHaveProperty('description');
    });    
});
  
