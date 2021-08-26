import React from 'react';

export default function Focus({ project }) {
    
    if(project.id !== undefined){
        return (
            <>
                <h3>{ project.name }</h3>
                
                <img src={ `./assets/images/example-${project.id}.png` } alt={ project.subheader } />

                <div className="description">
                    <h4>{ project.subheader }</h4>
                    <p>{ project.description } <a href={ project.url.deploy } target="_blank">Try it out...</a></p>
                    <p className="repository-link">Visit the <a href={ project.url.repo } target="_blank">Repository</a></p>
                </div>
                
            </>
        );
    }
    else{
        return (
            <h3 className="center">Select a Project</h3>
        )
    }
    
}
