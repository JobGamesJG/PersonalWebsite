import Head from "next/head";
import Script from "next/script";

import { About, Landing, Projects, Skills } from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>JobK</title>
        <meta name="description" content="Made by JobK" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="sectionManager.js" />
      <Landing />
      <About />
      <Skills />
      <Projects />
    </>
  );
}
