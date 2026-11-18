"use client";

import { useState } from "react";
import TourShowcase from "@/components/Tours/TourShowcase";
import { emptyTourFilters, type TourFilters } from "@/data/site";
import Hero from "./Hero";

/** Connects the hero search bar to the tour showcase below it. */
export default function HomeExplorer() {
  const [draft, setDraft] = useState<TourFilters>(emptyTourFilters);
  const [applied, setApplied] = useState<TourFilters>(emptyTourFilters);

  function search() {
    setApplied(draft);
    document.getElementById("tours")?.scrollIntoView({ behavior: "smooth" });
  }

  function clear() {
    setDraft(emptyTourFilters);
    setApplied(emptyTourFilters);
  }

  return (
    <>
      <Hero filters={draft} onChange={setDraft} onSearch={search} />
      <TourShowcase filters={applied} onClear={clear} />
    </>
  );
}
