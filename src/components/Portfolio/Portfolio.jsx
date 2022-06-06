import { useEffect, useState, useContext } from "react";
import pl from "../../data/lang/pl.json";
import en from "../../data/lang/en.json";
import { AppContext } from "../../context/AppContext";
import { data as projects } from "../../data/projects/data.js";

import "./Portfolio.scss";

const Portfolio = () => {
  const { lang } = useContext(AppContext);
  const [content, setContent] = useState(pl.portfolio);
  // eslint-disable-next-line
  const [data, setData] = useState(projects);

  useEffect(() => {
    setContent(lang === "pl" ? pl.portfolio : en.portfolio);
  }, [lang]);
  return (
    <section id="portfolio">
      <h5>{content.subtitle}</h5>
      <h2>{content.title}</h2>
      <div className="container portfolio__container">
        {data.map(
          (
            { title, image, github, liveDemo, desc: { pl, en }, tags },
            index
          ) => {
            return (
              <article key={index} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <h5 className="text-light">{lang === "pl" ? pl : en}</h5>
                <div className="portfolio__item-tags">
                  {tags &&
                    tags.map((tag, index) => (
                      <span key={index} className="badge">
                        {tag}
                      </span>
                    ))}
                </div>
                <div className="portfolio__item-cta">
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href={liveDemo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Portfolio;
