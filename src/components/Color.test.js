import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color.js';

describe('Color snapshot test', () => {
  it('renders a color', () => {
    const wrapper = shallow(<Color name="black" hex="000000" rgb={{ red: 0, green: 0, blue: 0 }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
