"use client";

import { useActionState } from "react";
import { sendContact } from "@/app/actions/sendContact";
import { Reveal } from "@/components/ui/Reveal";

const initialState: { success: boolean; error?: string } = { success: false };

export function ContactForm() {
  const [state, action, pending] = useActionState(sendContact, initialState);

  if (state.success) {
    return (
      <Reveal className="contact-form contact-form--success">
        <p className="contact-form__success-icon">✓</p>
        <h3>¡Mensaje recibido!</h3>
        <p>Te respondemos dentro de las primeras 24 horas hábiles.</p>
      </Reveal>
    );
  }

  return (
    <Reveal as="form" className="contact-form" action={action} delay={0.08}>
      <label>
        Nombre
        <input name="nombre" type="text" autoComplete="name" required />
      </label>
      <label>
        Empresa
        <input name="empresa" type="text" autoComplete="organization" />
      </label>
      <label>
        Email
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        Web actual
        <input name="web" type="url" inputMode="url" />
      </label>
      <label>
        ¿Qué necesitás?
        <select name="servicio" defaultValue="">
          <option value="" disabled>Seleccionar</option>
          <option>Landing page</option>
          <option>Sitio web empresarial</option>
          <option>Shopify / e-commerce</option>
          <option>Rediseño web</option>
          <option>Auditoría UX / conversión</option>
          <option>No estoy seguro todavía</option>
        </select>
      </label>
      <label>
        País
        <select name="pais" defaultValue="">
          <option value="" disabled>Seleccionar</option>
          <option>Uruguay</option>
          <option>Argentina</option>
          <option>Otro</option>
        </select>
      </label>
      <label className="contact-form__wide">
        Mensaje
        <textarea name="mensaje" rows={5} required />
      </label>
      {state.error && (
        <p className="contact-form__error">{state.error}</p>
      )}
      <button
        className="contact-preview__button contact-preview__button--primary"
        type="submit"
        disabled={pending}
        data-hover
      >
        {pending ? "Enviando..." : "Enviar solicitud →"}
      </button>
    </Reveal>
  );
}
