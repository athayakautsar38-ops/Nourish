import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  useCase: z.enum(["personal", "catering", "both"]),
  city: z.string().min(2),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    const APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL;

    if (!APPS_SCRIPT_URL) {
      // Dev mode: log and succeed without hitting Sheets
      console.log("[Waitlist] No GOOGLE_APPS_SCRIPT_URL set — dev mode submission:", data);
      return NextResponse.json({ success: true, message: "Joined waitlist (dev mode)" });
    }

    const payload = {
      name: data.name,
      email: data.email,
      useCase: data.useCase,
      city: data.city,
      submittedAt: new Date().toISOString(),
    };

    const sheetsResponse = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!sheetsResponse.ok) {
      const text = await sheetsResponse.text();
      console.error("[Waitlist] Apps Script error:", sheetsResponse.status, text);
      return NextResponse.json(
        { success: false, message: "Could not save your entry. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, message: "Successfully joined the waitlist!" });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: "Invalid form data.", errors: err.flatten() },
        { status: 400 }
      );
    }

    console.error("[Waitlist] Unexpected error:", err);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
