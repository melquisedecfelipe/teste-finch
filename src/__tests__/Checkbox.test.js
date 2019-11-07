import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Checkbox from '../components/Checkbox';

import state from '../services/mockStore';

describe('Checkbox testing with Enzyme', () => {
  const mockStore = configureStore();
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore(state);
    wrapper = shallow(<Checkbox store={store} />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
