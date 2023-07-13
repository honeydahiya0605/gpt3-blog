import React from "react";
import "./Possibility.css";
import possibilityImage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request early access to get started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illo
          magni voluptate veniam explicabo sed earum dolore esse? Facilis,
          repellat!
        </p>
        <h4>Request early access to get started</h4>
      </div>
    </div>
  );
};

export default Possibility;
