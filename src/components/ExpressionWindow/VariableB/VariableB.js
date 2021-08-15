import React from "react";

import "./VariableB.css";

import letterB from "../../../images/letter-b.svg";

function VariableB({ page, reverseShift }) {
  return (
    <>
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
          page === 6 && reverseShift && "shift-b-reverse"
        } ${page === 8 && reverseShift && "shift-b-2-reverse"}`}
      />
    </>
  );
}

export default VariableB;
