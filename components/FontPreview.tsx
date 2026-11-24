"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { LandingPage } from "@/components/LandingPage";
import { ArrowLeft, ArrowRight } from "@/components/Icons";
import type { FontStudy } from "@/lib/fonts";

type FontPreviewProps = {
  studies: FontStudy[];
  initialSlug: string;
};

type ApplicationMode = "full" | "headings";

export function FontPreview({ studies, initialSlug }: FontPreviewProps) {
  const [slug, setSlug] = useState(initialSlug);
  const [mode, setMode] = useState<ApplicationMode>("full");

  const study = studies.find((item) => item.slug === slug) ?? studies[0];
  const index = studies.indexOf(study);

  useEffect(() => {
    document.title = `${study.name} · Type Studies — Magadha Vana`;
  }, [study.name]);

  const chooseStudy = (nextSlug: string) => {
    setSlug(nextSlug);
    window.history.replaceState(null, "", `/fonts/${nextSlug}`);
  };

  const step = (delta: number) => {
    const next = (index + delta + studies.length) % studies.length;
    chooseStudy(studies[next].slug);
  };

  const stageStyle = {
    "--stage-display": `var(${study.displayVar})`,
    "--stage-body":
      mode === "full" ? `var(${study.bodyVar})` : "var(--font-manrope)",
    "--stage-display-weight": study.displayWeight,
    "--stage-tracking": study.tracking,
  } as CSSProperties;

  const dockFontStyle = {
    "--dock-font": `var(${study.displayVar})`,
  } as CSSProperties;

  const isWeb = study.availability === "web";

  return (
    <>
      <div
        className="font-stage"
        style={stageStyle}
        data-typeface={study.slug}
        data-mode={mode}
      >
        <LandingPage theme="canopy" />
      </div>

      <p className="sr-only" aria-live="polite">
        Now previewing {study.name}
        {isWeb ? ", the exact web font" : `, shown in ${study.renderedWith}`}, on
        the Canopy landing page.
      </p>

      <div className="type-dock" role="region" aria-label="Type study controls">
        <div className="type-dock-inner">
          <Link href="/fonts" className="type-dock-back" aria-label="All studies">
            <ArrowLeft width={14} height={14} />
            <span>All studies</span>
          </Link>

          <div className="type-dock-id">
            <span className="type-dock-num">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(studies.length).padStart(2, "0")}
            </span>
            <strong className="type-dock-name" style={dockFontStyle}>
              {study.name}
            </strong>
            <span
              className={`type-dock-status ${isWeb ? "" : "is-match"}`}
            >
              {isWeb
                ? "Exact web font"
                : `Closest match · ${study.renderedWith}`}
            </span>
          </div>

          <div className="type-dock-apply">
            <span className="type-dock-apply-label">Apply to</span>
            <div className="type-mode" role="group" aria-label="Type application">
              <button
                type="button"
                aria-pressed={mode === "full"}
                onClick={() => setMode("full")}
              >
                Full page
              </button>
              <button
                type="button"
                aria-pressed={mode === "headings"}
                onClick={() => setMode("headings")}
              >
                Headings
              </button>
            </div>
          </div>

          <div className="type-dock-nav">
            <label className="sr-only" htmlFor="typeface-select">
              Choose a typeface
            </label>
            <div className="type-select-wrap">
              <select
                id="typeface-select"
                className="type-select"
                value={slug}
                onChange={(event) => chooseStudy(event.target.value)}
              >
                {studies.map((item) => (
                  <option key={item.slug} value={item.slug}>
                    {item.availability === "web"
                      ? item.name
                      : `${item.name} · ${item.renderedWith}`}
                  </option>
                ))}
              </select>
            </div>

            <div className="type-dock-arrows">
              <button
                type="button"
                className="type-dock-arrow"
                aria-label="Previous typeface"
                onClick={() => step(-1)}
              >
                <ArrowLeft width={14} height={14} />
              </button>
              <button
                type="button"
                className="type-dock-arrow"
                aria-label="Next typeface"
                onClick={() => step(1)}
              >
                <ArrowRight width={14} height={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
