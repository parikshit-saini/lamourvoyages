import type { Metadata } from "next";
import DestinationPage from "@/components/Destination/DestinationPage";
import { destinations } from "@/data/destinations";

const d = destinations["boston"];

export const metadata: Metadata = {
  title: d.title,
  description: d.subtitle,
  alternates: { canonical: "/boston" },
};

export default function Page() {
  return <DestinationPage slug="boston" />;
}
