import React from 'react';
import Images from "../assets/Images";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ImageGrid = (props) => {
    const images = [Images.dinner, Images.dinner, Images.dinner, Images.dinner, Images.dinner, Images.dinner, Images.dinner, Images.dinner, Images.dinner, Images.dinner,  Images.dinner]

    return (
        <div className="gallery" style={{margin:"auto"}}>
            <Row style={{margin:"0 auto", justifyContent:"center"}} gutter={40} >
                {(images).map(image =>
                    <Col
                        xs={{span: 12}} sm={{span: 12}} md={{span: 8}}
                        lg={{span:8}} xl={{span: 4}}
                    ><img className="artwork" src={image} width="100%"/></Col>
                )}
            </Row>
        </div>
    )
}

export default ImageGrid;