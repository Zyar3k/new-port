import { useEffect, useState, useContext, useRef } from "react";
import emailjs from "emailjs-com";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import pl from "../../data/lang/pl.json";
import en from "../../data/lang/en.json";
import { AppContext } from "../../context/AppContext";

import "./Contact.scss";

const Contact = () => {
  const form = useRef();
  const { lang } = useContext(AppContext);
  const [content, setContent] = useState(pl.contact);

  useEffect(() => {
    setContent(lang === "pl" ? pl.contact : en.contact);
  }, [lang]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vm0ne8p",
        "template_zqzz9l2",
        form.current,
        "x6FktDVajrVrIZ9sk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>{content.subtitle}</h5>
      <h2>{content.title}</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>a.zygan@gmail.com</h5>
            <a href="mailto:a.zygan@gmail.com" target="_blank" rel="noreferrer">
              {content.sendMessage}
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>arkadiusz.zygan</h5>
            <a
              href="https://m.me/arkadiusz.zygan"
              target="_blank"
              rel="noreferrer"
            >
              {content.sendMessage}
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder={content.fName} required />
          <input
            type="text"
            name="email"
            placeholder={content.fMail}
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder={content.fMessage}
            required
          ></textarea>
          <button className="btn btn-primary" type="submit">
            {content.sendMessage}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
