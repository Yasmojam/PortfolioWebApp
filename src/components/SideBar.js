import React, { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import { Navbar } from "react-bootstrap";
import { useSelectedPage } from "./PageContexProvider";
import { BrowserRouter, Link } from "react-router-dom";
import Images from "../assets/Images";
import Row from "react-bootstrap/Row";

/**
 * Component which represents web application side navigation bar.
 */
const SideBar = () => {
  const pageContext = useSelectedPage();
  const selectedPage = useSelectedPage().page;

  const listOfPages = [
    { href: "about", name: "About" },
    { href: "digital", name: "Digital" },
    { href: "traditional", name: "Traditional" },
    { href: "personal", name: "Personal Work" },
    { href: "software", name: "Software" },
    { href: "commission", name: "Commission Pricing" },
  ];

  const initialiseLink = (link) => {
    return (
      <Nav.Link
        onClick={() => {
          clickHandler(link);
        }}
      >
        {link}
      </Nav.Link>
    );
  };

  /**
   * Hook will call when page rendered and never again.
   */
  useEffect(() => {
    console.log("Page selected: " + selectedPage);
  }, [selectedPage]);

  const clickHandler = (page) => {
    pageContext.setPage(page);
  };

  return (
    <Nav defaultActiveKey="/" className="sidebar-options flex-md-column">
      <div className="nav-brand-cont">
        <Navbar.Brand>
          {" "}
          <Link
            className="brand"
            to=""
            onClick={() => {
              clickHandler("");
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "10px",
              }}
            >
              <img
                className="sidebar-icon"
                src={Images.icon}
                alt="sidebar icon"
                width="80px"
                height="80px"
              />
            </div>
            <div>Handyheart.</div>
          </Link>
        </Navbar.Brand>
      </div>
      <Nav className="flex-md-column nav-item-cont">
        {/*Dynamically create pages from list of pages*/}
        {listOfPages.map((page, index) => {
          if (selectedPage === page.href) {
            return (
              <Link
                className="page"
                style={{ color: "black" }}
                to={page.href}
                onClick={() => {
                  clickHandler(page.href);
                }}
              >
                {page.name}
              </Link>
            );
          } else {
            return (
              <Link
                className="page"
                to={page.href}
                onClick={() => {
                  clickHandler(page.href);
                }}
              >
                {page.name}
              </Link>
            );
          }
        })}
      </Nav>
    </Nav>
  );
};
export default SideBar;
