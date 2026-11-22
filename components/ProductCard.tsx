"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CheckIcon, PlusIcon } from "@/components/Icons";
import type { Product } from "@/lib/content";

type ProductCardProps = {
  product: Product;
  onAdd: (product: Product) => void;
};

export function ProductCard({ product, onAdd }: ProductCardProps) {
  const [added, setAdded] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  const handleAdd = () => {
    onAdd(product);
    setAdded(true);
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setAdded(false), 1600);
  };

  const discount = product.compareAt
    ? Math.round(((product.compareAt - product.price) / product.compareAt) * 100)
    : 0;

  return (
    <article className="product-card">
      <div className="product-media">
        <Image
          src={product.image}
          alt={`${product.name} by Magadha Vana`}
          fill
          sizes="(max-width: 959px) 50vw, 280px"
        />
        <span className="product-shade" aria-hidden="true" />
        {product.badge ? <span className="product-badge">{product.badge}</span> : null}
        {discount > 0 ? (
          <span className="product-save">Save {discount}%</span>
        ) : null}
      </div>
      <div className="product-body">
        <p className="product-kicker">
          {product.category === "cacao" ? "Cacao trail mix" : "Farm pantry"}
          <span aria-hidden="true">·</span>
          {product.weight}
        </p>
        <h3>{product.name}</h3>
        <p className="product-note">{product.note}</p>
        <div className="product-foot">
          <p className="product-price">
            <strong>₹{product.price}</strong>
            {product.compareAt ? <s>₹{product.compareAt}</s> : null}
          </p>
          <button
            type="button"
            className={`add-btn ${added ? "is-added" : ""}`}
            onClick={handleAdd}
            aria-label={`Add ${product.name} to basket`}
          >
            {added ? (
              <>
                <CheckIcon width={14} height={14} />
                Added
              </>
            ) : (
              <>
                <PlusIcon width={14} height={14} />
                Add
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
