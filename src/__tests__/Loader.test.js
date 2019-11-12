import React from 'react';
import { shallow } from 'enzyme';
import Loader from '../components/Loader';

describe('Loader testing with Enzyme', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Loader />);

    expect(wrapper).toMatchSnapshot();
  });
});
