"use client";

import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { Bag, BrandTree, MapPin } from "@/components/Icons";
import { navTabs, palettes, type NavTab, type ThemeId } from "@/lib/content";

type SiteNavProps = {
  theme: ThemeId;
  cartCount: number;
};

export function SiteNav({ theme, cartCount }: SiteNavProps) {
  const [active, setActive] = useState<NavTab | "">("");
  const homeRoute = palettes.find((palette) => palette.id === theme)?.route ?? "/";

  useEffect(() => {
    const ids: NavTab[] = ["shop", "farmstay", "birds", "story"];
    let frame = 0;

    const update = () => {
      frame = 0;
      let current: NavTab | "" = "";
      for (const id of ids) {
        const element = document.getElementById(id);
        if (!element) continue;
        const rect = element.getBoundingClientRect();
        if (rect.top <= 170 && rect.bottom > 170) {
          current = id;
          break;
        }
      }
      setActive(current);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div className="notice">
        <div className="wrap notice-inner">
          <p className="notice-copy">
            <strong>Free shipping across India</strong> over ₹1,250
            <span className="notice-divider" aria-hidden="true">
              ·
            </span>
            <span className="notice-place">
              <MapPin width={12} height={12} /> Hebri, Udupi
            </span>
          </p>
          <div className="palette-dots" aria-label="Choose a colour palette">
            <span className="palette-dots-label">Palette</span>
            <div className="palette-dots-scroll">
              {palettes.map((palette, index) => (
                <Link
                  key={palette.id}
                  href={palette.route}
                  className="palette-link"
                  aria-current={theme === palette.id ? "page" : undefined}
                  aria-label={`Palette ${index + 1}: ${palette.name}`}
                >
                  <span
                    className="palette-swatch"
                    style={{ background: palette.swatches[3] }}
                  />
                  <span className="palette-link-name">
                    {String(index + 1).padStart(2, "0")} {palette.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="wrap nav">
          <Link href={homeRoute} className="brand" aria-label="Magadha Vana home">
            <span className="brand-mark">
              <BrandTree width={30} height={30} />
            </span>
            <span className="brand-text">
              <span className="brand-name">magadha vana</span>
              <span className="brand-sub">a bio diversity farm</span>
            </span>
          </Link>

          <div className="nav-tools">
            <a
              href="#shop"
              className="bag-btn"
              aria-label={`Basket, ${cartCount} ${cartCount === 1 ? "item" : "items"}`}
            >
              <Bag width={17} height={17} />
              <span className="bag-label">Basket</span>
              <span className="bag-count" aria-hidden="true">
                {cartCount}
              </span>
            </a>
          </div>

          <nav className="tabs" aria-label="Primary">
            {navTabs.map((tab, index) => (
              <Fragment key={tab.id}>
                <a
                  href={`#${tab.id}`}
                  className={`tab ${active === tab.id ? "is-active" : ""}`}
                  aria-current={active === tab.id ? "true" : undefined}
                  onClick={() => {
                    setActive(tab.id);
                  }}
                >
                  {tab.label}
                </a>
                {index === 0 ? (
                  <Link href="/fonts" className="tab tab-fonts">
                    Fonts
                  </Link>
                ) : null}
              </Fragment>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
