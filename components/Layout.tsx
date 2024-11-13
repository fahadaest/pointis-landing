"use client";
// "use server";

import React, { useRef, useState } from "react";
import Head from "next/head";
import { Footer } from "@/app/_components/Footer";
import { Main } from "@/app/_components/Main";
import { Nav } from "@/app/_components/Nav";

export function Layout({
  children,
  title,
  favicon,
  description,
}: Readonly<{
  children: React.ReactNode;
  title?: string | null;
  favicon?: string | null;
  description?: string | null;
}>) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    // {
    //   label: "Home",
    //   href: "/",
    // },
    {
      label: "Free",
      href: "/#free",
    },
    {
      label: "Features",
      href: "/#features",
    },
    // {
    //   label: "Tools",
    //   href: "#",
    //   tools: [
    //     {
    //       label: "AI Search",
    //       href: "/search",
    //       description:
    //         "Search traditional Web, read through AI lenses. Less noise.",
    //     },
    //     {
    //       label: "Shared",
    //       href: "/i/ydru3",
    //       description: "View Shared.",
    //     },
    //   ],
    // },
    // {
    //   label: "Gallery",
    //   href: "/gallery",
    // },
    // {
    //   label: "Blog",
    //   href: "/blog",
    // },
    {
      label: "Try",
      href: "/downloads",
    },
  ];

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen dark:bg-custom-dark">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description || ""} />
        {/*<meta property="og:image" content="/images/promo_landing.png" />*/}
        {/*<link rel="icon" href={favicon ?? "/images/logo/logo-small-dark.svg"} sizes="any" />*/}
        <link rel="icon" href={favicon ?? "/favicon.svg"} sizes="any" />
        <link rel="canonical" href="https://pnt.is/" />
      </Head>
      <div>
        <Nav navItems={navItems} />
        <Main>{children}</Main>
        <Footer />
      </div>
    </div>
  );
}
