import { memo } from 'react';

const Navbar = () => {
  return (

      <nav className='bg-main text-dark py-4 px-6 w-full'>
        <div className='flex justify-between items-center w-full'>
            <div className='font-bold text-lg px-6 text-primary'>
                Rom Denielle Navarro
            </div>
            <div className='space-x-8 px-6'>
                <a href="#about" className='text-primary font-medium hover:text-dark'>About</a>
                <a href="#projects" className='text-primary font-medium hover:text-dark'>Projects</a>
                <a href="#contacts" className='text-primary font-medium hover:text-dark'>Contact</a>
            </div>
        </div>
    </nav>

  );
};

export default memo(Navbar);
 