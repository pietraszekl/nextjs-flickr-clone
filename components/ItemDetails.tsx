import React from 'react';
import Image from '@/components/Image';
import Share from '@/components/Share';
import { PhotoItem } from '@/types/components';

const ItemDetails = ({ item }: PhotoItem) => {
  const hostname =
    typeof window !== 'undefined' && window.location.hostname
      ? window.location.hostname
      : '';
  return (
    <article className="max-w-7xl mx-auto">
      <h1 className="font-bold text-3xl mb-4">{item.title._content}</h1>
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="mt-5 md:mt-0 md:col-span-2  mb-4">
          <Image item={item} width="500" height="500" layout="responsive" />
        </div>
        <div className="md:col-span-1">
          <ul>
            <li>Author: {item.owner.username}</li>
            <li>Date: {item.dateuploaded}</li>
            <li>
              Tags:{' '}
              {item.tags.tag.map((tag) => (
                <span
                  key={tag.id}
                  className="p-1 bg-gray-300 inline-block mr-1 mb-1"
                >
                  {tag.raw}
                </span>
              ))}
            </li>
            <li>{item.description._content}</li>
          </ul>
        </div>
      </div>

      <Share title={item.title._content} url={`${hostname}/${item.id}`} />
    </article>
  );
};

export default ItemDetails;
