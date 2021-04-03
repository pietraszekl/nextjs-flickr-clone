import React from 'react';
import NextImage from 'next/image';
import { FOOTER } from '@/lib/constants';

const Image = ({ item }) => (
  <>
    <NextImage
      src={
        'https://live.staticflickr.com/' +
        item.server +
        '/' +
        item.id +
        '_' +
        item.secret +
        '.jpg'
      }
      width={200}
      height=""
      alt={item.title}
    />
  </>
);

export default Image;
