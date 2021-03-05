import React, { Component } from 'react';
import {
  Col,
  Row,
  Card,
  CardBody,
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

//Import Images
import imgdark from "../../assets/images/logo-dark.png";

class PagesInvoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Lexa", link : "#" },
                { title : "Pages", link : "#" },
                { title : "Invoice", link : "#" },
            ],
        }
        this.printInvoice.bind(this);
    } 


    componentDidMount(){
        this.props.setBreadcrumbItems("Invoice", this.state.breadcrumbItems);
    }

    printInvoice(){
        window.print();
    }

    render() {
        return (
            <React.Fragment>
                    <Row>
                        <Col xs="12">
                            <Card>
                                <CardBody>

                                    <Row>
                                        <Col xs="12">
                                            <div className="invoice-title">
                                                <h4 className="float-right font-size-16"><strong>Order # 12345</strong></h4>
                                                <h3 className="mt-0">
                                                        <img src={imgdark} alt="logo" height="24"/>
                                                    </h3>
                                            </div>
                                            <hr/>
                                            <Row>
                                                <Col xs="6">
                                                    <address>
                                                            <strong>Billed To:</strong><br/>
                                                            John Smith<br/>
                                                            1234 Main<br/>
                                                            Apt. 4B<br/>
                                                            Springfield, ST 54321
                                                        </address>
                                                </Col>
                                                <Col xs="6" className="text-right">
                                                    <address>
                                                            <strong>Shipped To:</strong><br/>
                                                            Kenny Rigdon<br/>
                                                            1234 Main<br/>
                                                            Apt. 4B<br/>
                                                            Springfield, ST 54321
                                                        </address>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs="6" className="mt-4">
                                                    <address>
                                                            <strong>Payment Method:</strong><br/>
                                                            Visa ending **** 4242<br/>
                                                            jsmith@email.com
                                                        </address>
                                                </Col>
                                                <Col xs="6" className="mt-4 text-right">
                                                    <address>
                                                            <strong>Order Date:</strong><br/>
                                                            October 7, 2016<br/><br/>
                                                        </address>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col xs="12">
                                            <div>
                                                <div className="p-2">
                                                    <h3 className="font-size-16"><strong>Order summary</strong></h3>
                                                </div>
                                                <div className="">
                                                    <div className="table-responsive">
                                                        <table className="table">
                                                            <thead>
                                                                <tr>
                                                                    <td><strong>Item</strong></td>
                                                                    <td className="text-center"><strong>Price</strong></td>
                                                                    <td className="text-center"><strong>Quantity</strong>
                                                                    </td>
                                                                    <td className="text-right"><strong>Totals</strong></td>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                
                                                                <tr>
                                                                    <td>BS-200</td>
                                                                    <td className="text-center">$10.99</td>
                                                                    <td className="text-center">1</td>
                                                                    <td className="text-right">$10.99</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>BS-400</td>
                                                                    <td className="text-center">$20.00</td>
                                                                    <td className="text-center">3</td>
                                                                    <td className="text-right">$60.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>BS-1000</td>
                                                                    <td className="text-center">$600.00</td>
                                                                    <td className="text-center">1</td>
                                                                    <td className="text-right">$600.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="thick-line"></td>
                                                                    <td className="thick-line"></td>
                                                                    <td className="thick-line text-center">
                                                                        <strong>Subtotal</strong></td>
                                                                    <td className="thick-line text-right">$670.99</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="no-line"></td>
                                                                    <td className="no-line"></td>
                                                                    <td className="no-line text-center">
                                                                        <strong>Shipping</strong></td>
                                                                    <td className="no-line text-right">$15</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="no-line"></td>
                                                                    <td className="no-line"></td>
                                                                    <td className="no-line text-center">
                                                                        <strong>Total</strong></td>
                                                                    <td className="no-line text-right">
                                                                        <h4 className="m-0">$685.99</h4></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                    <div className="d-print-none">
                                                        <div className="float-right">
                                                            <Link to="#" onClick={this.printInvoice} className="btn btn-success waves-effect waves-light mr-3"><i className="fa fa-print"></i></Link>
                                                            <Link to="#" className="btn btn-primary waves-effect waves-light">Send</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>  
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(PagesInvoice);