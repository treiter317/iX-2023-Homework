import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import PokemonTable from "./components/PokemonTable";
import { Pokemon } from "./models/pokemon";

let offset = 0;

function App() {
  const [pokemons, setPokemons] = useState([]);

  const url = "https://pokeapi.co/api/v2/pokemon";

  async function fetchPokemon() {
    const res = await fetch(url + `?limit=20&offset=${offset}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    let pokemonData = await Promise.all(
      data.results.map(async (pokemon) => {
        const img = await fetchImage(pokemon.name);
        return new Pokemon(pokemon.name, img);
      })
    );

    setPokemons(pokemonData);
  }

  async function fetchImage(name) {
    const res = await fetch(url + `/${name}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    return data.sprites.front_default;
  }

  function nextPage() {
    offset += 20;
    window.scrollTo({top: 0, behavior: "smooth"});
    fetchPokemon();
  }

  function previousPage(){
    if(offset > 0){
      offset -= 20;
      window.scrollTo({top: 0, behavior: "smooth"});
      fetchPokemon();
    }
  }

  return (
    <div className="text-center mt-5">
      <h1>Here is the Pokemon API!</h1>
      <button
        className="btn btn-primary btn-lg mt-3"
        type="button"
        onClick={fetchPokemon}
      >
        Fetch Pokemon
      </button>
      <PokemonTable pokemons={pokemons}></PokemonTable>
      {pokemons.length !== 0 ? (
        <div className="pb-5">
          <button className="btn btn-danger me-3 btn-lg" onClick={previousPage}>Previous Page</button>
          <button className="btn btn-success ms-3 btn-lg" onClick={nextPage}>Next Page</button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
