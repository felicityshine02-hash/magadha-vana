import { CheckIcon, Leaf, MapPin, Spark } from "@/components/Icons";
import { trustPoints } from "@/lib/content";

const icons = [Leaf, CheckIcon, Spark, MapPin];

export function TrustStrip() {
  return (
    <div className="wrap trust-wrap">
      <ul className="trust" aria-label="Why shop with Magadha Vana">
        {trustPoints.map((point, index) => {
          const Icon = icons[index] ?? Leaf;
          return (
            <li key={point.title} className="trust-item">
              <span className="trust-icon" aria-hidden="true">
                <Icon width={19} height={19} />
              </span>
              <span>
                <strong>{point.title}</strong>
                <em>{point.detail}</em>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
