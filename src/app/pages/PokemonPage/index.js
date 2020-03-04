import React, { useState } from "react";
import "./index.scss";

import { useParams, Link } from "react-router-dom";
import UseFetch from "../../services/useFetch";
import { capitalizeFirstChar } from "../../services/helpers";
import Preloader from "../../components/Preloader";

function PokemonPage() {
  let { id } = useParams();
  const [isImageLoad, setIsImageLoad] = useState(false);

  const pokemon = UseFetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const img = new Image();
  img.src = pokemon.response ? pokemon.response.sprites.front_default : null;
  img.onload = () => {
    setIsImageLoad(true);
  };

  return (
    <div className="container">
      <Link className="back-btn" to={"/"}>
        back
      </Link>

      {pokemon.response && isImageLoad ? (
        <div className="pokemon">
          <img
            className="pokemon__img"
            src={pokemon.response.sprites.front_default}
            alt={pokemon.response.name}
          />
          <p className="pokemon__name">
            {capitalizeFirstChar(pokemon.response ? pokemon.response.name : "")}
          </p>
        </div>
      ) : (
        <Preloader></Preloader>
      )}
    </div>
  );
}

export default PokemonPage;
