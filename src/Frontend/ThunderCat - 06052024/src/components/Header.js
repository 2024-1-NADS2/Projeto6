import React from 'react';
import LogoImage from '../assets/Logo Escrito 2 Branco PNG.png';
import '../styles/Header.css'; 

function Header() {
    return (
        <main>
            <nav className="menu-principal">
                <div className="menu-links">
                    <div className="logo-e-busca-container"> {/* Container for logo and search bar */}
                        <img src={LogoImage} alt="Logo" className="logteste" />
                        <input type="text" name="ms" className="busca-topo" placeholder="Pesquisa" />
                    </div>
                    <div className="icon-container">
                        {/* Add your icons or other elements here */}
                    </div>
                </div>
            </nav>
        </main>
    );
}

export default Header;



