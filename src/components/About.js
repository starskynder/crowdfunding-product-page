import React from "react";
import Pledge from "./Pledge";

const About = ({ toggleModal, pledges }) => {
  return (
    <section className="about box" id="about">
      <h2 className="heading-secondary">About this project</h2>
      <p className="about__text">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p className="about__text" id="getstarted">
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>
      {pledges.map((pledgeitem, index) => {
        if (pledgeitem.name !== "noreward") {
          return (
            <Pledge
              key={index}
              pledgeitem={pledgeitem}
              toggleModal={toggleModal}
            />
          );
        }
      })}
    </section>
  );
};

export default About;
