import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import MoveList from "./components/MoveList";

function App() {
  const [id, setId] = useState(1);
  const [pokeData, setPokeData] = useState(null);

  const fetchPoke = async (id) => {
    const apiCall = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await apiCall.json();
    setPokeData(data)
  }
  
  useEffect(() => {
    fetchPoke(id);
  }, [id])
  console.log(pokeData);

  return (
    <div className="pokedex">
      <Header /> {/* needs a pokemon style font */}
      <div className="display">
        {/* <h1>{pokeData.name}</h1> */}
        {/* <img src={pokeData.sprites.front_default} alt={pokeData.name} style={{ width: 175, height: 175 }} /> */}
      </div>
      <div className="info">
        {/* <MoveList moves={pokeData.moves} /> */}
      </div>
      <div className="controls">
        <button
          style={{ width: 100 }}
          onClick={() => {
            id > 1 ? setId(id - 1) : setId(151);
          }}
        >
          Previous
        </button>
        <button
          style={{ width: 100 }}
          onClick={() => {
            id > 150 ? setId(1) : setId(id + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
