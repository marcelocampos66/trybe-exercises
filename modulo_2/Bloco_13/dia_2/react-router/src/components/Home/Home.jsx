import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/about">About</Link>
          <br />
          <Link to="/howto">HowTo</Link>
          <br />
          <Link to="/profile">Profile</Link>
        </nav>
        <h1>Minha Homepage</h1>
      </div>
    )
  }
}

export default Home;
