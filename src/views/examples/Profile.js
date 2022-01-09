/*!

=========================================================
* MERNDAY WEBSOLUTION
=========================================================

*/
import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";

class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        {/* <a href="#pablo" onClick={(e) => e.preventDefault()}> */}
                        <img
                          alt="..."
                          className="rounded-circle"
                          src={require("assets/img/brand/mern_day.jpg")}
                        />
                        {/* </a> */}
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        {/* <Button
                          className="mr-4"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          Connect
                        </Button> */}
                        <Button
                          className="float-right"
                          color="default"
                          href="/test"
                          size="sm"
                        >
                          GoTo Testing
                        </Button>
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                        {/* <div>
                          <span className="heading">22</span>
                          <span className="description">Friends</span> */}
                        {/* </div> */}
                        <div>
                          {/* <span className="heading">10</span> */}
                          <span className="description">In Development mode</span>
                        </div>
                        {/* <div>
                          <span className="heading">89</span>
                          <span className="description">Comments</span>
                        </div> */}
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    {/* <h3>
                      TECH {" "}
                      {/* <span className="font-weight-light">, 27</span 
                    </h3> 
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Tech
                    </div> */}
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Provide Iot Solutions
                    </div>
                    {/* <div>
                      <i className="ni education_hat mr-2" />
                      University of Computer Science
                    </div> */}
                  </div>
                  <div className="mt-1 py-6 border-top text-center ">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <h5 className="text-primary">
                          SHAHARYAR MALLICK (EE-18081)
                        </h5>
                        <h5 className="text-primary">
                          MALICK FURQAN ALI FASIH (EE-18115)
                        </h5>
                        <h5 className="text-primary">
                          MUHAMMAD USAMA (EE-18099)
                        </h5>
                        <h5 className="text-primary">
                          BILAL MATEEN (EE-18032)
                        </h5>
                        <h5 className="text-primary">
                          SYED MOHAMMAD AHMED (EE-18262)
                        </h5>
                        {/* <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Show more
                        </a> */}
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
      </>
    );
  }
}

export default Profile;
