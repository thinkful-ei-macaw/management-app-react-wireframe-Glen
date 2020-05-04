import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CreateEmployee from './Components/CreateEmployee';
import DeleteEmployee from './Components/DeleteEmployee';
import LandingPage from './Components/LandingPage';
import LoginPage from './Components/LogInPage';
import MainPage from './Components/MainPage';
import UpdateEmployee from './Components/UpdateEmployee';
import ViewEmployees from './Components/ViewEmployees';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path='/' component={LandingPage} />
          <Route path='/login-page' component={LoginPage} />
          <Route path='/main-page' component={MainPage} />
          <Route path='/view-employees' component={ViewEmployees} />
          <Route path='/create-employee' component={CreateEmployee} />
          <Route path='/update-employee' component={UpdateEmployee} />
          <Route path='/delete-employee' component={DeleteEmployee} />
        </BrowserRouter>
      </div>
    )

  }

}

