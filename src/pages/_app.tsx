import { Header, Footer } from "../Components";
import type { AppProps } from "next/app";
import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
