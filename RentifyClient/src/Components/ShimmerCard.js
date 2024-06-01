import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ShimmerCard = () => {
  const baseColor = "#c5c6d0"; 
  return (
    <div className="shimmer-card">
      <Skeleton height={24} width={'100%'} baseColor={baseColor} className="shimmer-title" />
      <Skeleton height={14} width={`100%`} baseColor={baseColor} className="shimmer-text" />
      <Skeleton height={14} width={`100%`} baseColor={baseColor} className="shimmer-text" />
      <Skeleton height={14} width={`100%`} baseColor={baseColor} className="shimmer-text" />
      <Skeleton height={32} width={'40%'} baseColor={baseColor} className="shimmer-button" />
    </div>
  );
}

export default ShimmerCard;