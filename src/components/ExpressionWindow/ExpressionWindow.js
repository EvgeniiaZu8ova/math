import { React, useState } from "react";
import "./ExpressionWindow.css";

import arrow from "../../images/arrow_back-symbol.svg";
import refresh from "../../images/refresh-symbol.svg";

import Expression from "./Expression/Expression";

function ExpressionWindow() {
  const [page, setPage] = useState(1);
  const [reverseShift, setReverseShift] = useState(false);

  function handleClickNext() {
    setReverseShift(false);

    setPage((prev) => {
      if (prev < 9) {
        return prev + 1;
      } else {
        return prev;
      }
    });
  }

  function handleClickBack() {
    if (page === 3) {
      setReverseShift(true);
    }

    setPage((prev) => {
      if (prev > 1) {
        return prev - 1;
      } else {
        return prev;
      }
    });
  }

  function handleClickRefresh() {
    setPage(1);
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
      <Expression page={page} reverseShift={reverseShift} />
      <div className="expr-window__bottom">
        <p className="expr-window__page-counter">{`${page} из 9`}</p>
        <div className="expr-window__buttons">
          <button
            onClick={handleClickBack}
            className={`expr-window__button ${
              (page === 1 || page === 9) && "expr-window__button_hidden"
            }`}
          >
            <img src={arrow} alt="Назад" className="expr-window__icon" />
          </button>
          {page < 9 ? (
            <button
              onClick={handleClickNext}
              className="expr-window__button expr-window__button_black"
            >
              Далее
            </button>
          ) : (
            <button
              onClick={handleClickRefresh}
              className="expr-window__button expr-window__button_black expr-window__button_round"
            >
              <img
                src={refresh}
                alt="Обновить"
                className="exp-window__icon_round"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ExpressionWindow;
