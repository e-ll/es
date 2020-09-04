import React from 'react';
import { AppBar, Typography } from '@material-ui/core';

export default() => {
    return (
      <footer className="footer">
        <AppBar
          className="marginT-3 pad-2"
          color="default"
          position="static"
        >
          <Typography align="center">
            Copyright &copy;{new Date().getFullYear()} Festyline
          </Typography>
        </AppBar>
      </footer>
    );
};