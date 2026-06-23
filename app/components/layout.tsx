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

  const hideLayout =
   pathname.startsWith("/dashboard") 
  || pathname.startsWith("/competitor-analysis" )
  || pathname.startsWith("/competitor-analysis-preview" )
  || pathname.startsWith("/competitor-analysis-preview" )
  || pathname.startsWith("/keyword-gap" )
  || pathname.startsWith("/keyword-gap-preview" )
  || pathname.startsWith("/lqs-score" )

  return (
    <>
      {!hideLayout && <Navbar />}
      <main className="flex-1">{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
}