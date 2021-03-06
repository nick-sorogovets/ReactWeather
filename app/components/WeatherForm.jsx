import React, { Component } from 'react';
import Weather from './Weather';

class WeatherForm extends Component {
  onFormSubmit = (e) => {
    e.preventDefault();

    const location = this.refs.cityName.value;
    if (location.length > 0) {
      this.refs.cityName.value = '';
      this.props.onSearch(location);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <h2>Get Weather</h2>
          <input
            type="search"
            ref='cityName'
            placeholder="Search weather by city"
          />
          <br />
          <button className="button expanded">Get Weather</button>
        </form>
      </div>
    )
  }
}

export default WeatherForm;