import React, { useState } from "react";

function InputArea() {
  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const clickHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="input" id="input">
      <section className={`container`}>
        <form className="form-container">
          <article>
            <input
              type="date"
              min="0"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <span>Purchase Price</span>
          </article>
          <article className="btn-container">
            <button onClick={clickHandler} className="btn">
              Submit
            </button>
          </article>
          <article className="output">{text}</article>
        </form>
        <section className="image-container">
        </section>
      </section>
    </div>
  );
}

export default InputArea;
