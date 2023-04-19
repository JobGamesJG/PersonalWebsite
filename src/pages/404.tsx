import { LandingButtonAnimations, LandingItemAnimations } from "@/lib";
import { motion } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";

const PNF: NextPage = () => {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="PNF-container item">
        <div className="PNF-wrapper">
          <h1>
            Page
            <br />
            Not Found
          </h1>
          <motion.p variants={LandingItemAnimations} initial="initial" animate="animate">
            Error
          </motion.p>
          <motion.p variants={LandingItemAnimations} initial="initial" animate="animate">
            <i>4</i>0<i>4</i>
          </motion.p>
          <motion.a
            variants={LandingButtonAnimations}
            initial="initial"
            animate="animate"
            className="button border redirect text-decoration"
            href="./">
            press to go back!
          </motion.a>
        </div>
      </div>
    </>
  );
};

export default PNF;
