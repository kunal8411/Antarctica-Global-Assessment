import React, { Component } from 'react';
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import C3Chart from 'react-c3js';
import 'c3/c3.css';

class Breadcrumb extends Component {
    render() {
        const data = {
            columns: [
                ['Sold', 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12],
            ],
            type: 'bar',
            labels: false,
            colors:{Sold: "#28bbe3"}
        };

        const data1 = {
            columns: [
                ['Balance', 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12],
            ],
            type: 'bar',
            labels: false,
            colors:{Balance: "#7a6fbe"}
        };

        const legend = {
            show: false
        };

        const axis = {
            y: {
              show: false
            },
            x: {
              show: false
            }
          };

        const bar = {
            width: 5
            // or
            //width: 100 // this makes bar width 100px
        };

        const size = {
            height: 32,
            width : 101
        };

        const padding = {
            top:-10,
            bottom: -10
        };

        const itemLength = this.props.breadcrumbItems.length;

        return (
            <React.Fragment>
                    <Row>
                        <Col sm="6">
                            <div className="page-title-box">
                                <h4>{this.props.title}</h4>
                                    <ol className="breadcrumb m-0">
                                        {
                                            this.props.breadcrumbItems.map((item, key) =>
                                                (key+1) === itemLength ?
                                                    <li key={key} className="breadcrumb-item active">{item.title}</li>
                                                :   <li key={key} className="breadcrumb-item"><Link to="#">{item.title}</Link></li>
                                            )
                                        }
                                    </ol>
                            </div>
                        </Col>
                        
                    </Row>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    const Layout = state.Layout;
    const BreadcrumbData = state.Breadcrumb
    return {layoutType : Layout.layoutType, title : BreadcrumbData.title, breadcrumbItems : BreadcrumbData.breadcrumbItems };
};

export default connect(mapStatetoProps, { })(Breadcrumb);