import React from 'react';
import { shallow } from 'enzyme';
import Dog from './Dog';
import { exportAllDeclaration } from '@babel/types';

describe('Dog component', () => {
  it('renders a dog', () => {
    const wrapper = shallow(<Dog name="spot" age={5} weight="80kg" />);
    expect(wrapper).toMatchSnapshot();
  });
});
