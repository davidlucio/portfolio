import React from 'react';

export default function Navigation({ currentPage, handlePageChange }) {
    return (
        <nav className="navigation-menu">
            <div className={ currentPage === 'Home' ? 'menu-item selected' : 'menu-item'}>
                <a href="#home" onClick={() => handlePageChange('Home')} className="menu-link">
                    Home
                </a>
            </div>

            <div className={ currentPage === 'Projects' ? 'menu-item selected' : 'menu-item'}>
                <a href="#projects" onClick={() => handlePageChange('Projects')} className="menu-link">
                    Projects
                </a>
            </div>

            <div className={ currentPage === 'Contact' ? 'menu-item selected' : 'menu-item'}>
                <a href="#contact" onClick={() => handlePageChange('Contact')} className="menu-link">
                    Contact
                </a>
            </div>

            <div className='menu-item'>
                <a href="./assets/downloads/dlucio-cv-2021.pdf" className="menu-link" target="_blank">
                    Resume
                </a>
            </div>

            {/** MAKE A SECONDARY NAV FOR RESPONSIVE */}

        </nav>
    );
}
