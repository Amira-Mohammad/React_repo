import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Button, Card, Row, Col } from 'react-materialize';
import NavBar from './components/layout/NavBar';
import Home from './components/home/Home'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignInForm from './components/auth/SignInForm'
import SignUpForm from './components/auth/SignUpForm'
import CreateProject from './components/projects/CreateProject'

class App extends Component {
  state ={ 
}
  render() {
     return (
       <BrowserRouter>
      <div className="App ">
      <NavBar/>
       <Switch>

             <Route exact path='/'component={Dashboard} />
            <Route path='/home' component={Home} />
            <Route path='/signin' component={SignInForm} />
            <Route path='/signup' component={SignUpForm} />
            <Route path='/create' component={CreateProject} />

            
            
          </Switch>  
      
      
      </div>
      </BrowserRouter>
      
    ); 
  }
}

export default App;
   {/* <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignInForm} />
            <Route path='/signup' component={SignUpForm} />
            <Route path='/create' component={CreateProject} />
          </Switch>  */}