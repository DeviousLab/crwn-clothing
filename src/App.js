import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndRegister from './pages/sign-in-and-register/sign-in-and-register';

function App() {
  return (
    <div>
      <Header />
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} /> 
      <Route exact path='/signin' component={SignInAndRegister} /> 
      </Switch>
    </div>
  );
}

export default App;
