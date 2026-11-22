import Image from "next/image";
import { ArrowRight, CheckIcon } from "@/components/Icons";

const amenities = [
  "Three riverside rooms, full board",
  "Guided dawn bird walks with a naturalist",
  "Farm meals cooked over firewood",
  "Plantation and cacao walks on the farm",
];

export function FarmstaySection() {
  return (
    <section className="section" id="farmstay">
      <div className="wrap split">
        <div className="media-frame farmstay-media">
          <Image
            src="/images/forest-stream.jpg"
            alt="The forest stream at Magadha Vana, with mossy boulders and dappled light"
            fill
            sizes="(max-width: 900px) 100vw, 48vw"
          />
          <span className="stay-chip">Opening Dec 2026</span>
          <div className="stay-caption">
            <span>
              <strong>Vana Kutira · the forest stay</strong>
              Three rooms · full board · no televisions
            </span>
            <span className="stay-price">
              from ₹4,200 <i>/ night</i>
            </span>
          </div>
        </div>

        <div className="farmstay-copy">
          <p className="eyebrow">Farmstay · a nature experience</p>
          <h2 className="display">
            Sleep where the <em>forest breathes.</em>
          </h2>
          <p className="body-copy">
            A small stay at the edge of the food forest — for people who would rather
            wake to birdsong than an alarm. Walk the plantation with us, swim in the
            river, eat what the farm grew that morning.
          </p>
          <ul className="amenities">
            {amenities.map((item) => (
              <li key={item}>
                <CheckIcon width={15} height={15} />
                {item}
              </li>
            ))}
          </ul>
          <div className="chip-row" aria-label="Room types">
            <span className="chip">Riverside cottage</span>
            <span className="chip">Canopy loft</span>
            <span className="chip">Campfire suppers</span>
          </div>
          <div className="section-actions">
            <a className="btn btn-primary" href="#newsletter">
              Join the stay waitlist
              <ArrowRight width={16} height={16} />
            </a>
            <a className="btn btn-ghost" href="#birds">
              Birding calendar
            </a>
          </div>
          <p className="micro-note">
            Only three rooms · Opening waitlist closes 30 November 2026
          </p>
        </div>
      </div>
    </section>
  );
}
