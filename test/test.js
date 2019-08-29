import React from 'react';
import { shallow, mount, render } from 'enzyme';
const db = require('../database/seeder.js')
import PhotoEntryGrid from '../client/src/components/PhotoEntryGrid';
import Photo from '../client/src/components/Photo';
import Dummy from '../client/src/components/Dummy';


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
  
describe('Dummy Component', () => {
    const wrapper = shallow(<Dummy/>)
    it('renders the Dummy element', () => {  
        expect(wrapper.find('test').length).toEqual(0);
    });
});

