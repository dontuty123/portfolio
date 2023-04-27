import React, { useContext } from "react";
import Sun from "../../img/sun.png";
import Moon from "../../img/unnamed.png";
import "./toggle.css";
import { ThemeContext } from "../../context";

const Toggle = () => {
  const theme = useContext(ThemeContext);
  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t" onClick={handleClick}>
      <div
        className="t-button"
        style={{ right: theme.state.darkMode ? 0 : 25 }}
      ></div>
      <img src={Sun} alt="" className="t-icon" />
      <img src={Moon} alt="" className="t-icon" />
    </div>
  );
};

export default Toggle;
