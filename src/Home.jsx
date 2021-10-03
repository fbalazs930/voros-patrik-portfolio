import React from 'react';
import { Logo } from './components/Logo';
import { Contact } from './components/Contact';
import { Gallery } from './components/Gallery/Gallery';
import { Email } from './components/Email';
import { Socials } from './components/Socials';


const Home = () => {
    return (
        <div className="App">
            {/* <Logo /> */}
            <Contact/>
            <Gallery/>
            <Email/>
            <Socials/> 
        </div>
    );
}

export default Home;
