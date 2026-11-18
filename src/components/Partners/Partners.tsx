import Icon from "@/components/Icon/Icon";
import { hotelPartners } from "@/data/site";
import styles from "./Partners.module.scss";

export default function Partners() {
  return (
    <section className={styles.section}>
      <div className="container">
        <span className={styles.eyebrow}>Trusted Partners</span>
        <h3 className={styles.title}>Our Global Hospitality &amp; Hotel Network</h3>
        <div className={styles.logos}>
          {hotelPartners.map((p) => (
            <div key={p.name} className={styles.logo}>
              {p.icon && <Icon name={p.icon} size={20} />}
              <span>{p.name}</span>
              {p.sub && <small>{p.sub}</small>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
