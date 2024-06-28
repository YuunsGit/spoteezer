import localFont from "next/font/local";

export const circularStd = localFont({
  display: "swap",
  variable: "--font-circular-std",
  src: [
    {
      path: "./CircularStd-Book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./CircularStd-BookItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./CircularStd-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./CircularStd-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./CircularStd-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./CircularStd-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./CircularStd-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./CircularStd-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
});
