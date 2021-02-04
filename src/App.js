import React, { lazy, Suspense } from 'react';
import './app.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Nav from './components/nav/Nav';
import OnRouteChange from './components/onRouteChange/OnRouteChange';

const Home = lazy(() => import('./pages/home/Home'));
const Works = lazy(() => import('./pages/works/Works'));
const WorkDetail = lazy(() => import('./pages/workDetail/WorkDetail'));

const Contact = lazy(() => import('./pages/contact/Contact'));
library.add(fas);
function App() {
  const location = useLocation();
  return (
    <div className='App'>
      <Nav />
      <OnRouteChange>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route path='/' exact>
              <Suspense fallback={<h1>loading ...</h1>}>
                <Home />
              </Suspense>
            </Route>
            <Route path='/works' exact>
              <Suspense fallback={<h1>loading ...</h1>}>
                <Works />
              </Suspense>
            </Route>
            <Route path='/works/:id' exact>
              <Suspense fallback={<h1>loading ...</h1>}>
                <WorkDetail />
              </Suspense>
            </Route>
            <Route path='/contact' exact>
              <Suspense fallback={<div>loading ...</div>}>
                <Contact />
              </Suspense>
            </Route>
          </Switch>
        </AnimatePresence>
      </OnRouteChange>
    </div>
  );
}

export default App;
