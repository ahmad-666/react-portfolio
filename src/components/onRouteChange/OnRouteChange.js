import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const OnRouteChange = ({ children }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    document.body.classList.remove('disableScroll');
  }, [pathname]);
  return children;
};
export default OnRouteChange;