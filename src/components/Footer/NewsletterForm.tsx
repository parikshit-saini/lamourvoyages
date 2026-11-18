"use client";

import { useState } from "react";
import Icon from "@/components/Icon/Icon";
import { openInquiryEmail } from "@/lib/emailInquiry";
import styles from "./Footer.module.scss";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    openInquiryEmail("Newsletter subscription request", { email });
    setDone(true);
  }

  if (done) {
    return (
      <p className={styles.subscribed}>
        <Icon name="check_circle" size={18} /> Press send in your email app to finish subscribing.
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
