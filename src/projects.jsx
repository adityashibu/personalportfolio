import React from "react";

import { Navbar, StarsCanvas, ProjectsPage, CopyrightFooter } from "./components";

const Projects = () => {
    return (
        <div>
            <Navbar />
            <div>
                <ProjectsPage />
            </div>
            <div className="bg-black py-5">
                <CopyrightFooter />
                <StarsCanvas />
            </div>
        </div>
    );
}

export default Projects;