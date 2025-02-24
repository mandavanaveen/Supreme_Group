import React from 'react';
import Logo from "../assets/logo.svg";
import Foote from "../assets/Footer.svg";

const Footer: React.FC = () => {
  return (
    <div className="relative px-6 md:px-24 bg-gradient-to-t from-blue-200 via-white to-white text-black flex flex-col items-start gap-10 md:gap-20">
      <img src={Foote} alt='footer-background' className='absolute right-0 bottom-0 -z-0' />
      
      <img src={Logo} alt='logo-footer' className='mt-10 md:mt-20 w-[180px] md:w-[226px] h-auto' />
      
      <div className='w-full flex flex-wrap md:justify-between gap-20'>
        <ul className="flex flex-col gap-3 text-black">
          <li className="text-lg md:text-2xl font-bold uppercase">Applications</li>
          <li><a href="/applications/apparel" className="text-gray-600 hover:text-black text-sm md:text-xl">Apparel</a></li>
          <li><a href="/applications/automotive" className="text-gray-600 hover:text-black text-sm md:text-xl">Automotive</a></li>
          <li><a href="/applications/filtration" className="text-gray-600 hover:text-black text-sm md:text-xl">Filtration</a></li>
          <li><a href="/applications/customised-nonwoven" className="text-gray-600 hover:text-black text-sm md:text-xl">Customised Solutions</a></li>
        </ul>
        
        <ul className="flex flex-col gap-3 text-black">
          <li className="text-lg md:text-2xl font-bold uppercase">Company</li>
          <li><a href="/who-we-are" className="text-gray-600 hover:text-black text-sm md:text-xl">Innovation</a></li>
          <li><a href="/global-competency" className="text-gray-600 hover:text-black text-sm md:text-xl">Global Competency</a></li>
          <li><a href="/innovation" className="text-gray-600 hover:text-black text-sm md:text-xl">About Us</a></li>
          <li><a href="/esg-impact" className="text-gray-600 hover:text-black text-sm md:text-xl">Contact Us</a></li>
        </ul>
        
        <ul className="flex flex-col gap-3 text-black">
          <li className="text-lg md:text-2xl font-bold uppercase">More</li>
          <li><a href="/careers" className="text-gray-600 hover:text-black text-sm md:text-xl">Careers</a></li>
          <li><a href="/privacy-policy" className="text-gray-600 hover:text-black text-sm md:text-xl">Privacy Policy</a></li>
          <li><a href="/terms-conditions" className="text-gray-600 hover:text-black text-sm md:text-xl">Terms and Conditions</a></li>
        </ul>
        
        <ul className="flex flex-col gap-3 z-10 text-black">
          <li className="text-lg md:text-2xl font-bold uppercase">Follow Us</li>
          <li><a href="https://twitter.com" className="text-gray-600 hover:text-black text-sm md:text-xl">Twitter</a></li>
          <li><a href="https://www.linkedin.com/company/supreme-group-company/" className="text-gray-600 hover:text-black text-sm md:text-xl">LinkedIn</a></li>
          <li><a href="https://instagram.com" className="text-gray-600 hover:text-black text-sm md:text-xl">Instagram</a></li>
          <li><a href="https://medium.com" className="text-gray-600 hover:text-black text-sm md:text-xl">Medium</a></li>
        </ul>
      </div>
      
      <footer className='pb-6 md:pb-10 w-full flex md:flex-row md flex-2 flex-col md:flex-wrap md:justify-between text-center text-[13px] md:text-xl'>
        <p>©2024. All Rights Reserved.</p>
        <p className='text-center md:text-left'>Supreme House, 110, 16th Road, Chembur, Mumbai - 400071.</p>
      </footer>
    </div>
  );
};

export default Footer;
