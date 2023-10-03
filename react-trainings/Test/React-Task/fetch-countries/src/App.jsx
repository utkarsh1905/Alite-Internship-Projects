import "./App.css";
import DropDownCountry from "./components/DropDownCountry";
import NavBar from "./components/NavBar";
import VideoPlayer from "./components/VideoPlayer";
import { useState } from "react";
import ChangeColor from "./components/ChangeColor";
import FilterProductComponent from "./components/FilterProductComponent";
const App = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleCloseNavbar = () => {
    setNavbarOpen(false);
  };

  return (
    <>
      <NavBar
        open={navbarOpen}
        onToggle={handleToggleNavbar}
        onClose={handleCloseNavbar}
      />
      <br />
      <DropDownCountry />
      <br />
      <VideoPlayer />
      <br />
      <ChangeColor />
      <br />
      <FilterProductComponent />
    </>
  );
};

export default App;
