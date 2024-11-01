import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { ClerkProvider } from "@clerk/nextjs";

import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { cn } from "~/lib/utils";

export const metadata: Metadata = {
  title: "Bathrobes L&L",
  description: "Bathrobes L&L",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body
          className={cn(
            "container min-h-screen w-full bg-slate-100 font-sans antialiased",
          )}
        >
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
