import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "RESEND_API_KEY not set" }, { status: 500 });
  }

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from: "Build Haus Studio <hello@buildhaus.studio>",
      to:   "hello@buildhaus.studio",
      subject: "Test envío — Build Haus Studio",
      text: "Si recibiste esto, Resend funciona correctamente desde Vercel.",
    });
    return NextResponse.json({ ok: true, id: result.data?.id });
  } catch (err: unknown) {
    const e = err as Error;
    return NextResponse.json({ ok: false, error: e.message });
  }
}
