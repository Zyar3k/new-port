import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

import "./ThemeButton.scss";

const ThemeButton = () => {
  const { theme, setTheme } = useContext(AppContext);
  console.log(theme);
  return (
    <div className="toggle-wrapper">
      <div
        className={`${theme}` === "dark" ? "toggle active" : "toggle"}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <i className="indicator" />
      </div>
    </div>
  );
};

export default ThemeButton;
