import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody, Alert, Button } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { checkLogin, clearErrorLogin, clearError } from "../../store/actions";
import { AvForm, AvField } from "availity-reactstrap-validation";
import logodark from "../../assets/images/logo-dark.png";
import { API_URL, setLoggedInUser, getLoggedInUser } from "../../helpers/authUtils";
import { store } from "react-notifications-component";

import "react-notifications-component/dist/theme.css";
import "animate.css";
import axios from "axios";
const instance = axios.create();

class Pageslogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event, values) {
    console.log("hello ", values);
    // return false;
    instance
      .post("http://localhost:8000/createsession", values)
      .then( async (response) => {
        setLoggedInUser(response.data);
        await this.props.history.push("/dashboard");

      })
      .catch((err) => {
        store.addNotification({
          message: "Invalid Email/Password",
          type: "danger",
          container: "top-right",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: {
            duration: 3000,
          },
        });
      });
    // this.props.checkLogin(values.email, values.password, this.props.history);
  }

  async componentDidMount() {
    this.props.clearErrorLogin();
    this.props.clearError();
    
    let user = await getLoggedInUser();
    if(user){
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="account-pages my-5 pt-sm-5">
          <Container>
            <Row className="justify-content-center">
              <Col md="8" lg="6" xl="5">
                <Card className="overflow-hidden">
                  <CardBody className="pt-0">
                    <h3 className="text-center mt-4">
                     
                    </h3>
                    <div className="p-3">
                      <h4 className="text-muted font-size-18 mb-1 text-center">
                        Welcome Back !
                      </h4>
                      <p className="text-muted text-center">
                        Sign in to continue to Antarctica Global.
                      </p>
                      {this.props.user && (
                        <Alert color="success">
                          Your Login is successfull.
                        </Alert>
                      )}

                      {this.props.loginError && (
                        <Alert color="danger">{this.props.loginError}</Alert>
                      )}
                      <AvForm
                        className="form-horizontal mt-4"
                        onValidSubmit={this.handleSubmit}
                      >
                        <label htmlFor="email">email</label>
                        <AvField
                          name="email"
                          placeholder="Enter Email"
                          value={this.state.email}
                          type="text"
                        />

                        <label htmlFor="userpassword">Password</label>
                        <AvField
                          name="password"
                          type="password"
                          value={this.state.password}
                          placeholder="Enter password"
                        />

                        <div className="form-group row mt-4">
                          <Col xs="6">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customControlInline"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customControlInline"
                              >
                                Remember me
                              </label>
                            </div>
                          </Col>
                          <Col xs="6" className="text-right">
                            <Button
                              color="primary"
                              className="w-md waves-effect waves-light"
                              type="submit"
                            >
                              Log In
                            </Button>
                          </Col>
                        </div>
                        <div className="form-group mb-0 row">
                          <Col xs="12" className="mt-4">
                            <Link to="/forget-password" className="text-muted">
                              <i className="mdi mdi-lock"></i> Forgot your
                              password?
                            </Link>
                          </Col>
                        </div>
                      </AvForm>
                    </div>
                  </CardBody>
                </Card>
                <div className="mt-5 text-center">
                  <p>
                    Don't have an account ?{" "}
                    <Link to="/register" className="text-primary">
                      {" "}
                      Signup Now{" "}
                    </Link>
                  </p>
                  <p>
                    © 2018 - 2020 . Crafted with{" "}
                    <i className="mdi mdi-heart text-danger"></i> by Antarctica Global
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  const { user, loginError, loading } = state.Login;
  return { user, loginError, loading };
};

export default withRouter(
  connect(mapStatetoProps, { checkLogin, clearErrorLogin, clearError })(
    Pageslogin
  )
);
