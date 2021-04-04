import { useRouter } from 'next/router';
import useSwr from 'swr';
import Head from 'next/head';
import SiteHeader from '@/components/SiteHeader';
import MainLayout from '@/components/MainLayout';
import SiteFooter from '@/components/SiteFooter';
import ItemDetails from '@/components/ItemDetails';
import LoadingSpinner from '@/components/LoadingSpinner';
import fetcher from '@/utils/fetcher';
import React from 'react';

const Photo = () => {
  let view;
  let pageTitle = 'Loading';
  const router = useRouter();
  const { data, error } = useSwr(
    router.query.item ? [`/api/photo/`, router.query.item] : null,
    fetcher
  );

  if (error) view = <div>Failed to load</div>;
  if (!data) view = <LoadingSpinner />;
  if (data) {
    pageTitle = data.photoItem.photo.title._content;
    console.log('data.photoItem.photo', data.photoItem.photo);
    const item = {
      ...data.photoItem.photo
    };
    view = <ItemDetails item={item} />;
  }

  return (
    <>
      <Head>
        <title>{pageTitle} | Flickr Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SiteHeader />
      <MainLayout>{view}</MainLayout>
      <SiteFooter />
    </>
  );
};

export default Photo;
