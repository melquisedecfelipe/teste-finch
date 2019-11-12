import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header';

describe('Header testing with Enzyme', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).toMatchSnapshot();
  });
});
