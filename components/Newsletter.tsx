"use client";

import { useState } from "react";
import { ArrowRight, CheckIcon } from "@/components/Icons";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="section" id="newsletter">
      <div className="wrap">
        <div className="newsletter-panel">
          <div className="newsletter-copy">
            <p className="eyebrow">The farm letter · once a month</p>
            <h2 className="display">
              Letters from the <em>forest.</em>
            </h2>
            <p className="body-copy">
              Harvest notes, bird sightings and first word on the December 2026
              farmstay opening. Written at the farm, sent once a month.
            </p>
          </div>

          <div className="newsletter-form-wrap">
            {submitted ? (
              <div className="newsletter-success" role="status" aria-live="polite">
                <span className="success-icon" aria-hidden="true">
                  <CheckIcon width={18} height={18} />
                </span>
                <span>
                  <strong>You&rsquo;re on the list.</strong>
                  We&rsquo;ll write when the gates open.
                </span>
              </div>
            ) : (
              <form
                className="newsletter-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSubmitted(true);
                }}
              >
                <label className="sr-only" htmlFor="newsletter-email">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  className="input"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
                <button className="btn btn-primary" type="submit">
                  Join the list
                  <ArrowRight width={15} height={15} />
                </button>
              </form>
            )}
            <p className="form-note">
              One letter a month. No noise. Unsubscribe any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
