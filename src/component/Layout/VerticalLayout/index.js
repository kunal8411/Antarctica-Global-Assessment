import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container } from "reactstrap";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import RightSideBar from "../right-sidebar";
import Breadcrumb from "../../Common/breadcrumb";

class LayoutV extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  capitalizeFirstLetter = string => {
    return string.charAt(1).toUpperCase() + string.slice(2);
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if(this.props.isPreloader === true)
        {
          document.getElementById('preloader').style.display = "block";
          document.getElementById('status').style.display = "block";

          setTimeout(function(){ 

          document.getElementById('preloader').style.display = "none";
          document.getElementById('status').style.display = "none";

          }, 2500);
        }
        else
        {
          document.getElementById('preloader').style.display = "none";
          document.getElementById('status').style.display = "none";
        }
    }
}

  componentDidMount() {
    window.scrollTo(0, 0);
    let currentage = this.capitalizeFirstLetter(this.props.location.pathname);

    document.title =
      currentage + " | Lexa - Responsive Bootstrap 4 Admin Dashboard";
  }

  render() {
    return (
      <React.Fragment>
        <div id="preloader">
            <div id="status">
                <div className="spinner-chase">
                    <div className="chase-dot"></div>
                    <div className="chase-dot"></div>
                    <div className="chase-dot"></div>
                    <div className="chase-dot"></div>
                    <div className="chase-dot"></div>
                    <div className="chase-dot"></div>
                </div>
            </div>
        </div>
       <div id="layout-wrapper">

          {/* render topbar */}
          <Topbar/>

          {/* render navbar */}
          <Navbar/>
          
          <div className="main-content">
            <div className="page-content">
              <Container fluid>
                <Breadcrumb/>
                {this.props.children}
                {/* render Footer */}
                <Footer/>
              </Container>
            </div>
          </div>
        </div>
        <RightSideBar/>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = state => {
  const Layout = state.Layout;
  return {
      isPreloader : Layout.isPreloader
  };
};

export default withRouter(connect(mapStatetoProps, null)(LayoutV));
