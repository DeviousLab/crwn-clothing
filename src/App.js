import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
    </div>
  );
}

export default App;
