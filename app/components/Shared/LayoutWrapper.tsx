"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Header from "./Header";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideFooter = ["/login", "/register"].some((path) =>
    pathname.startsWith(path)
  );

  return (
    <>
      <Header />
      <div className="mt-10">{children}</div>
      {!hideFooter && <Footer />}
    </>
  );
}
