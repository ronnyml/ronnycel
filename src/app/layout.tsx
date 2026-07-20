import type { Metadata } from "next";
import { display, inter } from "../styles/fonts";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Header from "../components/Header";
import Footer from "../components/Footer";
config.autoAddCss = false;
export const metadata: Metadata = { title: "Ronny Yabar Aizcorbe — Senior Software Engineer", description: "Senior Software Engineer specializing in full stack development and AI engineering." };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body className={`${inter.className} ${display.variable} min-h-screen`}><div className="flex min-h-screen flex-col"><Header/><main id="main-content" className="flex-1">{children}</main><Footer/></div></body></html>; }
