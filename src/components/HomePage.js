import React, { useState } from 'react';

import Header from "./Header";
import Footer from "./Footer";
import Navigation from './Navigation';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function HomePage() {
    const [currentPage, setCurrentPage] = useState('');
    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'Projects') {
            return <Projects />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <Home />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <>

            <Header currentPage={currentPage} />

            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />

            <section className="content" id={currentPage}>
                {renderPage()}
            </section>
            

            <Footer />
        </>
    );
}
