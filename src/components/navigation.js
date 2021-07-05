import React from 'react';
import {NavLink} from 'react-router-dom';
import {navLinks} from '../utils/index';

const Navigation = () => (
  <nav className="navigation">
    {navLinks.map(({name, exact, link}) => (
      <li key={`route-${link}`} className="navigation__link">
        <NavLink exact={exact} activeClassName="active" to={link}>
          {name}
        </NavLink>
      </li>
    ))}
  </nav>
);

export default Navigation;
