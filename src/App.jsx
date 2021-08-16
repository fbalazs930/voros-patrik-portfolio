import { About } from './components/About';
import { Gallery } from './components/Gallery/Gallery';
import { Contact } from './components/Contact';
import { Logo } from './components/Logo';
import './SCSS/Main.css';
import { Socials } from './components/Socials';
import { Partners } from './components/Partners';

const App = () => {
  return (
    <div className="App">
      <Logo />
      <Contact/>
      <Gallery/>
      <About/>
      <Socials/>
      <Partners/>
    </div>
  );
}

export default App;
