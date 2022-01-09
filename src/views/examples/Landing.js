import React from "react";
// import { db } from "../../Firebase/firebase";

// nodejs library that concatenates classes
// import classnames from "classnames";

// reactstrap components
import { Badge, Button, Card, Container, Row, Col } from "reactstrap";
// import { NavLink } from "react-router-dom";

// core components
// import DemoNavbar from "components/Navbars/DemoNavbar.js";
// import SimpleFooter from "components/Footers/SimpleFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    // this.fetchStore = this.fetchStore.bind(this);
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
    // this.fetchStore();
  }
  // async fetchStore() {
  //   try {
  //     const store = await db.collection("landing").get();
  //     const mal = [];
  //     if (!store.empty) {
  //       store.forEach((doc) => {
  //         mal.push(doc.data());
  //         return;
  //       });
  //       this.setState({ items: mal });
  //     }
  //   } catch { }
  // }
  render() {
    return (
      <>
        {/* <DemoNavbar /> */}
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="12">
                      <h1 className="display-3 text-white">
                        Connect with Us<span>and grow with lightspeed</span>
                      </h1>
                      <h3 className="lead text-white">
                        We build IoT based relays with modern touch of technologies.
                      </h3>
                      <div className="btn-wrapper">
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
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
            {/* 1st Hero Variation */}
          </div>


          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/theme/promo-1.png")}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3>What we offer?</h3>
                    {/* <p>
                      Our Team customized and create modern responsive websites
                      for you and deliver in less time.
                    </p> */}
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Pre Built solutions that can be customized for you
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-html5" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">Build from the scratch</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">Upgrade previous one</h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          {/* <section className="section pb-0 bg-gradient-warning">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/ill/ill-2.svg")}
                    />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-building text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">
                        Modern Web Design
                      </h4>
                      <p className="text-white">
                        Modern Web Design in this modern world has become a
                        necessity and also a great way to grow with blazing
                        speed.
                      </p>
                    </div>
                  </div>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-satisfied" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                            Mobile Friendly
                          </h5>
                          <p>
                            Responsive design for all type of devices is not an
                            option, it is mandatory for us.
                          </p>
                          <a className="text-success" href="/store">
                            Check store
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="ni ni-active-40" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-warning">
                            Full Ownership to YOU
                          </h5>
                          <p>
                            We transfer all rights and ownership status after
                            your website is built. All of it belongs to YOU ony
                          </p>
                          <a className="text-warning" href="/about">
                            Learn more
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
            {/* SVG separator
          <div className="separator separator-bottom separator-skew zindex-100">
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
        */}
        <section className="section section-lg pt-0">
          <Container>
            <Card className="bg-gradient-warning shadow-lg border-0">
              <div className="p-5">
                <Row className="align-items-center">
                  <Col lg="8">
                    <h3 className="text-white">
                      We make things building easier for you.
                    </h3>
                    {/* <p className="lead text-white mt-3">
                        I will be the leader of a company that ends up being
                        worth billions of dollars, because I got the answers. I
                        understand culture.
                      </p> */}
                  </Col>
                  <Col className="ml-lg-auto" lg="3">
                    <Button
                      block
                      className="btn-white"
                      color="default"
                      href="/test"
                      size="lg"
                    >
                      About Us
                    </Button>
                  </Col>
                </Row>
              </div>
            </Card>
          </Container>
        </section>

        <Download />
      </main>
        {/* <SimpleFooter /> */ }
      </>
    );
  }
}

export default Landing;
