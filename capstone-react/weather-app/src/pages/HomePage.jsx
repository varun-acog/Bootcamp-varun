import { useState } from "react";
import CityWeather from "../components/CityWeather";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const [city, setCity] = useState("Los Angeles");

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputCity = event.target.city.value.trim();
    if (inputCity) setCity(inputCity);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-blue-300 to-white-200">
      <Navbar />
      <header className="text-center mt-4">
        <h1 className="text-3xl font-bold">Welcome to Weather Widget</h1>
        <p className="text-lg">Get the latest weather updates for your city.</p>
      </header>
      <main className="mt-6">
        <CityWeather city={city} />
        <form className="mt-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="city"
            placeholder="Enter city"
            className="border rounded-md px-4 py-2"
          />
          <button
            type="submit"
            className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Update Weather
          </button>
        </form>
      </main>
    </div>
  );
};

export default HomePage;
