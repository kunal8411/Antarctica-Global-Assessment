import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

//Import Images
import usFlag from '../../../assets/images/flags/us_flag.jpg';
import germanyFlag from '../../../assets/images/flags/germany_flag.jpg';
import italyFlag from '../../../assets/images/flags/italy_flag.jpg';
import frenchFlag from '../../../assets/images/flags/french_flag.jpg';
import spainFlag from '../../../assets/images/flags/spain_flag.jpg';
import russiaFlag from '../../../assets/images/flags/russia_flag.jpg';

class LanguageMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false,
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            menu: !prevState.menu
        }));
    }
    render() {
        return (
            <React.Fragment>
                   <Dropdown isOpen={this.state.menu} toggle={this.toggle} id="languagemenu" className={"d-none ml-2 " + this.props.class}>
                        <DropdownToggle tag="button" className="btn header-item waves-effect">
                            <img className="mr-2" src={usFlag} alt="Header Language" height="16"/> English <span className="mdi mdi-chevron-down"></span>
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem tag="a" href="#" className="notify-item"><img src={germanyFlag} alt="user" className="mr-1" height="12"/> <span className="align-middle"> German </span></DropdownItem>
                            <DropdownItem tag="a" href="#" className="notify-item"><img src={italyFlag} alt="user" className="mr-1" height="12"/> <span className="align-middle"> Italian </span></DropdownItem>
                            <DropdownItem tag="a" href="#" className="notify-item"><img src={frenchFlag} alt="user" className="mr-1" height="12"/> <span className="align-middle"> French </span></DropdownItem>
                            <DropdownItem tag="a" href="#" className="notify-item"><img src={spainFlag} alt="user" className="mr-1" height="12"/> <span className="align-middle"> Spanish </span></DropdownItem>
                            <DropdownItem tag="a" href="#" className="notify-item"><img src={russiaFlag} alt="user" className="mr-1" height="12"/> <span className="align-middle"> Russian </span></DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
            </React.Fragment>
        );
    }
}

export default LanguageMenu;