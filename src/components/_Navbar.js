import React, { useState } from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Divider } from '@material-ui/core';
import IconDashboard from '@material-ui/icons/Dashboard';
import { Redirect } from 'react-router-dom';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { base: props.base, route: props.base };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(route) {
    return () => {
      this.setState({ route: `${this.state.base}/${route}` });
    };
  }

  render() {
    const items = [];
    for (const item of this.props.items) {
      items.push(
        <div key={item}>
          <Divider />
          <ListItem button onClick={this.handleClick(item)}>
            <ListItemIcon>
              <IconDashboard />
            </ListItemIcon>
            <ListItemText primary={item} />
          </ListItem>
        </div>
      );
    }

    return (
      <div>
        <Redirect to={this.state.route} />
        <List component="nav">{items}</List>
      </div>
    );
  }
}
