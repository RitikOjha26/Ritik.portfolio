import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';
import { Lexend_Deca } from "next/font/google";

const lexend = Lexend_Deca({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  display: "swap",
  fallback: ["Segoe UI", "Roboto", "sans-serif"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={lexend.className}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}
