const ISS_BASE_API = 'http://api.open-notify.org';

export const getCurrentISSLocation = () => (
  fetch(`${ISS_BASE_API}/iss-now.json`)
    .then((response) => (
      response.json()
        .then((data) => (
          data
        ))
        .catch((error) => (
          error
        ))
    ))
);
