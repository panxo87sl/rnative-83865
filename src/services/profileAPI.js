import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rtdbBaseUrl = process.env.EXPO_PUBLIC_RTDB_URL;

export const profileAPI = createApi({
  reducerPath: "profileAPI",
  baseQuery: fetchBaseQuery({ baseUrl: rtdbBaseUrl }),
  endpoints: (builder) => ({
    getProfilePicture: builder.query({
      query: (localId) => `profilePicture/${localId}.json`,
    }),
    putProfilePicture: builder.mutation({
      query: (data) => ({
        url: `profilePicture/${data.localId}.json`,
        method: "PUT",
        body: {
          image: data.profilePicture,
        },
      }),
    }),
  }),
});

export const { useGetProfilePictureQuery, usePutProfilePictureMutation } = profileAPI;
