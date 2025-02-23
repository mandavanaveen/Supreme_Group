import React, { useState, useEffect } from 'react';
import Logo from "../assets/logo.svg";
import Linked from "../assets/Linked.svg";
import Lang from "../assets/Lang.svg";

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false); // Slowly hide on scroll down
    } else {
      setIsVisible(true); // Smoothly show on scroll up
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-[80px] p-4 bg-white shadow-md flex justify-between items-center transition-transform ease-in-out ${
        isVisible ? "translate-y-0 duration-[500ms]" : "-translate-y-full duration-[1000ms]"
      }`}
      style={{ zIndex: 1000 }}
    >
      <img src={Logo} className='ml-4 md:ml-[134px] w-20 md:w-auto' alt='logo'/>
      <div className='w-auto md:w-[313px] h-[50px] flex flex-col md:flex-row mr-4 md:mr-[150px] justify-between items-center'>
        <button className='flex w-[145px] h-[50px] rounded-full bg-[#5CD6FF] border-[#00BFFF] align-center items-center justify-center text-semibold text-sm md:text-base'>Contact Us</button>
        <div className='w-auto md:w-[128px] h-[24px] flex justify-between items-center mt-2 md:mt-0'>
          <img src={Linked} className='w-[24px] h-[24px]'/>
          <div className='flex items-center space-x-1'>
            <img src={Lang} className='w-[22px] h-[22px]'/>
            <p className='text-sm md:text-base'>ENG</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
