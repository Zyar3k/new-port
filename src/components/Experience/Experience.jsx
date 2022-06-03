import { BsPatchCheckFill } from "react-icons/bs";
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
  return (
    <section id="experience">
      <h5>Doświadczenie w pracy</h5>
      <h2>Moje umiejętności</h2>
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
