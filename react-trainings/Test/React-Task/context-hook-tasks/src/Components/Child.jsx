import React, { useContext } from 'react'
import { ThemeContext } from "./ThemeProvider";


const Child = ({text}) => {
    const {theme} = useContext(ThemeContext);
  return (
    <div className={`child ${theme}`}>
      <p>{text}</p>
    </div>  
    )
}

export default Child