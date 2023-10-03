import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonData: builder.query({
      query: ({ page, limit }) =>
        `pokemon/?offset=${(page - 1) * limit}&limit=${limit}`,
      transformResponse: (response) => {
        const { results } = response;
        return results.map((pokemon) => ({
          ...pokemon,
          image: `https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`,
        }));
      },
    }),

    getPokemonDetails: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonDataQuery, useGetPokemonDetailsQuery } = pokemonApi;

export default pokemonApi.reducer;
