import { motion } from "framer-motion";
import Head from "next/head";

import { InToView, LetterSpacing } from "@/lib";

export default function PageNotFound() {
    return (
        <>
            <Head>
                <title>Page Not Found</title>
                <meta name="description" content="Made by JobK" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="PageNotFound-container">
                <motion.p variants={LetterSpacing(6, 1.5)} initial="initial" animate="animate">
                    Page Not Found
                </motion.p>
                <motion.a
                    variants={InToView(9, 1)}
                    initial="initial"
                    animate="animate"
                    className="button icon"
                    href="./">
                    <i className="fa-solid fa-house" /> Return to Home
                </motion.a>
            </div>
        </>
    );
}
