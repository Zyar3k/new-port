import { useEffect, useState, useContext } from "react";
import pl from "../../data/lang/pl.json";
import en from "../../data/lang/en.json";
import { AppContext } from "../../context/AppContext";

import IMG1 from "../../assets/bcd-2.jpg";
import IMG2 from "../../assets/bid.png";
import IMG3 from "../../assets/Numerologia.png";
import IMG4 from "../../assets/czatap_port.png";
import IMG5 from "../../assets/bcd.png";
import IMG6 from "../../assets/do-zrobienia.png";
import IMG7 from "../../assets/Picture_shop.png";
import IMG8 from "../../assets/top-books.jpg";
import IMG9 from "../../assets/m2r.png";

import "./Portfolio.scss";

const data = [
  {
    title: "Betty Craft Designs",
    image: IMG1,
    github: "https://github.com/Zyar3k/online_shop_bcd--2022",
    liveDemo: "https://bettycraftdesigns.netlify.app/",
    desc: "Sklep internetowy stworzony od podstaw. Serwer i klient aplikacji. Możliwość dodawania produktów do koszyka",
    tags: ["React", "Redux", "Axios", "Mongoose", "Sass"],
  },
  {
    title: "before I die",
    image: IMG2,
    github: "https://github.com/Zyar3k/before-i-die_book-list",
    liveDemo: "https://before-i-die.netlify.app/",
    desc: "Strona z listą polecanych książek. Lista składająca się z list rekomendowanych przez 6 (lub więcej) różnych źródeł.  Dodano panel administracyjny. Baza danych wciąż do aktualizacji",
    tags: ["React", "Context", "MUI", "Sass", "Mongoose"],
  },
  {
    title: "Numerologia",
    image: IMG3,
    github: "https://github.com/Zyar3k/numerology_4.0.0",
    liveDemo: "https://numerologia.netlify.app/",
    desc: "Sprawdź swoje szczęśliwe liczby",
    tags: ["JavaScript", "Sass", "HTML"],
  },
  {
    title: "cz@-app",
    image: IMG4,
    github: "https://github.com/Zyar3k/your_chat_app",
    liveDemo: "https://czat-appka.netlify.app/",
    desc: "Aplikacja czatu od podstaw - serwer i klient",
    tags: ["React", "Sass", "Socket.io"],
  },
  {
    title: "Betty Craft Designs v.1",
    image: IMG5,
    github: "https://github.com/Zyar3k/online_shop_bcd",
    liveDemo: "https://online-shop-bcd.herokuapp.com/",
    desc: "Sklep internetowy stworzony od podstaw. Serwer i klient aplikacji. Możliwość dodawania produktów do koszyka",
    tags: ["React", "Redux", "Axios", "Mongoose", "Sass"],
  },
  {
    title: "Do zrobienia!",
    image: IMG6,
    github: "https://github.com/Zyar3k/todo_react_app",
    liveDemo: "https://dozrobienia-app.netlify.app/",
    desc: "Prosta aplikacja ToDo wykonana w React. Sortowanie zadań, ustalanie priorytetów zadań.",
    tags: ["React", "Sass"],
  },
  {
    title: "Picture Shop",
    image: IMG7,
    github: "https://github.com/Zyar3k/picture_shop",
    liveDemo: "https://picture-shop.netlify.app/",
    desc: "Strona z elementami portfolio fotografa. Działający koszyk i walidacja formularza wiadomości",
    tags: ["JavaScript", "Sass", "HTML"],
  },
  {
    title: "Top Books",
    image: IMG8,
    github: "https://github.com/Zyar3k/books_ver.2",
    liveDemo: "https://books2read.netlify.app/",
    desc: "Strona z listą polecanych książek. Lista składająca się z list rekomendowanych przez 5 różnych źródeł. Baza danych wciąż aktualizowana",
    tags: ["React", "Context", "Sass"],
  },
  {
    title: "Must2Read",
    image: IMG9,
    github: "https://github.com/Zyar3k/books-m2r",
    liveDemo: "https://must2read.netlify.app/#/",
    desc: "Strona z listą polecanych książek. Lista składająca się z list rekomendowanych przez 5 różnych źródeł. Baza danych wciąż aktualizowana",
    tags: ["React", "Context", "Sass", "Mongoose"],
  },
];

const Portfolio = () => {
  const { lang } = useContext(AppContext);
  const [content, setContent] = useState(pl.portfolio);

  useEffect(() => {
    setContent(lang === "pl" ? pl.portfolio : en.portfolio);
  }, [lang]);
  return (
    <section id="portfolio">
      <h5>{content.subtitle}</h5>
      <h2>{content.title}</h2>
      <div className="container portfolio__container">
        {data.map(({ title, image, github, liveDemo, desc, tags }, index) => {
          return (
            <article key={index} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <h5 className="text-light">{desc}</h5>
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
        })}
      </div>
    </section>
  );
};

export default Portfolio;
