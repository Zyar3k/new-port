import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

import "./ThemeButton.scss";

const ThemeButton = () => {
  const { theme, switchTheme } = useContext(AppContext);

  return (
    <div className="toggle-wrapper">
      <div
        className={`${theme}` === "dark" ? "toggle active" : "toggle"}
        onClick={switchTheme}
      >
        <i className="indicator" />
      </div>
    </div>
  );
};

export default ThemeButton;
