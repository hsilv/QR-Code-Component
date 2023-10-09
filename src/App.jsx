/* eslint-disable react/no-unknown-property */
import { useContext } from "react";
import "./App.module.scss";
import ThemeContext from "./context/ThemeContext";
import { availableThemes } from "./data/themes";
import styles from "./App.module.scss";
import ThemeIcon from "./assets/theme";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeTheme = (event) => {
    const input = parseInt(event.target.value);
    for (const idTheme in availableThemes) {
      if (input === parseInt(idTheme)) {
        setTheme(availableThemes[idTheme]);
        break;
      }
    }
  };

  return (
    <div className={styles.page} theme={theme}>
      <header className={styles.header}>
        <h1>QR Code Generator</h1>
        <div className={styles.themeControl}>
          <span>{theme}</span>
          <ThemeIcon className={styles.ThemeIcon}/>
          <input
            className={styles.slider}
            type="range"
            min={1}
            max={3}
            onChange={changeTheme}
            defaultValue={1}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
