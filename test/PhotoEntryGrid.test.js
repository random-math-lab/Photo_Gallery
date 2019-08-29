import React from 'react';
import { shallow, mount, render } from 'enzyme';
const db = require('../database/seeder.js')
import PhotoEntryGrid from '../client/src/components/PhotoEntryGrid.jsx';

var data = [
    {
      id: 4,
      linstingId: 1,
      url: 'https://fu11m3tal.s3-us-west-1.amazonaws.com/4.jpg',
      description: 'panel Practical Rubber Towels connecting secondary yellow Bike Planner Via mint green Steel'
    },
    {
      id: 8,
      linstingId: 4,
      url: 'https://fu11m3tal.s3-us-west-1.amazonaws.com/8.jpg',
      description: 'Highway end-to-end invoice Indiana markets Alaska process improvement productize Avon transmitter'
    },
    {
      id: 22,
      linstingId: 4,
      url: 'https://fu11m3tal.s3-us-west-1.amazonaws.com/22.jpg',
      description: 'tertiary Fantastic cross-platform Port tan Executive back-end Mobility user-centric Division'
    },
    {
      id: 27,
      linstingId: 0,
      url: 'https://fu11m3tal.s3-us-west-1.amazonaws.com/27.jpg',
      description: 'AI multi-byte Human Reunion hardware calculating Home Loan Account ROI Pakistan Personal Loan Account'
    },
    {
      id: 29,
      linstingId: 0,
      url: 'https://fu11m3tal.s3-us-west-1.amazonaws.com/29.jpg',
      description: 'Convertible Marks 1080p Data payment Books Games Maryland TCP Frozen generate'
    },
    {
      id: 30,
      linstingId: 4,
      url: 'https://fu11m3tal.s3-us-west-1.amazonaws.com/30.jpg',
      description: 'Savings Account copy Monitored Investment Account extend hacking Jewelery Divide Handcrafted Fantastic Fresh Chips'
    }
  ]
  

describe('PhotoEntryGrid Component', () => {
    const wrapper = shallow(<PhotoEntryGrid data={data}/>)
    it('should render a main photo', () => {
        expect(wrapper.exists()).toBe(true);
    });
});
