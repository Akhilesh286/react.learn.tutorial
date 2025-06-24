import { useEffect, useState } from 'react';
import './App.css';
import useWindowSize from './tutorials/customHook/useWindowWidth'
import Counter, { DarkTheme, Status } from './tutorials/useReducer/useReducer';
import { ThemeContext } from './tutorials/useReducer/context';

export function CustomHook() {
  const [width,height] = useWindowSize()

  return (
    <div className="App">
      <p>{width}</p>
      <p>{height}</p>
    </div>
  );
}

export function UseReducer() {

  return (
    // <Counter/>
    <Status/>
);
}

export function ToogleTheme() {
    return (
        <ThemeContext.Provider value={"dark"}>
            <DarkTheme/>
            <button>toogle</button>
        </ThemeContext.Provider>
    )
}