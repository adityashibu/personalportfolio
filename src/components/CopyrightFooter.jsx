import React from "react";


const CopyrightFooter = () => {
    return (
        <div className="flex py-4 text-gray-400 text-lg justify-center">
            Copyright {new Date().getFullYear()} - Aditya Shibu
        </div>
    );
}

export default CopyrightFooter;