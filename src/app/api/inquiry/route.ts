import { NextResponse } from "next/server";

/**
 * Receives trip-planner and newsletter submissions.
 *
 * TODO before launch: deliver these somewhere — e.g. send an email with
 * Resend / Nodemailer (SMTP), post to a CRM, or save to a database.
 * Put credentials in .env.local (see .env.example).
 */
export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot — real people never fill this hidden field
  if (data.website) return NextResponse.json({ ok: true });

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // About page quick query: one field that accepts an email or a phone number
  if (data.type === "quick") {
    const contact = String(data.contact ?? "").trim();
    if (!emailPattern.test(contact) && contact.replace(/\D/g, "").length < 7) {
      return NextResponse.json({ error: "Please enter a valid email or phone number." }, { status: 400 });
    }
    console.log("[inquiry]", JSON.stringify(data));
    return NextResponse.json({ ok: true });
  }

  const email = String(data.email ?? "").trim();
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (data.type !== "newsletter") {
    if (!String(data.name ?? "").trim() || !String(data.phone ?? "").trim()) {
      return NextResponse.json({ error: "Please add your name and phone number." }, { status: 400 });
    }
  }

  // Replace with real delivery (email / CRM). Logged for now so you can see submissions in dev.
  console.log("[inquiry]", JSON.stringify(data));

  return NextResponse.json({ ok: true });
}
