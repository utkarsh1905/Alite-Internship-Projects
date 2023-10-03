// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useGetPokemonDataQuery } from "./apislice";

// const Pokemon = () => {
//   const [page, setPage] = useState(1);
//   const limit = 8;

//   const { data: pokemonData, isFetching } = useGetPokemonDataQuery({
//     page,
//     limit,
//   });
//   const navigate = useNavigate();

//   const handleDetailsClick = (name, page) => {
//     navigate(`/Pokemon/${name}`);
//   };

//   const handleNextClick = () => {
//     setPage((prevPage) => prevPage + 1);
//   };

//   const handlePrevClick = () => {
//     setPage((prevPage) => prevPage - 1);
//   };

//   return (
//     <div>
//       <h1>Pokemon List</h1>
//       {isFetching ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="grid grid-cols-4 gap-4">
//           {pokemonData &&
//             pokemonData.map((pokemon, index) => (
//               <div key={index} className="bg-gray-200 p-4">
//                 <div className=" flex flex-col justify-center items-center">
//                   <img
//                     src={pokemon.image}
//                     alt={pokemon.name}
//                     className="w-30 h-20"
//                   />

//                   <div>{pokemon.name}</div>
//                   <button onClick={() => handleDetailsClick(pokemon.name)}>
//                     Details
//                   </button>
//                 </div>
//               </div>
//             ))}
//         </div>
//       )}
//       <div className="text-center pt-10">
//         <button
//           onClick={handlePrevClick}
//           className="inline-block py-2 px-4 mx-2 bg-transparent border border-gray-300 text-gray-500 hover:text-gray-700 hover:border-gray-400 rounded focus:outline-none"
//           disabled={page === 1}
//         >
//           Prev
//         </button>
//         <button
//           onClick={handleNextClick}
//           className="inline-block py-2 px-4 mx-2 bg-transparent border border-gray-300 text-gray-500 hover:text-gray-700 hover:border-gray-400 rounded focus:outline-none"
//           disabled={!pokemonData || pokemonData.length < limit}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Pokemon;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetPokemonDataQuery } from "./apislice";

const Pokemon = () => {
  const [page, setPage] = useState(1);
  const limit = 8;

  const { data: pokemonData } = useGetPokemonDataQuery({
    page,
    limit,
  });
  const navigate = useNavigate();

  const handleDetailsClick = (name) => {
    navigate(`/Pokemon/${name}`);
  };

  const handleNextClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevClick = () => {
    setPage((prevPage) => prevPage - 1);
  };

  return (
    <div>
      <h1>Pokemon List</h1>
      <div className="grid grid-cols-4 gap-4">
        {pokemonData &&
          pokemonData.map((pokemon, index) => (
            <div key={index} className="bg-gray-200 p-4">
              <div className="flex flex-col justify-center items-center">
                <img
                  src={pokemon.image}
                  alt={pokemon.name}
                  className="w-30 h-20"
                />
                <div>{pokemon.name}</div>
                <button onClick={() => handleDetailsClick(pokemon.name)}>
                  Details
                </button>
              </div>
            </div>
          ))}
      </div>
      <div className="text-center pt-10">
        <button
          onClick={handlePrevClick}
          className="inline-block py-2 px-4 mx-2 bg-transparent border border-gray-300 text-gray-500 hover:text-gray-700 hover:border-gray-400 rounded focus:outline-none"
          disabled={page === 1}
        >
          Prev
        </button>
        <button
          onClick={handleNextClick}
          className="inline-block py-2 px-4 mx-2 bg-transparent border border-gray-300 text-gray-500 hover:text-gray-700 hover:border-gray-400 rounded focus:outline-none"
          disabled={!pokemonData || pokemonData.length < limit}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pokemon;
