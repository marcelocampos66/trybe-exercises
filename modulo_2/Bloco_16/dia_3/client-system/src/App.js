import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisteredCustomers from './pages/RegisteredCustomers';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <Switch>
          <Route path="/login" component={ Login } />
          <Route path="/registered-customers" component={ RegisteredCustomers } />
          <Route path="/register" component={ Register } />
          <Route path="/" component={ Home } />
        </Switch>
      </section>
    )
  }
}

export default App;
