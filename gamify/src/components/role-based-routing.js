import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import PropTypes from 'prop-types';

import {getPermission} from '../utils/get-permission';

function RoleBasedRouting({component: Component, redirectPath, roles, user, ...rest}) {
  if (!user) {
    return <Redirect to="/login" />;
  }
  if (getPermission(roles, user.role)) {
    return <Route {...rest} render={props => <Component user={user} {...props} />} />;
  }
  return (
    <Route {...rest} render={_ => <p>{`You need to logged in as ${user.role === 'User' ? 'admin' : 'user'} !`}</p>} />
  );
}

RoleBasedRouting.propTypes = {
  user: PropTypes.object,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  redirectPath: PropTypes.string.isRequired,
  roles: PropTypes.array.isRequired
};
RoleBasedRouting.defaultProps = {
  user: {}
};
export default RoleBasedRouting;
