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
import Navbar from './components/Navbar';
import Greece from './components/pages/Destinations/Greece';
import Brazil from './components/pages/Destinations/Brazil';
import Mexico from './components/pages/Destinations/Mexico';
import Posts from './components/pages/Posts';
import Terms from './components/footerLinks/Terms';
import Disclaimer from './components/footerLinks/Disclaimer';

const App = () => {

  return (
    
   <Router>

      <Switch>

        <Route path='/signup' component={SignUp} />
        <Route path='/login' component={Login} />
        <Route path='/logout' component={Logout} />
        <div>
          <Navbar />

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
        <Route path='/posts' component={Posts}/>      
        <Route path='/terms' component={Terms}/>     
        <Route path='/disclaimer' component={Disclaimer}/> 
        
        </div>
        

        </Switch>

      </Router>
 );  
}

export default App
