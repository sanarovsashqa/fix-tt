import React, { useState, useEffect } from "react";
import "./index.scss";

import PokemonsList from "../../components/PokemonsList";
import UseFetch from "../../services/useFetch";
import Pagination from "../../components/Pagination";
import Preloader from "../../components/Preloader";

function PokemonsPage() {
  const [paginationOffset, setPaginationOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const paginationLimit = 20;

  const pokemons = UseFetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=${paginationLimit}&offset=${paginationOffset}`
  );

  useEffect(() => {
    setTotalPages(
      Math.ceil(
        pokemons.response
          ? Math.ceil(pokemons.response.count / paginationLimit)
          : null
      )
    );
  }, [pokemons.response, paginationLimit]);

  const getPaginationOffset = pageNumber => {
    return (pageNumber - 1) * paginationLimit;
  };

  const onPrevPageClick = () => {
    if (currentPage > 1) {
      const pageNumber = currentPage - 1;

      setCurrentPage(pageNumber);
      setPaginationOffset(getPaginationOffset(pageNumber));
    }
  };

  const onNextPageClick = () => {
    if (currentPage < totalPages) {
      const pageNumber = currentPage + 1;

      setCurrentPage(pageNumber);
      setPaginationOffset(getPaginationOffset(pageNumber));
    }
  };

  const onNumberPageClick = pageNumber => {
    if (pageNumber !== currentPage) {
      setCurrentPage(pageNumber);
      setPaginationOffset(getPaginationOffset(pageNumber));
    }
  };

  return (
    <div className="pokemons container">
      <h1 className="pokemons__title">PokeWorld</h1>
      {pokemons.response && !pokemons.isLoading ? (
        <div>
          <div className="pokemons__list">
            <PokemonsList pokemons={pokemons.response.results}></PokemonsList>
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            prevClick={onPrevPageClick}
            nextClick={onNextPageClick}
            numberClick={onNumberPageClick}
          ></Pagination>
        </div>
      ) : (
        <Preloader />
      )}
    </div>
  );
}

export default PokemonsPage;
