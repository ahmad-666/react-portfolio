import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styles from './workDetailImgs.module.scss';

const WorkDetailImgs = ({ imgs, setActiveImg }) => {
  return (
    <div className={styles.imgs}>
      {imgs.map((img, i) => (
        <img
          src={img}
          alt={img}
          key={i}
          className={styles.img}
          onClick={() => {
            document.body.classList.add('disableScroll');
            setActiveImg(img);
          }}
        />
      ))}
    </div>
  );
};
WorkDetailImgs.defaultProps = {
  imgs: [],
  setActiveImg: () => {},
};
WorkDetailImgs.propTypes = {
  imgs: PropTypes.array,
  setActiveImg: PropTypes.func,
};
export default withRouter(WorkDetailImgs);
