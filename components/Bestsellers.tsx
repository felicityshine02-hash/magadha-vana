"use client";

import { useState } from "react";
import { ArrowRight } from "@/components/Icons";
import { ProductCard } from "@/components/ProductCard";
import { products, type Product, type ProductCategory } from "@/lib/content";

type BestsellersProps = {
  onAdd: (product: Product) => void;
};

type Filter = "all" | ProductCategory;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All harvest" },
  { id: "cacao", label: "Cacao trail mixes" },
  { id: "pantry", label: "Farm pantry" },
];

export function Bestsellers({ onAdd }: BestsellersProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const [showMore, setShowMore] = useState(false);

  const visible = products
    .filter((product) => (showMore ? true : product.bestseller))
    .filter((product) => (filter === "all" ? true : product.category === filter));

  const extraCount = products.filter((product) => !product.bestseller).length;

  return (
    <section className="section shop" id="shop">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Shop · The harvest shelf</p>
          <div className="shop-headline">
            <h2 className="display">
              Bestsellers from <em>the farm.</em>
            </h2>
            <p className="lede">
              Cacao mixes, pantry staples and wild honey — grown, made and packed
              at Magadha Vana. Small batches, no shortcuts.
            </p>
          </div>
        </div>

        <div className="shop-tools">
          <div className="filters" aria-label="Filter bestsellers">
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`filter ${filter === item.id ? "is-active" : ""}`}
                aria-pressed={filter === item.id}
                onClick={() => setFilter(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <p className="ship-note">
            Free shipping over ₹1,250 <span aria-hidden="true">·</span> Packed at the farm
          </p>
        </div>

        <div className="product-grid">
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={onAdd} />
          ))}
        </div>

        <div className="shop-foot">
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => setShowMore((more) => !more)}
            aria-expanded={showMore}
          >
            {showMore ? "Show bestsellers only" : `View ${extraCount} more farm favourites`}
            <ArrowRight
              width={15}
              height={15}
              style={{ transform: showMore ? "rotate(-90deg)" : "none" }}
            />
          </button>
          <p className="shop-count">
            Showing {visible.length} of <strong>70+</strong> farm products
          </p>
        </div>
      </div>
    </section>
  );
}
