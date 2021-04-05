import React from 'react';
import NextImage from 'next/image';
import { FlickrImage } from '@/types/components';

const Image = ({ item, width, height, layout, className }: FlickrImage) => (
  <>
    <NextImage
      src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`}
      width={width ? width : '200'}
      height={height ? height : ''}
      layout={layout ? layout : 'intrinsic'}
      alt={item.title ? item.title._content : 'Photo details'}
      className={className}
    />
  </>
);

export default Image;
