import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utilis/setAuthToken';
import { setCurrentUser, logoutUser  } from './actions/authActions';
import { Provider } from 'react-redux';
import { Container } from '@material-ui/core';
import store from './store';
import MUICookieConsent from "material-ui-cookie-consent";

import { 
  PrivateRoute,
  Navbar,
  Test,
  Footer,
  Home,
  Events,
  Event,
  CommentForm,
  Register,
  Login,
  CreateEvent,
  Profile,
  CreateProfile,
  UserProfile,
  Plug
 } from './components';
import Confirm from './components/Confirm/Confirm';
import Forgot from './components/auth/Forgot';
import ChangePassword from './components/auth/ChangePassword';
 

if(localStorage.jwtToken){
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
  
  const currentTime = Date.now() / 1000;
  
  if(decoded.exp < currentTime){
    store.dispatch(logoutUser());
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <MUICookieConsent
              cookieName="mySiteCookieConsent"
              // componentType="Dialog" // default value is Snackbar
              message="Мы, как и все используем Cookies"
            />
            <Navbar />
            <Route exact path="/" component={Plug} />
            <Route exact path="/admin" component={Plug} />
            <Route exact path="/greenfest" component={Plug} />
            <Container>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/forgot" component={Forgot} />
              <Route
                exact
                path="/change-password/:id"
                component={ChangePassword}
              />
              <Route exact path="/confirm" component={Confirm} />
              <Route exact path="/confirm/:id" component={Confirm} />
              <Switch>
                <Route exact path="/events" component={Events} /> //Events
                <Route exact path="/event/:id" component={Event} />
                <PrivateRoute exact path="/profile" component={Profile} />
                <Route exact path="/profile/:id" component={UserProfile} />
                <PrivateRoute
                  exact
                  path="/create-profile"
                  component={CreateProfile}
                />
                <PrivateRoute
                  exact
                  path="/event/:id/newcomment"
                  component={CommentForm}
                />
                <PrivateRoute
                  exact
                  path="/create-event"
                  component={CreateEvent}
                />
                <PrivateRoute
                  exact
                  path="/edit-event/:id"
                  component={CreateEvent}
                />
                {/* <Route path="/*" component={Plug} /> */}
              </Switch>
            </Container>
            {/* <Footer /> */}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
