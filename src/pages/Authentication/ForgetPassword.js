import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Alert,Button } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import logodark from "../../assets/images/logo-dark.png";
import { forgetUser } from '../../store/actions';
import { AvForm, AvField } from 'availity-reactstrap-validation';

class ForgetPassword extends Component {

    constructor(props) {
        super(props);
        this.state = { username: "" }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event, values) {
        this.props.forgetUser(values.username, this.props.history);
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
                                        <Link to="/" className="logo logo-admin"><img src={logodark} height="30" alt="logo"/></Link>
                                        </h3>
                                        <div className="p-3">
                                            <h4 className="text-muted font-size-18 mb-3 text-center">Reset Password</h4>
                                            {this.props.message !== null ?
                                                <Alert color="success">Password Reset successfull</Alert>
                                            :
                                                <Alert color="info">Enter your Email and instructions will be sent to you!</Alert>
                                            }

                                            {this.props.loginError && <Alert color="danger">
                                                {this.props.loginError}</Alert>}

                                            <AvForm className="form-horizontal mt-4" onValidSubmit={this.handleSubmit}>

                                                <div className="form-group">
                                                    <label for="useremail">Email</label>
                                                    <AvField name="username" type="email" id="useremail" value={this.state.username} placeholder="Enter Email" validate={{email: true, required: true}} />
                                                </div>

                                                <div className="form-group row">
                                                    <div className="col-12 text-right">
                                                    {this.props.loading ? <Button color="primary" classNameName="w-md waves-effect waves-light">Loading ...</Button> : 
                                                        <Button color="primary" classNameName="w-md waves-effect waves-light" type="submit">Reset Password</Button> }
                                                    </div>
                                                </div>
                                            </AvForm>
                                        </div>
                                    </CardBody>
                                </Card>
                                <div className="mt-5 text-center">
                                    <p>Remember It ? <Link to="/login" className="text-primary"> Sign In Here </Link> </p>
                                    <p>© 2018 - 2020 Lexa. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    const { message, loginError, loading } = state.Forget;
    return { message, loginError, loading };
}

export default withRouter(connect(mapStatetoProps, { forgetUser })(ForgetPassword));







