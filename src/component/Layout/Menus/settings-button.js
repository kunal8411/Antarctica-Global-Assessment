import React, { Component } from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { toggleRightSidebar } from '../../../store/actions';

class SettingsButton extends Component {

    rightsidebarToggle = () => {
        document.body.classList.toggle('right-bar-enabled');
        this.props.toggleRightSidebar(!this.show_rightsidebar);
    }

    render() {
        return (
            <React.Fragment>
                    <div className="dropdown d-inline-block">
                        <button type="button" onClick={ this.rightsidebarToggle } className="btn header-item noti-icon right-bar-toggle waves-effect">
                            <i className="mdi mdi-spin mdi-settings"></i>
                        </button>
                    </div>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    const { show_rightsidebar } = state.Layout;
    return { show_rightsidebar };
}

export default withRouter(connect(mapStatetoProps, { toggleRightSidebar })(SettingsButton));