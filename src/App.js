import React from 'react';
import './App.css';
import SideBar from './components/SideBar';
import CarouselDisplay from "./components/CarouselDisplay";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const App = () => {
  return (
    <div className="App">
        <Container fluid>
            <Row>
       <Col md={{span:4}} className={"sidebar-col"}><SideBar/></Col>
        <Col md={{span:8}} className={"carousel-col"}><CarouselDisplay/></Col>
            </Row>
        </Container>
    </div>
  )
}

export default App;
