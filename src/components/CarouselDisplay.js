import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Images from "../assets/Images";

/**
 * Component which represents web application front page carousel.
 */
const CarouselDisplay = () => {
  return (
    <Carousel className="carousel-image">
      <Carousel.Item>
        <img className="carousel-image" alt="dinner" src={Images.dinner} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-image" alt="plant" src={Images.plant} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-image" alt="grill" src={Images.grill} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-image" alt="gif" src={Images.gif} />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselDisplay;
