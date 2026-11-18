import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/CtaBand/CtaBand";
import Icon from "@/components/Icon/Icon";
import PageHero from "@/components/PageHero/PageHero";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import TourCard from "@/components/Tours/TourCard";
import { destinations } from "@/data/destinations";
import { tours } from "@/data/site";
import styles from "./DestinationPage.module.scss";

export default function DestinationPage({ slug }: { slug: string }) {
  const d = destinations[slug];
  const related = tours.filter((t) => t.regions.some((r) => d.tourRegions.includes(r)));
  const children = d.children?.map((c) => destinations[c]) ?? [];

  const crumbs = d.parent ? [d.parent, { label: d.title }] : [{ label: d.title }];

  return (
    <>
      <PageHero eyebrow={d.eyebrow} title={d.title} subtitle={d.subtitle} image={d.image} crumbs={crumbs} />

      {/* Overview */}
      <section className={styles.overview}>
        <div className={`container ${styles.overviewGrid}`}>
          <div className={styles.introCol}>
            <SectionHeading align="left" eyebrow="Overview" title={`Discover ${d.title}`} />
            {d.intro.map((p) => (
              <p key={p.slice(0, 24)} className={styles.intro}>
                {p}
              </p>
            ))}
            <Link href="/contact-us#planner" className="btn btn--primary">
              Request a Custom Itinerary <Icon name="arrow_forward" size={18} />
            </Link>
          </div>
          <aside className={styles.facts}>
            <h3>At a glance</h3>
            <dl>
              {d.facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
            <ul className={styles.perks}>
              <li><Icon name="verified" size={18} /> 24/7 on-trip concierge</li>
              <li><Icon name="tune" size={18} /> Fully tailor-made pacing</li>
              <li><Icon name="groups" size={18} /> FIT &amp; group departures</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* City cards (Trending hub) */}
      {children.length > 0 && (
        <section className={styles.cities}>
          <div className="container">
            <SectionHeading eyebrow="Choose your city" title="Our Most-Requested Cities" />
            <div className={styles.cityGrid}>
              {children.map((c) => (
                <Link key={c.slug} href={`/${c.slug}`} className={styles.city}>
                  <Image src={c.image} alt={c.title} fill sizes="(min-width: 1024px) 20vw, 50vw" />
                  <span className={styles.cityShade} />
                  <span className={styles.cityText}>
                    <strong>{c.title}</strong>
                    <small>{c.subtitle}</small>
                    <span className={styles.cityLink}>
                      Explore <Icon name="arrow_forward" size={16} />
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Highlights */}
      {d.highlights.length > 0 && (
        <section className={styles.highlights}>
          <div className="container">
            <SectionHeading eyebrow="Experiences" title="Highlights We Love" />
            <div className={styles.highlightGrid}>
              {d.highlights.map((h) => (
                <div key={h.title} className={styles.highlight}>
                  <span className={styles.hIcon}>
                    <Icon name={h.icon} size={24} />
                  </span>
                  <h3>{h.title}</h3>
                  <p>{h.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related tours */}
      {related.length > 0 && (
        <section className={styles.tours}>
          <div className="container">
            <SectionHeading eyebrow="Packages" title="Suggested Tour Packages" />
            <div className={styles.tourGrid}>
              {related.map((t) => (
                <TourCard key={t.id} tour={t} ctaLabel="Book Package" />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand title={`Plan your ${d.title} journey`} />
    </>
  );
}
