"use client";
import React, { useState, useRef, useEffect } from 'react';
import './Slider.css'; // Import CSS for the slider

const Slider = () => {
  const [sliding, setSliding] = useState(false);
  const [startClientX, setStartClientX] = useState(0);
  const [startPixelOffset, setStartPixelOffset] = useState(0);
  const [pixelOffset, setPixelOffset] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = useRef(0);
  const slidesRef = useRef(null);

  // Update slide count when component mounts or slides change
  useEffect(() => {
    slideCount.current = document.querySelectorAll('.slide').length;
  }, []);

  useEffect(() => {
    const handleMouseDown = (event) => {
      setSliding(true);
      setStartClientX(event.clientX);
      setStartPixelOffset(pixelOffset); // Updated startPixelOffset
    };

    const handleMouseMove = (event) => {
      if (sliding) {
        const deltaSlide = event.clientX - startClientX;
        const touchPixelRatio = (currentSlide === 0 && event.clientX > startClientX) ||
                                 (currentSlide === slideCount.current - 1 && event.clientX < startClientX)
                                 ? 3 : 1;
        setPixelOffset(startPixelOffset + deltaSlide / touchPixelRatio);

        if (slidesRef.current) {
          slidesRef.current.style.transform = `translateX(${pixelOffset}px)`;
        }
      }
    };

    const handleMouseUp = () => {
      if (sliding) {
        setSliding(false);
        const newSlide = pixelOffset < startPixelOffset ? currentSlide + 1 : currentSlide - 1;
        const clampedSlide = Math.min(Math.max(newSlide, 0), slideCount.current - 1);
        setCurrentSlide(clampedSlide);
        const newPixelOffset = clampedSlide * -window.innerWidth;
        setPixelOffset(newPixelOffset);

        if (slidesRef.current) {
          slidesRef.current.style.transition = 'all 0.5s ease-out';
          slidesRef.current.style.transform = `translateX(${newPixelOffset}px)`;
        }
      }
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [sliding, startClientX, startPixelOffset, pixelOffset, currentSlide]);

  return (
    <div id="slides" ref={slidesRef}>
      <div className="slide" style={{ backgroundImage: 'url(/images/12.jpg)' }}> 
        <div id='heroh1' className='px-20 text-center'>
          Design Your <span className='text-yellow-600'> Perfect </span> Home 
          <h2 id='heroh2' className='px-20'>
          With Our Unique Furniture
        </h2>
        <p id='herop' className='px-20'>At SS furniture we offer furniture designed to reflect your personal style and comfort. From contemporary sofas to classic dining sets, each piece combines quality and detail.</p>
        
        <div className='max-w-md mt-10 mx-auto'>
    <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <div className="grid place-items-center h-full w-12 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input
        className="peer h-full w-full p-10 text-sm text-gray-700 pr-2 font-serif"
        type="text"
        id="search"
        placeholder="Search something.." /> 
    </div>
</div>
        </div>
        
        
      </div>    
      <div className="slide" style={{ backgroundImage: 'url(/images/12.jpg)' }}></div>
      <div className="slide" style={{ backgroundImage: 'url(/images/12.jpg)' }}></div>
      <div className="slide" style={{ backgroundImage: 'url(/images/12.jpg)' }}></div>
      <div className="slide" style={{ backgroundImage: 'url(/images/12.jpg)' }}></div>
    </div>
  );
};

export default Slider;
