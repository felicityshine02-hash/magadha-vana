"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, PauseIcon, PlayIcon } from "@/components/Icons";
import { slides } from "@/lib/content";

const AUTOPLAY_MS = 7000;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const swipeStart = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  const goTo = useCallback((next: number) => {
    setIndex((next + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (hovered || userPaused || reducedMotion) return;
    const timer = window.setTimeout(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [index, hovered, userPaused, reducedMotion]);

  const slide = slides[index];
  const isPlaying = !userPaused && !reducedMotion;

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    swipeStart.current = { x: event.clientX, y: event.clientY };
  };

  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!swipeStart.current) return;
    const dx = event.clientX - swipeStart.current.x;
    const dy = event.clientY - swipeStart.current.y;
    swipeStart.current = null;
    if (Math.abs(dx) < 56 || Math.abs(dx) < Math.abs(dy)) return;
    goTo(dx < 0 ? index + 1 : index - 1);
  };

  return (
    <div className="hero-wrap">
      <section
        className="hero"
        aria-roledescription="carousel"
        aria-label="Highlights from Magadha Vana"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => {
          swipeStart.current = null;
        }}
      >
        <div className="hero-inner">
          <div className="hero-media">
            {slides.map((item, itemIndex) => (
              <div
                key={item.id}
                className={`hero-img ${itemIndex === index ? "is-active" : ""}`}
                aria-hidden={itemIndex !== index}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  loading={itemIndex === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 900px) 100vw, 55vw"
                />
              </div>
            ))}
            <div className="hero-media-shade" aria-hidden="true" />
            <span className="hero-tag">{slide.tag}</span>
            <span className="hero-stamp" aria-hidden="true">
              {slide.stamp}
            </span>
          </div>

          <div className="hero-copy" key={`${slide.id}-${index}`}>
            <p className="eyebrow">{slide.eyebrow}</p>
            <h1>
              {slide.title} <em>{slide.emphasis}</em>
            </h1>
            <p className="hero-text">{slide.description}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={slide.primary.href}>
                {slide.primary.label}
                <ArrowRight width={16} height={16} />
              </a>
              <a className="btn btn-ghost" href={slide.secondary.href}>
                {slide.secondary.label}
              </a>
            </div>
            <div className="hero-facts">
              {slide.facts.map((fact) => (
                <div className="hero-fact" key={fact.label}>
                  <strong>{fact.value}</strong>
                  <span>{fact.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="hero-bar">
        <div className="hero-dots" aria-label="Choose a banner">
          {slides.map((item, itemIndex) => (
            <button
              key={item.id}
              type="button"
              className={`hero-dot ${itemIndex === index ? "is-active" : ""}`}
              aria-label={`Show banner ${itemIndex + 1}: ${item.title} ${item.emphasis}`}
              aria-current={itemIndex === index ? "true" : undefined}
              onClick={() => goTo(itemIndex)}
            />
          ))}
        </div>
        <p className="hero-live sr-only" aria-live="polite">
          Banner {index + 1} of {slides.length}: {slide.title} {slide.emphasis}
        </p>
        <div className="hero-tools">
          <span className="hero-count" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
            <i>/</i>
            {String(slides.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            className="circle-btn"
            aria-label="Previous banner"
            onClick={() => goTo(index - 1)}
          >
            <ArrowLeft width={16} height={16} />
          </button>
          <button
            type="button"
            className="circle-btn"
            aria-label={isPlaying ? "Pause banner rotation" : "Play banner rotation"}
            onClick={() => setUserPaused((paused) => !paused)}
          >
            {isPlaying ? (
              <PauseIcon width={15} height={15} />
            ) : (
              <PlayIcon width={15} height={15} />
            )}
          </button>
          <button
            type="button"
            className="circle-btn"
            aria-label="Next banner"
            onClick={() => goTo(index + 1)}
          >
            <ArrowRight width={16} height={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
