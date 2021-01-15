import React from 'react';
import './app.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Nav from './components/nav/Nav';

library.add(fas);

function App() {
  return (
    <div className='App'>
      <Nav />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
