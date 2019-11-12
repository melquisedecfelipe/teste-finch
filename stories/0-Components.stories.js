import React from 'react';
import Loader from '../src/components/Loader';
import Search from '../src/components/Search';

import './styles.scss';

export default {
  title: 'Components',
};

export const loader = () => (
  <div className="loader">
    <Loader />
    <Loader />
    <Loader />
  </div>
);

export const search = () => (
  <div className="search">
    <Search />
  </div>
);
