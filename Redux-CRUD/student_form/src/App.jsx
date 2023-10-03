import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes";

function App() {
  return (
    <>
      <div className="wrapper">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
