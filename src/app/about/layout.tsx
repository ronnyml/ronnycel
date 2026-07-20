import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Ronny Yabar Aizcorbe's experience, background, and technical skills.",
  alternates: { canonical: "/about" },
};
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
