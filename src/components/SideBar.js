import React from "react";
import Nav from "react-bootstrap/Nav"
import {Navbar} from "react-bootstrap";

/**
 * Component which represents web application side navigation bar.
 */
const SideBar = () => {
    return (
        <Nav defaultActiveKey="/home" className="flex-md-column">
            <div className="nav-brand-cont"><Navbar.Brand href="/home">Handyheart.</Navbar.Brand></div>
            <Nav className="flex-md-column nav-item-cont">
            <Nav.Item href="/home">About</Nav.Item>
            <Nav.Item>Digital</Nav.Item>
            <Nav.Item>Characters</Nav.Item>
            <Nav.Item>Traditional</Nav.Item>
            <Nav.Item>Personal Work</Nav.Item>
            <Nav.Item>Software</Nav.Item>
            <Nav.Item>Commission Pricing</Nav.Item>
            <Nav.Item>Contact ⟶</Nav.Item>
        </Nav>
        </Nav>
    )
}
export default SideBar;