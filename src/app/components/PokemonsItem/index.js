import React from "react";
import "./index.scss";

import { Link } from "react-router-dom";
import { capitalizeFirstChar } from "../../services/helpers";

function PokemonsItem(props) {
  const linkPath = `/pokemon/${props.pokemon.name}`;

  return (
    <li className="pokemon-item">
      <Link to={linkPath} className="pokemon-item__link">
        {capitalizeFirstChar(props.pokemon.name)}
      </Link>
    </li>
  );
}

export default PokemonsItem;
