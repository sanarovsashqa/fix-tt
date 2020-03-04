import React from "react";
import "./index.scss";

import PokemonsItem from "../PokemonsItem";

function PokemonsList(props) {
  const pokemonsList = props.pokemons.map((pokemon, index) => {
    return <PokemonsItem key={index} pokemon={pokemon} />;
  });

  return <ul className="pokemons-list">{pokemonsList}</ul>;
}

export default PokemonsList;
