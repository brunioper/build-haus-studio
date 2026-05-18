"use server";

import nodemailer from "nodemailer";

export type ContactFormState = {
  success: boolean;
  error?: string;
};

function createTransport() {
  const user = process.env.ZOHO_EMAIL;
  const pass = process.env.ZOHO_PASS;
  if (!user || !pass) return null;
  return nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });
}

export async function sendContact(_prev: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const transport = createTransport();
  if (!transport) {
    return {
      success: false,
      error: "El servicio de email no está configurado todavía. Escribinos directo a hello@buildhaus.studio",
    };
  }

  const nombre = formData.get("nombre") as string;
  const empresa = formData.get("empresa") as string;
  const email = formData.get("email") as string;
  const web = formData.get("web") as string;
  const servicio = formData.get("servicio") as string;
  const pais = formData.get("pais") as string;
  const mensaje = formData.get("mensaje") as string;

  if (!nombre || !email) {
    return { success: false, error: "Nombre y email son requeridos." };
  }

  try {
    await transport.sendMail({
      from: `"Build Haus Studio" <hello@buildhaus.studio>`,
      to: "hello@buildhaus.studio",
      replyTo: email,
      subject: `Nueva consulta de ${nombre}${empresa ? ` — ${empresa}` : ""}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#071A33">
          <h2 style="margin-bottom:24px">Nueva consulta — Build Haus Studio</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;font-weight:600;width:140px">Nombre</td><td>${nombre}</td></tr>
            ${empresa ? `<tr><td style="padding:8px 0;font-weight:600">Empresa</td><td>${empresa}</td></tr>` : ""}
            <tr><td style="padding:8px 0;font-weight:600">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
            ${web ? `<tr><td style="padding:8px 0;font-weight:600">Web actual</td><td>${web}</td></tr>` : ""}
            ${servicio ? `<tr><td style="padding:8px 0;font-weight:600">Servicio</td><td>${servicio}</td></tr>` : ""}
            ${pais ? `<tr><td style="padding:8px 0;font-weight:600">País</td><td>${pais}</td></tr>` : ""}
          </table>
          <hr style="margin:24px 0;border:none;border-top:1px solid #e2e8f0"/>
          <p style="font-weight:600;margin-bottom:8px">Mensaje</p>
          <p style="white-space:pre-wrap;margin:0">${mensaje || "(sin mensaje)"}</p>
        </div>
      `,
    });

    return { success: true };
  } catch (err) {
    console.error("sendContact error:", err);
    return { success: false, error: "No pudimos enviar tu mensaje. Intentalo de nuevo o escribinos a hello@buildhaus.studio" };
  }
}
