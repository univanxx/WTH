import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignInSide from './pages/SignInSide';
import Company from './pages/Company';

import { BrowserRouter, Route, Switch } from "react-router-dom";


ReactDOM.render(
  
  <BrowserRouter>
  <Switch>
  <Route exact path="/" component={SignInSide} />
  <Route path="/company" component={Company} />
 </Switch>  
 </BrowserRouter>,    
  
  
  document.getElementById('root')
);
