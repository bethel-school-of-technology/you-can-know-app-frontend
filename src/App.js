// import { Router } from 'express';
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from './components/pages/Home';
import Destinations from './components/pages/Destinations';
import About from './components/pages/About';
import SignUp from './components/pages/SignUp';
import Profile from './components/pages/Profile';
import Login from './components/pages/Login';
import Navbar from './components/Navbar';


const App = () => {
//const title = 'You Can Know!'

  return (
    
   <Router>
     <Navbar />
      <Switch>
        <Route path="/home" default component={Home} />
        <Route exact path="/">
        <Redirect to="/home" />
        </Route>
        <Route path='/destinations' component={Destinations} />
        <Route path='/about' component={About} />
        <Route path='/signup' component={SignUp} />
        <Route path='/login' component={Login} />
        <Route path='/profile' component={Profile} />
      </Switch>
      </Router>
     
 );  
}

export default App;
