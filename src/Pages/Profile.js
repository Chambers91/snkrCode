import React from 'react';

const Profile = () => {
  return (
    <div>
      <form className='form-centered'>
        <br />
        <label>
          Store:
          <input type='text' name='store' />
        </label>
        <br />
        <label>
          Product:
          <input type='text' name='product' />
        </label>
        <br />
        <label>
          Size:
          <input type='text' name='size' />
        </label>
        <br />
        <label>
          Profile:
          <input type='text' name='profile' />
        </label>
        <br />
        <label>
          Proxy:
          <input type='text' name='proxy' />
        </label>
        <br />
        <label>
          Status:
          <input type='text' name='status' />
        </label>
        <br />
        <label>
          Action:
          <input type='text' name='action' />
        </label>
        <br />
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default Profile;
