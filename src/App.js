// import { Router } from 'express';
import React from 'react';
import './App.css';
import { Switch, Route, Redirect} from 'react-router-dom';
import Home from './components/Home';

const App = () => {
//const title = 'You Can Know!'

  return (
    // <div>home</div>
      <Switch>
        <Route path="/home" default component={Home} />
        <Route exact path="/">
        <Redirect to="/home" />
        </Route>
      </Switch>
    
  );
}

export default App;
