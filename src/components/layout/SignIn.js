import React from 'react';
import { NavLink } from 'react-router-dom'

const SignIn = () => {
    return (
        <div className="mx-4">
           <ul className="right d-flex justify-content-around">
        <li><NavLink to='/signup'>Sign Up</NavLink></li>
        <li><NavLink to='/signin'>Sign In</NavLink></li>
      </ul>
        </div>
    );
};

export default SignIn;