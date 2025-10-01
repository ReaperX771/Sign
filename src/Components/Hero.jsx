import React from 'react';
import or from '../assets/images/or.png';
import ora from '../assets/images/oran.jfif';
import spiral from '../assets/images/spiral.jpg'
import leaf from '../assets/images/leaf.jpg'

function Hero() {
  return (
    <section
      className='min-h-screen relative overflow-x-hidden overflow-y-hidden'
      style={{
        backgroundImage: `url(${ora})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='pt-20 w-full max-w-5xl mx-auto flex flex-col justify-center xl:justify-between min-h-[calc(100vh-5rem)] relative z-10'>
        <div className='w-full mb-8'>
          <h1 className='text-white text-center text-4xl mt-10 sm:text-5xl md:text-6xl font-bold leading-tight'>Welcome to the dynasty</h1>
          <h1 className='text-xl sm:text-2xl md:text-3xl text-center text-white/70 font-bold mt-2'>where innovation creates wealth</h1>
        </div>
        <div className='flex justify-center xl:justify-start items-center mb-8 relative w-full'>
          {/* Orange image: centered on mobile to lg, overflowing left on xl */}
          <img 
            src={or} 
            className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto xl:mx-0 xl:absolute xl:-left-72 xl:translate-y-10 rounded-lg shadow-lg z-0' 
            alt='Hero'
          />
          {/* Placeholder for center space on xl */}
          <div className='hidden xl:block w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex justify-center min-h-48'></div>
        </div>
        <div className='text-center flex flex-col sm:flex-row items-center justify-center gap-4 w-[80%] mx-auto pb-3'>
          <a
            href="/pdfs/whitepaper.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className='bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-black duration-700 w-full sm:w-auto flex items-center justify-center'
          >
            Whitepaper
          </a>
        </div>
      </div>
      
      {/* Spiral image overflowing to top right */}
      <img 
        src={spiral} 
        className='hidden xl:block absolute top-20 -right-40 -mt-[52px] w-32 sm:w-48 md:w-64 lg:w-80 xl:w-110 rounded-lg shadow-lg z-20'
        alt='Hero'
      />
      
      {/* Leaf image overflowing to bottom right below spiral */}
      <img 
        src={leaf} 
        className='hidden xl:block absolute bottom-0 right-0 w-32 sm:w-48 md:w-64 lg:w-20 xl:w-40 rounded-lg shadow-lg z-20'
        alt='Hero'
      />
    </section>
  );
}

export default Hero;