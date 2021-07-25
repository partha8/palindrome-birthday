import React from "react";
import calendar from "../img/calendar.jpg";
function Header() {
  return (
    <>
      <section className={`header container`}>
        <article className="intro">
          <h1>Check out if your Birthdate is a Palindrome.</h1>
          <p>
            A palindrome is a word/number which reads the same backward as
            forward
          </p>
          <a href="#input" className="btn">
            Let's Go!
          </a>
        </article>

        <article className="image-container">
          <img src={calendar} alt="calendar" />
        </article>
      </section>
    </>
  );
}

export default Header;
