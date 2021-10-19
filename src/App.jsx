import React from 'react';
import './SCSS/Main.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import { Contact } from './components/Contact';
import { Gallery } from './components/Gallery/Gallery';
import { Videos } from './components/Gallery/Videos';
import { Home } from './components/Home';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Contact/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/fotok' component={Gallery} />
          <Route path='/videok' component={Videos} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
