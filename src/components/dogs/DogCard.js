import React from "react";

const DogCard = ({ dog, onFavorite }) => (
  <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
    <img
      src={dog.img}
      alt={dog.name}
      className="w-full h-48 object-cover rounded-md mb-4"
    />
    <h3 className="text-xl font-semibold">{dog.name}</h3>
    <p className="text-gray-600">Breed: {dog.breed}</p>
    <p className="text-gray-600">Age: {dog.age}</p>
    <p className="text-gray-600">Zip Code: {dog.zip_code}</p>
    <button
      onClick={onFavorite}
      className="mt-4 py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700"
    >
      Favorite
    </button>
  </div>
);

export default DogCard;
