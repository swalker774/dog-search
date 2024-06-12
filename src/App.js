import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import DogList from "./components/dogs/DogList";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <header className="bg-blue-600 text-white p-4 text-center">
          <h1 className="text-2xl font-bold">Dog Adoption Service</h1>
        </header>
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dogs" element={<DogList />} />
          </Routes>
        </main>
        <footer className="bg-blue-600 text-white p-4 text-center">
          <p>&copy; {new Date().getFullYear()} Fetch Dog Adoption</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
