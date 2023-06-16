import { HeaderItemAnimations } from "../lib";
import config from "@/lib/Config.json";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export const Header = () => {
    const router = useRouter();
    return (
        <div className="header-container">
            <motion.svg
                variants={HeaderItemAnimations(0)}
                initial="initial"
                animate="animate"
                viewBox="-6 0 45 30">
                <path d="M 20 12 L 29 6 L 29 24 Q 29 30 24 34 A 13.2 13.2 90 0 1 20 36 A 19.3 19.3 90 0 1 15 37 L 14 37 A 18.7 18.7 90 0 1 9 36 A 13.6 13.6 90 0 1 4 33 A 12.7 12.7 90 0 1 2 30 A 19 19 90 0 1 1 24.667 L 9 19.333 L 9 24 Q 9 26 10 27 Q 12 29 14 29 L 15 29 Q 17 29 19 27 Q 20 26 20 24 L 20 12 Z M 20 9 L 20 0 L 29 -6 L 29 3" />
            </motion.svg>
            <div className="header-routes">
                {config.header.map((data, key) => (
                    <motion.a
                        variants={HeaderItemAnimations(key + 1)}
                        initial="initial"
                        animate="animate"
                        className="route button"
                        key={key}
                        section-data={data.item}
                        href={`#${data.item}`}
                        onClick={
                            router.pathname == ""
                                ? () => ""
                                : () => (location.href = `/#${data.item}`)
                        }>
                        {data.item.charAt(0).toUpperCase() + data.item.slice(1)} <div />
                    </motion.a>
                ))}
            </div>
        </div>
    );
};
