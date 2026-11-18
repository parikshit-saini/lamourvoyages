import Link from "next/link";
import Icon from "@/components/Icon/Icon";
import { contact } from "@/data/site";
import styles from "./CtaBand.module.scss";

type Props = {
  title?: string;
  text?: string;
};

export default function CtaBand({
  title = "Ready to design your journey?",
  text = "Share your dates and wishes — a specialist will send a tailor-made proposal, usually within 4 hours.",
}: Props) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.band}>
          <div>
            <span className={styles.eyebrow}>Bespoke Planning</span>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className={styles.actions}>
            <Link href="/contact-us#planner" className="btn btn--light">
              Plan Your Trip <Icon name="arrow_forward" size={18} />
            </Link>
            <a href={`tel:${contact.usaTel}`} className="btn btn--glass">
              <Icon name="call" size={18} /> {contact.usaPhone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
