import React, { useState } from "react";
import closemodal from "./../images/icon-close-modal.svg";
import PledgeRadio from "./PledgeRadio";

const Modal = ({ toggleModal }) => {
  const [status, setStatus] = useState("");

  const toggleStatus = (currstatus) => {
    console.log(currstatus);
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
        <PledgeRadio
          text=" Choose to support us without a reward if you simply believe in our project. As a backer, 
  you will be signed up to receive product updates via email."
          noreward={true}
          title="Pledge with no reward"
          pledge="no reward"
          left="1"
          stand="noreward"
          status={status}
          toggleStatus={toggleStatus}
        />
        <PledgeRadio
          title="Bamboo Stand"
          text="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
  you’ll be added to a special Backer member list."
          pledge="Pledge $25 or more"
          cost="25"
          left={101}
          noreward={false}
          stand="bamboo stand"
          status={status}
          toggleStatus={toggleStatus}
        />
        <PledgeRadio
          title="Black Edition Stand"
          text="  You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
            member list. Shipping is included."
          pledge="Pledge $75 or more"
          cost="75"
          left={64}
          noreward={false}
          stand="black edition stand"
          status={status}
          toggleStatus={toggleStatus}
        />
        <PledgeRadio
          title="Mahogany Special Edition"
          text="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
        to our Backer member list. Shipping is included."
          pledge="Pledge $200 or more"
          cost="200"
          left={0}
          noreward={true}
          stand="mahogany special edition"
        />
      </div>
    </div>
  );
};

export default Modal;
