import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon/Icon";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import Tilt from "@/components/Tilt/Tilt";
import { images, offices, tours, type Region } from "@/data/site";
import RegionBars from "./RegionBars";
import styles from "./AboutBento.module.scss";

const regions: { label: string; region: Region }[] = [
  { label: "USA East Coast", region: "east" },
  { label: "South America", region: "south" },
  { label: "USA West Coast", region: "west" },
  { label: "Canada", region: "canada" },
];

export default function AboutBento() {
  const bars = regions.map(({ label, region }) => ({
    label,
    count: tours.filter((t) => t.regions.includes(region)).length,
  }));

  const stats = [
    { value: String(tours.length), label: "Signature Tour Packages" },
    { value: `${offices.length} Offices`, label: "USA • Canada • UK • India" },
    { value: "24 / 7", label: "Dedicated Concierge Support" },
    { value: "100%", label: "Customized Pacing" },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <SectionHeading
            align="left"
            eyebrow="About L'amour Voyages"
            title="Travel shaped around you, your pace, your path."
          />
          <p>
            Our approach is proactive, effective, innovative and efficient. From the Canadian Rockies to the
            shores of Rio, every itinerary is tailor-made around your dates, interests and budget.
          </p>
        </div>

        <div className={styles.bento}>
          <Tilt className={styles.dark}>
            <div>
              <div className={styles.darkTop}>
                <Icon name="route" size={32} className={styles.routeIcon} />
                <span className={styles.liveTag}>
                  <span className={styles.ping} /> FIT Concierge
                </span>
              </div>
              <h3>Journeys made personal.</h3>
              <p>
                Travel at your own rhythm. Discover hidden gems beyond the standard tour routes, with private
                guides and hand-picked hotels.
              </p>
            </div>
            <Link href="#planner" className={`btn btn--light ${styles.darkCta}`}>
              Request Tailor-Made FIT
            </Link>
          </Tilt>

          <Tilt className={styles.photo}>
            <Image
              src={images.traveler}
              alt="Traveler looking out over a sunlit alpine valley"
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className={styles.photoImage}
            />
            <span className={styles.photoShade} />
            <span className={styles.photoTag}>Made for You</span>
            <span className={styles.photoText}>
              <strong>Curated Expeditions &amp; Private Air Charters</strong>
              <small>Hand-picked hotels and experiences</small>
            </span>
          </Tilt>

          <Tilt className={styles.metrics}>
            <div>
              <div className={styles.metricTop}>
                <strong>{tours.length}</strong>
                <span>Signature Tours</span>
              </div>
              <p>Carefully selected journeys that reveal the real beauty, culture and spirit of the Americas.</p>
              <RegionBars bars={bars} total={tours.length} />
            </div>
            <div className={styles.metricFoot}>
              <span>
                <Icon name="verified" size={16} /> 24/7 on-trip concierge
              </span>
              <b>FIT &amp; Group</b>
            </div>
          </Tilt>
        </div>

        <div className={styles.stats}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
