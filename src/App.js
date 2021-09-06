// import { Router } from 'express';
import React from 'react';
import './App.css';
import { Switch, Route, Redirect} from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';

const App = () => {
//const title = 'You Can Know!'

  return (
    // <div>home</div>
      <Switch>
        <Route path="/home" default component={Home} />
        <Route exact path="/">
        <Redirect to="/home" />
        </Route>
        <Route path='/signup' component={SignUp} />
        <Route path='/login' component={Login} />
      </Switch>
    
  );
}

export default App;
