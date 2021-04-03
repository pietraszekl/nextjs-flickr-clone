import React from 'react';
import Image from 'next/image';
import { FOOTER } from '@/lib/constants';

const Footer = () => (
  <>
    <footer className="border-t p-4 text-center text-gray-700">{FOOTER}</footer>
  </>
);

export default Footer;
