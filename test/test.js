import React from 'react';
import { shallow, mount, render } from 'enzyme';
const data = require('../database/seeder.js')
// import PhotoEntryGrid from '../client/src/components/PhotoEntryGrid.jsx';
// import app from '../server/server.js';

describe('Database', () => {
    test('should generate 100 data points', () => {
        expect(data.length).toBe(100);
    
    });
    
    test('should have data with properties id, listingId, url, description', () => {
        expect(data[0]).toHaveProperty('id');
        expect(data[0]).toHaveProperty('listingId');
        expect(data[0]).toHaveProperty('url');
        expect(data[0]).toHaveProperty('description');
    });    
});
  

// describe('API Calls', () => {
//     it('should respond with index.html', async () => {
//         const res = await request(app).get('/');
//         expect(res.statusCode).toBe(200);
//       });
// });

// describe('Photo Component', () => {
//     it('renders the Photo element', () => {  
//         const wrapper = shallow(<PhotoEntryGrid/>);
//         expect(wrapper.state('isCheckinOpen')).toBe(false);
//     });
// });

