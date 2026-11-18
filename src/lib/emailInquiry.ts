import { contact } from "@/data/site";

const LABELS: Record<string, string> = {
  capability: "Required capability",
  contact: "Contact",
  dates: "Travel dates / season",
  email: "Email",
  guests: "Guests",
  mode: "Query type",
  name: "Name",
  notes: "Notes",
  organization: "Organization",
  persons: "Persons",
  phone: "Phone / WhatsApp",
  region: "Region",
  rooms: "Rooms",
  standard: "Preferred standard",
  tour: "Tour",
  travelDate: "Travel date",
  travelers: "Travelers",
};

// Mail apps can reject very long links, so long messages are shortened to fit
const MAX_ENCODED_BODY = 1700;

function buildBody(fields: Record<string, unknown>) {
  let body = Object.entries(LABELS)
    .map(([key, label]) => [label, String(fields[key] ?? "").trim()])
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");

  while (encodeURIComponent(body).length > MAX_ENCODED_BODY) body = body.slice(0, -40);
  return body;
}

/** Opens the visitor's email app with the form details filled in. */
export function openInquiryEmail(subject: string, fields: Record<string, unknown>) {
  // Honeypot: real people never fill this hidden field
  if (fields.website) return;

  const query = `subject=${encodeURIComponent(`L'amour Voyages: ${subject}`)}&body=${encodeURIComponent(buildBody(fields))}`;
  const link = document.createElement("a");
  link.href = `mailto:${contact.inquiryEmail}?${query}`;
  link.click();
}
