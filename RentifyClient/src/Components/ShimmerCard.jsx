import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ShimmerCard = () => {
  const baseColor = "#c5c6d0"; 
  return (
    <div className="border-1 border-slate-300 rounded-md w-[420px] p-[15px] mt-[10px]">
      <Skeleton height={24} width={'100%'} baseColor={baseColor} className="shimmer-title" />
      <Skeleton height={14} width={`100%`} baseColor={baseColor} className="shimmer-text" />
      <Skeleton height={250} width={`100%`} baseColor={baseColor} className="shimmer-text" />
      <Skeleton height={14} width={`100%`} baseColor={baseColor} className="shimmer-text" />
      <Skeleton height={14} width={`100%`} baseColor={baseColor} className="shimmer-text" />
      <Skeleton height={32} width={'40%'} baseColor={baseColor} className="shimmer-button" />
    </div>
  );
}

export default ShimmerCard;