import React from "react";

const Pledge = ({ text, title, pledge, left, toggleModal, outofstock }) => {
  return (
    <div className={!outofstock ? "pledge" : "pledge pledge-inactive"}>
      <div className="pledge__top">
        {" "}
        <h2 className="heading-secondary">{title}</h2>
        <p className="pledge__cost">{pledge}</p>
      </div>

      <p className="pledge__text">{text}</p>
      <div className="pledge__bottom">
        <div className="pledge__left">
          <div>{left}</div> <span>left</span>
        </div>
        <button
          className={
            !outofstock
              ? "cta-btn--pledge"
              : "cta-btn--pledge cta-btn--inactive"
          }
          disabled={outofstock ? true : false}
          onClick={toggleModal}
        >
          {left > 0 ? "Select Reward" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
};

export default Pledge;
