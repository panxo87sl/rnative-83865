import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rtdbBaseUrl = process.env.EXPO_PUBLIC_RTDB_URL;

export const shopAPI = createApi({
  reducerPath: "shopAPI",
  baseQuery: fetchBaseQuery({ baseUrl: rtdbBaseUrl }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/categories.json",
      transformResponse: (responseData) => {
        // Convertir objeto en un arreglo
        return Object.values(responseData);
      },
    }),
    getProductsByCategory: builder.query({
      query: (category) => `products.json?orderBy="category"&equalTo="${category}"`,
      transformResponse: (responseData) => {
        // Convertir objeto en un arreglo
        return Object.values(responseData); //javascript
      },
    }),
  }),
});

export const { useGetCategoriesQuery, useGetProductsByCategoryQuery } = shopAPI;
