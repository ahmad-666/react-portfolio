import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './workDetailActiveImg.module.scss';

const WorkDetailActiveImg = ({ imgSrc, setActiveImg }) => {
  const blackFilterElm = useRef(null);
  return (
    <div
      ref={blackFilterElm}
      className={styles.blackFilter}
      onClick={e => {
        if (e.target === blackFilterElm.current) {
          document.body.classList.remove('disableScroll');
          setActiveImg(null);
        }
      }}
    >
      <img src={imgSrc} alt={imgSrc} className={styles.img} />
    </div>
  );
};
WorkDetailActiveImg.defaultProps = {
  imgSrc: '',
  setActiveImg: () => {},
};
WorkDetailActiveImg.propTypes = {
  imgSrc: PropTypes.string,
  setActiveImg: PropTypes.func,
};
export default WorkDetailActiveImg;
