import React from "react";

const DogFavorites = ({ favorites, onMatch }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2">Favorite Dogs</h3>
      <ul className="space-y-1 mb-4">
        {favorites.map((dog) => (
          <li key={dog.id} className="text-gray-600">
            {dog.name}
          </li>
        ))}
      </ul>
      <button
        onClick={() => onMatch(favorites)}
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Generate Match
      </button>
    </div>
  );
};

export default DogFavorites;
