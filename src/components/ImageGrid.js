import React, { useCallback, useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

const ImageGrid = ({ type }) => {
  const nodeRef = useRef(null);
  const baseURl = process.env.REACT_APP_API_URL;
  const [artworks, setArtworks] = useState([]);

  const retrieveData = useCallback(async () => {
    const response = await fetch(
      `${baseURl}/api/artworks/medium/${type}`
      // "http://localhost:3000/api/artworks"
    );
    const json = await response.json();
    const sortedArtworks = json.data.sort((a, b) => {
      // Ascending date - newest to oldest
      return new Date(b.date) - new Date(a.date);
    });
    // setArtworks(json.data);
    setArtworks(sortedArtworks);
  }, [baseURl, type]);

  useEffect(() => {
    retrieveData();
  }, [retrieveData]);

  const extractYearFromISO = (isoDate) => {
    const date = new Date(isoDate);
    return date.getFullYear();
  };

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
      <div
        className="gallery"
        ref={nodeRef}
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {artworks &&
          artworks.map((artwork, index) => (
            <div className="artwork-cont" key={index}>
              <div className="artwork-info-cont">
                <img
                  className="artwork"
                  alt={artwork.title}
                  src={`${process.env.REACT_APP_API_URL}/img/${artwork.medium}/${artwork.image}`}
                  // src={`http://localhost:3000/img/${props.type}/${artwork.image}`}
                />
                <div
                  className={"title-year-cont"}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  }}
                >
                  <div
                    className="artwork-name"
                    style={{ color: "grey", paddingLeft: 5, paddingTop: 5 }}
                  >
                    {artwork.title}
                  </div>
                  <div
                    className="year"
                    style={{ color: "grey", paddingLeft: 5, paddingTop: 5 }}
                  >
                    {extractYearFromISO(artwork.date)}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </CSSTransition>
  );
};

export default ImageGrid;
