import axios from "axios";

const BASE_URL = "https://frontend-take-home-service.fetch.com";

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const login = (name, email) => api.post("/auth/login", { name, email });

export const fetchBreeds = () => api.get("/dogs/breeds");

export const searchDogs = (params) => {
  const cleanedParams = { ...params };
  if (!cleanedParams.breeds) {
    delete cleanedParams.breeds;
  }
  cleanedParams.sort = "breed:asc";
  return api.get("/dogs/search", { params: cleanedParams });
};

export const fetchDogsByIds = (ids) => api.post("/dogs", ids);

export const matchDogs = (ids) => api.post("/dogs/match", ids);
