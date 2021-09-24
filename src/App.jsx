import React from 'react';
import './SCSS/Main.css';
import { About } from './components/About';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';

const App = () => {
  return (
    <div className="div">
      <Home/>
    </div>
  );
}

export default App;
