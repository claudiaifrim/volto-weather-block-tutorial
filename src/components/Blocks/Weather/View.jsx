import React, { useEffect, useState } from 'react';

const View = (props) => {
  const { data = {} } = props;
  const location = data.location || 'Eibar, Basque Country';

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const latitude = data.latitude || '43.1849'; // Default Eibar latitude if no latitude is provided
    const longitude = data.longitude || '-2.4716'; // Default to longitude if no longitude is provided

    // https://api.open-meteo.com/v1/forecast?latitude=43.1849&longitude=-2.4716&current_weather=true&timezone=auto

    const abortController = new AbortController(); // creating an AbortController

    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`,
      { signal: abortController.signal }, // passing the signal to the query
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => {
        if (error.name === 'AbortError') return;
        console.error('Error fetching weather data:', error);
        throw error;
      });

    return () => {
      abortController.abort(); // stop the query by aborting on the AbortController on unmount
    };
  }, [data.latitude, data.longitude]);

  return (
    <>
      {weatherData ? (
        <div>
          <h2>Weather in {location}</h2>
          <p>Temperature: {weatherData.current_weather.temperature} °C</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </>
  );
};

export default View;
