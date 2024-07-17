import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const PropertyDetailsShimmer = () => {
  const baseColor = "#c5c6d0"; 

  return (
    <div className="max-w-4xl mx-auto my-3 p-3 bg-white border border-gray-300 rounded-lg shadow-lg">
      {/* Title */}
      <Skeleton height={35} width={'60%'} baseColor={baseColor} className="mb-2" />

      {/* Location */}
      <Skeleton height={25} width={'40%'} baseColor={baseColor} className="mb-2" />

      {/* Image */}
      <Skeleton height={600} width={'100%'} baseColor={baseColor} className="mb-4" />

      {/* Details */}
      <div className="text-sm md:text-base grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
        <Skeleton height={30} width={'100%'} baseColor={baseColor} className="mb-2" />
        <Skeleton height={30} width={'100%'} baseColor={baseColor} className="mb-2" />
        <Skeleton height={30} width={'100%'} baseColor={baseColor} className="mb-2" />
        <Skeleton height={30} width={'100%'} baseColor={baseColor} className="mb-2" />
        <Skeleton height={30} width={'100%'} baseColor={baseColor} className="mb-2" />
      </div>

      {/* Highlights */}
      <Skeleton height={30} width={'30%'} baseColor={baseColor} className="mb-2" />
      <Skeleton height={30} width={'100%'} baseColor={baseColor} className="mb-4" />

      {/*Additional Details */}
      <Skeleton height={30} width={'100%'} baseColor={baseColor} className="mb-2" />
      <Skeleton height={30} width={'100%'} baseColor={baseColor} className="mb-2" />
      <Skeleton height={30} width={'100%'} baseColor={baseColor} className="mb-2" />
      <Skeleton height={30} width={'100%'} baseColor={baseColor} className="mb-2" />
      <Skeleton height={30} width={'100%'} baseColor={baseColor} className="mb-2" />

      {/* Button */}
      <Skeleton height={40} width={'40%'} baseColor={baseColor} className="mb-4" />
    </div>
  );
}

export default PropertyDetailsShimmer;
