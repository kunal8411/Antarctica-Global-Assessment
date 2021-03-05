import React, { Component } from "react";
// import { Row, Col, Card, CardBody, Label, Input } from "reactstrap";
import {
  Col,
  Row,
  Card,
  CardBody,
  TabContent,
  TabPane,
  Collapse,
  NavLink,
  NavItem,
  Nav,
  Button,Label
} from "reactstrap";
import classnames from "classnames";
import "../../assets/css/paginate.css"
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

//Import Components
import CardUser from "./card-user";

import axios from "axios";
import ReactPaginate from 'react-paginate';

const instance = axios.create();
class PagesDirectory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      activeTab1: "5",
      offset: 0,
      data: [],
      perPage: 5,
      currentPage: 0,
      breadcrumbItems: [
        
      ],
    };
    this.toggle1 = this.toggle1.bind(this);
  }

  async componentDidMount() {
    this.props.setBreadcrumbItems("Users", this.state.breadcrumbItems);
    await instance
      .get("http://localhost:8000/getallusers")
      .then((response) => {
        this.setState({
          users: response.data,
        });
        // console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    await instance
      .get("http://localhost:8000/getallusers")
      .then((response) => {
        this.setState({
          dropdownusers: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  receivedData() {
    axios
        .get("http://localhost:8000/getallusers")
        .then(res => {

            const data = res.data;
            const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
            const postData = slice.map(pd => <React.Fragment>
                <p>{pd.title}</p>
                <img src={pd.thumbnailUrl} alt=""/>
            </React.Fragment>)

            this.setState({
                pageCount: Math.ceil(data.length / this.state.perPage),
               
                postData
            })
        });
}
handlePageClick = (e) => {
  const selectedPage = e.selected;
  const offset = selectedPage * this.state.perPage;

  this.setState({
      currentPage: selectedPage,
      offset: offset
  }, () => {
      this.receivedData()
  });

};

  getFirstName = (e) => {
    const values = {
      [e.target.name]: e.target.value,
    };
    instance
      .post("http://localhost:8000/searchbyfristname", values)
      .then((response) => {
        this.setState({
          users: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getLastName = (e) => {
    const values = {
      [e.target.name]: e.target.value,
    };
    instance
      .post("http://localhost:8000/searchbylastname", values)
      .then((response) => {
        this.setState({
          users: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  toggle1(tab, name) {
    console.log(name); 
    const values = {
      name: name,
    };
    instance.post("http://localhost:8000/sortusers", values)
    .then(response=>{
      this.setState({
        users: response.data,
      });
      // console.log(response.data);
    })
    .catch(err=>{
      console.log(err);
    })
    if (this.state.activeTab1 !== tab) {
      this.setState({
        activeTab1: tab
      });
    }
  }

  render() {
    // console.log(this.state.users);
    return (
      <React.Fragment>
        <Row>
          <Col xs="12" className="mb-2 ml-2">
            <Card>
              <CardBody>
                <Row>
                  <Col className="xs-4">
                    <Label
                      for="search-name"
                      // classN ame="col-sm-2 col-form-label"
                    >
                      Search By First Name
                    </Label>
                    <Col sm="10">
                      <select
                        onChange={this.getFirstName}
                        name="name"
                        id="search-name"
                      >
                        <option value="Select">Select </option>
                        {this.state?.dropdownusers?.map((index) => {
                          return (
                            <option value={index.fname}>{index.fname}</option>
                          );
                        })}
                      </select>
                    </Col>
                  </Col>
                  {/* //last name */}
                  <Col className="xs-4">
                    <Label
                      for="search-name"
                      // classN ame="col-sm-2 col-form-label"
                    >
                      Search By Last Name
                    </Label>
                    <Col sm="10">
                      <select
                        onChange={this.getLastName}
                        name="name"
                        id="search-name"
                      >
                        <option value="Select">Select </option>
                        {this.state?.dropdownusers?.map((index) => {
                          return (
                            <option value={index.lname}>{index.lname}</option>
                          );
                        })}
                      </select>
                    </Col>
                  </Col>
                  <Col className="xs-4">
                    <Label
                      for="search-name"
                      // className="col-sm-2 col-form-label"
                    >
                      Sort By :
                    </Label>
                    <Col sm="10">
                      <Nav pills justified>
                        <NavItem className="waves-effect waves-light">
                          <NavLink
                            style={{ cursor: "pointer" }}
                            className={classnames({
                              active: this.state.activeTab1 === "5",
                            })}
                            onClick={() => {
                              this.toggle1("5", "fname");
                            }}
                          >
                            <span className="d-block d-sm-none">
                              <i className="fas fa-home"></i>
                            </span>
                            <span className="d-none d-sm-block">First Name</span>
                          </NavLink>
                        </NavItem>
                        <NavItem className="waves-effect waves-light">
                          <NavLink
                            style={{ cursor: "pointer" }}
                            className={classnames({
                              active: this.state.activeTab1 === "6",
                            })}
                            onClick={() => {
                              this.toggle1("6", "lname");
                            }}
                          >
                            <span className="d-block d-sm-none">
                              <i className="far fa-user"></i>
                            </span>
                            <span className="d-none d-sm-block">Last Name</span>
                          </NavLink>
                        </NavItem>
                        <NavItem className="waves-effect waves-light">
                          <NavLink
                            style={{ cursor: "pointer" }}
                            className={classnames({
                              active: this.state.activeTab1 === "7",
                            })}
                            onClick={() => {
                              this.toggle1("7","email");
                            }}
                          >
                            <span className="d-block d-sm-none">
                              <i className="far fa-envelope"></i>
                            </span>
                            <span className="d-none d-sm-block">Email</span>
                          </NavLink>
                        </NavItem>
                        
                      </Nav>
                    </Col>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <CardUser users={this.state.users} />
        </Row>
        <div>
                {this.state.postData}
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            </div>
      </React.Fragment>
    );
  }
}

export default connect(null, { setBreadcrumbItems })(PagesDirectory);
