import React, { Component } from 'react';
import { Main } from './Components/Main';
import { Navbar } from './Components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login } from './Components/Login';
import { Signup } from './Components/Signup';
import { IndividualForm } from './Components/IndividualForm';
import { StartupForm } from './Components/StartupForm';
import { MentorForm } from './Components/MentorForm';
import { IncubsForm } from './Components/IncubsForm';
import { IndividualHome } from './Components/IndividualHome';
import { StartupHome } from './Components/StartupHome';
import { MentorHome } from './Components/MentorHome';
import { IncubsHome } from './Components/IncubsHome';
import { AboutMentor } from './Components/AboutMentor';
import { StartupAbout } from './Components/StartupAbout';
import { AboutStartup } from './Components/AboutStartup';
class App extends Component {
  render() {
    let body = document.querySelector('body');
    let imageAdd = "/img/header.jpg";
    body.style.backgroundImage = 'url("' + imageAdd + '")';
    body.style.backgroundAttachment = "fixed";
    return (
      <div>
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route path='/' exact component={Main} />
              <Route path='/login' component={Login} />
              <Route path='/signupselect' component={Signup} />
              <Route path='/signupindividual' component={IndividualForm} />
              <Route path='/signupstartup' component={StartupForm} />
              <Route path='/signupmentor' component={MentorForm} />
              <Route path='/signupincubs' component={IncubsForm} />
              <Route path='/indihome' component={IndividualHome} />
              <Route path='/startuphome' component={StartupHome} />
              <Route path='/mentorhome' component={MentorHome} />
              <Route path='/incubhome' component={IncubsHome} />
              <Route path="/startupDetails/:id" component={AboutStartup} />
              <Route path="/MentorAbout/:id" component={AboutMentor} />
            </Switch >

          </div>

        </Router>
      </div>);
  }
}

export default App;
