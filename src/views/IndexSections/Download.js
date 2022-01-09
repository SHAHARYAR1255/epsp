
/*eslint-disable*/
import React from "react" 

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

class Download extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg">
          <Container>
            <Row className="row-grid justify-content-center">
              <Col className="text-center" lg="8">
                <h2 className="display-3">
                  {/* Do you love this awesome{" "} */}
                  <span className="text-success">Our main Ingredients </span>
                </h2>
                {/* <p className="lead">
                  Cause if you do, it can be yours for FREE. Hit the button
                  below to navigate to Creative Tim where you can find the
                  Design System in React. Start a new project or give an old
                  Bootstrap project a new look!
                </p> */}
                {/* <div className="btn-wrapper">
                  <Button
                    className="mb-3 mb-sm-0"
                    color="primary"
                    href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                  >
                    Download React
                  </Button>
                </div> */}
                <div className="text-center">
                  {/* <h4 className="display-4 mb-5 mt-5">
                    Available on these technologies
                  </h4> */}
                  <Row className="justify-content-center">
                    <Col lg="2" xs="4">
                      <a
                        href="https://bootstrap.com"
                        id="tooltip255035741"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://img.icons8.com/color/144/000000/bootstrap.png"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip255035741">
                        Bootstrap 4 - Most popular front-end component library
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://html.com"
                        id="tooltip265846671"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://img.icons8.com/color/144/000000/html-5.png"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip265846671">
                        HTML - Hyper Text MarkUp Language
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://www.css.com"
                        id="tooltip233150499"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://img.icons8.com/color/144/000000/css3.png"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip233150499">
                        CSS - Cadcading Style Sheet
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        id="tooltip308866163"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://img.icons8.com/color/144/000000/react-native.png"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip308866163">
                        React - A JavaScript library for building user
                        interfaces
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://www.firebase.com"
                        id="tooltip76119384"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://img.icons8.com/color/144/000000/firebase.png"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip76119384">
                        Firebase- Digital design toolkit
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://www.arduino.cc/en/software"
                        id="tooltip646643508"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://img.icons8.com/fluency/144/000000/arduino.png"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip646643508">
                        Node js- Software for digital images manipulation
                      </UncontrolledTooltip>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Download;
