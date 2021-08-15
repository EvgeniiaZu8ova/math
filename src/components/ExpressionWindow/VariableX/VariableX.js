import React from "react";

import "./VariableX.css";

import letterX from "../../../images/letter-x.svg";

function VariableX({ page, reverseShift }) {
  return (
    <>
      <img src={letterX} alt="Переменная x" className="expr__symbol" />
      <img
        src={letterX}
        alt="Переменная x"
        className={`expr__symbol expr__symbol_abs expr__symbol_abs_x ${
          page > 2 && "shift-x"
        } ${page > 6 && "shift-x-2"} ${
          page === 2 && reverseShift && "shift-x-reverse"
        } ${page === 6 && reverseShift && "shift-x-2-reverse"}`}
      />
    </>
  );
}

export default VariableX;
