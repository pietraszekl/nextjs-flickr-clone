import Head from 'next/head';
import SiteHeader from '@/components/SiteHeader';
import MainLayout from '@/components/MainLayout';
import SiteFooter from '@/components/SiteFooter';
import ListView from '@/components/ListView';
import { FLICKR_DEFAULT_SEARCH } from '@/lib/constants';

export default function Home() {
  return (
    <>
      <Head>
        <title>Flickr Clone by Lukasz Pietraszek</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SiteHeader />

      <MainLayout>
        <ListView defaultTag={FLICKR_DEFAULT_SEARCH} />
      </MainLayout>

      <SiteFooter />
    </>
  );
}
