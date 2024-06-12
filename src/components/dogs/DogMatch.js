import React from "react";

const DogMatch = ({ match }) => (
  <div className="p-4 bg-green-100 rounded-lg shadow-md mt-6">
    <h3 className="text-xl font-bold mb-2">Matched Dog</h3>
    <p className="text-gray-600">Dog ID: {match}</p>
  </div>
);

export default DogMatch;
