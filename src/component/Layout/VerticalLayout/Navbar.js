import React, { Component } from 'react';

import { withRouter } from "react-router";
import { connect } from 'react-redux';

//Import Scrollbar
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import SidebarContent from "./SidebarContent";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_toggle: false
        }
    }

    render() {
        return (
            <React.Fragment>
            <div className="vertical-menu">
                <div data-simplebar className="h-100">
                {this.props.leftSideBarType !== "condensed" ? 
                    this.props.leftSideBarType !== "icon" ?
                    <PerfectScrollbar>
                        <SidebarContent />
                    </PerfectScrollbar> : <SidebarContent />
                    :
                    <SidebarContent />
                }
                </div>
            </div>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    const { is_toggle, leftSideBarType } = state.Layout;
    return {  is_toggle, leftSideBarType };
}

export default withRouter(connect(mapStatetoProps, {})(Navbar));
