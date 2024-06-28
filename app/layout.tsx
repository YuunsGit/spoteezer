import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/llb/utils";
import { circularStd } from "@/fonts/fonts";

export const metadata: Metadata = {
  title: "Spoteezer",
  description: "Definitely not related to Spotify or Deezer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          circularStd.variable,
          "text-foreground bg-background font-sans antialiased",
        )}
      >
        {children}
      </body>
    </html>
  );
}
