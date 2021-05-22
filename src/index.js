import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignInSide from './pages/SignInSide';
import Company from './pages/Company';
import Support from './components/Support';
import { BrowserRouter, Route, Switch } from "react-router-dom";


ReactDOM.render(
  
  <BrowserRouter>
  <Switch>
  <Route exact path="/" component={SignInSide} />
  <Route path="/company" component={Company} />
  <Route path="/support" component={Support} />
  </Switch>  
 </BrowserRouter>,    
  
  
  document.getElementById('root')
);
