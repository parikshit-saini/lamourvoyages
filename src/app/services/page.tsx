import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DmcIcon from "@/components/Dmc/DmcIcon";
import HotelBand from "@/components/Dmc/HotelBand";
import RfpForm from "@/components/Dmc/RfpForm";
import { contact } from "@/data/site";
import styles from "./services.module.scss";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Hotel contracting, executive transportation, special events, sightseeing, dining and turnkey DMC ground operations across the Americas.",
  alternates: { canonical: "/services" },
};

const indicators = [
  { icon: "pill-verified", tone: "green", label: "Global Contracting", value: "100% Direct Supplier Rates" },
  { icon: "pill-headset", tone: "sand", label: "Always On-Ground", value: "24/7 Transatlantic Concierge" },
  { icon: "pill-groups", tone: "green", label: "Tailored Scale", value: "MICE, Corporate & FIT Agility" },
  { icon: "pill-dining", tone: "sand", label: "Catering Alliances", value: "Nationwide Indian & Global Culinary" },
];

const disciplines = [
  {
    image: "pillar-hotel",
    alt: "Luxury hotel suite overlooking the Manhattan skyline at night",
    crop: true,
    pillar: "Pillar I",
    caption: "Tier-One Preferred Status",
    icon: "star-badge",
    title: "Hotel Accommodation & Contract Negotiation",
    text: "We spend a great deal of time maintaining active relationships with our large network of hotel professionals to secure preferred tier rates, room block guarantees, suite upgrades, and VIP amenities from iconic chain hotels (Marriott Global, IHG Luxury, Hilton, Wyndham, Radisson) through to independent boutique hideaways throughout the Americas.",
    points: ["Guaranteed Group Room Allotments", "VIP Upgrades & Direct Master Billing", "Direct DMC Pre-negotiated Wholesale Rates"],
  },
  {
    image: "pillar-transport",
    alt: "Executive van and helicopter on an airfield at sunset",
    pillar: "Pillar II",
    caption: "Tarmac to Highway Command",
    icon: "flight",
    title: "Transportation & Executive Logistics",
    text: "Transportation does not end at luxury coaches—it spans executive sedans, diplomatic limousines, chartered passenger trains, private helicopters, and airport ramp tarmac fast-track transfers. Over 21 contracted fleet alliances ready on 2-hour notice.",
    points: ["21+ Contracted Fleet Alliances in Major Gateways", "Private Rotary & Fixed-Wing Aviation Handlers", "Diplomatic, Embassy & Executive Motorcade Escorts"],
  },
  {
    image: "pillar-events",
    alt: "Gala dinner in a historic ballroom with chandeliers",
    pillar: "Pillar III",
    caption: "Prestigious Gatherings",
    icon: "celebration",
    title: "Special Events, Banquets & Gala Dinners",
    text: "We design turnkey packages around prestigious events and private summits. From high-level gala dinners in historic ballrooms to private buyouts, award nights, audio-visual stage setups, and customized décor.",
    points: ["Historic Ballroom & Landmark Estate Buyouts", "Turnkey Stage, Lighting & Sound Production", "Curated Menus & Red-Carpet Concierge Hosting"],
  },
];

const suite = [
  {
    icon: "wallet",
    label: "Fiscal Precision",
    title: "Budget Management & Value Engineering",
    text: "Have a demanding budget? We work in tandem with direct master suppliers to secure the most competitive tier pricing without compromising on 5-star touchpoints. Transparent cost breakdowns with zero surprise fees.",
    note: "FIT & MICE Optimized",
    cta: "Learn Details",
  },
  {
    icon: "compass",
    label: "Curated Immersion",
    title: "Sightseeing Tours & Social Programs",
    text: "Specially designed tours for your delegates and private families based on thematic interests, led by multilingual licensed guides and expert storytellers with private early-access entries before public gates open.",
    note: "Multilingual Licensed Guides",
    cta: "View Excursions",
  },
  {
    icon: "flag",
    label: "Corporate Retreats",
    title: "Activities & Executive Team Building",
    text: "High-energy executive retreats: James Bond tactical experiences with mission tablets, private speedboat regattas, American wilderness team rallies, private master cooking classes, and racetrack driving experiences.",
    note: "Bespoke Adrenaline",
    cta: "Explore Retreats",
  },
  {
    icon: "cooking",
    label: "Gastronomy & Tradition",
    title: "Restaurant Selection & Authentic Dining",
    text: "Foodies at heart, we maintain direct contracts with over 200 premier dining establishments across the USA. Specialized expertise in authentic high-standard Indian cuisine, private hotel banqueting, and strict dietary certifications.",
    note: "200+ Contracted Kitchens",
    cta: "Culinary Roster",
  },
  {
    icon: "masks",
    label: "Exclusive Entrée",
    title: "Sports, Broadway & Premier Ticketing",
    text: "Guaranteed official VIP seating for major sporting tournaments (Wimbledon, NBA, Super Bowl, Cricket, Premier League), sold-out Broadway theater tickets, Las Vegas residency shows, Universal Studios VIP, Disney VIP Concierge, and NASA Space Center private tours.",
    note: "Guaranteed Box Access",
    cta: "Request Passes",
  },
  {
    icon: "venue",
    label: "Site Procurement",
    title: "Venue Finding & Turnkey Management",
    text: "Take the burden off your planning team. Provide your headcount, aesthetic brief, and budget, and our global desks will present vetted convention centers, rooftop venues, and historic estates within 24 hours.",
    note: "24-Hour Shortlist SLA",
    cta: "Submit Venue Brief",
  },
];

const workflow = [
  { number: "01", tag: "Within 4 Hours", title: "Requirement Briefing & FIT/MICE Analysis", text: "Comprehensive intake of guest demographics, VIP protocols, culinary preferences, rooming profiles, and target budget thresholds.", icon: "timer", foot: "Immediate Response Desk" },
  { number: "02", tag: "Direct Wholesale", title: "Direct Contracted Supplier Allocation", text: "Leveraging established wholesale allotments with Tier-1 chains, chartered fleets, and local tour operators to lock preferred pricing.", icon: "tag", foot: "No Intermediary Margins" },
  { number: "03", tag: "Live Tracking", title: "Turnkey Execution & Tour Directors", text: "Assigned on-ground managers monitoring flight movements, coach dispatch, hotel check-in keys pre-cut, and dining setups.", icon: "concierge", foot: "Bespoke Concierge Escort" },
  { number: "04", tag: "24/7 Transatlantic", title: "Real-Time Dual-Hemisphere Support", text: "Follow-the-sun coordination across Elizabeth (USA), London (UK), Noida (India), and Ontario (Canada) ensures non-stop readiness.", icon: "world", foot: "Worldwide Coverage" },
];

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <span className={styles.glowSand} aria-hidden="true" />
        <span className={styles.glowGreen} aria-hidden="true" />
        <div className={styles.heroInner}>
          <nav className={styles.crumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <DmcIcon name="chevron" />
            <span aria-current="page">Bespoke DMC Services</span>
          </nav>
          <span className={styles.heroTag}>
            <span className={styles.heroDot} />
            Full-Service USA DMC &amp; Worldwide Hospitality Management
          </span>
          <h1>End-to-End Travel Craftsmanship, Flawless Ground Operations, and Bespoke Concierge.</h1>
          <p>
            Services we manage for your complete journey. From preferential hotel contracting and executive tarmac
            logistics to curated Michelin &amp; Indian culinary dining, private galas, and VIP access across the
            Americas.
          </p>
          <div className={styles.indicators}>
            {indicators.map((item) => (
              <div key={item.label} className={styles.indicator}>
                <span className={item.tone === "green" ? styles.iconGreen : styles.iconSand}>
                  <DmcIcon name={item.icon} />
                </span>
                <div>
                  <small>{item.label}</small>
                  <strong>{item.value}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core disciplines */}
      <section className={styles.disciplines}>
        <div className={styles.container}>
          <div className={styles.splitHead}>
            <div>
              <span className={styles.eyebrow}>Foundational Pillars</span>
              <h2>Core Operational Disciplines</h2>
            </div>
            <p>
              Precision ground networks operating seamlessly across New York, London, New Delhi, and Toronto to
              engineer unforgettable private and corporate moments.
            </p>
          </div>
          <div className={styles.disciplineGrid}>
            {disciplines.map((d) => (
              <article key={d.title} className={styles.discipline}>
                <div className={styles.disciplineImage}>
                  <Image
                    src={`/images/figma/${d.image}.jpg`}
                    alt={d.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className={d.crop ? styles.cropTop : undefined}
                  />
                  <span className={styles.imageShade} />
                  <span className={styles.pillarTag}>{d.pillar}</span>
                  <span className={styles.imageCaption}>
                    {d.caption}
                    <DmcIcon name={d.icon} />
                  </span>
                </div>
                <div className={styles.disciplineBody}>
                  <div>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                  <ul>
                    {d.points.map((point) => (
                      <li key={point}>
                        <DmcIcon name="check" /> {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Full suite */}
      <section className={styles.suite}>
        <div className={styles.container}>
          <div className={styles.suiteHead}>
            <span className={styles.eyebrow}>Tailored Capabilities</span>
            <h2>The Full Spectrum of Travel Management</h2>
            <p>
              From cost optimization for large delegations to bespoke backstage access, every itinerary is executed
              with unwavering rigor.
            </p>
          </div>
          <div className={styles.suiteGrid}>
            {suite.map((s) => (
              <article key={s.title} className={styles.service}>
                <div>
                  <span className={styles.squareIcon}><DmcIcon name={s.icon} /></span>
                  <span className={styles.serviceLabel}>{s.label}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
                <div className={styles.serviceFoot}>
                  <span>{s.note}</span>
                  <a href="#inquiry">
                    {s.cta} <DmcIcon name="arrow" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className={styles.workflow}>
        <div className={styles.container}>
          <div className={styles.workflowHead}>
            <span className={styles.eyebrowLight}>Unrivaled Execution Protocol</span>
            <h2>Operational Workflow &amp; SLA</h2>
            <p>From initial brief to post-tour reconciliation, our multi-office network functions as a synchronized engine.</p>
          </div>
          <ol className={styles.steps}>
            {workflow.map((step) => (
              <li key={step.number} className={styles.step}>
                <div>
                  <div className={styles.stepTop}>
                    <b>{step.number}</b>
                    <span>{step.tag}</span>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
                <span className={styles.stepFoot}>
                  <DmcIcon name={step.icon} /> {step.foot}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Inquiry */}
      <section className={styles.inquiry} id="inquiry">
        <div className={styles.inquiryGrid}>
          <div className={styles.inquiryCopy}>
            <span className={styles.eyebrow}>Initiate a Proposal</span>
            <h2>Request Bespoke DMC Rates &amp; Consultation</h2>
            <p>
              Whether inquiring for a high-profile corporate incentive group, family reunion, luxury FIT circuit, or
              private charter itinerary, our senior directors will formulate a customized contract within 24 hours.
            </p>
            <div className={styles.contactCards}>
              <div className={styles.contactCard}>
                <span className={styles.contactIcon}><DmcIcon name="call" /></span>
                <div>
                  <small>Direct 24/7 Operations Desk</small>
                  <a href={`tel:${contact.usaTel}`} className={styles.contactPhone}>+1 347-653-9583</a>
                  <span>North America &amp; Worldwide Hub</span>
                </div>
              </div>
              <div className={styles.contactCard}>
                <span className={styles.contactIcon}><DmcIcon name="mail-check" /></span>
                <div>
                  <small>Executive Directorate Email</small>
                  <a href="mailto:ashutosh@lamourvoyages.com" className={styles.contactEmail}>ashutosh@lamourvoyages.com</a>
                  <a href={`mailto:${contact.inquiryEmail}`} className={styles.contactEmail}>{contact.inquiryEmail}</a>
                </div>
              </div>
            </div>
            <div className={styles.trust}>
              <strong>
                <DmcIcon name="shield" /> Regulated Global Travel Operator
              </strong>
              <p>
                GSTIN: 07AADCL1143R1Z9 | CIN: U74999DL2016PTC303437. Fully bonded DMC entity registered in the United
                States, UK, Canada &amp; India.
              </p>
            </div>
          </div>
          <RfpForm />
        </div>
      </section>

      <HotelBand />
    </div>
  );
}
