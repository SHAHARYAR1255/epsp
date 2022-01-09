import React from "react";
import classnames from "classnames";
// import { db } from "../Firebase/firebase";
import { withRouter } from "react-router-dom";

import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

class Contactus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CBR: null,
      IMagA: null,
      IAngA: null,
      IMagB: null,
      IAngB: null,
      IMagC: null,
      IAngC: null,
      VMagA: null,
      VAngA: null,
      VMagB: null,
      VAngB: null,
      VMagC: null,
      VAngC: null,
      message: "",
      sent: false,
      error: "",
      // disable: true,
    };
    this.sendOrder = this.sendOrder.bind(this);
    // this.checkDisable = this.checkDisable.bind(this);
  }

  async sendOrder() {

    const { IMagA,
      IAngA,
      IMagB,
      IAngB,
      IMagC,
      IAngC,
      CBR
    } = this.state;

    if (IMagA === null || IMagB === null || IMagC === null) {
      this.setState({ message: "check the feilds and put correct values" });
      return;
    }
    console.log(this.state);
    console.log("type", typeof (IMagA));
    const Real_Ia = IMagA * Math.cos(IAngA * 0.01745329252);
    const Real_Ib = IMagB * Math.cos(IAngB * 0.01745329252);
    const Real_Ic = IMagC * Math.cos(IAngC * 0.01745329252);
    const Real_aIb = IMagB * Math.cos((IAngB + 120) * 0.01745329252);
    const Real_a2Ib = IMagB * Math.cos((IAngB + 240) * 0.01745329252);
    const Real_aIc = IMagC * Math.cos((IAngC + 120) * 0.01745329252);
    const Real_a2Ic = IMagC * Math.cos((IAngC + 240) * 0.01745329252);

    const Img_Ia = IMagA * Math.sin(IAngA * 0.01745329252);
    const Img_Ib = IMagB * Math.sin(IAngB * 0.01745329252);
    const Img_Ic = IMagC * Math.sin(IAngC * 0.01745329252);
    const Img_aIb = IMagB * Math.sin((IAngB + 120) * 0.01745329252);
    const Img_a2Ib = IMagB * Math.sin((IAngB + 240) * 0.01745329252);
    const Img_aIc = IMagC * Math.sin((IAngC + 120) * 0.01745329252);
    const Img_a2Ic = IMagC * Math.sin((IAngC + 240) * 0.01745329252);

    const Real_Io = (Real_Ia + Real_Ib + Real_Ic) / 3;
    const Real_I1 = (Real_Ia + Real_aIb + Real_a2Ic) / 3;
    const Real_I2 = (Real_Ia + Real_a2Ib + Real_aIc) / 3;

    const Img_Io = (Img_Ia + Img_Ib + Img_Ic) / 3;
    const Img_I1 = (Img_Ia + Img_aIb + Img_a2Ic) / 3;
    const Img_I2 = (Img_Ia + Img_a2Ib + Img_aIc) / 3;

    const magA = Math.sqrt((Real_Ia * Real_Ia) + (Img_Ia * Img_Ia));
    const magB = Math.sqrt((Real_Ib * Real_Ib) + (Img_Ib * Img_Ib));
    const magC = Math.sqrt((Real_Ic * Real_Ic) + (Img_Ic * Img_Ic));


    if ((magA < (1.25 * CBR)) && (magB < (1.25 * CBR)) && (magC < (1.25 * CBR))) {
      this.setState({ message: "No Fault" })
    }
    else {
      if ((Math.abs(Real_Io < 0.1)) && (Math.abs(Img_Io < 0.1))) {
        if ((Real_I2 < 0.1) && (Img_I2 < 0.1)) {
          this.setState({ message: "Triple Line to Line" })

        }
        else {
          this.setState({ message: "Line to Line" })

        }
      }
      else {
        if ((Real_I1 === Real_I2) && (Img_I1 === Img_I2)) {

          this.setState({ message: "Single Line to Ground" })
        }
        else {

          this.setState({ message: "Double Line to Ground" })
        }
      }
    }

  }
  render() {
    return (
      <section className="section section-lg pt-lg-0 section-contact-us">
        <Container>
          <Row className="justify-content-center mt-0">
            <Col lg="8">
              <Card className="bg-gradient-secondary shadow">
                <CardBody className="p-lg-5">
                  <h2 className="mb-1"><b>Fault Detection</b></h2><br />
                  <FormGroup
                    className={classnames({
                      focused: this.state.emailFocused,
                    })}
                  >
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-sound-wave" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        className=" text-success font-weight-bold"
                        placeholder="Circuit Breaker rating in Amps"
                        type="number"
                        value={this.state.CBR}
                        onChange={(e) =>
                          this.setState({ CBR: e.target.value })
                        }
                        onFocus={(e) => this.setState({ emailFocused: true })}
                        onBlur={(e) => this.setState({ emailFocused: false })}
                      />
                    </InputGroup>
                    {this.state.error && (
                      <p className="text-danger font-weight-bold">
                        {this.state.error}
                      </p>
                    )}
                  </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: this.state.emailFocused,
                    })}
                  >
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-sound-wave" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        className=" text-success font-weight-bold"
                        placeholder="Phase A Current Magnitude"
                        type="number"
                        value={this.state.IMagA}
                        onChange={(e) =>
                          this.setState({ IMagA: e.target.value })
                        }
                        onFocus={(e) => this.setState({ emailFocused: true })}
                        onBlur={(e) => this.setState({ emailFocused: false })}
                      />
                    </InputGroup>
                    {this.state.error && (
                      <p className="text-danger font-weight-bold">
                        {this.state.error}
                      </p>
                    )}
                  </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: this.state.emailFocused,
                    })}
                  >
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-sound-wave" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        className=" text-success font-weight-bold"
                        placeholder="Phase A Current: Angle"
                        type="number"
                        value={this.state.IAngA}
                        onChange={(e) =>
                          this.setState({ IAngA: e.target.value })
                        }
                        onFocus={(e) => this.setState({ emailFocused: true })}
                        onBlur={(e) => this.setState({ emailFocused: false })}
                      />
                    </InputGroup>
                    {this.state.error && (
                      <p className="text-danger font-weight-bold">
                        {this.state.error}
                      </p>
                    )}
                  </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: this.state.emailFocused,
                    })}
                  >
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-sound-wave" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        className=" text-success font-weight-bold"
                        placeholder="Phase B Current Magnitude"
                        type="number"
                        value={this.state.IMagB}
                        onChange={(e) =>
                          this.setState({ IMagB: e.target.value })
                        }
                        onFocus={(e) => this.setState({ emailFocused: true })}
                        onBlur={(e) => this.setState({ emailFocused: false })}
                      />
                    </InputGroup>
                    {this.state.error && (
                      <p className="text-danger font-weight-bold">
                        {this.state.error}
                      </p>
                    )}
                  </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: this.state.emailFocused,
                    })}
                  >
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-sound-wave" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        className=" text-success font-weight-bold"
                        placeholder="Phase B Current Angle"
                        type="number"
                        value={this.state.IAngB}
                        onChange={(e) =>
                          this.setState({ IAngB: e.target.value })
                        }
                        onFocus={(e) => this.setState({ emailFocused: true })}
                        onBlur={(e) => this.setState({ emailFocused: false })}
                      />
                    </InputGroup>
                    {this.state.error && (
                      <p className="text-danger font-weight-bold">
                        {this.state.error}
                      </p>
                    )}
                  </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: this.state.emailFocused,
                    })}
                  >
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-sound-wave" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        className=" text-success font-weight-bold"
                        placeholder="Phase C Current Magnitude"
                        type="number"
                        value={this.state.IMagC}
                        onChange={(e) =>
                          this.setState({ IMagC: e.target.value })
                        }
                        onFocus={(e) => this.setState({ emailFocused: true })}
                        onBlur={(e) => this.setState({ emailFocused: false })}
                      />
                    </InputGroup>
                    {this.state.error && (
                      <p className="text-danger font-weight-bold">
                        {this.state.error}
                      </p>
                    )}
                  </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: this.state.emailFocused,
                    })}
                  >
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-sound-wave" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        className=" text-success font-weight-bold"
                        placeholder="Phase C Current Angle"
                        type="number"
                        value={this.state.IAngC}
                        onChange={(e) =>
                          this.setState({ IAngC: e.target.value })
                        }
                        onFocus={(e) => this.setState({ emailFocused: true })}
                        onBlur={(e) => this.setState({ emailFocused: false })}
                      />
                    </InputGroup>
                    {this.state.error && (
                      <p className="text-danger font-weight-bold">
                        {this.state.error}
                      </p>
                    )}
                  </FormGroup>

                  <FormGroup
                    className={classnames({
                      focused: this.state.emailFocused,
                    })}
                  >
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-sound-wave" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        className=" text-success font-weight-bold"
                        placeholder="Phase A Voltage Magnitude"
                        type="number"
                        value={this.state.VMagA}
                        onChange={(e) =>
                          this.setState({ firstCurrentPhasor: e.target.value })
                        }
                        onFocus={(e) => this.setState({ emailFocused: true })}
                        onBlur={(e) => this.setState({ emailFocused: false })}
                      />
                    </InputGroup>
                    {this.state.error && (
                      <p className="text-danger font-weight-bold">
                        {this.state.error}
                      </p>
                    )}
                  </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: this.state.emailFocused,
                    })}
                  >
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-sound-wave" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        className=" text-success font-weight-bold"
                        placeholder="Phase A Voltage: Angle"
                        type="number"
                        value={this.state.VAngA}
                        onChange={(e) =>
                          this.setState({ VAngA: e.target.value })
                        }
                        onFocus={(e) => this.setState({ emailFocused: true })}
                        onBlur={(e) => this.setState({ emailFocused: false })}
                      />
                    </InputGroup>
                    {this.state.error && (
                      <p className="text-danger font-weight-bold">
                        {this.state.error}
                      </p>
                    )}
                  </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: this.state.emailFocused,
                    })}
                  >
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-sound-wave" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        className=" text-success font-weight-bold"
                        placeholder="Phase B Voltage Magnitude"
                        type="number"
                        value={this.state.VMagB}
                        onChange={(e) =>
                          this.setState({ VMagB: e.target.value })
                        }
                        onFocus={(e) => this.setState({ emailFocused: true })}
                        onBlur={(e) => this.setState({ emailFocused: false })}
                      />
                    </InputGroup>
                    {this.state.error && (
                      <p className="text-danger font-weight-bold">
                        {this.state.error}
                      </p>
                    )}
                  </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: this.state.emailFocused,
                    })}
                  >
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-sound-wave" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        className=" text-success font-weight-bold"
                        placeholder="Phase B Voltage Angle"
                        type="number"
                        value={this.state.VAngB}
                        onChange={(e) =>
                          this.setState({ VAngB: e.target.value })
                        }
                        onFocus={(e) => this.setState({ emailFocused: true })}
                        onBlur={(e) => this.setState({ emailFocused: false })}
                      />
                    </InputGroup>
                    {this.state.error && (
                      <p className="text-danger font-weight-bold">
                        {this.state.error}
                      </p>
                    )}
                  </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: this.state.emailFocused,
                    })}
                  >
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-sound-wave" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        className=" text-success font-weight-bold"
                        placeholder="Phase C Voltage Magnitude"
                        type="number"
                        value={this.state.VMagC}
                        onChange={(e) =>
                          this.setState({ VMagC: e.target.value })
                        }
                        onFocus={(e) => this.setState({ emailFocused: true })}
                        onBlur={(e) => this.setState({ emailFocused: false })}
                      />
                    </InputGroup>
                    {this.state.error && (
                      <p className="text-danger font-weight-bold">
                        {this.state.error}
                      </p>
                    )}
                  </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: this.state.emailFocused,
                    })}
                  >
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-sound-wave" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        className=" text-success font-weight-bold"
                        placeholder="Phase C Current Angle"
                        type="number"
                        value={this.state.thirdVoltagePhasor}
                        onChange={(e) =>
                          this.setState({ thirdVoltagePhasor: e.target.value })
                        }
                        onFocus={(e) => this.setState({ emailFocused: true })}
                        onBlur={(e) => this.setState({ emailFocused: false })}
                      />
                    </InputGroup>
                    {this.state.error && (
                      <p className="text-danger font-weight-bold">
                        {this.state.error}
                      </p>
                    )}
                  </FormGroup>

                  <div>
                    {this.state.sent ? (
                      <Button
                        block
                        className="btn-round"
                        color="success"
                        size="lg"
                        type="button"
                        onClick={this.redirectToHome}
                      >
                        Order Sent. Will contact you Soon (Go To Store)
                      </Button>
                    ) : (
                      <Button
                        block
                        className="btn-round"
                        color="default"
                        size="lg"
                        type="button"
                        onClick={this.sendOrder}
                      // disabled={this.state.disable}
                      >
                        Check
                      </Button>
                    )}
                    <br />
                    <FormGroup className="mb-4">
                      <Input
                        className=" text-success font-weight-bold form-control-alternative"
                        cols="80"
                        name="name"
                        placeholder="Type of Fault"
                        rows="4"
                        type="textarea"
                        value={this.state.message}

                      />
                    </FormGroup>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
export default withRouter(Contactus);
