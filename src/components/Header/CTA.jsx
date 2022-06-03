import { useEffect, useState, useContext } from "react";
import CV from "../../assets/Zygan Arkadiusz CV - PL.pdf";
import { data } from "../../data/lang/data.js";
import { AppContext } from "../../context/AppContext";

const CTA = () => {
  const { lang } = useContext(AppContext);
  const [content, setContent] = useState(data.pl.header);
  useEffect(() => {
    setContent(data[lang].header);
  }, [lang]);
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        {content.cvBtn}
      </a>
      <a href="#contact" className="btn btn-primary">
        {content.contactBtn}
      </a>
    </div>
  );
};

export default CTA;
