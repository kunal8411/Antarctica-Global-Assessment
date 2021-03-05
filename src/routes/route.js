import React from "react";
import { Route, Redirect } from "react-router-dom";


// Get all Auth methods
import { isUserAuthenticated } from '../helpers/authUtils';

const AppRoute = ({
  component: Component,
  isAuthProtected,
  layout : Layout,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (isAuthProtected && !isUserAuthenticated()) {
        console.log("condition checked")
        return (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} exact />
        );
      }

      return (
        <Layout>
          <Component {...props} />
        </Layout>
      );
    }}
  />
);

export default AppRoute;

