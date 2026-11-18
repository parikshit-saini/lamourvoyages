import type { Metadata } from "next";
import DestinationPage from "@/components/Destination/DestinationPage";
import { destinations } from "@/data/destinations";

const d = destinations["los-angeles"];

export const metadata: Metadata = {
  title: d.title,
  description: d.subtitle,
  alternates: { canonical: "/los-angeles" },
};

export default function Page() {
  return <DestinationPage slug="los-angeles" />;
}
