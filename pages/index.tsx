import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>EShop</title>
        <meta name="description" content="EShop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-title font-semibold">hello</h1>
        <button className="btn">world</button>
      </main>
    </>
  );
};

export default Home;
