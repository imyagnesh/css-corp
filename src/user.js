import React from 'react';
import PropTypes from 'prop-types';

const User = function ({ firstname, lastname }) {
  return (
    <>
      <h1>{`My Full Name:: ${firstname} ${lastname}`}</h1>
      {/* <h2>
        {firstname}
        {' '}
        {lastname}
      </h2> */}
    </>
  );
};

User.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string,
};

User.defaultProps = {
  lastname: '',
};

export default User;
