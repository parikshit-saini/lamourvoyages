import Image from "next/image";
import Link from "next/link";
import Tilt from "@/components/Tilt/Tilt";
import type { Tour } from "@/data/site";
import styles from "./Tours.module.scss";

type Props = {
  tour: Tour;
  ctaLabel?: string;
  /** Fixed heights for the home page carousel. Omit to fill a grid cell. */
  size?: "sm" | "md" | "lg";
};

export default function TourCard({ tour, ctaLabel = "Explore", size }: Props) {
  const href = `/contact-us?tour=${encodeURIComponent(tour.id)}#planner`;
  const highlighted = size === "lg";

  return (
    <Tilt className={`${styles.card} ${size ? styles[size] : styles.fluid}`}>
      <Image
        src={tour.image}
        alt={tour.title}
        fill
        sizes={highlighted ? "288px" : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"}
        className={styles.image}
      />
      <div className={styles.shade} />

      {highlighted && tour.signature && <span className={styles.signature}>Signature Expedition</span>}
      <span className={styles.duration}>{tour.duration}</span>

      <div className={styles.body}>
        <h3 className={styles.title}>{tour.title}</h3>
        <p className={styles.desc}>{tour.description}</p>
        <div className={styles.tags}>
          <span className={styles.tag}>{tour.badge.label}</span>
          <span className={styles.tag}>{tour.tags[0].label}</span>
        </div>
        <Link href={href} className={styles.cta} aria-label={`${ctaLabel}: ${tour.title}`}>
          {ctaLabel}
        </Link>
      </div>
    </Tilt>
  );
}
