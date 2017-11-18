import React from 'react';

const WeatherInfo = (props) => {
  const { location, temp } = props.info;
  return (
    <div>
      <h3 className="text-center">
        The temperature in {location} is {temp} cels
      </h3>
    </div>
  );
}

export default WeatherInfo;