import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const { scrollTo } = location.state;
      const element = document.getElementById(scrollTo);
      if (element) {
        scroll.scrollTo(scrollTo, {
          smooth: true,
          duration: 500,
          offset: -70,
        });
      }
    }
  }, [location]);

  const handleNavClick = (nav) => {
    if (location.pathname === '/projects' || location.pathname === '/profile') {
      if (nav.id === 'about' || nav.id === 'contact' || nav.id === 'work') {
        navigate('/', { replace: true, state: { scrollTo: nav.id } });
      } else {
        navigate(`/${nav.id}`);
      }
    } else {
      const element = document.getElementById(nav.id);
      if (element) {
        scroll.scrollTo(nav.id, {
          smooth: true,
          duration: 500,
          offset: -70,
        });
      }
    }
    setActive(nav.title);
    setToggle(false);
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-black`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <RouterLink
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex px-1">Aditya &nbsp;<span className="sm:block hidden text-[18px]">|&nbsp; Student Developer</span></p>
        </RouterLink>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li key={link.id}
              className={`
                ${active === link.title ? "text-white" : "text-gray-400"} hover:text-white text-[18px] font-medium cursor-pointer
              `}
              onClick={() => handleNavClick(link)}
            >
              {link.id === 'profile' || link.id === 'projects' ? (
                <RouterLink to={`/${link.id}`}>{link.title}</RouterLink>
              ) : (
                <Link to={link.id} smooth={true} duration={500} offset={-70}>{link.title}</Link>
              )}
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-gray-400" : "text-white"
                    }`}
                  onClick={() => handleNavClick(nav)}
                >
                  {nav.id === 'profile' || nav.id === 'projects' ? (
                    <RouterLink to={`/${nav.id}`}>{nav.title}</RouterLink>
                  ) : (
                    <Link to={nav.id} smooth={true} duration={500} offset={-70}>{nav.title}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
