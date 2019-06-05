import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Splash from './splash.jsx';
import About from './about.jsx';
// import Header from './components/layout/Header';
// import axios from 'axios';
// import uuid from 'uuid';
// import './App.css';

const App = () => (
    <>
        <Router>
            <Switch>
                <Route path="/about" component={About} />
                <Route path="/" component={Splash} />
                <Redirect to="/" /> 
            </Switch>
        </Router>
    </> 
  );
  
  export default App;