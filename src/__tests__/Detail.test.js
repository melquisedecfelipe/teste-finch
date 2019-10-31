import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Detail from '../pages/Detail/index';

import store from '../store';

describe('Detail page testing with Enzyme', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Detail />
      </Provider>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
