"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BrandTree } from "@/components/Icons";
import { fontStudies, type FontStudy } from "@/lib/fonts";

type FilterId = "all" | "web" | "match" | "serif" | "sans" | "display";

const filters: { id: FilterId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "web", label: "Web-ready" },
  { id: "match", label: "Closest match" },
  { id: "serif", label: "Serif" },
  { id: "sans", label: "Sans" },
  { id: "display", label: "Display" },
];

function matchesFilter(study: FontStudy, filter: FilterId) {
  if (filter === "all") return true;
  if (filter === "web" || filter === "match") {
    return study.availability === filter;
  }
  return study.category.toLowerCase() === filter;
}

function countFor(filter: FilterId) {
  return fontStudies.filter((study) => matchesFilter(study, filter)).length;
}

function cardStyle(study: FontStudy): CSSProperties {
  return {
    "--card-font": `var(${study.displayVar})`,
    "--card-weight": study.displayWeight,
    "--card-tracking": study.tracking,
  } as CSSProperties;
}

export function FontStudiesIndex() {
  const [filter, setFilter] = useState<FilterId>("all");
  const visible = fontStudies.filter((study) => matchesFilter(study, filter));

  return (
    <div className="type-index">
      <div className="type-shell">
        <header className="type-topbar">
          <Link href="/" className="type-brand">
            <span className="type-brand-mark">
              <BrandTree width={22} height={22} />
            </span>
            <span className="type-brand-text">
              <span className="type-brand-name">magadha vana</span>
              <span className="type-brand-sub">Type studies · client preview</span>
            </span>
          </Link>

          <nav className="type-topnav" aria-label="Type study navigation">
            <a href="#studies">The studies</a>
            <Link href="/" className="type-topnav-cta">
              Main site
              <ArrowUpRight width={13} height={13} />
            </Link>
          </nav>
        </header>

        <main>
          <section className="type-hero" aria-labelledby="type-hero-heading">
            <div>
              <p className="type-kicker">Fourteen voices · one forest</p>
              <h1 id="type-hero-heading">
                Fourteen voices.
                <br />
                <em>One forest.</em>
              </h1>
              <p className="type-lede">
                The typefaces we keep returning to, set on the same Canopy
                landing page. Same photographs, same words, same green. Only
                the voice changes — so the difference is honest.
              </p>
              <div className="type-hero-actions">
                <a className="type-btn type-btn-primary" href="#studies">
                  Browse the studies
                  <ArrowRight width={14} height={14} />
                </a>
                <Link className="type-btn type-btn-ghost" href="/">
                  Open the live site
                  <ArrowUpRight width={13} height={13} />
                </Link>
              </div>
            </div>

            <aside className="type-hero-aside" aria-label="Type specimen">
              <p className="type-aside-label">The specimen</p>
              <div className="type-hero-specimen">
                <span className="type-hero-aa" aria-hidden="true">
                  Aa
                </span>
                <p className="type-hero-phrase">
                  A food forest,
                  <br />
                  not a factory.
                </p>
                <span className="type-hero-caption">
                  Cormorant Garamond · study 09
                </span>
              </div>
              <dl className="type-stats">
                <div className="type-stat">
                  <dt>14</dt>
                  <dd>faces in the shortlist</dd>
                </div>
                <div className="type-stat">
                  <dt>07</dt>
                  <dd>web-ready exact</dd>
                </div>
                <div className="type-stat">
                  <dt>07</dt>
                  <dd>closest open match</dd>
                </div>
                <div className="type-stat">
                  <dt>01</dt>
                  <dd>landing page</dd>
                </div>
              </dl>
            </aside>
          </section>

          <section className="type-how" aria-labelledby="type-how-heading">
            <h2 className="type-how-label" id="type-how-heading">
              How to read this
            </h2>
            <div className="type-how-grid">
              <div className="type-how-item">
                <span className="type-how-num">01 / Available</span>
                <h3>Web-ready</h3>
                <p>
                  The exact family is open-licensed and can ship on the site
                  today, self-hosted.
                </p>
              </div>
              <div className="type-how-item">
                <span className="type-how-num">02 / Licensed elsewhere</span>
                <h3>Closest match</h3>
                <p>
                  The Canva face is proprietary or not cleared for web
                  embedding. We show the nearest open face, clearly labelled.
                </p>
              </div>
              <div className="type-how-item">
                <span className="type-how-num">03 / The test</span>
                <h3>One variable</h3>
                <p>
                  Every study opens the complete Canopy landing page. The
                  palette, layout and copy never change.
                </p>
              </div>
            </div>
          </section>

          <section
            className="type-studies"
            id="studies"
            aria-labelledby="type-studies-heading"
          >
            <div className="type-studies-head">
              <h2 id="type-studies-heading">
                The studies <span>{visible.length} shown</span>
              </h2>
              <div className="type-filters" aria-label="Filter type studies">
                {filters.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className="type-filter"
                    aria-pressed={filter === item.id}
                    onClick={() => setFilter(item.id)}
                  >
                    {item.label}{" "}
                    <b>{countFor(item.id)}</b>
                  </button>
                ))}
              </div>
            </div>

            <div className="type-grid">
              {visible.map((study) => {
                const index = fontStudies.indexOf(study) + 1;
                const isWeb = study.availability === "web";

                return (
                  <Link
                    key={study.slug}
                    href={`/fonts/${study.slug}`}
                    className="type-card"
                    style={cardStyle(study)}
                  >
                    <div className="type-card-top">
                      <span className="type-card-num">
                        {String(index).padStart(2, "0")} / 14
                      </span>
                      <span
                        className={`type-badge ${
                          isWeb ? "type-badge-web" : "type-badge-match"
                        }`}
                      >
                        {isWeb ? "Exact web font" : "Closest match"}
                      </span>
                    </div>

                    <div className="type-card-specimen">
                      <span className="type-card-aa" aria-hidden="true">
                        Aa
                      </span>
                      <p className="type-card-phrase">{study.specimen}</p>
                    </div>

                    <div className="type-card-meta">
                      <h3 className="type-card-name">{study.name}</h3>
                      <p className="type-card-sub">
                        {study.classification} ·{" "}
                        {isWeb
                          ? "web-ready"
                          : `shown in ${study.renderedWith}`}
                      </p>
                      <p className="type-card-blurb">{study.blurb}</p>
                    </div>

                    <div className="type-card-foot">
                      <span>Open the full landing page</span>
                      <ArrowUpRight width={15} height={15} />
                    </div>
                  </Link>
                );
              })}
            </div>

            <p className="type-grid-note">
              Tip: open any study, then use the switcher at the bottom of the
              page to move between all fourteen faces without losing your place.
            </p>
          </section>

          <section className="type-note" aria-labelledby="type-note-heading">
            <div>
              <p className="type-kicker">The honest bit</p>
              <h2 id="type-note-heading">
                Seven can ship as-is.
                <br />
                <em>Seven need a licence.</em>
              </h2>
            </div>
            <div className="type-note-copy">
              <p>
                <strong>Quicksand, Museo Moderno, Cinzel, Cinzel Decorative,
                Cormorant Garamond, League Spartan</strong> and{" "}
                <strong>Glacial Indifference</strong> are open-licensed, so
                they can be self-hosted on the real site without a subscription.
              </p>
              <p>
                Cotoris, Futura, ITC Bauhaus, The Seasons, Agrandir,
                Copperplate Gothic and Lovelo are commercial or Canva-only.
                This page shows their nearest open equivalents so the client
                can judge the voice, not a broken embed. If one of those wins,
                we can price the licence or rebuild the look with a free face
                that carries the same character.
              </p>
              <a className="type-note-link" href="#studies">
                Back to the studies
                <ArrowRight width={13} height={13} />
              </a>
            </div>
          </section>
        </main>

        <footer className="type-footer">
          <p>© 2026 Magadha Vana · Type study for client review.</p>
          <nav aria-label="Footer">
            <Link href="/">Main site</Link>
            <a href="#type-hero-heading">Top ↑</a>
          </nav>
        </footer>
      </div>
    </div>
  );
}
