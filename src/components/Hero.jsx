import { memo } from 'react';
import HeroPic from '../assets/heroPic1.png'
const Hero = () => {
  return (
    <div className='bg-main'>
      <div className='text-dark text-center py-16 px-12'>
        <img src={HeroPic} alt=""
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover'/>
        <h1 className='text-4xl font-bold'>
          I'm {""}
          <span className='text-primary'>
            Rom Denielle C. Navarro
          </span>
          , BSIT Student
        </h1>
        <p className='mt-4 text-lg text-accent'>
          An Aspiring IT Professional.
        </p>
        <p className='mt-4 text-lg text-accent'>
          Welcome to my Portfolio.
        </p>
        <div className='mt-8 space-x-4'>
          <button className='bg-primary text-white transform transition-transform duration-300 hover:scale-105 px-6 py-2 rounded-full mr-4'>
            Contact With Me
          </button>
          <button className='bg-accent text-dark transform transition-transform duration-300 hover:scale-105 px-6 py-2 rounded-full mr-4'>
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(Hero);
