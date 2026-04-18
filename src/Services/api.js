import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

// attach token
 
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

// AUTH
export const registerUser = (data) =>
  API.post("/api/auth/register", data);

export const loginUser = (data) =>
  API.post("/api/auth/login", data);

// ✅ FIXED (correct routes)
export const fetchTrending = () =>
  API.get("/api/movies/trending");

export const fetchTopRated = () =>
  API.get("/api/movies/top-rated");

// ALL MOVIES
export const fetchAllMovies = () =>
  API.get("/api/allmovies");

//add mylist
export const addMylist = (data) => 
  API.post("/api/mylist", data);

//get
export const getMylist = () => 
  API.get("/api/mylist");

//delete
export const deleteMylist = (id) =>
  API.delete(`/api/mylist/${id}`);


export default API;




 