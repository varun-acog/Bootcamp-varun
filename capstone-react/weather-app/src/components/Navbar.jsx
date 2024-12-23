import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className=" text-gray py-4 px-6 w-full">
    <div className="flex justify-between max-w-4xl mx-auto">
      <h1 className="text-xl font-bold">Weather Widget</h1>
      <div>
        <Link to="/" className="mx-2 hover:text-blue-400 hover:bg-black hover:scale-105 rounded-md p-2 transition-all duration-300">
          Home
        </Link>
        <Link to="/page2" className="mx-2 hover:text-blue-400 hover:bg-black hover:scale-105 rounded-md p-2 transition-all duration-300">
           Go to Page-2
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
