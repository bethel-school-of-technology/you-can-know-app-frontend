// import { Router } from 'express';
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';

const App = () => {
//const title = 'You Can Know!'

  return (
    <>
   <Router>
     <Navbar />
      <Switch>
        <Route path="/home" default component={Home} />
        <Route exact path="/">
        <Redirect to="/home" />
        </Route>
      </Switch>
      </Router>
      </>
 );  
}

export default App;
