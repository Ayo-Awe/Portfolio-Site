import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleAnalytics gaId="G-171SE90677" />
      <Analytics />
    </>
  );
}
