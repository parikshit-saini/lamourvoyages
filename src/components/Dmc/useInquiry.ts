"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

/** Sends a form to the inquiry API and tracks its progress. */
export function useInquiry() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function submit(payload: Record<string, unknown>) {
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error((await res.json()).error ?? "Something went wrong");
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return { status, error, submit, reset: () => setStatus("idle") };
}
