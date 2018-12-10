import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => (
    <div className="nav-menu">
        <ul>
            <li>
                <Link className="menu-item" to="/people">People</Link>
            </li>
            <li>
                <Link className="menu-item" to="/films">Films</Link>
            </li>
            <li>
                <Link className="menu-item" to="/starships">Starships</Link>
            </li>
            <li>
                <Link className="menu-item" to="/vehicles">Vehicles</Link>
            </li>
            <li>
                <Link className="menu-item" to="/species">Species</Link>
            </li>
            <li>
                <Link className="menu-item" to="/planets">Planets</Link>
            </li>
        </ul>
    </div>
);

export default NavMenu;
