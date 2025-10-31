import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
  baseQuery,
  endpoints: () => ({}),
});

const API_URL = import.meta.env.VITE_API_BASE_URL;

axios.get(`${API_URL}/api/movies`)
  .then(res => console.log(res.data));

