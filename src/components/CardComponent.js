import React from "react";

import { Badge, Button, Card, CardBody, CardImg, CardTitle } from "reactstrap";

function CardComponent({ name, url, image }) {
  return (
    <Card className="bold card-lift--hover shadow border-0">
      <CardBody className="py-5">
        <CardTitle className="text-primary text-uppercase" tag="h5">
          <strong>{name}</strong>
        </CardTitle>
        {/* <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
          <i className="ni ni-check-bold" />
        </div>
        <h6 className="text-primary text-uppercase">Creative</h6> */}
        {/* <p className="description mt-3">
          Argon is a great free UI package based on Bootstrap 4 that includes
          the most important components and features.
        </p> */}
        {/* <div>
          <Badge color="primary" pill className="mr-1">
            design
          </Badge>
          <Badge color="primary" pill className="mr-1">
            system
          </Badge>
          <Badge color="primary" pill className="mr-1">
            creative
          </Badge>
        </div> */}
        <CardImg
          className="mt-3"
          top
          width="100%"
          src={image}
          alt="Card image cap"
        />
        <div>
          <Badge color="success" pill className="mr-1">
            ready
          </Badge>
          <Badge color="success" pill className="mr-1">
            customizable
          </Badge>
        </div>
        <Button className="mt-4" color="primary" href={url} target="_blank">
          Preview
        </Button>
        <Button className="mt-4" color="success" href={`/login-page/${name}`}>
          Order
        </Button>
      </CardBody>
    </Card>
  );
}

export default CardComponent;
