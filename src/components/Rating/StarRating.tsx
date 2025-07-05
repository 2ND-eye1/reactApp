// on the react-icon website you can find the icon you want
import { FaHeart } from "react-icons/fa";
import style from "./StarRating.module.css";
import { useState } from "react";

function StarRating() {
  // now we have to change the rating based on the star is clicked using the useState hook
  const [rating, setRating] = useState(0);

  return (
    <>
      <div className="rating">
        {/* this creates an empty array of 5 star elements */}
        {/* {[...Array(5)]} */}
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;

          return (
            <>
              <label className={style.hearts}>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                />
                {/* // in order to add
            something to each button we need to add a label to wrap the smtg
            with the input radio */}
                <FaHeart
                  size={20}
                  color={ratingValue <= rating ? "red" : "gray"}
                />
              </label>
            </>
          );
        })}
      </div>
    </>
  );
}

export default StarRating;
