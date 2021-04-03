import React from 'react';
import Image from 'next/image';
import { Header } from 'types/components';
import Link from 'next/link';

const SiteHeader = ({}: Header) => (
  <>
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <a>
                  <Image
                    src="/flickr-logo.png"
                    alt="Flickr clone"
                    width={100}
                    height={30}
                  />
                </a>
              </Link>
            </div>
            <div className="block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  List view
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </>
);

export default SiteHeader;
