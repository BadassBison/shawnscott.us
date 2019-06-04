import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Splash from './splash.jsx';
// import About from './components/pages/About';
// import Header from './components/layout/Header';
// import axios from 'axios';
// import uuid from 'uuid';
// import './App.css';

const App = () => (
    <>
        <Router>
            
            <Route path="/" component={Splash} />
            {/* <Redirect to="/" />  */}
        </Router>
    </> 
  );
  
  export default App;