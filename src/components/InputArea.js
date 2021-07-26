import React, { useEffect, useState } from "react";
import calculating from "../img/calculating.gif";
import { getPalindrome, findNextPalindrome } from "./functions";

function InputArea() {
  const [date, setDate] = useState("");
  const [text, setText] = useState("");

  const [loading, setLoading] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoadingImage(false);
      setLoading(false);
    }, 2500);

    // clearnup function
    return () => clearTimeout(timeOut);
  }, [loading]);

  const clickHandler = (e) => {
    e.preventDefault();
    console.log(typeof date);
    if (date === "") {
      setText("Enter a valid date");
      return;
    }
    setLoading(true);
    setLoadingImage(true);
    const [yyyy, mm, dd] = date.split("-");
    const checkPalindrome = getPalindrome(dd, mm, yyyy);
    if (checkPalindrome !== "") {
      setText("WUUHUU! Your birthdate is a palindrome!");
    } else {
      const [nextPalindrome, missedDays] = findNextPalindrome(dd, mm, yyyy);
      setText(
        `Your birthdate is not a palindrome. Nearest palindrome date is ${nextPalindrome}, you missed it by ${missedDays}`
      );
    }
  };
  return (
    <div id="input">
      <section className={`input-area-container `}>
        <form className="form-container">
          <article>
            <h2>
              Enter your birthdate and we will tell you if your birthdate is a
              palindrome
            </h2>
            <p>
              This app checks your birthdate in 4 formats dd-mm-yyyy,
              mm-dd-yyyy, mm-dd-yy, and yyyy-mm-dd
              <br />
              e.g. if your birthdate is 08-10-1999, then app will check for
              08101999, 10081999, 100899, and 19991008
            </p>
          </article>
          <article>
            <input
              type="date"
              min="0"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </article>
          <article className="btn-container">
            <button onClick={clickHandler} className="btn submit">
              Submit
            </button>
          </article>
        </form>
        <section className="output">
          <article>{loading && <p>Please wait for the results</p>}</article>
          {loadingImage && (
            <img
              className="loading-image"
              src={calculating}
              alt="calculating results"
            />
          )}
          <article className="output-text">
            {!loading && <h3 className="output-text">{text}</h3>}
          </article>
        </section>
      </section>
    </div>
  );
}

export default InputArea;
