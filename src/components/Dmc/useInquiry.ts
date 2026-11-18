"use client";

import { useState } from "react";
import { openInquiryEmail } from "@/lib/emailInquiry";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Checks a form and hands it to the visitor's email app. */
export function useInquiry() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [error, setError] = useState("");

  function submit(subject: string, fields: Record<string, unknown>) {
    setError("");

    if ("contact" in fields) {
      const value = String(fields.contact).trim();
      if (!emailPattern.test(value) && value.replace(/\D/g, "").length < 7) {
        setError("Please enter a valid email or phone number.");
        return;
      }
    }

    openInquiryEmail(subject, fields);
    setStatus("sent");
  }

  return { status, error, submit, reset: () => setStatus("idle") };
}
