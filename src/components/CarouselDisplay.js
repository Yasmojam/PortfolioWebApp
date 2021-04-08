import React, { useCallback, useEffect, useRef, useState } from "react";
import "./carousselDisplay.css";
import { CSSTransition } from "react-transition-group";
import backend from "../api/backend";

/**
 * Component which represents web application front page carousel.
 */
const CarouselDisplay = () => {
  const nodeRef = useRef(null);
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeDot, setActiveDot] = useState(0);
  const [lastSlideIndex, setLastSlideIndex] = useState(0);
  const firstSlideIndex = 0;
  const delay = 250;
  const baseURl = process.env.REACT_APP_API_URL;

  const retrieveData = useCallback(async () => {
    await backend.get("/api/artworks/tags/front-page").then((res) => {
      console.log("fetched response: " + JSON.stringify(res.data.data));
      setSlides(res.data.data);
    });
  }, []);

  useEffect(() => {
    retrieveData();
  }, [retrieveData]);

  useEffect(() => {
    console.log("list of slides: " + JSON.stringify(slides));
    setLastSlideIndex(slides.length - 1);
  }, [slides]);

  const backwardSlide = () => {
    setTimeout(() => {
      if (currentSlide === firstSlideIndex) {
        setCurrentSlide(lastSlideIndex);
      } else {
        setCurrentSlide(currentSlide - 1);
      }
    }, delay);
  };

  const forwardSlide = () => {
    setTimeout(() => {
      if (currentSlide === lastSlideIndex) {
        setCurrentSlide(firstSlideIndex);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }, delay);
  };

  const dotClick = (index) => {
    setActiveDot(index);
    setTimeout(() => {
      setCurrentSlide(index);
    }, delay);
  };

  const loadSlides = slides.map((slide, index) => {
    // Current slide
    if (index === currentSlide) {
      return (
        <div key={index} className={"selectedSlide fade-in"}>
          <img
            className="carousel-image"
            alt={slide.title}
            src={`${baseURl}/img/${slide.medium}/${slide.image}`}
          />
        </div>
      );
    } else {
      return (
        <div key={index} className={"slide"}>
          <img
            className="carousel-image"
            alt={slide.title}
            src={`${baseURl}/img/${slide.medium}/${slide.image}`}
          />
        </div>
      );
    }
  });

  const loadDots = slides.map((slide, index) => {
    if (index === activeDot) {
      return (
        <span
          key={index}
          className="dot active"
          onClick={() => dotClick(index)}
        />
      );
    } else {
      return (
        <span key={index} className="dot" onClick={() => dotClick(index)} />
      );
    }
  });

  useEffect(() => {
    console.log(`current slide: ${currentSlide}`);
    setActiveDot(currentSlide);
  }, [currentSlide]);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={true}
      appear={true}
      enter={true}
      exit={true}
      timeout={300}
      classNames="fade"
      unmountOnExit
    >
      <div className={"entire-slideshow"} ref={nodeRef}>
        {/*Slideshow container*/}
        <div className="slideshow-container" style={styles.slideshowContainer}>
          {slides.length > 0 ? loadSlides : null}
          {/*Next and previous buttons*/}
          {slides.length > 0 ? (
            <div className="prev" onClick={backwardSlide}>
              &#10094;
            </div>
          ) : null}
          {slides.length > 0 ? (
            <div className="next" onClick={forwardSlide}>
              &#10095;
            </div>
          ) : null}
        </div>

        {/*The dots/circles*/}
        <div style={styles.slideCont}>
          <div className={"text"} style={styles.text}>
            {/*{slides ? JSON.stringify(slides) : null}*/}
            {slides.length > 0 ? slides[currentSlide].title : null}
          </div>
          <div className={"dots"} style={styles.dots}>
            {slides.length > 0 ? loadDots : null}
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default CarouselDisplay;

const styles = {
  dots: {
    display: "flex",
    flex: 1,
    padding: 5,
    justifyContent: "center",
    // border: "1px black solid",
  },
  text: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    // border: "1px black solid",
    color: "#a09898",
    fontStyle: "italic",
  },
  slideCont: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    // border: "1px red solid",
  },
  slideshowContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    // border: "1px blue solid",
  },
};
