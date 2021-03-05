import React, { Component } from 'react';
import { Form, Input, FormGroup, InputGroup, InputGroupAddon, Button } from "reactstrap";
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSearch : false
        };
    }

    render() {
        return (
            <React.Fragment>
                    <Form className="app-search d-none d-lg-block">
                        <div className="position-relative">
                            <Input type="text" className="form-control" placeholder="Search..."/>
                            <span className="fa fa-search"></span>
                        </div>
                    </Form>

                    <div className="dropdown d-inline-block d-lg-none ml-2">
                        <button
                            type="button"
                            className="btn header-item noti-icon waves-effect"
                            id="page-header-search-dropdown"
                            onClick={()=>{  this.setState({ isSearch : !this.state.isSearch });  }}>
                            <i className="mdi mdi-magnify"></i>
                        </button>
                        <div className={this.state.isSearch ? "dropdown-menu dropdown-menu-lg dropdown-menu-right p-0 show" : "dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"} >
                            <Form className="p-3">
                                <FormGroup className="m-0">
                                    <InputGroup>
                                        <Input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username"/>
                                        <InputGroupAddon addonType="append">
                                            <Button color="primary" type="submit"><i className="mdi mdi-magnify"></i></Button>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
            </React.Fragment>
        );
    }
}

export default SearchBar;