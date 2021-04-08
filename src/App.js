import React from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import CarouselDisplay from "./components/CarouselDisplay";
import { PageContextProvider } from "./components/PageContexProvider";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./components/About";
import ImageGrid from "./components/ImageGrid";

const App = () => {
  return (
    <PageContextProvider>
      <BrowserRouter>
        <div
          className="App"
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            height: "100%",
          }}
        >
          <div
            className={"site-cont"}
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
            }}
          >
            <div className={"sideContentCont"}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flex: 2,
                  // border: "1px red solid",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className={"sidebar-col"}
              >
                <SideBar />
              </div>
              <div className={"content-col"}>
                <Route path="/" exact component={CarouselDisplay} />
                <Route path="/about" component={About} />
                <Route
                  path="/digital"
                  component={() => <ImageGrid type="digital" />}
                />
                <Route
                  path="/traditional"
                  component={() => <ImageGrid type="traditional" />}
                />
                <Route
                  path="/personal"
                  component={() => <ImageGrid type="personal" />}
                />
                <Route
                  path="/commission"
                  component={() => <ImageGrid type="commission" />}
                />
              </div>
            </div>
            <div
              className={"footer"}
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignContent: "center",
                // border: "1px black solid",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  color: "#a09898",
                  fontSize: "x-small",
                  // border: "1px blue solid",
                }}
              >
                Handyheart © 2021
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </PageContextProvider>
  );
};

export default App;
