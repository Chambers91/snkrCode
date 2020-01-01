import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';

export const HeaderBar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
          ></IconButton>
          <Typography variant='h6'>SnkrCode</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderBar;
