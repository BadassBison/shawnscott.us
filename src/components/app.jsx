import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import { Transition } from 'react-transition-group';
import Splash from './splash.jsx';
import About from './about.jsx';
import Projects from './projects.jsx';
// import axios from 'axios';

class App extends React.Component {
    
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Splash} />
                    <Route path="/about" component={About} />
                    <Route path="/projects" component={Projects} />
                    <Redirect to="/" /> 
                </Switch>     
            </Router>
        )
    } 
}
  
  export default App;