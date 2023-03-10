import "../styles/main.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export const URL = "https://safar-ndc.vercel.app";
