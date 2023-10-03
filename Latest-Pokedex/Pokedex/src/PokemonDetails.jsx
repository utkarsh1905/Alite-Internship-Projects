// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useGetPokemonDetailsQuery } from "./apislice";

// const PokemonDetails = () => {
//   const { name } = useParams();
//   const {
//     data: pokemonData,
//     isFetching,
//     isError,
//     error,
//   } = useGetPokemonDetailsQuery(name);

//   if (isFetching) {
//     return <p>Loading...</p>;
//   }

//   if (isError) {
//     return <p>Error: {error.message}</p>;
//   }

//   if (!pokemonData) {
//     return null;
//   }

//   return (
//     <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-6 flex flex-col justify-center items-center">
//       <h2 className="text-2xl font-bold mb-4">{pokemonData.name}</h2>
//       <p className="mb-2">Weight: {pokemonData.weight}</p>
//       <p className="mb-2">Height: {pokemonData.height}</p>
//       <p className="mb-4">Base Experience: {pokemonData.base_experience}</p>
//       <h3 className="text-lg font-bold mb-2">Stats:</h3>
//       <table className="w-full text-center">
//         <thead>
//           <tr>
//             <th className="py-2">Name</th>
//             <th className="py-2">Value</th>
//           </tr>
//         </thead>
//         <tbody>
//           {pokemonData.stats.map((stat, index) => (
//             <tr key={index}>
//               <td className="py-2">{stat.stat.name}</td>
//               <td className="py-2">{stat.base_stat}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default PokemonDetails;

import React from "react";
import { useParams } from "react-router-dom";
import { useGetPokemonDetailsQuery } from "./apislice";

const PokemonDetails = () => {
  const { name } = useParams();
  const {
    data: pokemonData,
    isFetching,
    isError,
    error,
  } = useGetPokemonDetailsQuery(name);

  if (isFetching) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  if (!pokemonData) {
    return null;
  }

  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-6 flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold mb-4">{pokemonData.name}</h2>
      <p className="mb-2">Weight: {pokemonData.weight}</p>
      <p className="mb-2">Height: {pokemonData.height}</p>
      <p className="mb-4">Base Experience: {pokemonData.base_experience}</p>
      <h3 className="text-lg font-bold mb-2">Stats:</h3>
      <table className="w-full text-center">
        <thead>
          <tr>
            <th className="py-2">Name</th>
            <th className="py-2">Value</th>
          </tr>
        </thead>
        <tbody>
          {pokemonData.stats.map((stat, index) => (
            <tr key={index}>
              <td className="py-2">{stat.stat.name}</td>
              <td className="py-2">{stat.base_stat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PokemonDetails;
