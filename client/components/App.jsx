<<<<<<< HEAD
import React from 'react';
import '../css/styles.css';
import Search from './Search.jsx';
import Navbar from './Navbar.jsx';
import LoginCard from './user/LoginCard.jsx';
=======
import React from 'react'
import ReactDOM from 'react-dom'
import '../css/styles.css'
import axios from 'axios';
import Search from './Search.jsx'
<<<<<<< HEAD
import Navbar from './Navbar.jsx'
=======
import Login from './Login.jsx'
>>>>>>> add google signin
>>>>>>> 80098e1... add google signin

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
  }
<<<<<<< HEAD
=======
  
>>>>>>> 80098e1... add google signin
  render() {
    return (
      <div>
<<<<<<< HEAD
      <Navbar/>
      <Search/>
<<<<<<< HEAD
        <LoginCard/>
        <h1>Hello World Deploy!</h1>
        <Search/>
=======
=======
        <Login/>
        <h1>Hello World Deploy!</h1>
        <Search/>
>>>>>>> add google signin
>>>>>>> 80098e1... add google signin
      </div>
    );
  }
}
export default App;
