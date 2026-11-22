import Image from "next/image";
import { ArrowRight, ArrowUpRight, Instagram } from "@/components/Icons";
import { birds, blogPosts } from "@/lib/content";

const instagramUrl = "https://www.instagram.com/magadha_vana/";

export function BirdsSection() {
  return (
    <section className="section" id="birds">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Bird blog · 150+ species recorded</p>
          <div className="shop-headline">
            <h2 className="display">
              A dawn chorus, <em>150 voices strong.</em>
            </h2>
            <p className="lede">
              The farm sits on a birding corridor in the Western Ghats. Malabar trogons,
              paradise flycatchers, hornbills and 150+ recorded species share the canopy.
            </p>
          </div>
        </div>

        <div className="birds-layout">
          <div className="bird-cards">
            {birds.map((bird) => (
              <article className="bird-card" key={bird.name}>
                <Image
                  src={bird.image}
                  alt={bird.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 30vw"
                />
                <span className="bird-shade" aria-hidden="true" />
                <span className="bird-tag">{bird.latin}</span>
                <div className="bird-caption">
                  <p className="bird-kicker">Western Ghats resident</p>
                  <h3>{bird.name}</h3>
                  <p>{bird.note}</p>
                </div>
              </article>
            ))}
          </div>

          <aside className="blog-panel" aria-label="From the bird blog">
            <p className="eyebrow">From the bird blog</p>
            <h3>Notes from the field</h3>
            <ul className="blog-list">
              {blogPosts.map((post) => (
                <li key={post.title}>
                  <p className="blog-meta">
                    {post.kicker} <span aria-hidden="true">·</span> {post.date}
                  </p>
                  <p className="blog-title">{post.title}</p>
                  <p className="blog-read">{post.read}</p>
                </li>
              ))}
            </ul>
            <a
              className="ghost-link blog-link"
              href={instagramUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Instagram width={15} height={15} />
              Bird notes on Instagram
              <ArrowUpRight width={14} height={14} />
            </a>
            <a className="btn btn-ghost birds-cta" href="#farmstay">
              Plan a birding stay
              <ArrowRight width={15} height={15} />
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
