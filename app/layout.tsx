import type { Metadata } from "next";
import "./globals.css";
import LayoutWrapper from "./components/Shared/LayoutWrapper";

export const metadata: Metadata = {
  title: "MNA Web Programming",
  description:
    "A comprehensive platform for web programming courses and resources.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-[#050d1a] to-[#0a1629] text-white">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
