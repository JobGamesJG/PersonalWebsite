import { Landing, About, Skills, Projects } from "../Components";
import Script from "next/script";
import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>JobGamesJG</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="sectionManager.js" />
      <Landing />
      <About />
      <Skills />
      <Projects />
    </>
  );
};

export default Home;
