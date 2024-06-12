import React, { useEffect, useState } from "react";
import { fetchBreeds } from "../../services/api";

const DogFilter = ({ onFilter }) => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [minAge, setMinAge] = useState("");
  const [maxAge, setMaxAge] = useState("");
  const [zipCodes, setZipCodes] = useState("");

  useEffect(() => {
    const loadBreeds = async () => {
      try {
        const { data } = await fetchBreeds();
        setBreeds(data);
      } catch (error) {
        console.error("Failed to fetch breeds:", error);
      }
    };
    loadBreeds();
  }, []);

  const handleFilter = () => {
    const filters = {};
    if (selectedBreed) filters.breeds = [selectedBreed];
    if (minAge) filters.ageMin = parseInt(minAge, 10);
    if (maxAge) filters.ageMax = parseInt(maxAge, 10);
    if (zipCodes)
      filters.zipCodes = zipCodes.split(",").map((zip) => zip.trim());
    onFilter(filters);
  };

  const handleReset = () => {
    setSelectedBreed("");
    setMinAge("");
    setMaxAge("");
    setZipCodes("");
    onFilter({ size: 25, sort: "breed:asc" });
  };

  return (
    <div className="space-y-4 mb-6 bg-white p-4 rounded-md shadow-sm">
      <div>
        <label className="block text-sm font-medium text-gray-700">Breed</label>
        <select
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
          className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
        >
          <option value="">All Breeds</option>
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Minimum Age
        </label>
        <input
          type="number"
          value={minAge}
          onChange={(e) => setMinAge(e.target.value)}
          className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          placeholder="Min Age"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Maximum Age
        </label>
        <input
          type="number"
          value={maxAge}
          onChange={(e) => setMaxAge(e.target.value)}
          className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          placeholder="Max Age"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Zip Codes
        </label>
        <input
          type="text"
          value={zipCodes}
          onChange={(e) => setZipCodes(e.target.value)}
          className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          placeholder="Zip Codes (comma-separated)"
        />
      </div>
      <div className="flex space-x-4">
        <button
          onClick={handleFilter}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
        >
          Apply Filters
        </button>
        <button
          onClick={handleReset}
          className="w-full py-2 px-4 bg-gray-600 text-white rounded-md shadow-md hover:bg-gray-700"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default DogFilter;
