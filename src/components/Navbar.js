import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Nave() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Movies4Life</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link>
          <Link to="/Home"> Home</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/Films">Movies</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/AddMovie">Add Movies</Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Nave;
