// on the react-icon website you can find the icon you want
import { FaHeart } from "react-icons/fa";
import style from "./StarRating.module.css";
import { useState } from "react";

function StarRating() {
  // now we have to change the rating based on the star is clicked using the useState hook
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  // this is so that the user can hover on the starts and see what the rating would be.

  return (
    <div className="rating">
      {/* this creates an empty array of 5 star elements */}
      {/* {[...Array(5)]} */}
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={ratingValue} className={style.hearts}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            {/* // in order to add
            something to each button we need to add a label to wrap the smtg
            with the input radio */}
            {
              <FaHeart
                size={20}
                color={ratingValue <= (hover || rating) ? "red" : "#e4e5e9"}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(0)}
              />
            }
          </label>
        );
      })}
    </div>
  );
}

export default StarRating;
