import React from 'react';
import Repo from './Repo';
import PropTypes from 'prop-types';

const Repos = ({ repos }) => {
  return repos.map(repo => <Repo repo={repo} key={repo.id} />);
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired
};

export default Repos;
