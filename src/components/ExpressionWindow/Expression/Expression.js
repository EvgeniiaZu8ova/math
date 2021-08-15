import React from "react";
import "./Expression.css";

import letterA from "../../../images/letter-a.svg";
import plusSymbol from "../../../images/plus.svg";
import letterB from "../../../images/letter-b.svg";
import letterX from "../../../images/letter-x.svg";
import letterY from "../../../images/letter-y.svg";
import equalSymbol from "../../../images/equal-symbol.svg";
import dotsSymbol from "../../../images/dots-symbol.svg";

import Arrows from "../Arrows/Arrows";
import WithBraces from "../WithBraces/WithBraces";
import VariableA from "../VariableA/VariableA";
import VariableB from "../VariableB/VariableB";
import VariableX from "../VariableX/VariableX";
import VariableY from "../VariableY/VariableY";
import VariablesPair from "../VariablesPair/VariablesPair";

function Expression({ page, reverseShift }) {
  return (
    <div className="expr__container">
      <div className="expr__row expr__row_first">
        <Arrows page={page} />

        <WithBraces>
          <VariableA page={page} reverseShift={reverseShift} />
          <img src={plusSymbol} alt="Плюс" className="expr__symbol" />
          <VariableB page={page} reverseShift={reverseShift} />
        </WithBraces>

        <WithBraces>
          <VariableX page={page} reverseShift={reverseShift} />
          <img src={plusSymbol} alt="Плюс" className="expr__symbol" />
          <VariableY page={page} reverseShift={reverseShift} />
        </WithBraces>

        <img src={equalSymbol} alt="Равно" className="expr__symbol" />
      </div>

      <div className="expr__row expr__row_second">
        <img
          src={equalSymbol}
          alt="Равно"
          className={`expr__symbol ${page < 3 && "expr__symbol_hidden"}`}
        />
        <div className="expr__pair">
          <VariablesPair var1={letterA} var2={letterX} page={page} num={3} />
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
          <VariablesPair var1={letterA} var2={letterY} page={page} num={5} />
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
          <VariablesPair var1={letterB} var2={letterX} page={page} num={7} />
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
            className={`expr__symbol expr__symbol_abs expr__symbol_abs_dots expr__symbol_abs_dots-high ${
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
