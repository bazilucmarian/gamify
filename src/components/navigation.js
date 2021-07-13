/* eslint-disable no-unused-expressions */
/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {getUser} from '../utils';

// to be removed
const userData = getUser('user');
const adminData = getUser('admin');

function Navigation({routes, setLoggedInUser}) {
  return (
    <nav className="navigation">
      {routes.map(({name, exact, link}) => (
        <li key={`route-${link}`} className="navigation__link">
          <NavLink
            exact={exact}
            activeClassName="active"
            to={link}
            onClick={() => {
              name === 'Switch to Admin'
                ? setLoggedInUser(adminData)
                : name === 'Switch to User'
                ? setLoggedInUser(userData)
                : undefined;
            }}
          >
            {name}
          </NavLink>
        </li>
      ))}
    </nav>
  );
}

Navigation.propTypes = {
  setLoggedInUser: PropTypes.func.isRequired,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string,
      exact: PropTypes.bool
    })
  ).isRequired
};

export default Navigation;
