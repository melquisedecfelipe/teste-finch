import React from 'react';
import { shallow } from 'enzyme';
import Search from '../components/Search';

describe('Search page testing with Enzyme', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Search />);

    expect(wrapper).toMatchSnapshot();
  });
});
