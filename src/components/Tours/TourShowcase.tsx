"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef } from "react";
import Icon from "@/components/Icon/Icon";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import { matchesTourFilters, tours, type TourFilters } from "@/data/site";
import TourCard from "./TourCard";
import styles from "./Tours.module.scss";

type Props = {
  filters: TourFilters;
  onClear: () => void;
};

const SCROLL_STEP = 320;

export default function TourShowcase({ filters, onClear }: Props) {
  const scroller = useRef<HTMLDivElement>(null);
  const filtered = Boolean(filters.region || filters.duration || filters.style);

  // Keep the signature tour in the middle of the row when it is part of the results
  const { ordered, center } = useMemo(() => {
    const matches = tours.filter((t) => matchesTourFilters(t, filters));
    const signature = matches.find((t) => t.signature);
    if (!signature) return { ordered: matches, center: Math.floor((matches.length - 1) / 2) };
    const rest = matches.filter((t) => t !== signature);
    const middle = Math.floor(rest.length / 2);
    return { ordered: [...rest.slice(0, middle), signature, ...rest.slice(middle)], center: middle };
  }, [filters]);

  useEffect(() => {
    const el = scroller.current;
    const card = el?.querySelector<HTMLElement>("[data-center]");
    if (el && card) el.scrollLeft = card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2;
  }, [ordered]);

  function sizeFor(index: number) {
    const distance = Math.abs(index - center);
    if (distance === 0) return "lg";
    return distance === 1 ? "md" : "sm";
  }

  return (
    <section className={styles.showcase} id="tours">
      <div className="container">
        <SectionHeading
          display
          eyebrow="Your Journey"
          title={
            <>
              Discover <em>Our Most</em>
              <br />
              Popular Tours
            </>
          }
        />

        {filtered && (
          <p className={styles.results} aria-live="polite">
            {ordered.length} {ordered.length === 1 ? "tour matches" : "tours match"} your search.
            <button type="button" onClick={onClear}>
              Show all tours
            </button>
          </p>
        )}

        {ordered.length > 0 ? (
          <div className={styles.scroller} ref={scroller}>
            <ul className={styles.track}>
              {ordered.map((tour, i) => (
                <li key={tour.id} data-center={i === center ? "" : undefined}>
                  <TourCard tour={tour} size={sizeFor(i)} ctaLabel={i === center ? "Explore Itinerary" : "Explore"} />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className={styles.empty}>
            <Icon name="travel_explore" size={32} />
            <p>No ready-made tour fits that search, but we can build one around you.</p>
            <Link href="#planner" className="btn btn--primary btn--sm">
              Plan a custom tour
            </Link>
          </div>
        )}

        <div className={styles.controls}>
          <button
            type="button"
            aria-label="Previous tours"
            className={styles.arrow}
            onClick={() => scroller.current?.scrollBy({ left: -SCROLL_STEP, behavior: "smooth" })}
          >
            <Icon name="arrow_back" />
          </button>
          <Link href="#planner" className={styles.moreLink}>
            Plan a Custom Tour
          </Link>
          <button
            type="button"
            aria-label="Next tours"
            className={styles.arrow}
            onClick={() => scroller.current?.scrollBy({ left: SCROLL_STEP, behavior: "smooth" })}
          >
            <Icon name="arrow_forward" />
          </button>
        </div>
      </div>
    </section>
  );
}
