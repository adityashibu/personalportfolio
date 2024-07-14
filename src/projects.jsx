import React from "react";

import { Navbar, ProjectsPage, CopyrightFooter, StarsCanvas, Works } from "./components";

const Projects = () => {
    return (
        <div>
            <Navbar />
            <div className="z-40">
                <ProjectsPage />
                <Works />
            </div>
            <div className="bg-black py-5">
                <StarsCanvas />
                <CopyrightFooter />
            </div>
        </div>
    );
}

export default Projects;