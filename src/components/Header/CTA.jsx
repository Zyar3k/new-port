import { useEffect, useState, useContext } from "react";
import CVpl from "../../assets/Zygan Arkadiusz CV - PL.pdf";
import CVen from "../../assets/Zygan Arkadiusz CV - ENG.pdf";
import pl from "../../data/lang/pl.json";
import en from "../../data/lang/en.json";
import { AppContext } from "../../context/AppContext";

const CTA = () => {
  const { lang } = useContext(AppContext);
  const [content, setContent] = useState(pl.header);

  useEffect(() => {
    setContent(lang === "pl" ? pl.header : en.header);
  }, [lang]);
  return (
    <div className="cta">
      <a href={lang === "pl" ? CVpl : CVen} download className="btn">
        {content.cvBtn}
      </a>
      <a href="#contact" className="btn btn-primary">
        {content.contactBtn}
      </a>
    </div>
  );
};

export default CTA;
