import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { toggleSidebar, changeSidebarType } from "../../../store/actions";

//Import Menus

import ProfileMenu from "../Menus/profile-menu";

//Import Images
import logosm from "../../../assets/images/logo-sm.png";
import logodark from "../../../assets/images/logo-dark.png";
import logolight from "../../../assets/images/logo-light.png";

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
    };
  }

  sidebarToggle = () => {
    if (this.props.leftSideBarType === "default") {
      this.props.changeSidebarType("condensed", this.state.isMobile);
    } else if (this.props.leftSideBarType === "condensed") {
      this.props.changeSidebarType("default", this.state.isMobile);
    }
  };

  render() {
    return (
      <React.Fragment>
        <header id="page-topbar">
          <div className="navbar-header">
            <div className="d-flex">
              <button
                type="button"
                onClick={this.sidebarToggle}
                className="btn btn-sm px-3 font-size-24 header-item waves-effect"
                id="vertical-menu-btn"
              >
                <i className="mdi mdi-menu"></i>
              </button>
            </div>

            <div className="d-flex">
              <ProfileMenu />
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  const { is_toggle, leftSideBarType } = state.Layout;
  return { is_toggle, leftSideBarType };
};

export default withRouter(
  connect(mapStatetoProps, { toggleSidebar, changeSidebarType })(Topbar)
);
