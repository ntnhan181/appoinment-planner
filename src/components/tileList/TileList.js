import React from 'react';
import { Tile } from '../tile/Tile';

export const TileList = ({ objArr }) => {
  return (
    <div>
      {objArr.map((value, index) => (
        <Tile value={value} key={index} />
      ))}
    </div>
  );
};
