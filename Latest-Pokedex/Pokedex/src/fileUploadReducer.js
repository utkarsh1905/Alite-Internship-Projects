import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fileUploadApi = createApi({
  reducerPath: "fileUploadApi",
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    uploadImage: builder.mutation({
      query: (file) => {
        console.log("🚀 ~ file: fileUploadReducer.js:66 ~ file:", file);
        return {
          url: "http://192.168.0.58:3000/upload-collection-image",
          method: "POST",
          body: file,
        };
      },
    }),
  }),
});

export const { useUploadImageMutation } = fileUploadApi;

const fileUploadReducer = fileUploadApi.reducer;

export default fileUploadReducer;
