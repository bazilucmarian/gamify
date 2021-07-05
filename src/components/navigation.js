import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {navLinks} from '../utils/index';

const Navigation = () => {
  const [linkIndex, setLinkIndex] = useState('');

  useEffect(() => {
    navLinks.forEach(route => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (linkIndex !== route.activeIndex) {
            setLinkIndex(route.activeIndex);
          }
          break;

        default:
          break;
      }
    });
  }, [linkIndex]);

  return (
    <nav className="navigation">
      {navLinks.map(route => (
        <li key={route.activeIndex} className="navigation__link">
          <Link
            to={route.link}
            className={`${linkIndex === route.activeIndex ? 'active' : ''}`}
            onClick={() => setLinkIndex(route.activeIndex)}
          >
            {route.name}
          </Link>
        </li>
      ))}
    </nav>
  );
};

export default Navigation;
