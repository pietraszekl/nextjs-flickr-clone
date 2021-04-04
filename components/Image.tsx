import React from 'react';
import NextImage from 'next/image';

const Image = ({ item, width, height, layout }) => (
  <>
    <NextImage
      src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`}
      width={width ? width : '200'}
      height={height ? height : ''}
      layout={layout ? layout : 'intrinsic'}
      alt={item.title ? item.title : 'Photo details'}
    />
  </>
);

export default Image;
