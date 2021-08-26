import React, { useState } from 'react';
import ProjectList from '../../data/projects';
import Card from '../cards/projectcard';
import Focus from '../cards/projectfocus';

export default function Projects() {

    const [focusProject, setFocusProject] = useState([]);

    const handleFocusChange = (project) => setFocusProject(project);

    return (
        <>
            <article className="project-preview" >
                <Focus project={focusProject} />
            </article>

            <aside className="project-choices">
            {
                ProjectList.map( (project) => (
                    <Card project={project} handleFocusChange={handleFocusChange} />
                ))
            }
            </aside>

            

        </>
    );
}
