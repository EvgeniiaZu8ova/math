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

function Expression(props) {
  return (
    <div className="expr__container">
      <div className="expr__row">
        <img src={leftBrace} alt="Левая скобка" className="expr__symbol" />

        <div className="expr__inside-braces">
          <img src={letterA} alt="Переменная а" className="expr__symbol" />
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
        <img src={equalSymbol} alt="Равно" className="expr__symbol" />

        <div className="expr__pair">
          <img src={letterA} alt="Переменная а" className="expr__symbol" />
          <img src={letterX} alt="Переменная x" className="expr__symbol" />
        </div>

        <img src={plusSymbol} alt="Плюс" className="expr__symbol" />

        <div className="expr__pair">
          <img src={letterA} alt="Переменная а" className="expr__symbol" />
          <img src={letterY} alt="Переменная y" className="expr__symbol" />
        </div>

        <img src={plusSymbol} alt="Плюс" className="expr__symbol" />

        <div className="expr__pair expr__pair_bottom">
          <img src={letterB} alt="Переменная b" className="expr__symbol" />
          <img src={letterX} alt="Переменная x" className="expr__symbol" />
        </div>

        <img src={plusSymbol} alt="Плюс" className="expr__symbol" />

        <div className="expr__pair expr__pair_high">
          <img src={letterB} alt="Переменная b" className="expr__symbol" />
          <img
            src={letterY}
            alt="Переменная y"
            className="expr__symbol expr__symbol_top-padding"
          />
        </div>
      </div>
    </div>
  );
}

export default Expression;
