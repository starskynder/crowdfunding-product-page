import React, { useState } from "react";

const PledgeRadio = ({
  text,
  title,
  pledge,
  left,
  toggleModal,
  noreward,
  cost,
  stand,
  toggleStatus,
  status,
}) => {
  const [pledgeValue, setPledgeValue] = useState(0);

  return (
    <div
      className={
        left > 0 && status === pledge
          ? "pledge pledgeradio pledgeradio-checked"
          : left > 0
          ? "pledge pledgeradio"
          : "pledge pledgeradio pledge-inactive"
      }
    >
      <div className="pledgeradio__top">
        <label className="pledgeradio__radio-container">
          <input
            type="radio"
            onChange={(e) => toggleStatus(pledge)}
            disabled={left <= 0}
            name="pledge"
            value={stand}
            checked={status === pledge}
          />
          <span className="pledgeradio__checkmark"></span>
        </label>
        <div className="pledge__pledge pledgeradio__title">
          <h2 className="heading-secondary"> {title}</h2>
          <p className="pledge__cost">
            {pledge !== "no reward" ? pledge : null}
          </p>
        </div>
      </div>

      <p className="pledge__text pledgeradio__text">{text}</p>

      {noreward ? null : (
        <div className="pledge__left pledgeradio__left">
          {" "}
          <div>{left}</div> <span>left</span>
        </div>
      )}

      {status === pledge ? (
        <div className="pledgeradio__payment">
          <span>Enter your pledge</span>
          <div className="pledgeradio__confirm">
            <input
              type="number"
              min={cost}
              className="pledgeradio__input"
              placeholder={cost}
            />
            <button className="cta-btn--pledge">Continue</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PledgeRadio;
