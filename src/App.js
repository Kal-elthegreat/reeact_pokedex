import React, { useState, useEffect, Fragment } from "react";
import { getPokemon } from "./services/pokeData";
import "./App.css";
import Header from "./components/Header";
import MoveList from "./components/MoveList";

function App() {
  const [pokeData, setPokeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(1);
  let url = `https://pokeapi.co/api/v2/pokemon/${id}`

  useEffect(() => {
    async function fetchData(){
      let response = await getPokemon(url);
      setPokeData(response);
      setLoading(false);
    }
      fetchData();
  }, [url]);


  return (
    <div className="pokedex">
      <Header /> {/* needs a pokemon style font */}
      {loading ? (
        <h1>"Loading..."</h1>
      ) : (
        <Fragment>
          <div className="display">
            <h1>{pokeData.name}</h1>
            <img
              src={pokeData.sprites.front_default}
              alt={pokeData.name}
              style={{ width: 175, height: 175 }}
            />
          </div>
          <div className="info">
            <MoveList moves={pokeData.moves} />
          </div>
          <div className="controls">
            <button
              style={{ width: 100 }}
              onClick={() => {
                setLoading(true);
                id > 1 ? setId(id - 1) : setId(151);
              }}
            >
              Previous
            </button>
            <button
              style={{ width: 100 }}
              onClick={() => {
                setLoading(true)
                id > 150 ? setId(1) : setId(id + 1);
              }}
            >
              Next
            </button>
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default App;
