"use client";

import { useEffect, useRef, useState } from "react";
import { Bestsellers } from "@/components/Bestsellers";
import { BirdsSection } from "@/components/BirdsSection";
import { FarmstaySection } from "@/components/FarmstaySection";
import { HeroCarousel } from "@/components/HeroCarousel";
import { CheckIcon } from "@/components/Icons";
import { Newsletter } from "@/components/Newsletter";
import { PaletteStrip } from "@/components/PaletteStrip";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { StorySection } from "@/components/StorySection";
import { TrustStrip } from "@/components/TrustStrip";
import type { Product, ThemeId } from "@/lib/content";

type LandingPageProps = {
  theme: ThemeId;
};

export function LandingPage({ theme }: LandingPageProps) {
  const [cartCount, setCartCount] = useState(0);
  const [toast, setToast] = useState("");
  const [toastKey, setToastKey] = useState(0);
  const toastTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (toastTimer.current) window.clearTimeout(toastTimer.current);
    };
  }, []);

  const addToBasket = (product: Product) => {
    const nextCount = cartCount + 1;
    setCartCount(nextCount);
    setToast(`${product.name} added · ${nextCount} in your basket`);
    setToastKey((key) => key + 1);
    if (toastTimer.current) window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(""), 3000);
  };

  return (
    <div className={`site theme-${theme}`} data-theme={theme}>
      <div className="site-bg" aria-hidden="true" />
      <div className="site-pattern" aria-hidden="true" />

      <a className="skip-link" href="#shop">
        Skip to the shop
      </a>

      <SiteNav theme={theme} cartCount={cartCount} />

      <main>
        <div className="wrap hero-container">
          <HeroCarousel />
        </div>
        <TrustStrip />
        <Bestsellers onAdd={addToBasket} />
        <FarmstaySection />
        <BirdsSection />
        <StorySection />
        <Newsletter />
        <PaletteStrip theme={theme} />
      </main>

      <SiteFooter theme={theme} />

      <div
        key={toastKey}
        className={`toast ${toast ? "is-visible" : ""}`}
        role="status"
        aria-live="polite"
      >
        {toast ? (
          <>
            <CheckIcon width={16} height={16} />
            {toast}
          </>
        ) : null}
      </div>
    </div>
  );
}
