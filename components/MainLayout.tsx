import React from 'react';
import { Layout } from 'types/components';

const MainLayout = ({ children }: Layout) => (
  <main>
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
  </main>
);

export default MainLayout;
