import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {
    hideRightSidebar,
    changeTopbarTheme,
    changeLayout,
    changeSidebarTheme,
    changeLayoutWidth,
    changeSidebarType,
    changePreloader
} from '../../store/actions';

import { FormGroup } from "reactstrap";

//Import Scrollbar
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

//Import Images
import layout1 from "../../assets/images/layouts/layout-1.jpg";
import layout2 from "../../assets/images/layouts/layout-2.jpg";
import layout3 from "../../assets/images/layouts/layout-3.jpg";

import "./rightbar.scss";

class RightSideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            layoutType: this.props.layoutType,
            topbarTheme: this.props.topbarTheme,
            leftSideBarTheme: this.props.leftSideBarTheme,
            layoutWidth: this.props.layoutWidth,
            sidebarType: this.props.leftSideBarType,
            isPreloader: this.props.isPreloader
        }
        this.changeLayout = this.changeLayout.bind(this);
        this.changeTopbarTheme = this.changeTopbarTheme.bind(this);
        this.changeLeftSidebarTheme = this.changeLeftSidebarTheme.bind(this);
        this.changeLayoutWidth = this.changeLayoutWidth.bind(this);
        this.changeLeftSidebarType = this.changeLeftSidebarType.bind(this);
        this.changeThemePreloader = this.changeThemePreloader.bind(this);
    }
    
    //update local state after changing layout
    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
          this.setState({
            layoutType: this.props.layoutType,
            topbarTheme: this.props.topbarTheme,
            leftSideBarTheme: this.props.leftSideBarTheme,
            layoutWidth: this.props.layoutWidth,
            sidebarType: this.props.leftSideBarType,
            isPreloader: this.props.isPreloader
          });
        }
    }

    //change layput type and dispatch action
    changeLayout(e) {
        if (e.target.checked) {
          this.props.changeLayout(e.target.value);
        }
    }

    //theme preloader
    changeThemePreloader = (e) => {
        this.props.changePreloader(!this.props.isPreloader);
    }

    //change left sidebar theme
    changeLeftSidebarTheme(e) {
        if (e.target.checked) {
          this.props.changeSidebarTheme(e.target.value);
        }
    }

    //change layout width
    changeLayoutWidth(e) {
        if (e.target.checked) {
          this.props.changeLayoutWidth(e.target.value, this.state.layoutType);
        }
    }

    //change topbar theme and dispatch action
    changeTopbarTheme(e) {
        if (e.target.checked) {
          this.props.changeTopbarTheme(e.target.value);
        }
    }

    //change sidebar type
    changeLeftSidebarType(e) {
        if (e.target.checked) {
          this.props.changeSidebarType(e.target.value);
        }
    }

    hideSidebar = () =>{
        document.body.classList.remove('right-bar-enabled');
        this.props.hideRightSidebar();
    }
    
    render() {
        return (
            <React.Fragment>
                <div className="right-bar">
                    <PerfectScrollbar className="h-100">
                        <div className="rightbar-title px-3 py-4">
                            <Link to="#" onClick={this.hideSidebar} className="right-bar-toggle float-right">
                                <i className="mdi mdi-close noti-icon"></i>
                            </Link>
                            <h5 className="m-0">Settings</h5>
                        </div>

                        <hr className="my-0" />
                        
                        <div className="p-4">
                            <div className="radio-toolbar">
                                <span>Layouts</span><br />
                                <input 
                                    type="radio" 
                                    id="radioVertical" 
                                    name="radioFruit" 
                                    value="vertical"
                                    checked={this.state.layoutType === "vertical"}
                                    onChange={this.changeLayout} />
                                <label htmlFor="radioVertical">Vertical</label> 
                                {"   "}
                                <input 
                                    type="radio" 
                                    id="radioHorizontal" 
                                    name="radioFruit" 
                                    value="horizontal"
                                    checked={this.state.layoutType === "horizontal"}
                                    onChange={this.changeLayout} />
                                <label htmlFor="radioHorizontal">Horizontal</label>
                            </div>
                            <br/>
                            <div className="radio-toolbar">
                                <span id="radio-title">Layout Width</span><br />
                                <input 
                                    type="radio" 
                                    id="radioFluid" 
                                    name="radioWidth" 
                                    value="fluid"
                                    checked={this.state.layoutWidth !== "boxed"}
                                    onChange={this.changeLayoutWidth} />
                                <label htmlFor="radioFluid">Fluid</label> 
                                {"   "}
                                <input 
                                    type="radio" 
                                    id="radioBoxed" 
                                    name="radioWidth" 
                                    value="boxed"
                                    checked={this.state.layoutWidth === "boxed"}
                                    onChange={this.changeLayoutWidth} />
                                <label htmlFor="radioBoxed">Boxed</label>
                            </div>
                            <hr />

                                {this.state.layoutType === "vertical" ? <React.Fragment>
                                <div className="radio-toolbar">
                                <span id="radio-title">Topbar Theme</span><br />
                                <input 
                                    type="radio" 
                                    id="radioThemeLight" 
                                    name="radioTheme" 
                                    value="light"
                                    checked={this.state.topbarTheme === "light"}
                                    onChange={this.changeTopbarTheme} />

                                <label htmlFor="radioThemeLight">Light</label> 
                                {"   "}
                                <input 
                                    type="radio" 
                                    id="radioThemeDark" 
                                    name="radioTheme" 
                                    value="dark"
                                    checked={this.state.topbarTheme === "dark"}
                                    onChange={this.changeTopbarTheme} />
                                <label htmlFor="radioThemeDark">Dark</label> 
                                {"   "}
                                {this.state.layoutType === "vertical" ? null : 
                                <> <input 
                                    type="radio" 
                                    id="radioThemeColored" 
                                    name="radioTheme" 
                                    value="colored"
                                    checked={this.state.topbarTheme === "colored"}
                                    onChange={this.changeTopbarTheme} />
                                <label htmlFor="radioThemeColored">Colored</label> </> }
                                
                            </div>
                            
                            <hr />
                                <div className="radio-toolbar">
                                <span id="radio-title">Left Sidebar Type</span>
                                <br />
                                <input 
                                    type="radio" 
                                    id="sidebarDefault" 
                                    name="sidebarType" 
                                    value="default"
                                    checked={this.state.sidebarType === "default"}
                                    onChange={this.changeLeftSidebarType} />

                                <label htmlFor="sidebarDefault">Default</label> 
                                {"   "}
                                <input 
                                    type="radio" 
                                    id="sidebarCompact" 
                                    name="sidebarType" 
                                    value="compact"
                                    checked={this.state.sidebarType === "compact"}
                                    onChange={this.changeLeftSidebarType}  />
                                <label htmlFor="sidebarCompact">Compact</label> 
                                {"   "}
                                <input 
                                    type="radio" 
                                    id="sidebarIcon" 
                                    name="sidebarType" 
                                    value="icon"
                                    checked={this.state.sidebarType === "icon"}
                                    onChange={this.changeLeftSidebarType}
                                />
                                <label htmlFor="sidebarIcon">Icon</label> 

                                </div>

                                            <hr />

                                            <div className="radio-toolbar">
                                <span id="radio-title">Left Sidebar Type</span>
                                <br />
                                <input 
                                    type="radio" 
                                    id="leftsidebarThemelight" 
                                    name="leftsidebarTheme" 
                                    value="light"
                                    checked={this.state.leftSideBarTheme === "light"}
                                    onChange={this.changeLeftSidebarTheme} />

                                <label htmlFor="leftsidebarThemelight">Light</label> 
                                {"   "}
                                <input 
                                    type="radio" 
                                    id="leftsidebarThemedark" 
                                    name="leftsidebarTheme" 
                                    value="dark"
                                    checked={this.state.leftSideBarTheme === "dark"}
                                    onChange={this.changeLeftSidebarTheme}  />
                                <label htmlFor="leftsidebarThemedark">Dark</label> 
                                {"   "}
                                <input 
                                    type="radio" 
                                    id="leftsidebarThemecolored" 
                                    name="leftsidebarTheme" 
                                    value="colored"
                                    checked={this.state.leftSideBarTheme === "colored"}
                                    onChange={this.changeLeftSidebarTheme}
                                />
                                <label htmlFor="leftsidebarThemecolored">Colored</label> 

                                </div>
                                <hr />
                                </React.Fragment> : null}

                                <FormGroup>
                                    <span id="radio-title">Preloader</span>
                                    <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input checkbox" id="checkbox_1"
                                        checked={this.props.isPreloader}
                                        onChange={this.changeThemePreloader} />
                                    <label className="custom-control-label" htmlFor="checkbox_1">Preloader</label>
                                    </div>
                                </FormGroup>

                                <h6 className="text-center">Choose Layouts</h6>

                                <div className="mb-2">
                                    <Link to="#" target="_blank">
                                        <img
                                        src={layout1}
                                        className="img-fluid img-thumbnail"
                                        alt=""
                                        />
                                    </Link>
                                </div>

                                <div className="mb-2">
                                    <Link
                                        to="#"
                                        target="_blank"
                                    >
                                        <img
                                        src={layout2}
                                        className="img-fluid img-thumbnail"
                                        alt=""
                                        />
                                    </Link>
                                </div>

                                <div className="mb-2">
                                    <Link
                                        to="#"
                                        target="_blank"
                                    >
                                        <img
                                        src={layout3}
                                        className="img-fluid img-thumbnail"
                                        alt=""
                                        />
                                    </Link>
                                </div>

                                <Link
                                    to="#"
                                    className="btn btn-primary btn-block mt-3"
                                    target="_blank"
                                >
                                    <i className="mdi mdi-cart mr-1"></i> Purchase Now
                                </Link>
                        </div>
                    </PerfectScrollbar>
                </div>
                <div className="rightbar-overlay"></div> 
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    const Layout = state.Layout;
    return { 
        layoutType : Layout.layoutType,
        leftSideBarTheme : Layout.leftSideBarTheme,
        layoutWidth : Layout.layoutWidth,
        topbarTheme : Layout.topbarTheme,
        leftSideBarType : Layout.leftSideBarType,
        isPreloader : Layout.isPreloader
    };
};

export default connect(mapStatetoProps, {
    hideRightSidebar,
    changeLayout,
    changeTopbarTheme,
    changeSidebarTheme,
    changeLayoutWidth,
    changeSidebarType,
    changePreloader
})(RightSideBar);