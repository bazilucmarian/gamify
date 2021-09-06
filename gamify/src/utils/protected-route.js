import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

function ProtectedRoute({component: Component, user, redirectPath, ...rest}) {
  return (
    <Route
      {...rest}
      render={routeProps => {
        if (user) {
          return <Redirect to={redirectPath} />;
        }
        if (!user) {
          return <Component {...routeProps} />;
        }
        return null;
      }}
    />
  );
}

ProtectedRoute.propTypes = {
  user: PropTypes.object,
  redirectPath: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired
};
ProtectedRoute.defaultProps = {
  user: {}
};
export default ProtectedRoute;
