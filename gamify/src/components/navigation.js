import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

import useModal from '../hooks/use-modal';

import {useAuth} from './auth/use-auth';
import Modal from './modal/modal';
import Button from './button';

function Navigation({routes}) {
  const {signOut} = useAuth();
  const {isOpen, hideModal, showModal} = useModal();

  return (
    <>
      <nav className="navigation">
        {routes.map(({name, exact, link}) => (
          <li key={`route-${link}`} className="navigation__link">
            {name.includes('Switch to') ? (
              <a role="link" tabIndex="0" onClick={showModal} onKeyPress={showModal}>
                {name}
              </a>
            ) : (
              <NavLink exact={exact} activeClassName={!name.includes('Switch to') ? 'active' : ''} to={link}>
                {name}
              </NavLink>
            )}
          </li>
        ))}
      </nav>
      <Modal isOpen={isOpen} hide={hideModal}>
        <Modal.Header>
          <div className="modal__title">
            <h1>Confirm</h1>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="modal__confirm">
            <h1>Are you sure you want to log out ? </h1>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="secondary" variant="contained-secondary" size="sm-1" onClick={hideModal}>
            Close
          </Button>
          <Button color="fourth" variant="contained-fourth" size="md" onClick={signOut}>
            Log out
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

Navigation.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string,
      exact: PropTypes.bool
    })
  ).isRequired
};

export default Navigation;
