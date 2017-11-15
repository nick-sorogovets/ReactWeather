import React from 'react';

const WeatherInfo = (props) => {
  const { location, temp } = props.info;
  return (
    <div>
      <h3>Weather Info Component</h3>
      <p>The temperature in {location} is {temp} cels</p>
    </div>
  );
}

export default WeatherInfo;