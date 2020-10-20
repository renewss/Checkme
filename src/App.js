import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Cookie from './utils/Cookies';

// function ProtectedRoute({ children, ...rest }) {
//   return <Route {...rest} render={() => (authSession.isAuthed ? children : <Redirect to="/login" />)} />;
// }

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Protect path="/home">
          <Home />
        </Protect>
        {/* {!Cookie.get('auth') && <Redirect to="/login" />} */}
        <Route path="/">
          <Redirect to="/login"></Redirect>
        </Route>
      </Switch>
    </Router>
  );
}

function Protect({ children, ...rest }) {
  return <Route {...rest} render={() => (!!Cookie.get('auth') ? children : <Redirect to="/login" />)} />;
}
