// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Pokemon from "./Pokemon";
// import PokemonDetails from "./PokemonDetails";
// import FileUpload from "./FileUpload";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Pokemon />,
//   },
//   {
//     path: "/Pokemon/:name",
//     element: <PokemonDetails />,
//   },
// ]);

// function App() {
//   return (
//     <>
//       <RouterProvider router={router} />
//       <FileUpload />
//     </>
//   );
// }

// export default App;

import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FileUpload from "./FileUpload";

const Pokemon = React.lazy(() => import("./Pokemon"));
const PokemonDetails = React.lazy(() => import("./PokemonDetails"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Pokemon />,
  },
  {
    path: "/Pokemon/:name",
    element: <PokemonDetails />,
  },
]);

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <RouterProvider router={router} />
      <FileUpload />
    </Suspense>
  );
}

export default App;
