import React from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';

import LoadingSpinner from '@/components/LoadingSpinner';
import MainLayout from '@/components/MainLayout';
import SiteHeader from '@/components/SiteHeader';

export default function Photo({ photo }) {
  const router = useRouter();

  if (!router.isFallback && !photo?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <MainLayout>
      <SiteHeader />

      {router.isFallback ? (
        <LoadingSpinner />
      ) : (
        <>
          <article>
            <Head>
              <title>{photo.title} |</title>
              <title>{photo.title}</title>
            </Head>
            <h1>PHOTO NAME</h1>
          </article>
        </>
      )}
    </MainLayout>
  );
}
