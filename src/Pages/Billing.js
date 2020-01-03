import React, { Component } from 'react';

class BillingPage extends Component {
  render() {
    return (
      <div>
        <form className='form-centered'>
          <br />
          <label>
            Name:
            <input type='text' name='name' />
          </label>
          <br />
          <label>
            Phone:
            <input type='text' name='phone' />
          </label>
          <br />
          <label>
            Email:
            <input type='text' name='email' />
          </label>
          <br />
          <label>
            Billing Address:
            <input type='text' name='billing' />
          </label>
          <br />
          <label>
            Card Number:
            <input type='number' name='card' />
          </label>
          <br />
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default BillingPage;
