import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { withRouter } from "react-router-dom";
import Cookies from "js-cookie";
// import UserProfile from "../../../pages/UserProfile/UserProfile";
//Import Images
import user from "../../../assets/images/avtar.png";

import { getLoggedInUser } from "../../../helpers/authUtils";

class ProfileMenu extends Component {
  state = {
    menu: false,
    modalToggle: false,
    details: {},
  };
  componentDidMount() {
    let details = getLoggedInUser();
    this.setState({ details });
  }
  toggle = () => {
    this.setState((prevState) => ({
      menu: !prevState.menu,
    }));
  };
  modalToggle = async () => {
    this.setState((prevState) => ({
      modalToggle: !prevState.modalToggle,
    }));
  };
  render() {
    return (
      <React.Fragment>
        <Dropdown
          isOpen={this.state.menu}
          toggle={this.toggle}
          className="d-inline-block"
        >
          <DropdownToggle
            tag="button"
            className="btn header-item waves-effect"
            id="page-header-user-dropdown"
          >
            <img
              className="rounded-circle header-profile-user"
              src={
                this.state.details.thumbnail_photo
                  ? "data:image/jpeg;base64," +
                    this.state.details.thumbnail_photo
                  : user
              }
              alt="Header Avatar"
            />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem onClick={() => this.modalToggle()}>
              <i className="mdi mdi-account-circle font-size-17 text-muted align-middle mr-1"></i>{" "}
              Profile
            </DropdownItem>
            <DropdownItem tag="a" href="#" divider></DropdownItem>
            <DropdownItem
              tag="a"
              href="/logout"
              className="text-danger"
              // onClick={() => sessionStorage.removeItem("user")}
              onClick={() => Cookies.remove("user")}
            >
              <i className="mdi mdi-power font-size-17 text-muted align-middle mr-1 text-danger"></i>{" "}
              Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        {/* {this.state.modalToggle ? (
          <UserProfile
            modal={this.state.modalToggle}
            toggle={this.modalToggle}
          />
        ) : null} */}
      </React.Fragment>
    );
  }
}

export default withRouter(ProfileMenu);
