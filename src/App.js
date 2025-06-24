import { useEffect, useState } from 'react';
import './App.css';
import useWindowSize from './tutorials/customHook/useWindowWidth'

function App() {
  const [width,height] = useWindowSize()

  return (
    <div className="App">
      <p>{width}</p>
      <p>{height}</p>
    </div>
  );
}

export default App;
