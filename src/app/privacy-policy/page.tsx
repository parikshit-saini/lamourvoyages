import type { Metadata } from "next";
import PageHero from "@/components/PageHero/PageHero";
import { contact } from "@/data/site";
import styles from "@/styles/pages.module.scss";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How L'amour Voyages collects, uses and protects your personal information.",
  alternates: { canonical: "/privacy-policy" },
};

// NOTE: placeholder copy — replace with the policy text from the current site / your legal advisor.
export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" crumbs={[{ label: "Privacy Policy" }]} />

      <section className={styles.section}>
        <div className="container">
          <article className={`prose ${styles.proseWrap}`}>
            <p className={styles.updated}>Last updated: November 2026</p>

            <h2>Who we are</h2>
            <p>
              L&apos;amour Voyages (&quot;we&quot;, &quot;us&quot;) provides customized travel and hospitality
              services through offices in the USA, UK, India and Canada. This policy explains how we handle
              personal information collected through this website and our booking process.
            </p>

            <h2>Information we collect</h2>
            <ul>
              <li>Contact details you submit through our query forms, such as name, agency, email and phone.</li>
              <li>Travel details such as destinations, dates, number of rooms and travellers, and preferences.</li>
              <li>Information needed to make bookings, such as passport details, when you confirm a trip.</li>
              <li>Basic technical data such as browser type and pages visited, collected through cookies.</li>
            </ul>

            <h2>How we use it</h2>
            <ul>
              <li>To prepare proposals and respond to your queries by email, phone or WhatsApp.</li>
              <li>To make and manage reservations with hotels, transport and activity suppliers.</li>
              <li>To send newsletters, only where you have subscribed. You can unsubscribe at any time.</li>
              <li>To improve our website and services.</li>
            </ul>

            <h2>Sharing your information</h2>
            <p>
              We share personal information only with the suppliers needed to deliver your trip (for example,
              hotels and transfer companies) and with service providers that help us run our business. We do not
              sell your personal information.
            </p>

            <h2>Cookies</h2>
            <p>
              We use cookies to keep the website working and to understand how it is used. You can control
              cookies through your browser settings.
            </p>

            <h2>Your rights</h2>
            <p>
              You can ask to access, correct or delete your personal information, or object to how we use it.
              Contact us at <a href={`mailto:${contact.inquiryEmail}`}>{contact.inquiryEmail}</a>.
            </p>

            <h2 id="terms">Terms of service</h2>
            <p>
              Proposals are subject to availability until confirmed. Booking, payment and cancellation terms are
              provided with each proposal and confirmation.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about this policy can be sent to{" "}
              <a href={`mailto:${contact.inquiryEmail}`}>{contact.inquiryEmail}</a> or by phone on{" "}
              <a href={`tel:${contact.usaTel}`}>{contact.usaPhone}</a>.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
