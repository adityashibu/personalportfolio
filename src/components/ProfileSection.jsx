import React from 'react';
import { personalpicture } from '../assets';

import { SectionWrapper } from '../hoc';

const ProfileSection = () => {
    return (
        <div className="container mx-auto flex flex-col items-center sm:items-start">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center w-full max-w-4xl">
                <div className="flex justify-center sm:justify-start col-span-1 sm:col-span-1 -mt-10">
                    <div className="w-45 h-45 sm:w-70 sm:h-70 rounded-full overflow-hidden border-4 border-white">
                        <img src={personalpicture} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="col-span-1 sm:col-span-2 text-center sm:text-left">
                    <h1 className="text-white text-3xl sm:text-5xl font-bold">Aditya S</h1>
                    <p className="text-gray-400 text-lg sm:text-2xl mt-2">Student Developer</p>
                </div>
            </div>
        </div>
    );
}

export default SectionWrapper(ProfileSection, "Profile");