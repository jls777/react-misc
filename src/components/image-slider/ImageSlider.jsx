import "./styles.css";
import data from "./data";
import { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <div className="image-slider-container">
      <div className="slider-container">
        <img className="img-slide" src={data.at(currentSlide).image} alt="" />
        <div className="pexel-photo-name-container">
          <p>
            <a className="pexel-link" href="https://www.pexels.com">
              Photos provided by Pexels
            </a>
          </p>
          <p>
            This{" "}
            <a className="img-link" href={data.at(currentSlide).image}>
              photo
            </a>{" "}
            was taken by{" "}
            <a className="name-link" href="">
              {data.at(currentSlide).name}
            </a>
          </p>
        </div>
        <div className="slide-nav">
          <FaCircleChevronLeft
            className="dot-arrow"
            onClick={() =>
              setCurrentSlide((slide) => (slide <= 0 ? slide : slide - 1))
            }
          />
          <ul className="dot-slider">
            {Array.from({ length: data.length }, (_, i) => {
              return (
                <li onClick={() => setCurrentSlide(i)} key={i}>
                  <FaCircle
                    className={`${i === currentSlide && "dot-selected"}`}
                  />
                </li>
              );
            })}
          </ul>
          <FaCircleChevronRight
            className="dot-arrow"
            onClick={() =>
              setCurrentSlide((slide) =>
                slide >= data.length - 1 ? slide : slide + 1
              )
            }
          />
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
