import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Home from './index';

import store from '../../store';

describe('Home page testing with Enzyme', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Home />
      </Provider>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
