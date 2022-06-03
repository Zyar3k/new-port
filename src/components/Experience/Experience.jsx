import { useEffect, useState, useContext } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import pl from "../../data/lang/pl.json";
import en from "../../data/lang/en.json";
import { AppContext } from "../../context/AppContext";

import "./Experience.scss";

const frontData = [
  "HTML",
  "CSS",
  "Sass",
  "Tailwind",
  "Styled-components",
  "Bootstrap",
  "Javascript",
  "Typescript",
  "React",
  "Vue",
];

const backData = [
  "Node JS",
  "MongoDB",
  "Express.js",
  "JWT",
  "Socket.io",
  "Postman",
  "Git",
];

const Experience = () => {
  const { lang } = useContext(AppContext);
  const [content, setContent] = useState(pl.experience);

  useEffect(() => {
    setContent(lang === "pl" ? pl.experience : en.experience);
  }, [lang]);
  return (
    <section id="experience">
      <h5>{content.subtitle}</h5>
      <h2>{content.title}</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontData.map((item, index) => (
              <article key={index} className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{item}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {backData.map((item, index) => (
              <article key={index} className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{item}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
