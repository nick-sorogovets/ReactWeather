import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?';
const API_KEY = 'f00c4cc2d683ab2a834ff07e45c2c8d2';

export default {
  getTemp(location) {
    const encodedLocation = encodeURIComponent(location);
    const requestUrl = `${OPEN_WEATHER_MAP_URL}appid=${API_KEY}&units=metric&q=${encodedLocation}`;

    return axios.get(requestUrl)
      .then(resp => {
        if (resp.data.cod && resp.data.message) {
          throw new Error(resp.data.message);
        } else {
          return resp.data.main.temp;
        }
      }).catch((err) => {
        throw new Error(err.response.data.message);
      });
  }
}