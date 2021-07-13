import React from "react";
import { func, string } from "prop-types";

const Toggle = ({ theme }) => {
  const isLight = theme === "light";

  return <div lightTheme={isLight}></div>;
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
