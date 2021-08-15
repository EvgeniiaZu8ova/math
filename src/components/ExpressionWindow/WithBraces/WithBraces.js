import React from "react";

import "./WithBraces.css";

import leftBrace from "../../../images/left-brace.svg";
import rightBrace from "../../../images/right-brace.svg";

function WithBraces({ children }) {
  return (
    <div className="expr__with-braces">
      <img src={leftBrace} alt="Левая скобка" className="expr__symbol" />

      <div className="expr__inside-braces">{children}</div>

      <img src={rightBrace} alt="Правая скобка" className="expr__symbol" />
    </div>
  );
}

export default WithBraces;
