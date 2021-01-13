import React from 'react';
import './app.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Home from './pages/home/Home';

library.add(fas);

function App() {
  return (
    <div className='App'>
      <Home />
    </div>
  );
}

export default App;
