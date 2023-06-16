import Head from "next/head";

export default function PageNotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
        <meta name="description" content="Made by JobK" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="PageNotFound-container item">
        <p>Job Klarenbeek</p>
      </div>
    </>
  );
}
