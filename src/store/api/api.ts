import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
    // baseUrl: "https://wedding-be-ny2a.onrender.com",
  }),
  endpoints: () => ({}),
});
