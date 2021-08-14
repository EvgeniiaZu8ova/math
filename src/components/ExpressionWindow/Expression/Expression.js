import React from "react";
import "./Expression.css";

import leftBrace from "../../../images/left-brace.svg";
import letterA from "../../../images/letter-a.svg";
import plusSymbol from "../../../images/plus.svg";
import letterB from "../../../images/letter-b.svg";
import rightBrace from "../../../images/right-brace.svg";
import letterX from "../../../images/letter-x.svg";
import letterY from "../../../images/letter-y.svg";
import equalSymbol from "../../../images/equal-symbol.svg";
import dotsSymbol from "../../../images/dots-symbol.svg";

import Arrows from "../Arrows/Arrows";

function Expression({ page }) {
  return (
    <div className="expr__container">
      <div className="expr__row expr__row_first">
        <Arrows page={page} />

        <img src={leftBrace} alt="Левая скобка" className="expr__symbol" />

        <div className="expr__inside-braces">
          <img src={letterA} alt="Переменная а" className="expr__symbol" />
          <img
            src={letterA}
            alt="Переменная а"
            className={`expr__symbol expr__symbol_abs expr__symbol_abs_a ${
              page > 2 && "shift-a"
            }`}
          />
          <img src={plusSymbol} alt="Плюс" className="expr__symbol" />
          <img
            src={letterB}
            alt="Переменная b"
            className="expr__symbol expr__symbol_bottom-padding"
          />
        </div>

        <img src={rightBrace} alt="Правая скобка" className="expr__symbol" />
        <img src={leftBrace} alt="Левая скобка" className="expr__symbol" />

        <div className="expr__inside-braces">
          <img src={letterX} alt="Переменная x" className="expr__symbol" />
          <img
            src={letterX}
            alt="Переменная x"
            className={`expr__symbol expr__symbol_abs expr__symbol_abs_x ${
              page > 2 && "shift-x"
            }`}
          />
          <img src={plusSymbol} alt="Плюс" className="expr__symbol" />
          <img
            src={letterY}
            alt="Переменная y"
            className="expr__symbol expr__symbol_top-padding-small"
          />
        </div>

        <img src={rightBrace} alt="Правая скобка" className="expr__symbol" />
        <img src={equalSymbol} alt="Равно" className="expr__symbol" />
      </div>

      <div className="expr__row expr__row_second">
        <img
          src={equalSymbol}
          alt="Равно"
          className={`expr__symbol ${page < 3 && "expr__symbol_hidden"}`}
        />

        <div className="expr__pair">
          <img
            src={letterA}
            alt="Переменная а"
            className={`expr__symbol ${page < 3 && "expr__symbol_hidden"}`}
          />
          <img
            src={letterX}
            alt="Переменная x"
            className={`expr__symbol ${page < 3 && "expr__symbol_hidden"}`}
          />
        </div>

        <img
          src={plusSymbol}
          alt="Плюс"
          className={`expr__symbol ${page < 3 && "expr__symbol_hidden"}`}
        />

        {page > 2 && page < 5 ? (
          <img
            src={dotsSymbol}
            alt="Многоточие"
            className="expr__symbol expr__symbol_bottom expr__symbol_wide"
          />
        ) : (
          <div className="expr__pair">
            <img
              src={letterA}
              alt="Переменная а"
              className={`expr__symbol ${page < 5 && "expr__symbol_hidden"}`}
            />
            <img
              src={letterY}
              alt="Переменная y"
              className={`expr__symbol ${page < 5 && "expr__symbol_hidden"}`}
            />
          </div>
        )}

        <img
          src={plusSymbol}
          alt="Плюс"
          className={`expr__symbol ${page < 5 && "expr__symbol_hidden"}`}
        />

        {page > 4 && page < 7 ? (
          <img
            src={dotsSymbol}
            alt="Многоточие"
            className="expr__symbol expr__symbol_bottom"
          />
        ) : (
          <div className="expr__pair expr__pair_bottom">
            <img
              src={letterB}
              alt="Переменная b"
              className={`expr__symbol ${page < 7 && "expr__symbol_hidden"}`}
            />
            <img
              src={letterX}
              alt="Переменная x"
              className={`expr__symbol ${page < 7 && "expr__symbol_hidden"}`}
            />
          </div>
        )}

        <img
          src={plusSymbol}
          alt="Плюс"
          className={`expr__symbol ${page < 7 && "expr__symbol_hidden"}`}
        />

        {page > 6 && page < 9 ? (
          <img
            src={dotsSymbol}
            alt="Многоточие"
            className="expr__symbol expr__symbol_bottom"
          />
        ) : (
          <div className="expr__pair expr__pair_high">
            <img
              src={letterB}
              alt="Переменная b"
              className={`expr__symbol ${page < 9 && "expr__symbol_hidden"}`}
            />
            <img
              src={letterY}
              alt="Переменная y"
              className={`expr__symbol expr__symbol_top-padding ${
                page < 9 && "expr__symbol_hidden"
              }`}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Expression;
