import React from 'react';
import { Gallery } from './Gallery/Gallery';
import { Contact } from './Contact';
import { Logo } from './Logo';
import { Socials } from './Socials';
/* import { Partners } from './Partners'; */
import { Email } from './Email';

const Home = () => {
    return (
        <>
            <Logo />
            <Contact />
            <Gallery />
            <Email />
            <Socials />
            {/* <Partners/> */}
        </>
    );
}

export default Home;
