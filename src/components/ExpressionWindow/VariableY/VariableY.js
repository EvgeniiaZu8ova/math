import React from "react";

import "./VariableY.css";

import letterY from "../../../images/letter-y.svg";

function VariableY({ page, reverseShift }) {
  return (
    <>
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
        } ${page > 8 && "shift-y-2"} ${
          page === 4 && reverseShift && "shift-y-reverse"
        } ${page === 8 && reverseShift && "shift-y-2-reverse"}`}
      />
    </>
  );
}

export default VariableY;
