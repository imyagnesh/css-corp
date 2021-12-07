import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClassApp extends Component {
    static propTypes = {
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
    };
    render() {
        const { firstName, lastName } = this.props;
        return (
          <>
            <h1>{firstName}</h1>
            <h2>{lastName}</h2>
          </>
        );
      }
    
}

export default ClassApp