import React from 'react';
import './SCSS/Main.css';
import { Home } from './components/Home';
import { About } from './components/About';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <Home/>
  );
}

export default App;
