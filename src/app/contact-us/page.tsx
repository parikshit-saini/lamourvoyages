import type { Metadata } from "next";
import Icon from "@/components/Icon/Icon";
import PageHero from "@/components/PageHero/PageHero";
import Planner from "@/components/Planner/Planner";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import { contact, images, offices, social } from "@/data/site";
import styles from "@/styles/pages.module.scss";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact L'amour Voyages — 24/7 concierge in the USA and India. Send an FIT or group travel query and get a tailor-made proposal.",
  alternates: { canonical: "/contact-us" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="24/7 Global Concierge"
        title="Contact Us"
        subtitle="Call, email or send a query — our specialists usually respond within 4 hours."
        image={images.hero}
        crumbs={[{ label: "Contact" }]}
      />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.cards}>
            <div className={styles.contactCard}>
              <span className={styles.icon}><Icon name="phone_in_talk" size={24} /></span>
              <h3>Call Us</h3>
              <a href={`tel:${contact.usaTel}`}>USA {contact.usaPhone}</a>
              <a href={`tel:${contact.indiaTel}`}>India {contact.indiaPhone}</a>
              <a href={`tel:${contact.indiaAltPhone.replace(/\s/g, "")}`}>India {contact.indiaAltPhone}</a>
            </div>
            <div className={styles.contactCard}>
              <span className={styles.iconAzure}><Icon name="mail" size={24} /></span>
              <h3>Email Us</h3>
              <a href={`mailto:${contact.inquiryEmail}`}>{contact.inquiryEmail}</a>
              <a href={`mailto:${contact.conciergeEmail}`}>{contact.conciergeEmail}</a>
            </div>
            <div className={styles.contactCard}>
              <span className={styles.icon}><Icon name="share" size={24} /></span>
              <h3>Follow Us</h3>
              {social.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Planner />

      <section className={styles.sectionWhite}>
        <div className="container">
          <SectionHeading eyebrow="Visit us" title="Our Global Offices" />
          <div className={styles.cards4}>
            {offices.map((o) => (
              <div key={o.country} className={styles.card}>
                <span className={styles.iconAzure}><Icon name="location_on" size={24} /></span>
                <h3>{o.country}</h3>
                <p>{o.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
