import Link from "next/link";
import {
  ArrowUpRight,
  BrandTree,
  Instagram,
  Mail,
  MapPin,
} from "@/components/Icons";
import { palettes, type ThemeId } from "@/lib/content";

type SiteFooterProps = {
  theme: ThemeId;
};

const instagramUrl = "https://www.instagram.com/magadha_vana/";

export function SiteFooter({ theme }: SiteFooterProps) {
  const homeRoute = palettes.find((palette) => palette.id === theme)?.route ?? "/";

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href={homeRoute} className="brand" aria-label="Magadha Vana home">
              <span className="brand-mark">
                <BrandTree width={32} height={32} />
              </span>
              <span className="brand-text">
                <span className="brand-name">magadha vana</span>
                <span className="brand-sub">a bio diversity farm</span>
              </span>
            </Link>
            <p>
              A biodiversity food forest in the foothills of the Western Ghats.
              Farm-grown food, a small nature stay, and a whole lot of birdsong.
            </p>
            <p className="footer-place">
              <MapPin width={14} height={14} />
              Hebri, Udupi, Karnataka, India
            </p>
            <div className="footer-social">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Magadha Vana on Instagram"
              >
                <Instagram width={17} height={17} />
                @magadha_vana
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Shop</h4>
            <ul>
              <li>
                <a href="#shop">Cacao trail mixes</a>
              </li>
              <li>
                <a href="#shop">Farm pantry</a>
              </li>
              <li>
                <a href="#shop">Forest honey</a>
              </li>
              <li>
                <a href="#shop">All 70+ products</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Visit</h4>
            <ul>
              <li>
                <a href="#farmstay">Farmstay</a>
              </li>
              <li>
                <a href="#birds">Bird blog</a>
              </li>
              <li>
                <a href="#newsletter">Stay waitlist</a>
              </li>
              <li>
                <a href="#farmstay">Getting here</a>
              </li>
            </ul>
          </div>

          <div className="footer-col footer-contact">
            <h4>Say hello</h4>
            <ul>
              <li>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-arrow-link"
                >
                  <Instagram width={15} height={15} />
                  DM us on Instagram
                  <ArrowUpRight width={13} height={13} />
                </a>
              </li>
              <li>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-arrow-link"
                >
                  <Mail width={15} height={15} />
                  Order enquiries
                  <ArrowUpRight width={13} height={13} />
                </a>
              </li>
              <li className="footer-hours">
                Farm visits by appointment
                <br />
                Tue–Sun · 8am–5pm
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Magadha Vana · Farm-grown, forest-first.</p>
          <p className="footer-credit">
            Four-palette landing concept · Canopy, Cacao Grove, Monsoon Fern &amp; Wild
            Honey
          </p>
        </div>
      </div>
    </footer>
  );
}
