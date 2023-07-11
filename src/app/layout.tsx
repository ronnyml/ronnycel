import type { Metadata } from 'next';
import { inter, roboto } from '../styles/fonts';
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Header from '../components/Header';
import Footer from "../components/Footer";

config.autoAddCss = false;

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
