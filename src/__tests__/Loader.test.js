import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Loader from '../components/Loader';

import store from '../store';

describe('Loader component testing with Enzyme', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Loader />
      </Provider>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
