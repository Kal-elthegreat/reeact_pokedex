import React, { useState, useEffect } from "react";
import "./App.css";
import Header from './components/Header';

function App() {
  const [name, setName] = useState(null);
  const [img, setImg] = useState(null);
  // const [results, setResults] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        await fetch("https://pokeapi.co/api/v2/pokemon/3") //?limit=151
          .then((res) => res.json())
          .then((data) => {
            setImg(data.sprites.front_default);
            setName(data.name);
          });
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="pokedex">
      <Header /> {/* need a pokemon style font */}
      <div className="display">
        <h1>{name}</h1> 
        <img src={img} alt={name} style={{ width: 175, height: 175 }} />
      </div>

        <div className="controls">
          <button style={{width: 100}}>Previous</button>
          <button style={{ width: 100 }}>Next</button>
        </div>

    </div>
  );
}

export default App;
