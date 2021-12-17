import React, { Component } from 'react';

class UserName extends Component {
    render() {
       const { firstName, lastName } = this.props;
       return <h1>Full name: {firstName} {lastName}</h1>;
    }
}

// const UserInfo = ({ firstName, lastName }) => {
//   return <h1>Hello, {firstName} {lastName}</h1>;
// };

export default UserName;