import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/me-about.jpg";

import "./About.scss";

const About = () => {
  return (
    <section id="about">
      <h5>About</h5>
      <h2>About</h2>
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
              <h5>Doświadczenie</h5>
              <small>3+ lata Projekty niekomercyjne</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projekty</h5>
              <small>15+ Ukończone</small>
            </article>
          </div>
          <p>
            Nazywam się Arkadiusz Zygan. W 2019 roku postanowiłem
            usystematyzować wiedzę z zakresu kodowania i programowania. Na
            przestrzeni lat interesowałem się nowymi technologiami, jednak nie
            uzyskałem pełnej wiedzy teoretycznej, jak i nie zrealizowałem
            praktycznych projektów. Postanowiłem to zmienić. Od tamtego czasu
            systematycznie uczę się programowania po stronie front-endu z
            elementami back-endu.
          </p>
          <p>
            Ukończyłem intensywny 9-miesięczny kurs programowania pod opieką
            indywidualnego mentora – Bootcamp Web Developer Plus w Kodilla.
            Uczestniczyłem również w szkoleniach rozszerzających moje
            umiejętności na platformie Udemy z zakresu javascript, react i data
            science. Na bieżąco obserwuje zmiany w trendach, posiłkując się
            wieloma kanałami tematycznymi na youtube (m.in. Dev Ed - bardzo duża
            wiedza i zaraźliwy optymizm autora, Web Dev Simplified - 'kopalnia'
            wiedzy, DesignCourse - fachowo i konkretnie na temat designu).
          </p>
          <p>
            "Praktyka czyni mistrza" - każdy z nas to słyszał chociaż raz w
            swoim życiu. Zgadzam się, ale uważam, że trzeba dodać "świadome
            ćwiczenie" - termin ten wykuł Anders Erics­son. Uważa on również, że
            aby osiągnąć wysoki poziom w dowolnej dziedzinie potrzeba nawet
            10000 godzin. Zdaję sobię sprawę, że wciąż dużo pracy przede mną.
            Ćwiczę i rozwijam swoje umiejętności w javascript, react, html5 oraz
            css/sass. Wiem, że jestem na początku tej drogi, ale jestem
            zmotywowany, aby stawiać kolejne kroki.
          </p>
          <a href="#contact" className="btn btn-primary">
            Porozmawiajmy
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
