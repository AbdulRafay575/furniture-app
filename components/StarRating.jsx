import React from 'react';

// Function to generate the star SVG
const StarRating = ({ rating }) => {
  // Determine the number of full stars, half stars, and empty stars
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {/* Render full stars */}
      {[...Array(fullStars)].map((_, index) => (
        <svg
          key={`full-${index}`}
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-8.54-1.24L12 2 10.54 8l-8.54 1.24 6.46 4.73L5.82 21z" />
        </svg>
      ))}
      
      {/* Render half star if needed */}
      {hasHalfStar && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-8.54-1.24L12 2 10.54 8l-8.54 1.24 6.46 4.73L5.82 21zM12 15.4l-3.76 2.18L9.28 12 6 8.3l4.21-.6L12 3.5l1.79 4.2 4.21.6-3.28 3.7 1.04 5.42L12 15.4z" />
        </svg>
      )}
      
      {/* Render empty stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <svg
          key={`empty-${index}`}
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-8.54-1.24L12 2 10.54 8l-8.54 1.24 6.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
