import Star from "./Star";
import "./styles.css";

function StarContainer() {
  return (
    <div className="star-container">
      <Star maxRating={7} />
    </div>
  );
}

export default StarContainer;
