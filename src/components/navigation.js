/* eslint-disable no-unused-expressions */
/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

const Navigation = ({handleSwitchAdminOrUser, routes}) => (
  <nav className="navigation">
    {routes.map(({name, exact, link}) => (
      <li key={`route-${link}`} className="navigation__link">
        <NavLink
          exact={exact}
          activeClassName="active"
          to={link}
          onClick={() => {
            console.log('Press!');
            name === 'Switch to Admin' || name === 'Switch to User' ? handleSwitchAdminOrUser() : '';
          }}
        >
          {name}
        </NavLink>
      </li>
    ))}
  </nav>
);

Navigation.propTypes = {
  handleSwitchAdminOrUser: PropTypes.func.isRequired,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string,
      exact: PropTypes.bool
    })
  ).isRequired
};

export default Navigation;
