import React from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import CarouselDisplay from "./components/CarouselDisplay";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  PageContextProvider,
  useSelectedPage,
} from "./components/PageContexProvider";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./components/About";
import ImageGrid from "./components/ImageGrid";

const App = () => {
  return (
    <PageContextProvider>
      <BrowserRouter>
        <div className="App">
          <Container fluid>
            <Row>
              <Col md={{ span: 3 }} className={"sidebar-col"}>
                <SideBar />
              </Col>
              <Col md={{ span: 9 }} className={"content-col"}>
                <Route path="/" exact component={CarouselDisplay} />
                <Route path="/about" component={About} />
                <Route
                  path="/digital"
                  component={() => <ImageGrid type="digital" />}
                />
                <Route
                  path="/traditional"
                  component={() => <ImageGrid type="digital" />}
                />
                <Route
                  path="/personal"
                  component={() => <ImageGrid type="personal" />}
                />
                <Route
                  path="/commission"
                  component={() => <ImageGrid type="commission" />}
                />
                {/*<div style={{justifyContent:"center", color: "#a09898", fontSize:"x-small", position: "relative",  clear: "both"}}>Handyheart © 2021</div>*/}
              </Col>
            </Row>
          </Container>
        </div>
      </BrowserRouter>
    </PageContextProvider>
  );
};

export default App;
