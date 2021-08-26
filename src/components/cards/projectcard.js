import React from 'react';

export default function Card({ project, handleFocusChange }) {
    
    return (
        <>
            <figure 
            className="card-image"
            id={ `project${project.id}` }
            onClick={ () => handleFocusChange( project ) }>

                <img 
                src={ `./assets/images/stock-${project.id}.png` } 
                alt={ project.subheader } />
                
                <figcaption>{ project.name }</figcaption>
            </figure>
        </>
    );
}
