"use client";

import { useState } from "react";
import Icon from "@/components/Icon/Icon";
import { contact } from "@/data/site";
import DmcIcon from "./DmcIcon";
import { useInquiry } from "./useInquiry";
import styles from "./DmcForms.module.scss";

const roomOptions = ["1 Room", "2 Rooms", "3 - 5 Rooms", "6 - 10 Rooms", "10+ Rooms"];
const travelerOptions = ["1 - 2 Persons", "3 - 5 Persons", "6 - 10 Persons", "11 - 25 Persons", "26+ Persons"];

export default function QuickQueryForm() {
  const [mode, setMode] = useState<"fit" | "group">("fit");
  const [rooms, setRooms] = useState(roomOptions[0]);
  const [travelers, setTravelers] = useState(travelerOptions[0]);
  const { status, error, submit, reset } = useInquiry();

  function switchMode(next: "fit" | "group") {
    setMode(next);
    setRooms(next === "fit" ? roomOptions[0] : roomOptions[4]);
    setTravelers(next === "fit" ? travelerOptions[0] : travelerOptions[4]);
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = Object.fromEntries(new FormData(e.currentTarget).entries());
    submit(mode === "fit" ? "FIT private query" : "Group / MICE query", form);
  }

  if (status === "sent") {
    return (
      <div className={`${styles.card} ${styles.quickCard} ${styles.success}`}>
        <Icon name="check_circle" size={40} />
        <h3>Almost there: press send in your email app.</h3>
        <p>
          Your details are filled in and ready to go. If no email opened, write to us at{" "}
          <a href={`mailto:${contact.inquiryEmail}`}>{contact.inquiryEmail}</a>.
        </p>
        <button type="button" className={styles.submit} onClick={reset}>
          Send another query
        </button>
      </div>
    );
  }

  return (
    <div className={`${styles.card} ${styles.quickCard}`}>
      <div className={styles.tabs} role="group" aria-label="Query type">
        <button type="button" aria-pressed={mode === "fit"} onClick={() => switchMode("fit")}>
          FIT Private Query
        </button>
        <button type="button" aria-pressed={mode === "group"} onClick={() => switchMode("group")}>
          Group / MICE Query
        </button>
      </div>

      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.row}>
          <label className={styles.field}>
            <span>Number of Rooms</span>
            <span className={styles.selectWrap}>
              <select name="rooms" value={rooms} onChange={(e) => setRooms(e.target.value)}>
                {roomOptions.map((o) => <option key={o}>{o}</option>)}
              </select>
              <Icon name="expand_more" size={18} />
            </span>
          </label>
          <label className={styles.field}>
            <span>Number of Travelers</span>
            <span className={styles.selectWrap}>
              <select name="travelers" value={travelers} onChange={(e) => setTravelers(e.target.value)}>
                {travelerOptions.map((o) => <option key={o}>{o}</option>)}
              </select>
              <Icon name="expand_more" size={18} />
            </span>
          </label>
        </div>

        <div className={styles.row}>
          <label className={styles.field}>
            <span>Target Region</span>
            <input name="region" type="text" required placeholder="e.g. New York, West Coast, Florida" />
          </label>
          <label className={styles.field}>
            <span>Contact Email / Phone</span>
            <input name="contact" type="text" required placeholder="name@agency.com or +1..." />
          </label>
        </div>

        <label className={styles.field}>
          <span>Special Preferences / Routing Notes</span>
          <textarea
            name="notes"
            rows={2}
            placeholder="Provide dates, dietary requests (e.g. authentic Indian catering), luxury coach needs, or conference room specs..."
          />
        </label>

        <input type="text" name="website" tabIndex={-1} autoComplete="off" className={styles.honeypot} aria-hidden="true" />

        {error && <p className={styles.error} role="alert">{error}</p>}

        <div className={styles.footer}>
          <span className={styles.note}>
            <DmcIcon name="lock" /> Confidential NDA Guaranteed
          </span>
          <button type="submit" className={styles.submit}>
            Submit Query
            <DmcIcon name="arrow-light" />
          </button>
        </div>
      </form>
    </div>
  );
}
