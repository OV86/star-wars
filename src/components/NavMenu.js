import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => (
    <div className="page-header">
        <div className="content-container">
            <div className="nav-menu">
                <div className="nav-menu__item">
                    <Link className="link-item" to="/dashboard">Search</Link>
                </div>
                <div className="nav-menu__item">
                    <Link className="link-item" to="/people">People</Link>
                </div>
                <div className="nav-menu__item">
                    <Link className="link-item" to="/films">Films</Link>
                </div>
                <div className="nav-menu__item">
                    <Link className="link-item" to="/starships">Starships</Link>
                </div>
                <div className="nav-menu__item">
                    <Link className="link-item" to="/vehicles">Vehicles</Link>
                </div>
                <div className="nav-menu__item">
                    <Link className="link-item" to="/species">Species</Link>
                </div>
                <div className="nav-menu__item">
                    <Link className="link-item" to="/planets">Planets</Link>
                </div>
            </div>
        </div>
    </div>
);

export default NavMenu;
