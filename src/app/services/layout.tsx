import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services",
  description:
    "Full stack development, AI engineering, and technical consulting services by Ronny Yabar Aizcorbe.",
  alternates: { canonical: "/services" },
};
export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
