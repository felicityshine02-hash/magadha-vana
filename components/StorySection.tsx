import Image from "next/image";
import { ArrowRight } from "@/components/Icons";

export function StorySection() {
  return (
    <section className="section" id="story">
      <div className="wrap story-grid">
        <div className="media-frame story-media">
          <Image
            src="/images/farm-galangal.jpg"
            alt="Freshly harvested galangal held in a hand, with the green farm behind"
            fill
            sizes="(max-width: 900px) 100vw, 46vw"
          />
          <span className="story-chip">Harvest day</span>
          <div className="story-badge">
            <strong>70+</strong>
            <span>products from one forest</span>
          </div>
        </div>

        <div className="story-copy">
          <p className="eyebrow">Our story · Hebri, since 2018</p>
          <h2 className="display">
            Seven years of <em>listening to the land.</em>
          </h2>
          <p>
            Magadha Vana began with a simple question: can a farm feed people and keep
            the forest alive? Seven years on, this patch of laterite soil in Hebri has
            become a biodiversity food forest.
          </p>
          <p>
            Cacao grows under mixed shade. Pepper climbs jackfruit. Banana, moringa and
            galangal fill the spaces between native trees. We harvest in small batches,
            leave the odd corners wild, and keep the riverbank for the birds.
          </p>

          <div className="story-stats">
            <div className="stat">
              <strong>70+</strong>
              <span>farm products</span>
            </div>
            <div className="stat">
              <strong>150+</strong>
              <span>bird species</span>
            </div>
            <div className="stat">
              <strong>25+</strong>
              <span>native plant varieties</span>
            </div>
          </div>

          <p className="signature">— Siva &amp; the Magadha Vana family</p>

          <details className="story-more">
            <summary>Read the longer story</summary>
            <p>
              Every jar and pouch keeps this model going: fair work for the village
              community, native saplings planted each monsoon, and a farm that grows a
              little more diverse each year. There is no off-season here — only
              different harvests.
            </p>
          </details>

          <a className="ghost-link story-link" href="#farmstay">
            Come visit the farm
            <ArrowRight width={15} height={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
