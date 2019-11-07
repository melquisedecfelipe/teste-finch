import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Item from '../components/Item';

import store from '../store';

describe('Item page testing with Enzyme', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Item />
      </Provider>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
