import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rtdbBaseUrl = process.env.EXPO_PUBLIC_RTDB_URL;

export const profileAPI = createApi({
  reducerPath: "profileAPI",
  baseQuery: fetchBaseQuery({ baseUrl: rtdbBaseUrl }),
  tagTypes: ["ProfilePicture"],
  endpoints: (builder) => ({
    getProfilePicture: builder.query({
      query: (localId) => `profilePicture/${localId}.json`,
      providesTags: (result, error, localId) => [{ type: "ProfilePicture", id: localId }],
    }),
    putProfilePicture: builder.mutation({
      query: (data) => ({
        url: `profilePicture/${data.localId}.json`,
        method: "PUT",
        body: {
          image: data.profilePicture,
        },
      }),
      invalidatesTags: (result, error, data) => [{ type: "ProfilePicture", id: data.localId }],
    }),
  }),
});

export const { useGetProfilePictureQuery, usePutProfilePictureMutation } = profileAPI;
