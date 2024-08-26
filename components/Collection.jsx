"use client";
import { useState, useEffect } from 'react';
import StarRating from './StarRating'; // Adjust the import path as needed

const Collection = () => {
  const [collections, setCollections] = useState([]);
  const [filteredCollections, setFilteredCollections] = useState([]);
  const [visibleItems, setVisibleItems] = useState(6);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const res = await fetch('/api');
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setCollections(data);
        setFilteredCollections(data);
      } catch (error) {
        console.error('Failed to fetch collections:', error);
      } finally {
        setLoading(false); // Set loading to false after data fetch is complete
      }
    };
    fetchCollections();
  }, []);

  const handleFilter = (category) => {
    if (category === 'All') {
      setFilteredCollections(collections);
    } else {
      setFilteredCollections(collections.filter(item => item.category === category.toLowerCase()));
    }
  };

  if (loading) {
    return (
      <div className='flex space-x-2 justify-center items-center bg-black h-screen dark:invert'>
        <span className='sr-only'>Loading...</span>
        <div className='h-8 w-8 bg-gray-50 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
        <div className='h-8 w-8 bg-gray-50 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
        <div className='h-8 w-8 bg-gray-50 rounded-full animate-bounce'></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 flex justify-center items-center min-h-screen">
      <div className="container mx-auto py-10">
        <div className="text-center mb-10">
          <h2 className="text-7xl font-bold text-gray-800">Our Collections</h2>
          <div className="flex justify-center space-x-8 mt-8">
            <button 
              onClick={() => handleFilter('All')} 
              className="px-8 py-2 text-2xl rounded-3xl bg-white border border-gray-300 text-gray-800 hover:bg-gray-100">
              All Products
            </button>
            <button 
              onClick={() => handleFilter('chair')} 
              className="px-8 py-2 text-2xl rounded-3xl bg-white border border-gray-300 text-gray-800 hover:bg-gray-100">
              Chair
            </button>
            <button 
              onClick={() => handleFilter('sofa')} 
              className="px-8 py-2 text-2xl rounded-3xl bg-white border border-gray-300 text-gray-800 hover:bg-gray-100">
              Sofa
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredCollections.slice(0, visibleItems).map((item, index) => (
            <div key={index} className="backgroundCollection rounded-lg p-6">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full cursor-pointer hover:scale-105 transition-transform duration-300 hh object-cover rounded-3xl mb-4"/>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-xl text-yellow-500 font-bold">{item.price}</p>
                </div>
                <div className='scale-125 pr-2'>
                  <StarRating rating={item.star} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleItems < filteredCollections.length && (
          <div className="text-center mt-8">
            <button 
              onClick={() => setVisibleItems(visibleItems + 6)} 
              className="px-8 py-2 text-2xl rounded-3xl bg-white border border-gray-300 text-gray-800 hover:bg-gray-100">
              View More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collection;
