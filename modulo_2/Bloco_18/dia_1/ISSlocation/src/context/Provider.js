import React, { Component } from 'react';
import ISScontext from './ISScontext';
import { getCurrentISSLocation } from '../services/issAPI';

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isFetching: false,
      latitude: null,
      longitude: null,
    }
    this.fetchISSLocation = this.fetchISSLocation.bind(this);
    this.handleISSLocationSuccess = this.handleISSLocationSuccess.bind(this);
    this.handleISSLocationFailure = this.handleISSLocationFailure.bind(this);
  }

  fetchISSLocation() {
    const { isFetching } = this.state;

    if (isFetching) return;

    this.setState({ isFetching: true });

    getCurrentISSLocation()
      .then(this.handleISSLocationSuccess, this.handleISSLocationFailure);
  }

  handleISSLocationSuccess(response) {
    const { iss_position: { latitude, longitude } } = response;

    this.setState({
      isFetching: false,
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
    })
  }

  handleISSLocationFailure(error) {
    this.setState({
      isFetching: false,
      error: error.message,
    })
  }

  render() {
    const contextValue = {
      ...this.state,
      getCurrentISSLocation: this.fetchISSLocation,
    };
    const { children } = this.props;
    
    return (
      <ISScontext.Provider value={contextValue}>
        {children}
      </ISScontext.Provider>
    );
  }
}

export default Provider;
