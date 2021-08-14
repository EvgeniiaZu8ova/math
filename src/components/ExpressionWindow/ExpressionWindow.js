import { React, useState } from "react";
import "./ExpressionWindow.css";

import arrow from "../../images/arrow_back-symbol.svg";

import Expression from "./Expression/Expression";

function ExpressionWindow() {
  const [page, setPage] = useState(1);
  const [isFirst, setIsFirst] = useState(true);

  function handleClickNext() {
    setIsFirst(false);
    setPage((prev) => {
      if (prev < 9) {
        return prev + 1;
      } else {
        return prev;
      }
    });
  }

  function handleClickBack() {
    setPage((prev) => {
      if (prev > 1) {
        return prev - 1;
      } else {
        return prev;
      }
    });
  }

  return (
    <div className="expr-window__container">
      <h1
        className={`expr-window__title ${
          page === 9 && "expr-window__title_visible"
        }`}
      >
        В итоге получается следующая формула:
      </h1>
      <Expression page={page} />
      <div className="expr-window__bottom">
        <p className="expr-window__page-counter">{`${page} из 9`}</p>
        <div className="expr-window__buttons">
          <button
            onClick={handleClickBack}
            className={`expr-window__button ${
              isFirst && "expr-window__button_hidden"
            }`}
          >
            <img src={arrow} alt="Назад" className="expr-window__icon" />
          </button>
          <button
            onClick={handleClickNext}
            className="expr-window__button expr-window__button_black"
          >
            Далее
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExpressionWindow;
