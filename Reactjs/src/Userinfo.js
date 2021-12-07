import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Userinfo extends Component {
    test() {}
    render() {
    const { firstName, lastName } = this.props;
    return (
      <div>
          <h1>{firstName} {lastName}</h1>
      </div>
    );
  }
}
Userinfo.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string,
};
export default Userinfo;