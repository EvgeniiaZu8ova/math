import React from "react";
import "./ExpressionWindow.css";

import Expression from "./Expression/Expression";

function ExpressionWindow(props) {
  return (
    <div className="expr-window__container">
      <h1 className="expr-window__title">
        В итоге получается следующая формула:
      </h1>
      <Expression />
    </div>
  );
}

export default ExpressionWindow;
