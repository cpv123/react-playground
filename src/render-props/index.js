import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            this.props.render({ user: 'Chris '})
        );
    }
}

const SharedUser = () => (
  <User render={ ({ user }) => <div>{user}</div> } />
);

export default SharedUser;

