"use client"; // This directive ensures the component is rendered on the client side

import { useEffect } from 'react';
import { gsap } from 'gsap';

const Services = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.service-card');
    
    elements.forEach(element => {
      gsap.fromTo(
        element.querySelector('.service-text'),
        { opacity: 0, y: 20 },
        { opacity: 0, y: 0, duration: 0.5, ease: 'power3.out' }
      );
    });
  }, []);

  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget.querySelector('.service-text'), {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power3.out',
    });
    gsap.to(e.currentTarget.querySelector('.bg-image'), {
      opacity: 0.6,
      duration: 0.5,
      ease: 'power3.out',
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget.querySelector('.service-text'), {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: 'power3.out',
    });
    gsap.to(e.currentTarget.querySelector('.bg-image'), {
      opacity: 1,
      duration: 0.5,
      ease: 'power3.out',
    });
  };

  return (
    <>
        <h2 className="text-7xl bg-gray-50 font-bold text-center pt-16 text-gray-800">Top Sellers</h2>
        <div className="mx-auto sm:p-28 bg-gray-50 grid grid-cols-1 md:grid-cols-2 gap-12">

{/* Left Column with Two Sections */}
<div className="space-y-12">

  {/* Chairs Section */}
  <div
    className="service-card  relative bg-white p-10 rounded-3xl justify-end shadow-2xl overflow-hidden cursor-pointer"
    style={{ height: "500px" ,

    }}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    <div
      className="absolute inset-0 bg-cover bg-center bg-image"
      style={{ backgroundImage: "url('/images/5.jpg')" }}
    ></div>
    <div className="relative z-10 flex items-center justify-center service-text" style={{
            marginTop: '25%',
    }}>
      <div className="text-center">
        <h2 className="text-7xl font-bold text-yellow-600 mb-4">Chairs</h2>
        <p className="text-2xl text-gray-800 font-semibold mb-6">Explore our modern chairs, where sleek design meets exceptional comfort.</p>
        
      </div>
    </div>
  </div>
  
  {/* Velvet Armchair Section */}
  <div
    className="service-card relative bg-white p-10 rounded-3xl shadow-2xl overflow-hidden cursor-pointer"
    style={{ height: "500px" }}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    <div
      className="absolute inset-0 bg-cover bg-center bg-image"
      style={{ backgroundImage: "url('/images/2.jpg')" }}
    ></div>
    <div className="relative z-10 flex items-center justify-center service-text" style={{
            marginTop: '25%',
    }}>
      <div className="text-center">
        <h2 className="text-7xl font-bold text-yellow-600 mb-4">Velvet Armchair</h2>
        <p className="text-2xl text-gray-800 font-semibold">Experience luxury with our velvet armchairs. Their plush texture and elegant design bring both style and comfort to any space.</p>
      </div>
    </div>
  </div>

</div>

{/* Right Column with One Section */}
<div
  className="service-card relative bg-white p-10 rounded-3xl shadow-2xl overflow-hidden cursor-pointer"
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
  <div
    className="absolute inset-0 bg-cover bg-center bg-image"
    style={{ backgroundImage: "url('/images/14.jpg')", transform: 'scale(1.6)' }}
  ></div>
  <div className="relative z-10 flex items-center justify-center service-text" style={{
            marginTop: '50%',
    }}>
    <div className="text-center">
      <h2 className="text-7xl font-bold text-yellow-600 mb-4">Sofa</h2>
      <p className="text-2xl text-gray-800 font-semibold mb-6">Discover our stylish sofas, perfect for any space.</p>
      
    </div>
  </div>
</div>

</div>
    </>
    
  );
};

export default Services;
