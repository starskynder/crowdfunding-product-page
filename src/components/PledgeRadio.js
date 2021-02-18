import React, { useState } from "react";

const PledgeRadio = ({
  pledgeitem,
  toggleStatus,
  status,
  backProject,
  toggleSuccessModal,
}) => {
  const {
    name,
    text,
    outofstock,
    title,
    pledge,
    left,
    noreward,
    cost,
    stand,
  } = pledgeitem;
  const [value, setValue] = useState(cost);
  const handlePledgeValue = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  const handleSubmit = () => {
    toggleSuccessModal();
    backProject(name, value);
    setValue(cost);
  };

  return (
    <div
      className={
        !outofstock && status === pledge
          ? "pledge pledgeradio pledgeradio-checked"
          : !outofstock
          ? "pledge pledgeradio"
          : "pledge pledgeradio pledge-inactive"
      }
    >
      <div className="pledgeradio__top">
        <label className="pledgeradio__radio-container">
          <input
            type="radio"
            onChange={(e) => toggleStatus(pledge)}
            disabled={outofstock}
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
              value={value}
              className="pledgeradio__input"
              placeholder={cost}
              onChange={handlePledgeValue}
            />
            <button
              className="cta-btn--pledge"
              onClick={(e) => handleSubmit(e)}
            >
              Continue
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PledgeRadio;
