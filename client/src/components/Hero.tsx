import { useState } from "react";
import hero from "../assets/panda1.png";

const Hero = () => {
  // State to manage search term
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="hero-container min-h-[88vh] flex flex-col justify-center items-center bg-gray-900">
      <img
        className="hero-image w-auto h-auto max-w-sm max-h-80 object-cover rounded-lg shadow-md"
        src={hero}
        alt="PandaFood Hero Image"
      />
      <div className="hero-content-container p-5 text-center text-white">
        <h1 className="hero-text text-3xl font-bold animate-pulse">
          Feeling hungry?
        </h1>
        <p className="hero-subtext text-xl mb-10">
          Let's order with PandaFood!
        </p>
        <div className="search-bar-container flex justify-center">
          <input
            type="text"
            className="search-bar p-2 bg-gray-800 text-white rounded-lg mr-2 focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="Search food..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button
            className="search-button p-2 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            type="submit"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
