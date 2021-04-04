import React from 'react';
import Link from 'next/link';
import { parseISO, format } from 'date-fns';
import { FlickrItem } from '@/types/components';
import Image from '@/components/Image';

const ListItem = ({ item }: FlickrItem) => {
  return (
    <div className="border-b bg-white  md:flex md:w-full  ">
      <div className="relative z-20 ">
        <Link as={item.id} href="/[item]">
          <a className="cursor-pointer mx-auto block">
            <Image
              item={item}
              width="200"
              height=""
              layout=""
              className="mx-auto block"
            />
          </a>
        </Link>
      </div>
      <div className="self-start flex-auto flex flex-wrap items-baseline pb-2  md:pb-0 md:p-6">
        <div className="w-full relative flex flex-wrap items-baseline -mt-6 pt-6 pb-4">
          <Link as={item.id} href="[slug]">
            <h2 className="font-bold text-xl cursor-pointer">
              <a aria-label={item.title}>{item.title}</a>
            </h2>
          </Link>
        </div>
        <p className=" order-1 w-full md:w-auto md:ml-4 md:order-2">
          Published {format(parseISO(item.datetaken), 'PPPpp')} {}
        </p>
        <Link href={`https://www.flickr.com/photos/${item.owner}`}>
          <a className="text-blue-500 order-2 md:order-1">Photo author</a>
        </Link>
        <Link href={`https://www.flickr.com/photos/${item.owner}/${item.id}`}>
          <a className="text-blue-500 ml-4 order-3">View on Flickr</a>
        </Link>
      </div>
    </div>
  );
};

export default ListItem;
