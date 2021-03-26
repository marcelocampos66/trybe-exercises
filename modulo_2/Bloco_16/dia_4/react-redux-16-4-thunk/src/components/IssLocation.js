import React, { Component } from 'react';
import { connect } from 'react-redux';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import { fetchISSLocation } from '../actions/issLocationActions';

class ISSLocation extends Component {
  componentDidMount() {
    const { getCurrentISSLocation } = this.props;

    this.timer = setInterval(
      getCurrentISSLocation,
      2000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { error, isFetching, latitude, longitude } = this.props;
    const isLocationPresent = latitude && longitude;
    return (
      <div>
        <div className="map">
          <Map
            center={[0, 0]}
            defaultWidth={700}
            height={450}
            minZoom={1}
            maxZoom={8}
            zoom={1}
          >
            {!isFetching && isLocationPresent && <Marker anchor={[latitude, longitude]} />}
          </Map>
        </div>
        {isFetching && 'Loading...'}
        {!isFetching && isLocationPresent && `Current ISS location: latitude = ${latitude}, longitude = ${longitude}`}
        {!isFetching && error}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  latitude: state.issLocationReducer.latitude,
  longitude: state.issLocationReducer.longitude,
  isFetching: state.issLocationReducer.isFetching,
  error: state.issLocationReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrentISSLocation: () => dispatch(fetchISSLocation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ISSLocation);
