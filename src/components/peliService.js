import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const getPelis = () => axios.get(`${API_URL}/peliculas`);
export const getPeli = (id) => axios.get(`${API_URL}/pelicula/${id}`);
export const createPeli = (pelicula) => axios.post(`${API_URL}/pelicula`, pelicula);
export const updatePeli = (id, pelicula) =>
  axios.put(`${API_URL}/pelicula/${id}`, pelicula);
export const deletePeli = (id) => axios.delete(`${API_URL}/pelicula/${id}`);