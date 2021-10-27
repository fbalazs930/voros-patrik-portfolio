import React from 'react';
import './SCSS/Main.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import { Gallery } from './components/Gallery/Gallery';
import { Videos } from './components/Gallery/Videos';
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { Email } from './components/Email';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Email/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/fotok' component={Gallery} />
          <Route path='/videok' component={Videos} />
          <Route path='/elerhetoseg' component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
