import React from "react";

const Stats = ({ stats }) => {
  const { backed, backers, daysleft, progress } = stats;

  return (
    <section className="stats box">
      <div className="stats__boxes">
        <div className="stats__box">
          <div className="stats__box-number">
            ${backed.toLocaleString("en-US")}
          </div>
          of $100,000 backed
        </div>
        <div className="stats__box">
          <div className="stats__box-number">{backers} </div>total backers
        </div>
        <div className="stats__box">
          <div className="stats__box-number"> {daysleft} </div> days left
        </div>
      </div>

      <div className="stats__progress">
        <div
          className="stats__progress-bar"
          data-progress={`${progress}%`}
        ></div>
      </div>
    </section>
  );
};

export default Stats;
