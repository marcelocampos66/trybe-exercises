import React, { Component } from 'react';

class Users extends Component {
  render() {
    const { greetingMessage } = this.props;
    const { id } = this.props.match.params;
    return (
      <div>
        <h2>Users</h2>
        <p> { `${greetingMessage} User ID: ${id}` }, this is my awesome Users component </p>
      </div>
    );
  }
};

export default Users;
