import React from 'react';
import { Link } from 'react-router-dom';
import styles from './nav.module.scss';
import NavItem from '../navItem/NavItem';
import logoImg from '../../assets/imgs/logo.png';

const navItems = [
  {
    _id: 'd9038492njnf',
    route: 'about',
    text: 'about us',
  },
  {
    _id: '312cv866',
    route: 'contact',
    text: 'contact us',
  },
  {
    _id: 'vvcxFDSF3',
    route: 'works',
    text: 'our works',
  },
];
const Nav = () => {
  return (
    <div className={styles.nav}>
      <Link to='/' className={styles.logoContainer}>
        <img className={styles.logo} src={logoImg} alt={logoImg} />
        <h1 className={styles.title}> site name </h1>
      </Link>
      <div className={styles.navItems}>
        {navItems.map((navItem, i) => (
          <NavItem
            key={navItem._id}
            route={navItem.route}
            text={navItem.text}
          />
        ))}
      </div>
    </div>
  );
};
export default Nav;
