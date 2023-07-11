import "../styles/globals.css";
import { inter, roboto } from '../styles/fonts';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: 'Ronny Yabar Aizcorbe',
  description: 'Full Stack Software Engineer | Full Stack Software Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${roboto.className}`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
