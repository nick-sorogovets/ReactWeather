import React, { Component } from 'react';

import WeatherForm from './WeatherForm';
import WeatherInfo from './WeatherInfo';

import OpenWeatherMap from '../api/openWeatherMap.jsx';

class Weather extends Component {

  state = {
    isLoading: false,
  }

  handleSearch = (location) => {
    this.setState({ isLoading: true });
    OpenWeatherMap.getTemp(location)
      .then((temp) => {
        this.setState({
          location,
          temp,
          isLoading: false,
        });
      }).catch((err) => {
        console.error('Error', err);
        this.setState({ isLoading: false });
      });
  }



  render() {
    const { isLoading, temp, location } = this.state;

    const renderMessage = () => {
      if (isLoading) {
        return (
          <h3 className="text-center">Fething weather...</h3>
        );
      } else if (temp && location) {
        return (
          <WeatherInfo info={this.state} />
        );
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    );
  }
}

export default Weather;