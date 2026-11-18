import styles from "./HotelBand.module.scss";

const hotels = ["Marriott", "Radisson", "Park Plaza", "Mercure", "Elite World"];

export default function HotelBand() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.band}>
          <span className={styles.eyebrow}>Prestigious Hospitality Alliances</span>
          <h2>Esteemed Global Hotel &amp; Resort Partners</h2>
          <ul>
            {hotels.map((hotel) => (
              <li key={hotel}>{hotel}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
