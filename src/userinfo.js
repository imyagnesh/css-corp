import React, { Component } from 'react';

class Userinfo extends Component {
  render() {
        const { firstName, lastName } = this.props;
        return <h1> fullname: {firstName} {lastName}   </h1>   
      }
}

export default Userinfo;