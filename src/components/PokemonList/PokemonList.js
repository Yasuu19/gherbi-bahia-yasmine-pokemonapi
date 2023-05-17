import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function PokemonList({ searchTerm = "" }) {

  const [pokemons, setPokemons] = useState([]);

  async function getData() {
    //On récupère les données de l'API
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100)");
    // On stocke les données dans la liste pokemons
    setPokemons(res.data.results);
  }

  //A chaque changement on appelle la fonction getData qui appelle l'API
  useEffect(() => {
    getData();
  }
    , []);


  return (
    <ul>
      //Affiche la liste des pokemons et filtre
      {pokemons.filter((pokemon) => {
        return pokemon.name.includes(searchTerm)
      }).map((pokemon) => {
        // Ajout d'une clé pouro chaque pokemon
        return <li key={pokemon.name}>{pokemon.name}</li>
      })}
    </ul >
  );
}

export default PokemonList;
