import type { ReactNode } from "react";
import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";



interface DashboardLayoutProps {
children: ReactNode;
}

export default function DashboardLayout({
children,
}: DashboardLayoutProps) {
return ( <div className="flex h-screen overflow-hidden bg-background">
{/* Sidebar */} <Sidebar />


  {/* Main Content Area */}
  <div className="flex flex-1 flex-col overflow-hidden">
    {/* Persistent Topbar */}
    <Topbar />

    {/* Route Content */}
    <main className="flex-1 overflow-y-auto">
      {children}
    </main>
  </div>
</div>


);
}
