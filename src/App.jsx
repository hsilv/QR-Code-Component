/* eslint-disable react/no-unknown-property */
import "./App.module.scss";
import ThemeContext from "./context/ThemeContext";
import { availableThemes } from "./data/themes";
import styles from "./App.module.scss";
import ThemeIcon from "./assets/theme";
import { QRCode } from "react-qrcode-logo";
import { useContext, useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [url, setURL] = useState("http://silva.com");
  const [submited, setSubmited] = useState(false);
  const [QRColor, setQRColor] = useState({
    fgColor: "black",
    bgColor: "white",
  });
  const cssVarsRefs = useRef(null);

  const changeTheme = (event) => {
    const input = parseInt(event.target.value);
    for (const idTheme in availableThemes) {
      if (input === parseInt(idTheme)) {
        setTheme(availableThemes[idTheme]);
        break;
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setURL(event.target.pageURL.value);
    setSubmited(true);
  };

  useEffect(() => {
    const cs = getComputedStyle(cssVarsRefs.current);
    setQRColor({
      fgColor: cs.getPropertyValue("--qr-foreground"),
      bgColor: cs.getPropertyValue("--qr-background"),
    });
  }, [theme]);

  return (
    <div className={styles.page} theme={theme} ref={cssVarsRefs}>
      <header className={styles.header}>
        <h1>QR Code Generator</h1>
        <div className={styles.themeControl}>
          <span>{theme}</span>
          <ThemeIcon className={styles.ThemeIcon} />
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
      <div className={styles.body}>
        <div className={styles.QRContainer}>
          <div className={styles.QRCard}>
            <QRCode
              value={url}
              size={250}
              quietZone={25}
              fgColor={QRColor.fgColor}
              bgColor={QRColor.bgColor}
              eyeRadius={[
                {
                  outer: [10, 0, 0, 0],
                },
                {
                  outer: [0, 10, 0, 0],
                },
                {
                  outer: [0, 0, 0, 10],
                },
              ]}
            />
          </div>
        </div>
        <div className={styles.QRDetails}>
          <form onSubmit={handleSubmit} className={styles.formCard}>
            <span className={`${styles.formTip} ${submited ? styles.showTip : ''}`}>
              If you want to download the QR, right click the QR Code then click &quot;Save As&quot;
            </span>
            <label htmlFor="pageURL" className={styles.formLabels}>
              Enter your text:
            </label>
            <input
              type="text"
              name="page"
              id="pageURL"
              className={styles.textInput}
              required
            />
            <button
              type="submit"
              name="Generar"
              id="generar"
              className={styles.submitButton}
            >
              <span>Generate</span>
            </button>
          </form>
        </div>
      </div>
      <footer className={styles.footer}>@Sebastián Silva --- 2023</footer>
    </div>
  );
}

export default App;
