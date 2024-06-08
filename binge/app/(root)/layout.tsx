import NavBar from "@/components/NavBar";
import React, { Children } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  );
}
