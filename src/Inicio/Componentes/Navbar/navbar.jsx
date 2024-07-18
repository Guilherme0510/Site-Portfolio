import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from 'react-scroll'; 
import '../../Componentes/main.css';
import '../Navbar/navbar.css';

function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }

        if (window.scrollY < lastScrollY || window.scrollY === 0) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <nav className={`navbar navbar-expand-lg flex-column align-items-center fixed-top ${isVisible ? 'navbar-mostra' : 'navbar-esconde'} ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container-fluid justify-content-center">
                <a className="navbar-brand" href="/home">
                    <img src="../../../img/logo.png" alt="Logo" className="navbar-logo img-fluid" />
                </a>
            </div>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="inicio" className="nav-link smooth-scroll">Inicio</Link>
                        <Link to="sobre" className="nav-link">Sobre</Link>
                        <Link to="habilidades" className="nav-link">Habilidades</Link>
                        <Link to="projetos" className="nav-link">Projetos</Link>
                        <Link to="contato" className="nav-link">Contato</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
