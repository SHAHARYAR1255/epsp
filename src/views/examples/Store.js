import { db } from "../../Firebase/firebase";
import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import CardComponent from "components/CardComponent";

const Store = () => {
  // const state = {};
  const inputRef = useRef("main");
  // useEffect(()=> {
  //   document.documentElement.scrollTop = 0;
  //   document.scrollingElement.scrollTop = 0;
  //   this.refs.main.scrollTop = 0;
  // });
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchStore = async () => {
      try {
        const store = await db.collection("store").get();
        console.log(store);
        const mal = [];
        if (!store.empty) {
          store.forEach((doc) => {
            mal.push(doc.data());
            return;
          });
          setData(mal);
        }
      } catch {}
    };
    fetchStore();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <main ref={inputRef}>
        <div className="position-relative">
          <section className="section section-shaped section-lg pb-250">
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
                  <Col>
                    <h1 className="display-3 text-white text-center">
                      Check out our store{" "}
                    </h1>
                    <p className="lead text-white">
                      We have a list of pre-built modern & responsive web apps ,
                      waiting to get up on the internet for you.
                    </p>
                    {/* <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-code" />
                          </span>
                          <span className="btn-inner--text">Check out our store</span>
                        </Button>
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-cloud-download-95" />
                          </span>
                          <span className="btn-inner--text">
                            Contact us
                          </span>
                        </Button>
                      </div> */}
                  </Col>
                </Row>
              </div>
            </Container>
          </section>
        </div>
        <section className="section section-lg pt-lg-0">
          <Container>
            <h1 className="text-white text-center font-weight-bold">
              Check out our store{" "}
            </h1>
            <Row className="justify-content-center">
              <Col lg="12">
                <Row className="row-grid">
                  {data.map((dat) => {
                    return (
                      <Col key={dat.number} className="mb-3" lg="4">
                        <CardComponent
                          name={dat.name}
                          url={dat.url}
                          image={dat.link}
                        />
                      </Col>
                    );
                  })}
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
};

export default Store;
