import React from "react";

import "./VariablesPair.css";

function VariablesPair({ var1, var2, page, num }) {
  return (
    <>
      <img
        src={var1}
        alt="Переменная 1"
        className={`expr__letter ${page < num && "expr__letter_hidden"}`}
      />
      <img
        src={var2}
        alt="Переменная 2"
        className={`expr__letter ${page < num && "expr__letter_hidden"}`}
      />
    </>
  );
}

export default VariablesPair;
