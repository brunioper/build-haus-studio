"use client";

import { useEffect } from "react";
import Script from "next/script";
import { heroMarkup } from "./heroMarkup";
import { heroScript } from "./heroScript";

declare global {
  interface Window {
    __buildHausHeroInitialized?: boolean;
    __bhCursorInitialized?: boolean;
    gsap?: unknown;
    ScrollTrigger?: unknown;
    anime?: unknown;
    Lenis?: unknown;
    SplitType?: unknown;
  }
}

export function BlueprintHero() {
  useEffect(() => {
    if (window.__buildHausHeroInitialized) return;
    let cancelled = false;

    const run = () => {
      if (cancelled || window.__buildHausHeroInitialized) return;
      if (!window.gsap || !window.ScrollTrigger || !window.anime || !window.Lenis || !window.SplitType) {
        window.setTimeout(run, 50);
        return;
      }
      window.__buildHausHeroInitialized = true;
      const execute = new Function(heroScript);
      execute();
    };

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: heroMarkup }} />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js" strategy="afterInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="afterInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" strategy="afterInteractive" />
      <Script src="https://unpkg.com/lenis@1.1.13/dist/lenis.min.js" strategy="afterInteractive" />
      <Script src="https://unpkg.com/split-type@0.3.4/umd/index.min.js" strategy="afterInteractive" />
    </>
  );
}
