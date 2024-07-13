import { useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const ProfileNavbar = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);

    return (
        <nav
            className={`
        ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-black`}
        >
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
                    <p className="text-white text-[18px] font-bold cursor-pointer flex px-1">Aditya &nbsp;<span className="sm:block hidden text-[18px]">|&nbsp; Student Developer</span></p>
                </Link>
            </div>
        </nav>
    )
}

export default ProfileNavbar