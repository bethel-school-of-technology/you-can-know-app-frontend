import Header from './components/Header';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Signup from './Signup';
import Profile from './Profile';
import Posts from './Posts';
import Login from './Login';
import About from './About';
import Admin from './Admin';
import Logout from './Logout';
import Search from './Search';
import { Route, Link } from 'react-router-dom';
import NavBar from './NavBar';


const App = () => {
//const title = 'You Can Know!'

  return (
    <div className="container">
      <Header title='Welcome To: "You Can Know!"'/>
      <Header subtitle='Your Destination Is Calling You!"'/>
      <p>having fun with github</p>
      <NavBar />
      <Route exact path='/' component={Home} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/posts' component={Posts} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/about' component={About} />
      <Route exact path='/admin' component={Admin} />
      <Route exact path='/logout' component={Logout} />
      <Route exact path='/search' component={Search} />
    </div>
  );
}

export default App;
