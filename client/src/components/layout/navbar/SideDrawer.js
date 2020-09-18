import React from 'react';

import { List, ListItem, ListItemText, Link } from '@material-ui/core';
import { Link as RouterLink } from "react-router-dom";
import Logo from '../../../img/logo.png';

const SideDrawer = ({ isAuthenticated, logout }) => {
    const authLinks = (
      <div>
        <ListItem button component={RouterLink} to="/create-event">
          <ListItemText primary="Создать стенд" />
        </ListItem>
        <ListItem button component={RouterLink} to="/profile">
          <ListItemText primary="Мой профиль" />
        </ListItem>
        <ListItem button onClick={logout}>
          <ListItemText primary="Выйти" />
        </ListItem>
      </div>
    );
  
    const guestLinks = (
      <div>
        <ListItem button component={RouterLink} to="/login" color="textPrimary">
          <ListItemText primary="Войти" />
        </ListItem>
        {/* <ListItem button component={RouterLink} to="/register" color="textPrimary">
          <ListItemText primary="Get Started" />
        </ListItem> */}
      </div>
    );
    
    return (
      <List component="nav">
        <ListItem button component={RouterLink} to="/events">
          <ListItemText
            style={{ color: "#D630B1", textAlign: "center" }}
             primary="Festyline"
          />
        </ListItem>
        <ListItem button component={RouterLink} to="/events">
          <ListItemText primary="Карта событий" />
        </ListItem>
        {isAuthenticated ? authLinks : guestLinks}
      </List>
    );
}

export default SideDrawer;