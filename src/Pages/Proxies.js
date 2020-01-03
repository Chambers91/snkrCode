import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

class Proxies extends Component {
  render() {
    return (
      <div>
        <form className='form-centered' noValidate autoComplete='off'>
          <TextField
            id='outlined-basic'
            label='Enter Proxies'
            variant='outlined'
          />
        </form>
      </div>
    );
  }
}

export default Proxies;
