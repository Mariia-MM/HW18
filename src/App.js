import React from 'react';
import {BrowserRouter, Redirect, Route } from 'react-router-dom';
import EnterForm from "./components/enterForm/enterForm";
import RegisterForm from "./components/registerForm/registerForm";

import './App.css';

function App() {
  return (
  <BrowserRouter>
   <Redirect exact path="/" to="/EnterForm" />
      <Route path="/EnterForm" component={EnterForm} />
      <Route path="/RegisterForm" component={RegisterForm} />
  </BrowserRouter>
   
  );
}

export default App;
