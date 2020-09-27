import React from 'react';
import {HashRouter as Router, Redirect, Route } from 'react-router-dom';
import EnterForm from "./components/enterForm/enterForm";
import RegisterForm from "./components/registerForm/registerForm";

import './App.css';

function App() {
  return (
  <Router>
      <Redirect exact path="/" to="/EnterForm" />
      <Route path="/EnterForm" component={EnterForm} />
      <Route path="/RegisterForm" component={RegisterForm} />
  </Router>
   
  );
}

export default App;
