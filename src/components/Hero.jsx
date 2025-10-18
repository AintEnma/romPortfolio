import { memo } from 'react';
import HeroPic from '../assets/image (1).png'
const Hero = () => {
  return (
    <div className='bg-main relative'>
      <nav className='bg-transparent text-dark py-4 px-4 w-full z-10 relative'>
        <div className='flex justify-between items-center w-full'>
            <div className='font-bold text-lg px-6 text-primary px-35 font-serif'>
                Rom Denielle Navarro
            </div>
            <div className='space-x-8 px-35 font-bold'>
                <a href="#about" className='!text-black font-medium font-serif'>About</a>
                <a href="#projects" className='!text-black font-medium font-serif'>Projects</a>
                <a href="#contacts" className='!text-black font-medium font-serif'>Contact</a>
            </div>
        </div>
      </nav>
      <div className='text-dark text-left py-16 px-38.5'>
        <img src={HeroPic} alt=""
        className='absolute top-0 right-0 w-170 h-170 opacity-100 z-0'/>
        <h1 className='text-4xl font-bold font-serif'>
          Hello, my name<br />
          is{" "}
          <span className='text-primary font-serif'>
            Rom Denielle<br />
            Navarro
          </span>
        </h1>
        <p className='mt-10 text-lg text-gray-500 font-serif'>
          BSIT Student, An Aspiring IT Professional.
        </p>
        <p className='mt-4 text-lg text-gray-500 font-serif'>
          Welcome to my Portfolio.
        </p>
        <div className='mt-8 space-x-4'>
          <button className='!bg-[#FDC435] text-black transform transition-transform duration-300 hover:scale-105 px-6 py-2 rounded-lg mr-4'>
            Projects
          </button>
          <button className='!bg-white text-black !border !border-black transform transition-transform duration-300 hover:scale-105 px-6 py-2 rounded-lg mr-4'>
            LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(Hero);
