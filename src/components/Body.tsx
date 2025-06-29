import React from "react";
import heroX from "./images/toBeHeroX.jpg";
import rage from "./images/ROB1.jpeg";
import titan from "./images/AOT1.jpeg";
import demon from "./images/KNY1.jpeg";
import gojo from "./images/JJK1.jpeg";

function Body() {
  return (
    <>
      <div className="img-fluid img-thumbnail">
        <img src={gojo} alt="Jujutsu Kaisen S1" />
        <img src={demon} alt="Kimetsu no Yaiba S1" />
        <img src={rage} alt="The Rage of Bahamut S1" />
        <img src={titan} alt="Attack on Titan S1" />
        <img src={heroX} alt="To Be Hero X" />
      </div>
    </>
  );
}

export default Body;
