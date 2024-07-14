import React from "react";

import { Navbar, ProjectsPage, CopyrightFooter } from "./components";

const Projects = () => {
    return (
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <div className="z-40">
                <ProjectsPage />
            </div>
            <div className="bg-black py-5">
                <CopyrightFooter />
            </div>
        </div>
    );
}

export default Projects;