import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected software, AI, web, mobile, and open-source projects by Ronny Yabar Aizcorbe.",
  alternates: { canonical: "/projects" },
};
export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
