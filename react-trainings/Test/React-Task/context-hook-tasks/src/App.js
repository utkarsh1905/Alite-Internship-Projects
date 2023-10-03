import './App.css';
import React from "react";
import Child from './Components/Child';
import ToggleButton from './Components/ToggleButton';
import ThemeProvider from "./Components/ThemeProvider"

const App = () => {
  return (
        <ThemeProvider>
          <div>
            <h1>Toggle Theme</h1>
            <Child text="This is Child 1" />
            <Child text="This is Child 2" />
            <Child text="This is Child 3" />
            <ToggleButton />
          </div>
        </ThemeProvider>
  );
};

export default App;