import type { Metadata } from "next";
import DestinationPage from "@/components/Destination/DestinationPage";
import { destinations } from "@/data/destinations";

const d = destinations["miami"];

export const metadata: Metadata = {
  title: d.title,
  description: d.subtitle,
  alternates: { canonical: "/miami" },
};

export default function Page() {
  return <DestinationPage slug="miami" />;
}
