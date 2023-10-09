/* eslint-disable react/no-unknown-property */
import { useContext } from "react";
import "./App.module.scss";
import ThemeContext from "./context/ThemeContext";
import { availableThemes } from "./data/themes";
import styles from './App.module.scss';

function App() {

  const {theme, setTheme} = useContext(ThemeContext);

  const changeTheme = (event) => {
    const input = parseInt(event.target.value);
    for(const idTheme in availableThemes){
      if(input === parseInt(idTheme)){
        setTheme(availableThemes[idTheme]);
        break;
      }
    }
  }

  return (
  <div className={styles.page} theme={theme}>
    Color
    <input className={styles.slider} type="range" min={1} max={3} onChange={changeTheme} defaultValue={1}/>
  </div>
  );
}

export default App;
