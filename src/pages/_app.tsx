import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Footer, Header } from "@/components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
