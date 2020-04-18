import React from 'react';
import SignIn from './SignIn';
import SignOut from './SignOut';
import { Link } from 'react-router-dom'
import '../../App.css'


function NavBar(props) {
    return (
        <nav className=" nav-wrapper grey darken-3">
        <div className=" nav-wrapper">
            
        <div className="container d-flex justify-content-between">
    <div><Link to='/home' className="brand">SociaLizers</Link> </div>
        
        <div className="d-flex justify-content-around left">
        <SignIn/>
        <SignOut/>
        </div>
      </div>
      </div>
            
          
            
        
        </nav>
    );
}

export default NavBar;