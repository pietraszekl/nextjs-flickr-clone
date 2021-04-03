import Head from 'next/head';
import Header from '@/components/Header';
import Layout from '@/components/Layout';
import Footer from '@/components/Footer';
import ListView from '@/components/ListView';

export default function Home() {
  return (
    <>
      <Head>
        <title>Flickr Clone by Lukasz Pietraszek</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Layout>
        <ListView />
      </Layout>

      <Footer />
    </>
  );
}
