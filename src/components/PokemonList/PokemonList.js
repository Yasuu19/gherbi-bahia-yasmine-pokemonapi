import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function PokemonList({ searchTerm = "" }) {

  const [pokemons, setPokemons] = useState([]);

  async function getData() {
    //On récupère les données de l'API
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100");
    // On stocke les données dans la liste pokemons
    setPokemons(res.data.results);
  }

  //Au chargement de la page on appelle la fonction getData qui appelle l'API
  useEffect(() => {
    getData();
  }
    , []);

  //Affiche la liste des pokemons et filtres
  return (
    <ul>
      {pokemons.filter((pokemon) => {
        return pokemon.name.includes(searchTerm)
      }).map((pokemon) => {
        //  Ajout d'une clé pour chaque pokemon
        return <li key={pokemon.name}>{pokemon.name}</li>
      })}
    </ul >
  );
}

export default PokemonList;
