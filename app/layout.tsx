import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { cn } from "@/lib/utils";
import { circularStd } from "@/assets/fonts/fonts";
import LeftSidebar from "@/components/left-sidebar";
import BackgroundGradient from "@/components/bg-gradient";
import Header from "@/components/header";
import RightSidebar from "@/components/right-sidebar";
import Player from "@/components/player";

export const metadata: Metadata = {
  title: "Spoteezer",
  description: "Definitely not related to Spotify or Deezer.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          circularStd.variable,
          "box-border overflow-y-hidden overscroll-y-none bg-background font-sans leading-[1.6] text-foreground antialiased",
        )}
      >
        <div className="relative isolate grid h-screen grid-cols-[auto_1fr] grid-rows-[auto_1fr_auto] [grid-template-areas:'left-sidebar_header_right-sidebar''left-sidebar_main_right-sidebar''player_player_player']">
          <LeftSidebar />
          <Header />
          <main className="pretty-scroll relative overflow-y-auto overscroll-contain text-white @container [grid-area:main]">
            <BackgroundGradient />
            <section className="max-w-[1955px] px-4 py-6 lg:px-8">
              {children}
            </section>
          </main>
          <RightSidebar />
          <Player />
        </div>
      </body>
    </html>
  );
}
