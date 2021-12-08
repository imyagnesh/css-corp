import React from 'react';
import PropTypes from 'prop-types';

const User = ({ firstName, lastName }) => (
    <h1>
      {`your name is:${firstName} ${lastName}`}
    </h1>
  );
  
  User.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  };
  
  export default User;