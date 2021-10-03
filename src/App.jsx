import React from 'react';
import './SCSS/Main.css';
import { About } from './components/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Nav from './components/Nav';
import { Gallery } from './components/Gallery/Gallery';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/rolam' component={About} />
          <Route path='/fotok' component={Gallery} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
