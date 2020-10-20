import React from 'react';
import { Redirect } from 'react-router-dom';
import Cookie from '../utils/Cookies';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: '', password: '', isAuthed: false };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const dbUser = { username: 'user', password: 'pass' };

    if (this.state.username === dbUser.username && this.state.password === dbUser.password) {
      Cookie.set('auth', true, { path: '/' });
      setTimeout(() => this.setState({ isAuthed: true }), 1000);
    } else {
      alert('Incorrect username or password');
      this.setState({ username: '', password: '', isAuthed: false });
    }
  }

  render() {
    if (Cookie.get('auth')) {
      return <Redirect to="/home" />;
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="container">
            <label htmlFor="username">
              <b>Username</b>
            </label>
            <input
              type="text"
              value={this.state.username}
              placeholder="Username"
              name="username"
              onChange={(event, newVal) => this.setState({ username: event.target.value })}
              required
            ></input>

            <label htmlFor="password">
              <b>Password</b>
            </label>
            <input
              type="password"
              value={this.state.password}
              placeholder="********"
              name="password"
              onChange={(event, newVal) => this.setState({ password: event.target.value })}
              required
            ></input>

            <input type="submit" value="Login"></input>
          </div>
        </form>
      );
    }
  }
}
