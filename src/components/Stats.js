import React from "react";

const Stats = () => {
  return (
    <section className="stats box">
      <div className="stats__boxes">
        <div className="stats__box">
          <div className="stats__box-number"> $89,914</div>of $100,000 backed
        </div>
        <div className="stats__box">
          <div className="stats__box-number">5,007 </div>total backers
        </div>
        <div className="stats__box">
          <div className="stats__box-number"> 56 </div> days left
        </div>
      </div>

      <div className="stats__progress">
        <div className="stats__progress-bar"></div>
      </div>
    </section>
  );
};

export default Stats;
