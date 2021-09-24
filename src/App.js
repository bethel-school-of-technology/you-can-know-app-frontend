import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/pages/Home';
import Destinations from './components/pages/Destinations';
import About from './components/pages/About';
import SignUp from './components/pages/SignUp';
import Profile from './components/pages/Profile';
import Login from './components/pages/Login';
import Logout from './components/pages/Logout';
// import Navbar from './components/Navbar';
import Navbarr from './components/Navbarr';
import Greece from './components/pages/Destinations/Greece';
import Brazil from './components/pages/Destinations/Brazil';
import Mexico from './components/pages/Destinations/Mexico';


const App = () => {
// const title = 'You Can Know!'

  return (
    
   <Router>

      <Switch>

        <Route path='/signup' component={SignUp} />
        <Route path='/login' component={Login} />
        <Route path='/logout' component={Logout} />
        <div>
          <Navbarr />

        <Route path="/home" default component={Home} />
        <Route exact path="/">
        <Redirect to="/home" />
        </Route>
        <Route path='/destinations' component={Destinations} />
        <Route path='/about' component={About} />
        <Route path='/profile' component={Profile} />
        <Route path='/greece' component={Greece}/>  
        <Route path='/brazil' component={Brazil}/>      
        <Route path='/mexico' component={Mexico}/>      
        
        </div>
        

        </Switch>

      </Router>
 );  
}

export default App
