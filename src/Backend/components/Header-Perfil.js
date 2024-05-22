import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import LogoImage from '../assets/Logo Escrito 2 Branco PNG.png';
import '../styles/Header.css'; 

function Header() {
    return (
        <main>
            <nav className="menu-principal">
            <div className="logo-container">
                    <Link to="/feed">
                    <img src={LogoImage} alt="Logo" className="logo" />
                    </Link>
                </div>
                <div className="search-container">
                    <input type="text" name="ms" className="search-input" placeholder="Pesquisa" />
                </div>
                <div className="icon-container">
                    <Link to="/feed" className="link-icon">
                        <FontAwesomeIcon icon={faHome} className="feed-icon" />
                    </Link>
                    <span className="icon-spacing"></span> {/* Adicionando um espaço */}
                    <Link to="/" className="link-icon">
                        <FontAwesomeIcon icon={faSignOutAlt} className="logout-icon" />
                    </Link>
                </div>
            </nav>
        </main>
    );
}

export default Header;







