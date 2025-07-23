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
      <body className={`${inter.className} ${roboto.className} bg-[conic-gradient(at_top_left,_#000000_40%,_#0d1225_80%,_#000100_100%)] min-h-screen`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 flex justify-center items-start px-2 md:px-0 mt-4">
            <section className="w-full max-w-5xl rounded-3xl shadow-2xl p-6 md:p-12 mt-2 mb-8 bg-white/90">
              {children}
            </section>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
