import type { Metadata } from "next";
import Image from "next/image";
import DmcIcon from "@/components/Dmc/DmcIcon";
import HotelBand from "@/components/Dmc/HotelBand";
import QuickQueryForm from "@/components/Dmc/QuickQueryForm";
import { contact } from "@/data/site";
import { assetPath } from "@/lib/assetPath";
import styles from "./about.module.scss";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "L'Amour Voyages is a full-service USA Destination Management Company with offices in the USA, India, the UK and Canada.",
  alternates: { canonical: "/about-us" },
};

const metrics = [
  { label: "Response Time", value: "24/7 Desk", text: "Real-time worldwide dispatch" },
  { label: "Transportation", value: "21+ Elite Fleets", text: "Diplomatic & VVIP contracted" },
  { label: "Culinary Access", value: "200+ Venues", text: "Direct banquet & dining contracts" },
  { label: "Hotel Partnerships", value: "Top Portfolios", text: "Marriott, IHG, Hilton, Wyndham" },
];

const pillars = [
  {
    icon: "compass",
    number: "01",
    title: "Our Mission",
    text: "Our personal experience of travel and steady encouragement from clients across the globe has consistently motivated us to raise the bar. We strive to exceed expectations on every journey, treating each itinerary as an opportunity to inspire.",
    tag: "Client Exceedance",
  },
  {
    icon: "eye",
    number: "02",
    title: "Our Vision",
    text: "To deeply comprehend each traveler's and delegation's distinct aspirations. By gaining precise insights into specific accommodation criteria and operational dynamics, we propose and curate only the finest properties on earth.",
    tag: "Curated Exactitude",
  },
  {
    icon: "award",
    number: "03",
    title: "Our Values",
    text: "Uncompromising dedication to service, unwavering discretion, and total reliability. We offer our very best to prestigious clients who rely upon our flawless logistics for international conferences, summits, and executive retreats.",
    tag: "Corporate Reliability",
  },
  {
    icon: "gavel",
    number: "04",
    title: "Code of Conduct",
    text: "As we strive daily to fulfill our mission, our actions are fortified by a strict Corporate Compliance Program. Every vendor, guide, and driver adheres to safety protocols, fair labor policies, and transparent accounting.",
    tag: "Compliance Program",
  },
];

const capabilities = [
  {
    image: "infra-fleet",
    alt: "Chauffeur beside a luxury sedan and coach outside a grand hotel at dusk",
    icon: "bus",
    label: "Fleet Logistics",
    title: "21+ Elite Coach & Transport Alliances",
    text: "Direct contractual alliances with 21 leading coach companies across the USA, including regular partners designated for diplomatic and embassy VVIP movements. We mobilize everything from executive Sedans and stretched Limousines to full-sized Luxury Video Coaches and Caravans even on short notice.",
    tags: ["Chauffeur Sedans", "Video Coaches", "Embassy VVIPs"],
  },
  {
    image: "infra-hotel",
    alt: "Grand hotel lobby with chandeliers and arched windows",
    icon: "bed",
    label: "Hospitality Alliances",
    title: "Preferred Global Hotel Partnerships",
    text: "Enjoy preferential room blocks, VIP status, and contract rates across world-renowned hospitality brands. We are recognized preferred partners with the Marriott Global network, Starwood luxury portfolios, InterContinental Hotels Group (IHG), Wyndham, Hilton, and Radisson.",
    tags: ["Marriott Global", "IHG Luxury", "Hilton Worldwide"],
  },
  {
    image: "infra-dining",
    alt: "Couple at a candlelit fine dining table",
    icon: "dining",
    label: "Gastronomy & Banqueting",
    title: "200+ Vetted Fine Dining Contracts",
    text: "Direct contractual agreements with over 200 vetted restaurants across the United States. We cater to any group size with impeccable culinary standards, private banquet halls, and authentic regional Indian catering at hotels of stay or off-site venues.",
    tags: ["Private Banquets", "Authentic Indian Menus", "Dietary Specialization"],
  },
];

const specialties = [
  { icon: "mice-shield", title: "Dedicated On-Ground Tour Managers", text: "Bilingual tour leaders and local city coordinators with delegates throughout their itinerary." },
  { icon: "mice-pass", title: "Tarmac & Fast-Track Customs Access", text: "Expedited airport handoffs, diplomatic clearance assistance, and coordinated luggage transfers." },
  { icon: "mice-people", title: "Bespoke Keynote & Venue Booking", text: "Audio-visual staging, convention room blocking, and exclusive gala night productions." },
];

const segments = [
  { icon: "briefcase", title: "Corporate MICE", text: "Handling incentive groups and annual worldwide conventions from 20 to 1,500+ participants with flawless staging and private excursions." },
  { icon: "school", title: "Student & Academic", text: "Curated study tours for leading international universities, NASA immersion visits, Ivy League campus workshops, and leadership camps." },
  { icon: "diamond", title: "VIP & Leisure Groups", text: "Exclusive journeys crafted for multi-generational families, private jet travelers, and celebrities seeking total discretion and luxury." },
  { icon: "pin", title: "Bespoke FIT Itineraries", text: "Custom single-party itineraries featuring private chauffeurs, boutique luxury villas, curated private chefs, and rare access permits." },
];

const ashutosh = "ashutosh@lamourvoyages.com";

const hubs = [
  {
    tag: "Corporate HQ",
    primary: true,
    icon: "building",
    country: "United States",
    entity: "Lamour Voyages USA LLC",
    address: ["62 Dayton Street", "Elizabeth, New Jersey 07202", "United States of America"],
    links: [
      { icon: "phone", label: "+1 347-653-9583", href: `tel:${contact.usaTel}`, strong: true },
      { icon: "mail", label: ashutosh, href: `mailto:${ashutosh}` },
    ],
  },
  {
    tag: "Operations Hub",
    icon: "headset",
    country: "India (APAC)",
    entity: "L'Amour Voyages Pvt. Ltd.",
    address: ["4th Floor, A-23, Sector 16", "Noida, National Capital Region", "Uttar Pradesh 201301, India"],
    links: [
      { icon: "phone", label: "+91 8130957237", href: `tel:${contact.indiaTel}`, strong: true },
      { icon: "phone", label: "+91 9833442545", href: "tel:+919833442545", strong: true },
    ],
  },
  {
    tag: "Europe Hub",
    icon: "globe",
    country: "United Kingdom",
    entity: "L'Amour Europe Limited",
    address: ["DNS House, 382 Kenton Road", "Harrow, Middlesex", "HA3 8DP, United Kingdom"],
    links: [
      { icon: "phone", label: "European Itinerary Desk", strong: true },
      { icon: "mail", label: ashutosh, href: `mailto:${ashutosh}` },
    ],
  },
  {
    tag: "Regional Office",
    icon: "mountain",
    country: "Canada",
    entity: "Lamour Voyages Canada Inc.",
    address: ["62 Samuel Avenue", "Fonthill, Ontario", "L0S 1E1, Canada"],
    links: [
      { icon: "chat", label: "WhatsApp: +1 347-653-9583", href: "https://wa.me/13476539583", strong: true },
      { icon: "phone", label: "+91 9833442545", href: "tel:+919833442545" },
    ],
  },
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <Image src={assetPath("/images/figma/about-hero.jpg")} alt="" fill priority sizes="100vw" className={styles.heroImage} />
        <div className={styles.heroGradient} />
        <span className={styles.watermark} aria-hidden="true">DISCOVER</span>

        <div className={styles.heroInner}>
          <div className={styles.heroTags}>
            <span className={styles.heroPill}>
              <span className={styles.heroDot} />
              Full-Service USA Destination Management Company
            </span>
            <span className={styles.heroEst}>• Established 2016</span>
          </div>

          <div className={styles.heroGrid}>
            <div>
              <h1>
                Crafting Unmatched American &amp; Worldwide Journeys with <em>Precision</em>, Distinction, and Care.
              </h1>
              <p>
                L&apos;Amour Voyages is a full-service USA Destination Management Company (DMC) with global corporate
                headquarters in Elizabeth, New Jersey, and operational command centers in New Delhi, London, and
                Ontario. We orchestrate tailor-made expeditions, corporate MICE delegations, and private VIP
                itineraries across the Americas.
              </p>
            </div>

            <aside className={styles.deskCard}>
              <div className={styles.deskTop}>
                <span>Global Executive Desk</span>
                <b>Live 24x7</b>
              </div>
              <div className={styles.deskBody}>
                <span className={styles.deskBadge}>LV</span>
                <div>
                  <strong>Transatlantic Support</strong>
                  <small>Real-time operations in 4 continents</small>
                </div>
              </div>
              <div className={styles.deskFoot}>
                <span>Direct DMC Hotline:</span>
                <a href={`tel:${contact.usaTel}`}>+1 347-653-9583</a>
              </div>
            </aside>
          </div>

          <div className={styles.metrics}>
            {metrics.map((m) => (
              <div key={m.label} className={styles.metric}>
                <span>{m.label}</span>
                <strong>{m.value}</strong>
                <small>{m.text}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage */}
      <section className={styles.heritage}>
        <div className={styles.heritageGrid}>
          <div className={styles.composite}>
            <div className={styles.compositeImage}>
              <Image
                src={assetPath("/images/figma/about-heritage.jpg")}
                alt="Private jet and luxury van parked on a mountain road"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className={styles.glassBadge}>
                <div>
                  <span>Licensed USA DMC</span>
                  <strong>Full Service Execution &amp; Logistics</strong>
                </div>
                <DmcIcon name="verified" />
              </div>
            </div>
            <div className={styles.registration}>
              <span>Corporate Registration</span>
              <strong>CIN: U74999DL2016PTC303437</strong>
              <small>GSTIN: 07AADCL1143R1Z9</small>
            </div>
          </div>

          <div className={styles.narrative}>
            <span className={styles.ruledEyebrow}>Our Heritage &amp; Operations</span>
            <h2>A Transatlantic Bridge Between Continents</h2>
            <p>
              Founded in 2016, <strong>L&apos;Amour Voyages</strong> is a premier destination management company
              engineered around a singularly powerful premise: combining boots-on-the-ground American capability with
              round-the-clock international operations.
            </p>
            <p>
              Headquartered strategically in Elizabeth, New Jersey, our North America leadership commands direct,
              contracted access to key suppliers across all 50 states, Canada, and Latin America. Simultaneously, our
              high-capacity operations center in Noida (National Capital Region, India) and dedicated European desk in
              Harrow (London) deliver 24-hour seamless coordination.
            </p>
            <p>
              Whether orchestrating a 500-delegate corporate convention in Las Vegas, private presidential security
              escorts in Washington D.C., or a confidential high-end wine retreat through Napa Valley, we eliminate
              intermediaries. Our clients deal directly with the master architects of their journey.
            </p>
            <div className={styles.proofs}>
              <div>
                <strong>100% Direct</strong>
                <span>Directly signed master contracts with venues, coach companies, and hotels.</span>
              </div>
              <div>
                <strong>Zero Downtime</strong>
                <span>Handoff across time zones ensures immediate revisions and live trip support.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className={styles.pillars}>
        <div className={styles.container}>
          <div className={styles.centerHead}>
            <span className={styles.eyebrow}>Principles of Excellence</span>
            <h2>Our Philosophy &amp; Corporate Pillars</h2>
            <p>
              Every itinerary, transfer, and banquet is governed by rigorous corporate governance and an obsessive
              commitment to hospitality ethics.
            </p>
          </div>
          <div className={styles.pillarGrid}>
            {pillars.map((p) => (
              <article key={p.title} className={styles.pillar}>
                <div>
                  <span className={styles.roundIcon}><DmcIcon name={p.icon} /></span>
                  <span className={styles.pillarNumber}>Pillar {p.number}</span>
                  <h3>{p.title}</h3>
                  <p>&quot;{p.text}&quot;</p>
                </div>
                <span className={styles.pillarTag}>
                  {p.tag} <DmcIcon name="arrow" />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className={styles.infrastructure}>
        <div className={styles.container}>
          <div className={styles.splitHead}>
            <div>
              <span className={styles.eyebrow}>Proprietary Capacity</span>
              <h2>Premier Infrastructure Across America</h2>
            </div>
            <p>
              We maintain contractual priority with elite suppliers, ensuring flawless execution regardless of group
              size, seasonality, or location complexity.
            </p>
          </div>
          <div className={styles.capabilityGrid}>
            {capabilities.map((c) => (
              <article key={c.title} className={styles.capability}>
                <div className={styles.capabilityImage}>
                  <Image src={assetPath(`/images/figma/${c.image}.jpg`)} alt={c.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" />
                </div>
                <div className={styles.capabilityBody}>
                  <div>
                    <span className={styles.capabilityLabel}>
                      <DmcIcon name={c.icon} /> {c.label}
                    </span>
                    <h3>{c.title}</h3>
                    <p>{c.text}</p>
                  </div>
                  <ul>
                    {c.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MICE */}
      <section className={styles.mice}>
        <div className={styles.miceGrid}>
          <div className={styles.miceCopy}>
            <span className={styles.eyebrowLight}>Tailored Segment Mastery</span>
            <h2>MICE, Academic &amp; Bespoke Group Delegations</h2>
            <p>
              From multi-city technological symposiums to elite academic Ivy League delegations and intimate family
              milestone tours, L&apos;Amour Voyages provides comprehensive turnkey coordination.
            </p>
            <ul>
              {specialties.map((s) => (
                <li key={s.title}>
                  <DmcIcon name={s.icon} />
                  <div>
                    <strong>{s.title}</strong>
                    <span>{s.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.segmentGrid}>
            {segments.map((s) => (
              <article key={s.title} className={styles.segment}>
                <span className={styles.segmentIcon}><DmcIcon name={s.icon} /></span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className={styles.offices}>
        <div className={styles.container}>
          <div className={styles.officeHead}>
            <div>
              <span className={styles.eyebrow}>Transatlantic Executive Hubs</span>
              <h2>Global Offices &amp; Leadership</h2>
            </div>
            <span className={styles.deskPill}>
              <span className={styles.deskDot} /> Operational Desks: USA • UK • India • Canada
            </span>
          </div>

          <div className={styles.leader}>
            <div className={styles.leaderId}>
              <span className={styles.leaderBadge}>HS</span>
              <div>
                <span className={styles.leaderRole}>Executive Leadership</span>
                <h3>Harka Shahi</h3>
                <small>Managing Director, L&apos;Amour Voyages Group</small>
                <a href={`mailto:${contact.inquiryEmail}`}>
                  <DmcIcon name="mail" /> {contact.inquiryEmail}
                </a>
              </div>
            </div>
            <blockquote>
              &quot;Under our dual-hemisphere operating model, no client ever waits for an answer. With senior leadership
              seated directly in New Jersey and strategic execution engines in Delhi, London, and Ontario, we bridge
              every logistical gap in real time. We welcome the opportunity to partner with luxury travel designers,
              corporate leaders, and private guests across the globe.&quot;
            </blockquote>
          </div>

          <div className={styles.hubGrid}>
            {hubs.map((hub) => (
              <article key={hub.country} className={styles.hub}>
                <div>
                  <div className={styles.hubTop}>
                    <span className={hub.primary ? styles.hubTagPrimary : styles.hubTag}>{hub.tag}</span>
                    <DmcIcon name={hub.icon} />
                  </div>
                  <h3>{hub.country}</h3>
                  <span className={styles.hubEntity}>{hub.entity}</span>
                  <address>
                    {hub.address.map((line) => <span key={line}>{line}</span>)}
                  </address>
                </div>
                <div className={styles.hubLinks}>
                  {hub.links.map((link) => {
                    const content = (<><DmcIcon name={link.icon} /> {link.label}</>);
                    const className = link.strong ? styles.hubLinkStrong : styles.hubLink;
                    return link.href ? (
                      <a key={link.label} href={link.href} className={className}>{content}</a>
                    ) : (
                      <span key={link.label} className={className}>{content}</span>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quick query */}
      <section className={styles.query} id="planner">
        <div className={styles.container}>
          <div className={styles.queryPanel}>
            <div className={styles.queryFlare} aria-hidden="true" />
            <div className={styles.queryCopy}>
              <span className={styles.eyebrowLight}>Initiate a Collaboration</span>
              <h2>Ready to Orchestrate Your Delegation or Bespoke Tour?</h2>
              <p>
                Submit your preliminary parameters below. Our transatlantic DMC dispatch will respond within 4 hours
                with contracted hotel availability, fleet proposals, and bespoke pricing.
              </p>
              <div className={styles.queryLinks}>
                <a href={`tel:${contact.usaTel}`} className={styles.hotline}>
                  <DmcIcon name="hotline" /> Direct Hotline: +1 347-653-9583
                </a>
                <a href={`mailto:${contact.conciergeEmail}`} className={styles.conciergeLink}>
                  <DmcIcon name="mail-light" /> Executive Concierge
                </a>
              </div>
            </div>
            <QuickQueryForm />
          </div>
        </div>
      </section>

      <HotelBand />
    </div>
  );
}
