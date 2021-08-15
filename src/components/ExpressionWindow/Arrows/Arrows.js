import React from "react";
import "./Arrows.css";

import bigArrow from "../../../images/big-arrow.svg";
import mediumArrow from "../../../images/medium-arrow.svg";
import smallArrow from "../../../images/small-arrow.svg";

function Arrows({ page }) {
  return (
    <div className="expr__arrows">
      <img
        src={bigArrow}
        alt="Большая стрелка"
        className={`expr__arrow ${page > 3 && page < 6 && "expr__arrow_big"}`}
      />
      <img
        src={mediumArrow}
        alt="Средняя стрелка"
        className={`expr__arrow ${
          page > 1 && page < 6 && "expr__arrow_medium"
        } ${page > 7 && page < 9 && "expr__arrow_medium expr__arrow_shifted"}`}
      />
      <img
        src={smallArrow}
        alt="Маленькая стрелка"
        className={`expr__arrow ${
          page > 5 && page < 9 && "expr__arrow_small expr__arrow_shifted"
        }`}
      />
    </div>
  );
}

export default Arrows;
