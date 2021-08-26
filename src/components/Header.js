import React from 'react';

export default function Header({currentPage}){
    return(
        <header className="header">
            <h1 className="mainheader">David Lucio<span>Digital Portfolio</span></h1>
            <h2 className="subheader">{ currentPage === "" ? "Welcome" : currentPage }</h2>
        </header>
    );
}