import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Slider from "react-slick";

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomArrow = ({ className, style, onClick, icon }) => {
    return (
        <div
            className={className}
            style={{ ...style, display: 'none' }} // Hide arrows
            onClick={onClick}
        >
            {icon}
        </div>
    );
};

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        >
            <div className="bg-[#FAF9F6] p-5 rounded-2xl sm:w-[360px] w-full project-card">
                <div className="relative w-full h-[230px]">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover rounded-2xl"
                    />

                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        <div onClick={() => window.open(source_code_link, "_blank")}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <h3 className="text-black font-bold text-[24px]">{name}</h3>
                    <p className="mt-2 text-black text-[14px]">{description}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                            @{tag.name}
                        </p>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

const ProjectsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false, // Hide arrows
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '0',
                    infinite: true,
                    dots: true,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 3000,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '0',
                    initialSlide: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 3000,
                }
            }
        ]
    };

    return (
        <>
            <motion.div
                variants={textVariant}
                className="mt-10"
            >
                <p className={styles.sectionSubText}>My Projects</p>
                <h2 className={styles.sectionHeadText}>Projects.</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1)}
                    className="mt-3 text-gray-300 text-[17px] max-w-3xl leading-[30px] "
                >
                    Welcome to my developer journey! I'm a student constantly learning and expanding my skillset. Here you'll find a collection of my projects – each one a stepping stone in my growth as a developer. From Python automation scripts to Website development using React and Vite (Technologies I've used for developing this website), you can see how I've honed my abilities in various Technologies. Moreover I'm eager to learn about newer and upcoming technologies to sharpen and keep updating myself.
                </motion.p>
            </div>

            <Slider {...settings} className="mt-20 flex justify-center">
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </Slider>
        </>
    );
}

export default SectionWrapper(ProjectsPage, "ProjectsPage");
