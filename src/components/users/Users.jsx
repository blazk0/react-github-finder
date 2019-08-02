import React, { Fragment, useContext } from 'react';
import User from './User';
import { Spinner } from '../index';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { users, loading } = githubContext;

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div style={style.user}>
          {users.map(user => (
            <User key={user.id} user={user} />
          ))}
        </div>
      )}
    </Fragment>
  );
};

const style = {
  user: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
  }
};

export default Users;
