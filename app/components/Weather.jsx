import React, { Component } from 'react';

import WeatherForm from './WeatherForm';
import WeatherInfo from './WeatherInfo';
import ErrorModal from 'ErrorModal';
import OpenWeatherMap from '../api/openWeatherMap.jsx';

class Weather extends Component {

  state = {
    isLoading: false,
  }

  handleSearch = (location) => {
    this.setState({
      isLoading: true,
      errorMessage: undefined,
    });
    OpenWeatherMap.getTemp(location)
      .then((temp) => {
        this.setState({
          location,
          temp,
          isLoading: false,
        });
      }).catch((error) => {
        console.error('Error', error);
        this.setState({
          isLoading: false,
          errorMessage: error.message,
        });
      });
  }



  render() {
    const {
      isLoading,
      temp,
      location,
      errorMessage,
    } = this.state;

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

    const renderError = () => {
      if( typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
}

export default Weather;