import React, { useEffect, useState } from "react";
import calculating from "../img/calculating.gif";

function InputArea() {
  const [date, setDate] = useState("");
  const [text, setText] = useState("");

  const [loading, setLoading] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoadingImage(false);
      setLoading(false);
    }, 2000);
    
    // clearnup function
    return () => clearTimeout(timeOut);
  }, [loading]);

  const clickHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    setLoadingImage(true);
    setText('testing')
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
              mm-dd-yyyy, mm-dd-yy, and yyyy-mm-dd e.g. if your birthdate is 01
              Jan 2000, then app will check for 01012000, 01012000, 010100, and
              20000101
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
          <article className="output-text">
            {loading && <p>Please wait for the results</p>}
          </article>
          {loadingImage && (
            <img
              className="loading-image"
              src={calculating}
              alt="calculating results"
            />
          )}
          {!loading && <h3>{text}</h3>}
        </section>
      </section>
    </div>
  );
}

export default InputArea;
