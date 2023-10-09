import { useState, createContext } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext();
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  const data = {
    theme,
    setTheme,
  };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

ThemeProvider.defaultProps = {
  children: "",
};

export { ThemeProvider, ThemeContext };
export default ThemeContext;
