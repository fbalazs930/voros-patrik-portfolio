import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => { setClick(false) };
    window.addEventListener('resize', () => {
        setClick(false);
        if (window.innerWidth < 768) {
        }
    });
    return (
        <div className='nav'>
            <i className="fas.fa-bars"></i>
            <div className="logo">
                <Link to='/'>
                    <img src="https://i.postimg.cc/g0NZ5nqV/VP-logos-white.png" alt="" />
                </Link>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <Link onClick={closeMenu} to='/rolam' className="nav-link">
                    Rólam
                </Link>
                <Link onClick={closeMenu} to='/fotok' className="nav-link">
                    Fotók
                </Link>
                <Link onClick={closeMenu} to='/videok' className="nav-link">
                    Videók
                </Link>
                <Link onClick={closeMenu} to='/elerhetoseg' className="nav-link">
                    Elérhetőség
                </Link>
            </ul>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
        </div>


    )
}

export default Nav;