import React from 'react';
import './app.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/home/Home';
import Nav from './components/nav/Nav';
import Works from './pages/works/Works';
import WorkDetail from './pages/workDetail/WorkDetail';

library.add(fas);

function App() {
  const location = useLocation();
  return (
    <div className='App'>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path='/' exact component={Home} />
          <Route path='/works' exact component={Works} />
          <Route path='/works/:id' exact component={WorkDetail} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
