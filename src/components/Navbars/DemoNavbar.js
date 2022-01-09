
import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  // DropdownMenu,
  // DropdownItem,
  // DropdownToggle,
  // UncontrolledDropdown,
  // Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  // UncontrolledTooltip,
} from "reactstrap";

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false,
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out",
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: "",
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand href="/">mern_day</NavbarBrand>
              <button
                aria-controls="navbar-primary"
                aria-expanded={false}
                aria-label="Toggle navigation"
                className="navbar-toggler"
                data-target="#navbar-primary"
                data-toggle="collapse"
                id="navbar-primary"
                type="button"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbar-primary">
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        {/* <img
                          alt="..."
                          src={require("assets/img/brand/blue.png")}
                        /> */}
                        <h4>mern_day</h4>
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button
                        aria-controls="navbar-primary"
                        aria-expanded={false}
                        aria-label="Toggle navigation"
                        className="navbar-toggler"
                        data-target="#navbar-primary"
                        data-toggle="collapse"
                        id="navbar-primary"
                        type="button"
                      >
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="ml-lg-auto" navbar>
                  {/* <NavItem>
                    <NavLink href="/store">
                      Store <span className="sr-only">(current)</span>
                    </NavLink>
                  </NavItem> */}
                  <NavItem>
                    <NavLink href="/about">About</NavLink>
                  </NavItem>
                  <NavItem className="d-none d-lg-block ml-lg-4">
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      href="/test"
                    >
                      <span className="btn-inner--icon">
                        <i className="ni ni-active-40 mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1">
                        Test
                      </span>
                    </Button>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
