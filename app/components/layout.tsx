// app/components/LayoutWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import Navbar from "./nav";
import Footer from "./footer";


export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideLayout = pathname.startsWith("/dashboard");

  return (
    <>
      {!hideLayout && <Navbar />}
      <main className="flex-1">{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
}