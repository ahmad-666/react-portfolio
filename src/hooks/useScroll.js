import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const useScroll = (inViewConfig, initialVariant, animateVariant) => {
  const animeControl = useAnimation();
  const [elm, inView] = useInView(inViewConfig);
  useEffect(() => {
    if (inView) animeControl.start(animateVariant);
    else animeControl.start(initialVariant);
  }, [inView]);
  return [elm, animeControl];
};
export default useScroll;
