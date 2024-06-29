import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { circularStd } from "@/assets/fonts/fonts";
import LeftSidebar from "@/components/left-sidebar";
import BackgroundGradient from "@/components/bg-gradient";
import Header from "@/components/header";

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
          "box-border bg-background font-sans text-foreground antialiased",
        )}
      >
        <div className="relative isolate grid h-screen grid-cols-[auto_1fr] grid-rows-[1fr_auto] [grid-template-areas:'left-sidebar_main_right-sidebar''player_player_player']">
          <LeftSidebar />
          <BackgroundGradient />
          <main>
            <Header>
              <></>
            </Header>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
