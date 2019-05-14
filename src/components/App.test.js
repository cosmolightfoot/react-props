import React from 'react';
import { shallow } from 'enzyme';
import App from './App.js';

describe('App component test', () => {
  it('renders App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
