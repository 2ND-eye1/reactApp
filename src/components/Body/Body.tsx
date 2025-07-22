import StarRating from "../Rating/StarRating";
import Review from "../Review/Review";
import heroX from "./images/toBeHeroX.jpg";
import rage from "./images/ROB1.webp";
import titan from "./images/AOT1.jpeg";
import demon from "./images/KNY1.jpg";
import gojo from "./images/JJK1.jpg";
import style from "./Body.module.css";

function Body() {
  function showComment() {
    return <Review name="To Be Hero X" />;
  }

  return (
    <div className="container text-center" id="mainBody">
      <div className="row">
        <div className="col">
          <img
            className={style.images}
            src={heroX}
            title="To Be Hero X"
            onClick={() => showComment()}
          />
          <p>To Be Hero X</p>
          <StarRating />
        </div>
        <div className="col">
          <img
            className={style.images}
            src={rage}
            title="The Rage of Bahamut S1"
          />
          <p>The Rage of Bahamut S1</p>
          <StarRating />
        </div>
        <div className="col">
          <img
            className={style.images}
            src={titan}
            title="Attack on Titan S1"
          />
          <p>Attack on Titan S1</p>
          <StarRating />
        </div>
        <div className="col">
          <img
            className={style.images}
            src={demon}
            title="Kimetsu no Yaiba S1"
          />
          <p>Kimetsu no Yaiba S1</p>
          <StarRating />
        </div>
        <div className="col">
          <img className={style.images} src={gojo} title="Jujutsu Kaisen S1" />
          <p>Jujutsu Kaisen S1</p>
          <StarRating />
        </div>
      </div>
    </div>
  );
}

export default Body;

// what need sto be done:
// i will need to be able to use flex wrap properly so that the image can be displayed in a grid and not in a column
