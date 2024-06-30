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
          "box-border overflow-y-hidden overscroll-y-none bg-background font-sans leading-[1.6] text-foreground antialiased",
        )}
      >
        <div className="relative isolate grid h-screen grid-cols-[auto_1fr] grid-rows-[1fr_auto] [grid-template-areas:'left-sidebar_main_right-sidebar''player_player_player']">
          <LeftSidebar />
          <BackgroundGradient />
          <main className="@container pretty-scroll max-w-[1955px] overflow-y-auto overscroll-contain text-white [grid-area:main]">
            <Header>
              <></>
            </Header>
            {children}
          </main>
          <RightSidebar />
          <Player />
        </div>
      </body>
    </html>
  );
}
