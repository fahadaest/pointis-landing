import type { Metadata } from "next";
// import { GoogleTagManager } from '@next/third-parties/google'

import "./globals.css";

import React, { Suspense } from "react";
import Loading from "./loading";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  // title: "PointIs: AI-Powered Summaries & Research",
  title: "Pointis: Your AI, 1 Click Away",
  description:
    "Harness the power of AI to quickly summarize and search through articles, emails, documents, and local files. PointIs streamlines your workflow and helps you find the information you need effortlessly.",
  openGraph: {
    publishedTime: "2024-10-20T00:00:00.000Z",
    images: [
      {
        url: "https://pnt.is/images/r5/og_preview.png",
      },
    ],
  },
  icons: {
    icon: "/favicon.svg",
    // icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-custom-dark" suppressHydrationWarning={true}>
        <Suspense fallback={<Loading />}>
          <ThemeProvider attribute="class">{children}</ThemeProvider>
        </Suspense>
      </body>
      {/*This one was last used*/}
      {/*<GoogleTagManager gtmId="G-ECZ343Y7RC"/>*/}
      {/*<GoogleAnalytics gaId="G-ECZ343Y7RC" />*/}
    </html>
  );
}
