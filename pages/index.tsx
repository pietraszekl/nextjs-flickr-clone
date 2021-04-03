import Head from 'next/head';
import Header from '@/components/Header';
import Layout from '@/components/Layout';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Layout>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p>
          Get started by editing <code>pages/index.js</code>
        </p>
      </Layout>

      <Footer />
    </>
  );
}
