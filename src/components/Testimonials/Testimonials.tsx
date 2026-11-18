import Icon from "@/components/Icon/Icon";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import { contact, testimonials } from "@/data/site";
import styles from "./Testimonials.module.scss";

export default function Testimonials() {
  return (
    <section className={styles.section} id="reviews">
      <div className="container">
        <div className={styles.head}>
          <SectionHeading align="left" eyebrow="Endorsements" title="What Our Partners & Guests Say" />
          <p>
            Tour operators, travel directors and agency partners around the world trust our coordination across
            the Americas.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <figure key={t.name} className={styles.card}>
              <div>
                <div className={styles.stars} role="img" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Icon key={s} name="star" size={18} filled />
                  ))}
                </div>
                <blockquote className={styles.quote}>“{t.quote}”</blockquote>
              </div>
              <figcaption>
                <span className={styles.name}>{t.name}</span>
                <span className={styles.role}>{t.role}</span>
              </figcaption>
            </figure>
          ))}

          <div className={styles.callout}>
            <div>
              <span className={styles.calloutEyebrow}>Partner With Us</span>
              <h3>B2B Trade Alliances</h3>
              <p>
                We provide wholesale ground handling, group allocations, and customized white-label luxury
                itineraries for certified travel advisors globally.
              </p>
            </div>
            <a href={`tel:${contact.usaTel}`} className={`btn btn--light ${styles.calloutCta}`}>
              <Icon name="support_agent" size={18} /> Speak to Trade Desk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
