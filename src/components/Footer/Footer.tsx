import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon/Icon";
import { LOGO_URL, contact, destinationLinks, offices, social } from "@/data/site";
import NewsletterForm from "./NewsletterForm";
import styles from "./Footer.module.scss";

const explore = [
  ...destinationLinks,
  { label: "Tour Packages", href: "/#tours" },
  { label: "Client Reviews", href: "/#reviews" },
  { label: "Services", href: "/services" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.newsletter}>
          <div>
            <span className={styles.eyebrow}>Private Dispatch</span>
            <h2>Receive curated itineraries &amp; secret escapes</h2>
          </div>
          <NewsletterForm />
        </div>

        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.brand}>
              <Image src={LOGO_URL} alt="" width={105} height={28} className={styles.logo} unoptimized />
              <span>L&apos;amour Voyages</span>
            </Link>
            <p>
              A worldwide unique customized travel and hospitality service, crafting tailor-made journeys across
              the Americas and beyond.
            </p>
            <div className={styles.social}>
              {social.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer">
                  <Icon name={s.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className={styles.col}>
            <h3>Explore</h3>
            <ul className={styles.links}>
              {explore.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h3>Global Offices</h3>
            <div className={styles.offices}>
              {offices.map((o) => (
                <div key={o.country}>
                  <strong>{o.country}</strong>
                  <span>{o.address}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.concierge}>
            <div>
              <span className={styles.eyebrow}>Bespoke Concierge</span>
              <h3>24/7 Global Support</h3>
              <p>Direct access to your dedicated travel specialist, wherever you are in the world.</p>
            </div>
            <div className={styles.conciergeLinks}>
              <a href={`mailto:${contact.conciergeEmail}`} className={styles.email}>
                {contact.conciergeEmail}
              </a>
              <a href={`tel:${contact.usaTel}`}>USA {contact.usaPhone}</a>
              <a href={`tel:${contact.indiaTel}`}>India {contact.indiaPhone}</a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.legal}>
            <span>© {year} L&apos;amour Voyages Inc. All rights reserved.</span>
            <span>CIN: U63040UP2019PTC118544</span>
            <span>GSTIN: 09AAACL1943D1Z0</span>
          </div>
          <div className={styles.bottomLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/privacy-policy#terms">Terms of Service</Link>
            <Link href="/contact-us">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
