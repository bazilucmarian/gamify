import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

function Navigation({routes, handleSwitchUser}) {
  return (
    <nav className="navigation">
      {routes.map(({name, exact, link}) => (
        <li key={`route-${link}`} className="navigation__link">
          <NavLink
            exact={exact}
            activeClassName="active"
            to={link}
            onClick={name.includes('Switch to') ? handleSwitchUser : undefined}
          >
            {name}
          </NavLink>
        </li>
      ))}
    </nav>
  );
}

Navigation.propTypes = {
  handleSwitchUser: PropTypes.func.isRequired,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string,
      exact: PropTypes.bool
    })
  ).isRequired
};

export default Navigation;
