import { useEffect, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const CityWeather = (props) => {
  const { city  } = props; // Default city
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) {
      setError("City is required");
      return;
    }

    const fetchWeather = async () => {
      try {
        const geoResponse = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
            city
          )}&format=json`
        );
        const geoData = await geoResponse.json();

        if (geoData && geoData.length > 0) {
          const { lat, lon } = geoData[0];
          const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
          );
          const weather = await weatherResponse.json();
          setWeatherData(weather.current_weather);
        } else {
          setError("City not found");
        }
      } catch (e) {
        console.error("Error fetching weather data:", e);
        setError("Error fetching weather data");
      }
    };

    fetchWeather();
  }, [city]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!weatherData) {
    return <div className="text-gray-500">Loading...</div>;
  }

  const { temperature, windspeed } = weatherData;

  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-300 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-white">Weather in {city}</h2>
      <div className="text-4xl font-bold text-orange-500">{temperature}°C</div>
      <div className="text-lg text-blue-800">Wind: {windspeed} km/h</div>
    </div>
  );
};

// Add PropTypes for validation
CityWeather.propTypes = {
  city: PropTypes.string.isRequired,
};

export default CityWeather;
