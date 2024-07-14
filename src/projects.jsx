import React from "react";

import { Navbar, StarsCanvas, ProjectsPage, CopyrightFooter } from "./components";

const Projects = () => {
    return (
        <div>
            <Navbar />
            <ProjectsPage />
            <StarsCanvas />
            <div className="bg-black py-5">
                <CopyrightFooter />
            </div>
        </div>
    );
}

export default Projects;