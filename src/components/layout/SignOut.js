import React from 'react';
import { NavLink } from 'react-router-dom'

const SignOut = () => {
    return (
        <div>
             <ul className="right d-flex justify-content-around">
        <li><NavLink to='/create'>New Project</NavLink></li>
        <li><NavLink to='/home'>Sign Out</NavLink></li>
        <li><NavLink to='/' className="btn btn-floating pink lighten-1">NN</NavLink></li>
      </ul>
        </div>
    );
};

export default SignOut;