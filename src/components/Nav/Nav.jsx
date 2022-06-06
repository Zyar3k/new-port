import { useState, useContext } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { MdOutlineWidgets } from "react-icons/md";

import { AppContext } from "../../context/AppContext";
import "./Nav.scss";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  const { lang, switchLanguage } = useContext(AppContext);

  return (
    <nav>
      {/* eslint-disable-next-line */}
      <a
        href="#"
        className={activeNav === "#" ? "active" : ""}
        onClick={() => setActiveNav("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        onClick={() => setActiveNav("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
        onClick={() => setActiveNav("#experience")}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        className={activeNav === "#portfolio" ? "active" : ""}
        onClick={() => setActiveNav("#portfolio")}
      >
        <MdOutlineWidgets />
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
        onClick={() => setActiveNav("#contact")}
      >
        <BiMessageSquareDetail />
      </a>
      <div className="language-switch" onClick={switchLanguage}>
        {lang === "pl" ? "EN" : "PL"}
      </div>
    </nav>
  );
};

export default Nav;
