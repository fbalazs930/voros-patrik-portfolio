import React from 'react';
import './SCSS/Main.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { About } from './components/About';
import Nav from './components/Nav';
import { Contact } from './components/Contact';
import { Gallery } from './components/Gallery/Gallery';
import { Videos } from './components/Gallery/Videos';
import { Prologue } from './components/Gallery/Prologue';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact component={Prologue} />
          <Route path='/rolam' component={About} />
          <Route path='/fotok' component={Gallery} />
          <Route path='/videok' component={Videos} />
          <Route path='/elerhetoseg' component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
