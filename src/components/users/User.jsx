import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const User = ({ user: { login, avatar_url } }) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt='user'
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
          Profile
        </Link>
      </div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired
};

export default User;
