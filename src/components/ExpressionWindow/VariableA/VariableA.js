import React from "react";

import "./VariableA.css";

import letterA from "../../../images/letter-a.svg";

function VariableA({ page, reverseShift }) {
  return (
    <>
      <img src={letterA} alt="Переменная а" className="expr__symbol" />
      <img
        src={letterA}
        alt="Переменная а"
        className={`expr__symbol expr__symbol_abs expr__symbol_abs_a ${
          page > 2 && "shift-a"
        } ${page > 4 && "shift-a-2"} ${
          page === 2 && reverseShift && "shift-a-reverse"
        } ${page === 4 && reverseShift && "shift-a-2-reverse"}`}
      />
    </>
  );
}

export default VariableA;
