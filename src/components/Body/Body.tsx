import StarRating from "../Rating/StarRating";
import heroX from "./images/toBeHeroX.jpg";
import rage from "./images/ROB1.webp";
import titan from "./images/AOT1.jpeg";
import demon from "./images/KNY1.jpg";
import gojo from "./images/JJK1.jpg";
import style from "./Body.module.css";

function Body() {
  return (
    <>
      <div className={style.pictures}>
        <img src={heroX} alt="To Be Hero X" title="To Be Hero X" />
        <div className={style.imgCard}>
          <p>
            To Be Hero <em>X</em>
          </p>
          <StarRating />
        </div>
        <img src={titan} alt="Attack on Titan S1" title="Attack on Titan S1" />
        <div className={style.imgCard}>
          <p>
            Attack on Titan <em>S1</em>
          </p>
          <StarRating />
        </div>

        <img
          src={rage}
          alt="The Rage of Bahamut S1"
          title="The Rage of Bahamut S1"
        />
        <div className={style.imgCard}>
          <p>
            The Rage of Bahamut <em>S1</em>
          </p>
          <StarRating />
        </div>

        <img
          src={demon}
          alt="Kimetsu no Yaiba S1"
          title="Kimetsu no Yaiba S1"
        />
        <div className={style.imgCard}>
          <p>
            Kimetsu no Yaiba <em>S1</em>
          </p>
          <StarRating />
        </div>

        <img src={gojo} alt="Jujutsu Kaisen S1" title="Jujutsu Kaisen S1" />
        <div className={style.imgCard}>
          <p>
            Jujutsu Kaisen <em>S1</em>
          </p>
          <StarRating />
        </div>
      </div>
    </>
  );
}

export default Body;

// what need sto be done:
// i will need to be able to use flex wrap properly so that the image can be displayed in a grid and not in a column
