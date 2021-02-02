import React, { useEffect, useState } from "react";
import Images from "../assets/Images";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ImageGrid = (props) => {
  const images = [
    Images.dinner,
    Images.dinner,
    Images.dinner,
    Images.dinner,
    Images.dinner,
    Images.dinner,
    Images.dinner,
    Images.dinner,
    Images.dinner,
    Images.dinner,
    Images.dinner,
  ];

  const [artworks, setArtworks] = useState();

  useEffect(() => {
    const retrieveData = async () => {
      const response = await fetch(
        // `${process.env.REACT_APP_API_URL}/api/artworks`
        "http://localhost:3000/api/artworks"
      );
      const json = await response.json();
      setArtworks(json.data);
    };
    retrieveData();
  }, []);

  return (
    <div className="gallery" style={{ margin: "auto" }}>
      <Row style={{ margin: "0 auto", justifyContent: "center" }} gutter={40}>
        {artworks &&
          artworks.map((artwork) => (
            <Col
              className="artwork-cont"
              xs={{ span: 12 }}
              sm={{ span: 12 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
              xl={{ span: 3 }}
            >
              <div className="artwork-info-cont">
                <img
                  className="artwork"
                  alt={artwork.title}
                  // src={`${process.env.REACT_APP_API_URL}/img/${artwork.image}`}
                  src={`http://localhost:3000/img/${props.type}/${artwork.image}`}
                  width="100%"
                />
                <div className="year">{artwork.year}</div>
              </div>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default ImageGrid;
