import { useState } from "react";
import { FaStar } from "react-icons/fa";

function Star({ maxRating = 7 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const fullStyle = {
    color: "#f9f500",
  };

  const blankStyle = {
    color: "#202020",
  };
  return (
    <div className="star-rating">
      {Array.from({ length: maxRating }, (_, i) => {
        i += 1;
        return (
          <FaStar
            key={i}
            onClick={() => setRating(rating === i ? 0 : i)}
            onMouseMove={() => setHover(i)}
            onMouseLeave={() => setHover(0)}
            size={70}
            style={
              hover
                ? hover >= i
                  ? fullStyle
                  : blankStyle
                : rating >= i
                ? fullStyle
                : blankStyle
            }
          />
        );
      })}
    </div>
  );
}

export default Star;
