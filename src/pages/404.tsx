import { Variants, motion } from "framer-motion";
import Head from "next/head";

import { InToView, PageNotFoundLetterSpacingAnimation } from "@/lib";

export default function PageNotFound() {
    return (
        <>
            <Head>
                <title>Page Not Found</title>
                <meta name="description" content="Made by JobK" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="PageNotFound-container">
                <motion.p
                    variants={PageNotFoundLetterSpacingAnimation}
                    animate="animate"
                    initial="initial">
                    Page Not Found
                </motion.p>
                <motion.a
                    variants={InToView(75)}
                    animate="inView"
                    initial="initial"
                    className="button icon"
                    href="./">
                    <i className="fa-solid fa-house" /> Return to Home
                </motion.a>
            </div>
        </>
    );
}
