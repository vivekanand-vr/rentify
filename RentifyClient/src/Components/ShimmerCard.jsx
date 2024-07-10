import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ShimmerCard = () => {
  const baseColor = "#c5c6d0"; 
  return (
    <div className="border-[1px] border-[solid] border-[lightgray] rounded-[5px] w-[400px] p-[15px] mt-[10px] [box-shadow:0_4px_8px_rgba(0,_0,_0,_0.1)]">
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