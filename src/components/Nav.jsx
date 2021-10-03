import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='nav'>
            <div>
                <Link to='/'>
                    <img src="https://i.postimg.cc/g0NZ5nqV/VP-logos-white.png" alt="" />
                </Link>
            </div>
            <ul>
                <li>
                    <Link to='/rolam' className="nav-link">
                        Rólam
                    </Link>
                </li>
                <li>
                    <Link to='/fotok' className="nav-link">
                        Fotók
                    </Link>
                </li>
                <li>
                    <Link to='/videok' className="nav-link">
                        Videók
                    </Link>
                </li>
                <li>
                    <Link to='/elerhetoseg' className="nav-link">
                        Elérhetőség
                    </Link>
                </li>
            </ul>
        </div>


    )
}

export default Nav;