import Link from "next/link";
import { ArrowUpRight } from "@/components/Icons";
import { palettes, type ThemeId } from "@/lib/content";

type PaletteStripProps = {
  theme: ThemeId;
};

export function PaletteStrip({ theme }: PaletteStripProps) {
  return (
    <section className="section palette-section" aria-labelledby="palette-heading">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">The palette garden · four directions</p>
          <div className="shop-headline">
            <h2 className="display" id="palette-heading">
              Four palettes, <em>one forest.</em>
            </h2>
            <p className="lede">
              This landing page is built in four nature-led colour stories. Switch
              between them and see the same farm in a different light.
            </p>
          </div>
        </div>

        <div className="palette-grid">
          {palettes.map((palette, index) => (
            <Link
              key={palette.id}
              href={palette.route}
              className="palette-card"
              aria-current={theme === palette.id ? "page" : undefined}
            >
              <span className="swatches" aria-hidden="true">
                {palette.swatches.map((swatch) => (
                  <span
                    key={swatch}
                    className="swatch"
                    style={{ background: swatch }}
                  />
                ))}
              </span>
              <span className="palette-index">
                Palette {String(index + 1).padStart(2, "0")}
              </span>
              <span className="palette-name">
                {palette.name}
                <ArrowUpRight width={14} height={14} />
              </span>
              <span className="palette-mood">{palette.mood}</span>
              <span className="palette-desc">{palette.description}</span>
              {theme === palette.id ? (
                <span className="palette-current">You&rsquo;re viewing this one</span>
              ) : null}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
