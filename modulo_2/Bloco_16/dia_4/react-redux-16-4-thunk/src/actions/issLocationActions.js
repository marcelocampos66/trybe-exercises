import {
  REQUEST_ISS_LOCATION,
  RECEIVE_ISS_LOCATION_FAILURE,
  RECEIVE_ISS_LOCATION_SUCCESS
} from './actionTypes';
import { getCurrentISSLocation } from '../services/issApi';

const requestISSLocation = () => ({
  type: REQUEST_ISS_LOCATION,
});

const receiveISSLocationFailure = (error) => ({
  type: RECEIVE_ISS_LOCATION_FAILURE,
  error,
});

const receiveISSLocationSuccess = (data) => ({
  type: RECEIVE_ISS_LOCATION_SUCCESS,
  latitude: data.iss_position.latitude,
  longitude: data.iss_position.longitude,
});

export function fetchISSLocation() {
  return (dispatch) => {
    dispatch(requestISSLocation());

    return getCurrentISSLocation()
      .then(
        (data) => dispatch(receiveISSLocationSuccess(data)),
        (error) => dispatch(receiveISSLocationFailure(error.message)),
      );
  };
}
