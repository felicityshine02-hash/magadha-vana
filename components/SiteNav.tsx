"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Bag,
  BrandTree,
  CloseIcon,
  MenuIcon,
  MapPin,
} from "@/components/Icons";
import { navTabs, palettes, type NavTab, type ThemeId } from "@/lib/content";

type SiteNavProps = {
  theme: ThemeId;
  cartCount: number;
};

export function SiteNav({ theme, cartCount }: SiteNavProps) {
  const [active, setActive] = useState<NavTab | "">("");
  const [menuOpen, setMenuOpen] = useState(false);
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

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

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

          <nav className="tabs" aria-label="Primary">
            {navTabs.map((tab) => (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                className={`tab ${active === tab.id ? "is-active" : ""}`}
                aria-current={active === tab.id ? "true" : undefined}
                onClick={() => {
                  setActive(tab.id);
                  setMenuOpen(false);
                }}
              >
                {tab.label}
              </a>
            ))}
          </nav>

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
            <button
              type="button"
              className="menu-btn"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`mobile-menu ${menuOpen ? "is-open" : ""}`}
          hidden={!menuOpen}
        >
          <nav className="mobile-links" aria-label="Mobile">
            {navTabs.map((tab, index) => (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                className="mobile-link"
                onClick={() => {
                  setActive(tab.id);
                  setMenuOpen(false);
                }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {tab.label}
              </a>
            ))}
          </nav>
          <div className="mobile-palette">
            <span className="palette-dots-label">Colour palette</span>
            <div className="mobile-palette-links">
              {palettes.map((palette) => (
                <Link
                  key={palette.id}
                  href={palette.route}
                  className="mobile-palette-link"
                  aria-current={theme === palette.id ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  <span
                    className="palette-swatch"
                    style={{ background: palette.swatches[3] }}
                  />
                  {palette.name}
                </Link>
              ))}
            </div>
          </div>
          <p className="mobile-ship">
            Free shipping across India over ₹1,250 · Packed at the farm
          </p>
        </div>
      </header>
    </>
  );
}
