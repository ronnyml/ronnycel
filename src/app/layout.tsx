import type { Metadata } from "next";
import { display, inter } from "../styles/fonts";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Header from "../components/Header";
import Footer from "../components/Footer";

config.autoAddCss = false;

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ronny Yabar Aizcorbe — Senior Software Engineer",
    template: "%s | Ronny Yabar Aizcorbe",
  },
  description:
    "Senior Software Engineer specializing in full stack development and AI engineering.",
  authors: [{ name: "Ronny Yabar Aizcorbe" }],
  openGraph: {
    type: "website",
    siteName: "Ronny Yabar Aizcorbe",
    title: "Ronny Yabar Aizcorbe — Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in full stack development and AI engineering.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ronny Yabar Aizcorbe — Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in full stack development and AI engineering.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${display.variable} min-h-screen`}>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main id="main-content" className="flex-1" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
