import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';

import { SectionWrapper } from "../hoc";

const Socials = () => {
    300
    return (
        <div className="flex space-x-5 justify-center sm:space-x-12">
            <a href="https://www.linkedin.com/in/adityashibu" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <FaLinkedin className="sm:hidden" style={{ fontSize: 30 }} />
                <FaLinkedin className="hidden sm:inline-block" style={{ fontSize: 30 }} />
            </a>
            <a href="https://github.com/adityashibu" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <FaGithub className="sm:hidden" style={{ fontSize: 30 }} />
                <FaGithub className="hidden sm:inline-block" style={{ fontSize: 30 }} />
            </a>
            <a href="https://instagram.com/adwii.iii" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <FaInstagram className="sm:hidden" style={{ fontSize: 30 }} />
                <FaInstagram className="hidden sm:inline-block" style={{ fontSize: 30 }} />
            </a>
            <a href="https://wa.me/971543547825" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <FaWhatsapp className="sm:hidden" style={{ fontSize: 30 }} />
                <FaWhatsapp className="hidden sm:inline-block" style={{ fontSize: 30 }} />
            </a>
        </div>
    );
}

export default Socials;