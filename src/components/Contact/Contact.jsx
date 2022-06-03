import { useRef } from "react";
import emailjs from "emailjs-com";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";

import "./Contact.scss";

const Contact = () => {
  const form = useRef();

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
      <h5>Skontaktuj się ze mną</h5>
      <h2>Kontakt do mnie</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>a.zygan@gmail.com</h5>
            <a href="mailto:a.zygan@gmail.com" target="_blank" rel="noreferrer">
              Wyślij wiadomość
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
              Wyślij wiadomość
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Twoje imię" required />
          <input type="text" name="email" placeholder="Twój Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Twoja wiadomość"
            required
          ></textarea>
          <button className="btn btn-primary" type="submit">
            Wyślij wiadomość
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
