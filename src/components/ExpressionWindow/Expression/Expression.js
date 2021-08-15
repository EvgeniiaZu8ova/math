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

function Expression({ page, reverseShift }) {
  return (
    <div className="expr__container">
      <div className="expr__row expr__row_first">
        <Arrows page={page} />

        <div className="expr__with-braces">
          <img src={leftBrace} alt="Левая скобка" className="expr__symbol" />

          <div className="expr__inside-braces">
            <img src={letterA} alt="Переменная а" className="expr__symbol" />
            <img
              src={letterA}
              alt="Переменная а"
              className={`expr__symbol expr__symbol_abs expr__symbol_abs_a ${
                page > 2 && "shift-a"
              } ${page > 4 && "shift-a-2"} ${
                reverseShift && "shift-a-reverse"
              }`}
            />
            <img src={plusSymbol} alt="Плюс" className="expr__symbol" />
            <img
              src={letterB}
              alt="Переменная b"
              className="expr__symbol expr__symbol_bottom-padding"
            />
            <img
              src={letterB}
              alt="Переменная b"
              className={`expr__symbol expr__symbol_bottom-padding expr__symbol_abs expr__symbol_abs_b ${
                page > 6 && "shift-b"
              } ${page > 8 && "shift-b-2"} ${
                reverseShift && "shift-b-reverse"
              }`}
            />
          </div>

          <img src={rightBrace} alt="Правая скобка" className="expr__symbol" />
        </div>

        <div className="expr__with-braces">
          <img src={leftBrace} alt="Левая скобка" className="expr__symbol" />

          <div className="expr__inside-braces">
            <img src={letterX} alt="Переменная x" className="expr__symbol" />
            <img
              src={letterX}
              alt="Переменная x"
              className={`expr__symbol expr__symbol_abs expr__symbol_abs_x ${
                page > 2 && "shift-x"
              } ${page > 6 && "shift-x-2"} ${
                reverseShift && "shift-x-reverse"
              }`}
            />
            <img src={plusSymbol} alt="Плюс" className="expr__symbol" />
            <img
              src={letterY}
              alt="Переменная y"
              className="expr__symbol expr__symbol_top-padding-small"
            />
            <img
              src={letterY}
              alt="Переменная y"
              className={`expr__symbol expr__symbol_top-padding-small expr__symbol_abs expr__symbol_abs_y ${
                page > 4 && "shift-y"
              } ${page > 8 && "shift-y-2"}`}
            />
          </div>

          <img src={rightBrace} alt="Правая скобка" className="expr__symbol" />
        </div>

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
            className={`expr__letter ${page < 3 && "expr__letter_hidden"}`}
          />
          <img
            src={letterX}
            alt="Переменная x"
            className={`expr__letter ${page < 3 && "expr__letter_hidden"}`}
          />
        </div>
        <img
          src={plusSymbol}
          alt="Плюс"
          className={`expr__symbol ${page < 3 && "expr__symbol_hidden"}`}
        />
        <div className="expr__pair">
          <img
            src={dotsSymbol}
            alt="Многоточие"
            className={`expr__symbol expr__symbol_abs expr__symbol_abs_dots ${
              (page < 3 || page > 4) && "expr__symbol_hidden"
            }`}
          />
          <img
            src={letterA}
            alt="Переменная а"
            className={`expr__letter ${page < 5 && "expr__letter_hidden"}`}
          />
          <img
            src={letterY}
            alt="Переменная y"
            className={`expr__letter ${page < 5 && "expr__letter_hidden"}`}
          />
        </div>
        <img
          src={plusSymbol}
          alt="Плюс"
          className={`expr__symbol ${page < 5 && "expr__symbol_hidden"}`}
        />
        <div className="expr__pair expr__pair_bottom">
          <img
            src={dotsSymbol}
            alt="Многоточие"
            className={`expr__symbol expr__symbol_abs expr__symbol_abs_dots ${
              (page < 5 || page > 6) && "expr__symbol_hidden"
            }`}
          />
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

        <img
          src={plusSymbol}
          alt="Плюс"
          className={`expr__symbol ${page < 7 && "expr__symbol_hidden"}`}
        />

        <div className="expr__pair expr__pair_high">
          <img
            src={dotsSymbol}
            alt="Многоточие"
            className={`expr__symbol expr__symbol_abs expr__symbol_abs_dots ${
              (page < 7 || page > 8) && "expr__symbol_hidden"
            }`}
          />
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
      </div>
    </div>
  );
}

export default Expression;
