import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import ItemDetail from './pages/ItemDetail';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Dashboard} />
      <Route path="/item/:id" component={ItemDetail} />
      <Route path="/exclusivos" component={Dashboard} />
      <Route path="/promocao" component={Dashboard} />
      <Route path="/favoritos" component={Dashboard} />
    </BrowserRouter>
  );
}
