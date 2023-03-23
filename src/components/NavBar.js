import React, {useState, useEffect, Component} from "react";
import { Navbar } from "react-bootstrap";
import { Menu, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="App">
      <Menu borderless fluid inverted size="huge" style={{ textAlign: 'center', justifyContent: "flex-start" }}>
        <Container>
          {/* Home Link */}
          <Menu.Item as={Link} to="/" header style={{ color: "yellow" }}>
            Home
          </Menu.Item>
          {/* Progress Link */}
          <Menu.Item as={Link} to="/progress" header style={{ color: "yellow" }}>
            Progress
          </Menu.Item>
          {/* Scoreboard Link */}
          <Menu.Item as={Link} to="/scoreboard" header style={{ color: "yellow" }}>
            Scoreboard
          </Menu.Item>
          {/* Login Link */}
          <Menu.Item as={Link} to="/login" header style={{ color: "yellow" }}>
            Login
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
}

export default  NavBar;