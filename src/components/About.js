import React from "react";
import Pledge from "./Pledge";

const About = ({ toggleModal }) => {
  return (
    <section className="about box">
      <h2 className="heading-secondary">About this project</h2>
      <p className="about__text">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p className="about__text">
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>
      <Pledge
        title="Bamboo Stand"
        text="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
  you’ll be added to a special Backer member list."
        pledge="  Pledge $75 or more"
        left={101}
        toggleModal={toggleModal}
      />
      <Pledge
        title="Black Edition Stand"
        text="  You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
            member list. Shipping is included."
        pledge="Pledge $75 or more"
        left={64}
        toggleModal={toggleModal}
      />

      <Pledge
        title="Mahogany Special Edition"
        text="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
        to our Backer member list. Shipping is included."
        pledge="Pledge $200 or more"
        left={0}
        toggleModal={toggleModal}
      />
    </section>
  );
};

export default About;
