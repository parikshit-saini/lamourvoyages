"use client";

import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon/Icon";
import { durationOptions, images, regionOptions, styleOptions, type TourFilters } from "@/data/site";
import styles from "./Hero.module.scss";

type Props = {
  filters: TourFilters;
  onChange: (filters: TourFilters) => void;
  onSearch: () => void;
};

export default function Hero({ filters, onChange, onSearch }: Props) {
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSearch();
  }

  return (
    <section className={styles.hero}>
      <div className={styles.bg} aria-hidden="true">
        <Image src={images.homeHero} alt="" fill priority sizes="100vw" className={styles.bgImage} />
      </div>
      <div className={styles.atmosphere} aria-hidden="true" />
      <div className={styles.scrim} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={`${styles.kicker} ${styles.fade1}`}>
          <span className={styles.dot} />
          Worldwide Bespoke Journeys
        </div>

        <h1 className={`${styles.title} ${styles.fade2}`}>
          The Americas <em>Without Limits.</em>
          <br />
          Discover beyond the ordinary.
        </h1>

        <p className={`${styles.lead} ${styles.fade3}`}>
          L&apos;amour Voyages, a worldwide unique customized travel and hospitality service. Proactive, effective,
          innovative and efficient journeys across North &amp; South America.
        </p>

        <div className={`${styles.ctas} ${styles.fade4}`}>
          <Link href="#planner" className="btn btn--light">
            Build my trip now
            <Icon name="arrow_forward" size={20} />
          </Link>
          <Link href="#tours" className="btn btn--glass">
            Explore Tour Packages
          </Link>
        </div>

        <form className={`${styles.search} ${styles.fade5}`} onSubmit={onSubmit}>
          <label className={styles.field}>
            <span className={styles.label}>Region</span>
            <span className={styles.control}>
              <select
                value={filters.region}
                onChange={(e) => onChange({ ...filters, region: e.target.value as TourFilters["region"] })}
              >
                {regionOptions.map((o) => (
                  <option key={o.label} value={o.value}>{o.label}</option>
                ))}
              </select>
              <Icon name="expand_more" size={18} />
            </span>
          </label>

          <label className={styles.field}>
            <span className={styles.label}>Duration</span>
            <span className={styles.control}>
              <select
                value={filters.duration}
                onChange={(e) => onChange({ ...filters, duration: e.target.value as TourFilters["duration"] })}
              >
                {durationOptions.map((o) => (
                  <option key={o.label} value={o.value}>{o.label}</option>
                ))}
              </select>
              <Icon name="calendar_today" size={18} />
            </span>
          </label>

          <label className={styles.field}>
            <span className={styles.label}>Trip Style</span>
            <span className={styles.control}>
              <select
                value={filters.style}
                onChange={(e) => onChange({ ...filters, style: e.target.value as TourFilters["style"] })}
              >
                {styleOptions.map((o) => (
                  <option key={o.label} value={o.value}>{o.label}</option>
                ))}
              </select>
              <Icon name="tune" size={18} />
            </span>
          </label>

          <button type="submit" className={`btn btn--primary ${styles.submit}`}>
            <Icon name="search" size={18} />
            Find Expeditions
          </button>
        </form>
      </div>
    </section>
  );
}
