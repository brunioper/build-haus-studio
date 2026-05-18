import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET() {
  const user = process.env.ZOHO_EMAIL;
  const pass = process.env.ZOHO_PASS;

  if (!user || !pass) {
    return NextResponse.json({ error: "Missing env vars", user: !!user, pass: !!pass });
  }

  const transport = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  try {
    await transport.verify();
    const info = await transport.sendMail({
      from: `"Build Haus Studio" <hello@buildhaus.studio>`,
      to: "hello@buildhaus.studio",
      subject: "Test desde Vercel",
      text: "Si llegó este mail, el servidor funciona.",
    });
    return NextResponse.json({ ok: true, messageId: info.messageId, response: info.response });
  } catch (err: unknown) {
    const e = err as Error & { code?: string };
    return NextResponse.json({ ok: false, error: e.message, code: e.code });
  }
}
