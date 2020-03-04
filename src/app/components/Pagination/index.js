import React from "react";
import "./index.scss";

function PokemonsItem(props) {
  let startPage = null;
  let endPage = null;

  if (props.totalPages <= 10) {
    startPage = 1;
    endPage = props.totalPages;
  } else {
    if (props.currentPage <= 6) {
      startPage = 1;
      endPage = 10;
    } else if (props.currentPage + 4 >= props.totalPages) {
      startPage = props.totalPages - 9;
      endPage = props.totalPages;
    } else {
      startPage = props.currentPage - 5;
      endPage = props.currentPage + 4;
    }
  }

  const numbers = [...Array(endPage + 1 - startPage).keys()];
  const numberButtons = numbers.map(i => {
    const number = startPage + i;

    return (
      <button
        key={number}
        className={`pagination__button ${
          props.currentPage === number ? "pagination__button--active" : ""
        }`}
        onClick={() => onNumberClick(number)}
      >
        {number}
      </button>
    );
  });

  const onPrevClick = () => {
    props.prevClick();
  };

  const onNextClick = () => {
    props.nextClick();
  };

  const onNumberClick = number => {
    props.numberClick(number);
  };

  return (
    <div className="pagination">
      <div className="pagination__button-wrapper">
        <button className="pagination__button" onClick={onPrevClick}>
          prev
        </button>
      </div>

      {numberButtons}

      <div className="pagination__button-wrapper">
        <button className="pagination__button" onClick={onNextClick}>
          next
        </button>
      </div>
    </div>
  );
}

export default PokemonsItem;
