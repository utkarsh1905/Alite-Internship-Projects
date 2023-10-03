import React, { useContext }  from 'react'
import { ThemeContext } from "./ThemeProvider";


const ToggleButton = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>  )
}

export default ToggleButton