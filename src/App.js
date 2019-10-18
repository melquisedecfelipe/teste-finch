import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.scss';

import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <Router>
      <Header />
      <Routes />
    </Router>
  );
}

export default App;
