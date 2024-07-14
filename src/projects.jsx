import React from "react";

import { Navbar, StarsCanvas, ProjectsPage } from "./components";

const Projects = () => {
    return (
        <div>
            <Navbar />
            <ProjectsPage />
            <StarsCanvas />
        </div>
    );
}

export default Projects;