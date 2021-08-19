import './SCSS/Main.css';
import { About } from './components/About';
import { Gallery } from './components/Gallery/Gallery';
import { Contact } from './components/Contact';
import { Logo } from './components/Logo';
import { Socials } from './components/Socials';
/* import { Partners } from './components/Partners'; */
import { Email } from './components/Email';

const App = () => {
  return (
    <div className="App">
      <Logo />
      <Contact/>
      <Gallery/>
      <About/>
      <Email/>
      <Socials/>
      {/* <Partners/> */}
    </div>
  );
}

export default App;
