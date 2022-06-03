import { useEffect, useState, useContext } from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/me-about.jpg";
import pl from "../../data/lang/pl.json";
import en from "../../data/lang/en.json";
import { AppContext } from "../../context/AppContext";

import "./About.scss";

const About = () => {
  const { lang } = useContext(AppContext);
  const [content, setContent] = useState(pl.about);

  useEffect(() => {
    setContent(lang === "pl" ? pl.about : en.about);
  }, [lang]);
  return (
    <section id="about">
      <h5>{content.subtitle}</h5>
      <h2>{content.title}</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>{content.experience}</h5>
              <small>{content.smallExperience}</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>{content.projects}</h5>
              <small>{content.smallProjects}</small>
            </article>
          </div>
          <p>{content.content1}</p>
          <p>{content.content2}</p>
          <p>{content.content3}</p>
          <a href="#contact" className="btn btn-primary">
            {content.aboutBtn}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
