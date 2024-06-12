import React, { useEffect, useState } from "react";
import { fetchDogsByIds, searchDogs, matchDogs } from "../../services/api";
import DogCard from "./DogCard";
import DogFilter from "./DogFilter";
import DogFavorites from "./DogFavorites";
import DogMatch from "./DogMatch";

const DogList = () => {
  const [dogs, setDogs] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [query, setQuery] = useState({ size: 25, sort: "breed:asc" });
  const [match, setMatch] = useState(null);

  useEffect(() => {
    const loadDogs = async () => {
      try {
        const params = { ...query };
        if (params.breeds && params.breeds.length === 0) {
          delete params.breeds;
        }
        const { data } = await searchDogs(params);
        const dogData = await fetchDogsByIds(data.resultIds);
        setDogs(dogData.data);
      } catch (error) {
        console.error("Failed to fetch dogs:", error);
      }
    };
    loadDogs();
  }, [query]);

  const handleFavorite = (dog) => {
    setFavorites((prev) => [...new Set([...prev, dog])]);
  };

  const handleMatch = async () => {
    try {
      const dogIds = favorites.map((dog) => dog.id);
      const { data } = await matchDogs(dogIds);
      setMatch(data.match);
    } catch (error) {
      console.error("Failed to match dog:", error);
    }
  };

  return (
    <div className="space-y-6">
      <DogFilter
        onFilter={(filters) =>
          setQuery({ ...filters, size: 25, sort: "breed:asc" })
        }
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dogs.map((dog) => (
          <DogCard
            key={dog.id}
            dog={dog}
            onFavorite={() => handleFavorite(dog)}
          />
        ))}
      </div>
      <DogFavorites favorites={favorites} onMatch={handleMatch} />
      {match && <DogMatch match={match} />}
    </div>
  );
};

export default DogList;
