import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './navItem.module.scss';

const NavItem = ({ text, route }) => {
  return (
    <NavLink
      exact
      to={route}
      className={styles.navItem}
      activeClassName={styles.active}
    >
      {text}
    </NavLink>
  );
};
NavItem.propTypes = {
  text: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};
export default NavItem;
