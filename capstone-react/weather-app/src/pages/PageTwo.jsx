import CityWeather from "../components/CityWeather";
import Navbar from "../components/Navbar";

const PageTwo = () => (
  <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-blue-300 to-white-200">
    <Navbar />
    <header className="text-center mt-4">
      <h1 className="text-3xl font-bold">About City Weather</h1>
      <p className="text-lg">Explore the weather of cities around the world.</p>
    </header>
    <main className="mt-6">
      <CityWeather city="Atlanta" />
      
    </main>
    <main className="mt-6">
      <CityWeather city="Georgia" />
      
    </main>
    <main className="mt-6">
      <CityWeather city="Beijing" />
      
    </main>
  </div>
);

export default PageTwo;
