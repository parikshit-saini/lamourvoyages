"use client";

import { useState } from "react";
import Icon from "@/components/Icon/Icon";
import { contact } from "@/data/site";
import DmcIcon from "./DmcIcon";
import { useInquiry } from "./useInquiry";
import styles from "./DmcForms.module.scss";

const capabilities = [
  "Comprehensive Turnkey DMC Ground Package",
  "Hotel Accommodation & Contract Negotiation",
  "Transportation & Executive Logistics",
  "Special Events, Banquets & Gala Dinners",
  "Sightseeing Tours & Social Programs",
  "Venue Finding & Turnkey Management",
];
const regions = [
  "USA - East Coast (NY, Boston, DC)",
  "USA - West Coast (LA, Las Vegas, SF)",
  "USA - Florida (Miami, Orlando)",
  "Canada",
  "South America",
  "Multi-Region Itinerary",
];
const guestOptions = ["1 - 4 Guests", "5 - 10 Guests", "11 - 25 Guests", "26 - 50 Guests", "51+ Guests"];
const roomOptions = ["1 - 2 Rooms", "3 - 5 Rooms", "6 - 10 Rooms", "11 - 25 Rooms", "26+ Rooms"];
const standards = ["5-Star Ultra Luxury", "4-Star Premium", "Boutique Collection", "Mixed Categories"];

function Select({ label, name, options, value, onChange }: {
  label: string;
  name: string;
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
}) {
  return (
    <label className={styles.field}>
      <span>{label}</span>
      <span className={styles.selectWrap}>
        <select name={name} value={value} onChange={onChange && ((e) => onChange(e.target.value))}>
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
        <Icon name="expand_more" size={18} />
      </span>
    </label>
  );
}

export default function RfpForm() {
  const [mode, setMode] = useState<"fit" | "group">("fit");
  const [guests, setGuests] = useState(guestOptions[0]);
  const [rooms, setRooms] = useState(roomOptions[0]);
  const { status, error, submit, reset } = useInquiry();

  function switchMode(next: "fit" | "group") {
    setMode(next);
    setGuests(next === "fit" ? guestOptions[0] : guestOptions[3]);
    setRooms(next === "fit" ? roomOptions[0] : roomOptions[3]);
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = Object.fromEntries(new FormData(e.currentTarget).entries());
    submit(mode === "fit" ? "FIT DMC inquiry" : "Group / MICE DMC inquiry", form);
  }

  if (status === "sent") {
    return (
      <div className={`${styles.card} ${styles.rfpCard} ${styles.success}`}>
        <Icon name="check_circle" size={48} />
        <h3>Almost there: press send in your email app.</h3>
        <p>
          Your specification is filled in and ready to go. If no email opened, write to us at{" "}
          <a href={`mailto:${contact.inquiryEmail}`}>{contact.inquiryEmail}</a>.
        </p>
        <button type="button" className={styles.submit} onClick={reset}>
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className={`${styles.card} ${styles.rfpCard}`}>
      <div className={`${styles.tabs} ${styles.pillTabs}`} role="group" aria-label="Inquiry type">
        <button type="button" aria-pressed={mode === "fit"} onClick={() => switchMode("fit")}>
          FIT Inquiry
        </button>
        <button type="button" aria-pressed={mode === "group"} onClick={() => switchMode("group")}>
          Group / MICE
        </button>
      </div>

      <form className={styles.form} onSubmit={onSubmit}>
        <Select label="Primary Required DMC Capability" name="capability" options={capabilities} />

        <div className={styles.row}>
          <Select label="Destination Region" name="region" options={regions} />
          <label className={styles.field}>
            <span>Target Travel Dates / Season</span>
            <input name="dates" type="text" placeholder="e.g. Oct 2027 (Flexible)" />
          </label>
        </div>

        <div className={styles.row3}>
          <Select label="Guests / Travelers" name="guests" options={guestOptions} value={guests} onChange={setGuests} />
          <Select label="Rooms Needed" name="rooms" options={roomOptions} value={rooms} onChange={setRooms} />
          <Select label="Preferred Standard" name="standard" options={standards} />
        </div>

        <div className={styles.row}>
          <label className={styles.field}>
            <span>Your Full Name &amp; Title</span>
            <input name="name" type="text" required placeholder="e.g. Victoria Thorne, Director" />
          </label>
          <label className={styles.field}>
            <span>Agency or Organization</span>
            <input name="organization" type="text" placeholder="Travel Agency or Corporate entity" />
          </label>
        </div>

        <div className={styles.row}>
          <label className={styles.field}>
            <span>Direct Phone / WhatsApp</span>
            <input name="phone" type="tel" required placeholder="+1 (555) 000-0000" />
          </label>
          <label className={styles.field}>
            <span>Official Email Address</span>
            <input name="email" type="email" required placeholder="name@company.com" />
          </label>
        </div>

        <label className={styles.field}>
          <span>Specific Program Requirements or Dietary Profiles</span>
          <textarea
            name="notes"
            rows={3}
            placeholder="Tell us about your program agenda, flight arrival details, Indian meal requirements, or special gala staging..."
          />
        </label>

        <input type="text" name="website" tabIndex={-1} autoComplete="off" className={styles.honeypot} aria-hidden="true" />

        {error && <p className={styles.error} role="alert">{error}</p>}

        <div className={styles.footer}>
          <span className={styles.note}>
            <span className={styles.dot} /> Guaranteed response within 4 hours
          </span>
          <button type="submit" className={`${styles.submit} ${styles.submitLarge}`}>
            Submit DMC Specification
            <DmcIcon name="send" />
          </button>
        </div>
      </form>
    </div>
  );
}
