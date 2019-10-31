import React from 'react';
import App from './App';

describe('App testing with Enzyme', () => {
   it('renders without crashing', () => {
      expect(<App />).toMatchSnapshot();
    });
});
