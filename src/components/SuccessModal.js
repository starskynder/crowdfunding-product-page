import React from "react";
import checklogo from "./../images/icon-check.svg";

const SuccessModal = ({ toggleSuccessModal }) => {
  return (
    <div className="modal success-modal">
      <div className="box modal__box success-modal__box">
        <div className="success-modal__img">
          <img src={checklogo} alt="check logo" />
        </div>
        <h2 className="heading-secondary">Thanks for your support!</h2>
        <p className="modal__text">
          {" "}
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <button className="cta-btn" onClick={toggleSuccessModal}>
          Got it!
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
