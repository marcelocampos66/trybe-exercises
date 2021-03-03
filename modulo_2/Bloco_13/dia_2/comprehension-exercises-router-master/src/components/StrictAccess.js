import React from 'react';
import { Redirect } from 'react-router-dom';

class StrictAccess extends React.Component {
  constructor(props) {
    super(props);
    this.verifyProps = this.verifyProps.bind(this);
  }

  verifyProps() {
    const { username, password } = this.props.user;
    if (username === 'joao' && password === '1234') return true;
    return false;
  }

  render() {
    const { username } = this.props.user;
    const result = this.verifyProps();
    
    if (!result) {
      alert('Access denied');
      return <Redirect to='/' />
    }
    return (
      <p>Welcome { username }!</p>
    )
  }
}

export default StrictAccess;
