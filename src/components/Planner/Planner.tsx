"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/Icon/Icon";
import { contact, tours } from "@/data/site";
import { openInquiryEmail } from "@/lib/emailInquiry";
import styles from "./Planner.module.scss";

const tourOptions = [
  ...tours.map((t) => ({ value: t.id, label: `${t.title} (${t.duration.replace(/\s/g, "")})` })),
  { value: "custom", label: "Fully Customized Multi-Country Route" },
];

const counts = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "10+"];

function makeCode() {
  return `LM-${Math.floor(100 + Math.random() * 900)}`;
}

export default function Planner() {
  const [mode, setMode] = useState<"fit" | "group">("fit");
  const [tour, setTour] = useState(tourOptions[0].value);
  const [rooms, setRooms] = useState("1");
  const [persons, setPersons] = useState("2");
  const [code, setCode] = useState("LM-000");
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    setCode(makeCode());
    // Preselect a tour when arriving from a tour card link
    const fromUrl = new URLSearchParams(window.location.search).get("tour");
    if (fromUrl && tourOptions.some((o) => o.value === fromUrl)) setTour(fromUrl);
  }, []);

  function switchMode(next: "fit" | "group") {
    setMode(next);
    if (next === "fit") {
      setRooms("1");
      setPersons("2");
    } else {
      setRooms("10+");
      setPersons("10+");
    }
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const form = new FormData(e.currentTarget);

    if (String(form.get("captcha")).trim().toUpperCase() !== code) {
      setError("The security code doesn't match. Please try again.");
      setCode(makeCode());
      return;
    }

    const tourLabel = tourOptions.find((o) => o.value === form.get("tour"))?.label;
    openInquiryEmail(mode === "fit" ? "FIT travel query" : "Group travel query", {
      ...Object.fromEntries(form.entries()),
      tour: tourLabel,
    });
    setStatus("sent");
  }

  return (
    <section className={styles.section} id="planner">
      <div className={styles.wrap}>
        <div className={styles.panel}>
          {status === "sent" ? (
            <div className={styles.success}>
              <Icon name="check_circle" size={48} />
              <h3>Almost there: press send in your email app.</h3>
              <p>
                Your details are filled in and ready to go. If no email opened, write to us at{" "}
                <a href={`mailto:${contact.inquiryEmail}`}>{contact.inquiryEmail}</a>.
              </p>
              <button type="button" className="btn btn--primary" onClick={() => setStatus("idle")}>
                Send another query
              </button>
            </div>
          ) : (
            <>
              <div className={styles.head}>
                <span className={styles.eyebrow}>Get In Touch With Our Specialists</span>
                <h2>Begin Your Customized Journey</h2>
                <p>
                  Share your FIT or group travel plans. Our specialists will shape every detail and usually
                  respond within 4 hours.
                </p>
              </div>

              <div className={styles.toggleWrap}>
                <div className={styles.toggle} role="group" aria-label="Query type">
                  <span className={`${styles.indicator} ${mode === "group" ? styles.indicatorRight : ""}`} />
                  <button
                    type="button"
                    aria-pressed={mode === "fit"}
                    className={mode === "fit" ? styles.toggleActive : ""}
                    onClick={() => switchMode("fit")}
                  >
                    FIT Query (Individual)
                  </button>
                  <button
                    type="button"
                    aria-pressed={mode === "group"}
                    className={mode === "group" ? styles.toggleActive : ""}
                    onClick={() => switchMode("group")}
                  >
                    Group Query
                  </button>
                </div>
              </div>

              <form className={styles.form} onSubmit={onSubmit}>
                <label className={styles.field}>
                  <span className={styles.label}>Destination / Tour</span>
                  <span className={styles.selectWrap}>
                    <select name="tour" value={tour} onChange={(e) => setTour(e.target.value)}>
                      {tourOptions.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                    <Icon name="expand_more" size={18} />
                  </span>
                </label>

                <label className={styles.field}>
                  <span className={styles.label}>No. of Rooms</span>
                  <span className={styles.selectWrap}>
                    <select name="rooms" value={rooms} onChange={(e) => setRooms(e.target.value)}>
                      {counts.map((c) => (
                        <option key={c} value={c}>
                          {c} {c === "1" ? "Room" : "Rooms"}
                        </option>
                      ))}
                    </select>
                    <Icon name="expand_more" size={18} />
                  </span>
                </label>

                <label className={styles.field}>
                  <span className={styles.label}>No. of Persons</span>
                  <span className={styles.selectWrap}>
                    <select name="persons" value={persons} onChange={(e) => setPersons(e.target.value)}>
                      {counts.map((c) => (
                        <option key={c} value={c}>
                          {c} {c === "1" ? "Person" : "Persons"}
                        </option>
                      ))}
                    </select>
                    <Icon name="expand_more" size={18} />
                  </span>
                </label>

                <label className={styles.field}>
                  <span className={styles.label}>Your Name / Agency</span>
                  <input name="name" type="text" required placeholder="Your name or agency" />
                </label>

                <label className={styles.field}>
                  <span className={styles.label}>Email Address</span>
                  <input name="email" type="email" required placeholder="name@domain.com" />
                </label>

                <label className={styles.field}>
                  <span className={styles.label}>Contact / WhatsApp</span>
                  <input name="phone" type="tel" required placeholder="+1 / +91 / +44 phone" />
                </label>

                <label className={styles.field}>
                  <span className={styles.label}>Preferred Travel Date</span>
                  <input name="travelDate" type="date" />
                </label>

                <label className={`${styles.field} ${styles.wide}`}>
                  <span className={styles.label}>
                    Security Verification <small>Spam protection</small>
                  </span>
                  <span className={styles.captcha}>
                    <span className={styles.code} aria-label={`Security code ${code}`}>
                      {code}
                    </span>
                    <input name="captcha" type="text" required placeholder="Enter code" autoComplete="off" />
                  </span>
                </label>

                {/* Honeypot: hidden from people, bots tend to fill it */}
                <input type="text" name="website" tabIndex={-1} autoComplete="off" className={styles.honeypot} />

                <label className={`${styles.field} ${styles.full}`}>
                  <span className={styles.label}>Special Preferences &amp; Requirements (Optional)</span>
                  <textarea
                    name="notes"
                    rows={3}
                    placeholder="Specify hotel category (4★ / 5★), private guide language, flight inclusions, or custom cities..."
                  />
                </label>

                {error && (
                  <p className={`${styles.error} ${styles.full}`} role="alert">
                    <Icon name="error" size={16} /> {error}
                  </p>
                )}

                <div className={`${styles.submitRow} ${styles.full}`}>
                  <label className={styles.consent}>
                    <input type="checkbox" name="consent" defaultChecked required />
                    I agree to receive the personalized proposal via Email &amp; WhatsApp.
                  </label>
                  <button type="submit" className="btn btn--primary">
                    Send Private Query
                    <Icon name="send" size={18} />
                  </button>
                </div>
              </form>

              <div className={styles.foot}>
                <a href={`tel:${contact.usaTel}`}>
                  Direct Desk: <strong>{contact.usaPhone}</strong>
                </a>
                <a href={`tel:${contact.indiaTel}`}>
                  India: <strong>{contact.indiaPhone}</strong>
                </a>
                <a href={`mailto:${contact.inquiryEmail}`}>
                  <strong>{contact.inquiryEmail}</strong>
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
