import React from "react";

import { Navbar, ProjectsPage, CopyrightFooter } from "./components";

const Projects = () => {
    return (
        <div>
            <Navbar />
            <div>
                <ProjectsPage />
            </div>
            <div className="bg-black py-5">
                <CopyrightFooter />
            </div>
        </div>
    );
}

export default Projects;