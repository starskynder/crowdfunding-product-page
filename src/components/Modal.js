import React, { useState } from "react";
import closemodal from "./../images/icon-close-modal.svg";
import PledgeRadio from "./PledgeRadio";

const Modal = ({ toggleModal, pledges, backProject, toggleSuccessModal }) => {
  const [status, setStatus] = useState("");

  const toggleStatus = (currstatus) => {
    setStatus(currstatus);
  };
  return (
    <div className="modal">
      <div className="box modal__box">
        <button className="modal__close" onClick={toggleModal}>
          <img src={closemodal} alt="close" />
        </button>
        <h1 className="heading-primary"> Back this project</h1>
        <p className="modal__text">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>

        {pledges.map((pledgeitem, index) => {
          return (
            <PledgeRadio
              key={index}
              pledgeitem={pledgeitem}
              toggleStatus={toggleStatus}
              status={status}
              backProject={backProject}
              toggleSuccessModal={toggleSuccessModal}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Modal;
