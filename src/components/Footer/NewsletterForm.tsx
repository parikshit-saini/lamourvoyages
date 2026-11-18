"use client";

import { useState } from "react";
import Icon from "@/components/Icon/Icon";
import styles from "./Footer.module.scss";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: connect to your mailing list provider (Mailchimp, Brevo, etc.)
    await fetch("/api/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "newsletter", email }),
    }).catch(() => null);
    setDone(true);
  }

  if (done) {
    return (
      <p className={styles.subscribed}>
        <Icon name="check_circle" size={18} /> Thank you — you&apos;re on the list.
      </p>
    );
  }

  return (
    <form className={styles.newsletterForm} onSubmit={onSubmit}>
      <label className={styles.emailField}>
        <span className="sr-only">Email address</span>
        <Icon name="mail" size={18} />
        <input
          type="email"
          required
          placeholder="Enter your personal email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button type="submit" className="btn btn--primary btn--sm">
        Subscribe
      </button>
    </form>
  );
}
