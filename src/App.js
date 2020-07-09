import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [name, setName] = useState(null);
  const [img, setImg] = useState(null);

  const getPoke = (id) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) //?limit=151
      .then((res) => res.json())
      .then((data) => {
        setImg(data.sprites.front_default);
        setName(data.name);
      });
  };
  console.log(getPoke(3));

  return (
    <div className="pokedex">
      <Header /> {/* need a pokemon style font */}
      <div className="display">
        <h1>{name}</h1>
        <img src={img} alt={name} style={{ width: 175, height: 175 }} />
      </div>
      <div className="controls">
        <button style={{ width: 100 }}>Previous</button>
        <button style={{ width: 100 }}>Next</button>
      </div>
    </div>
  );
}

export default App;
