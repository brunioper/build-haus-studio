"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const faqs = [
  {
    q: "¿Cuánto cuesta hacer una página web en Uruguay?",
    a: "Las landing pages empiezan desde $7.900 UYU. Los sitios web empresariales y e-commerce se presupuestan según el alcance. Contactanos para recibir un presupuesto sin compromiso en menos de 24 horas.",
  },
  {
    q: "¿Cuánto tiempo lleva hacer una página web?",
    a: "Trabajamos con un proceso de Website Sprint que permite lanzar en 7 días hábiles para proyectos enfocados como landing pages y sitios empresariales. E-commerce y apps pueden tomar más tiempo según el alcance.",
  },
  {
    q: "¿Hacen diseño web para empresas en Argentina?",
    a: "Sí. Trabajamos con empresas en Uruguay y Argentina de forma 100% remota. Tenemos clientes en Montevideo, Buenos Aires y el resto de la región.",
  },
  {
    q: "¿Qué incluye el diseño de una página web?",
    a: "Cada proyecto incluye estrategia de oferta, estructura de contenido, diseño visual a medida, desarrollo responsive, formulario de contacto y setup para medición.",
  },
  {
    q: "¿Qué es una landing page y para qué sirve?",
    a: "Una landing page es una página diseñada con un único objetivo: convertir visitantes en clientes, leads o suscriptores. Es ideal para campañas de publicidad, lanzamientos y captación de contactos.",
  },
  {
    q: "¿Hacen sitios web con Shopify en Uruguay?",
    a: "Sí. Desarrollamos e-commerce con Shopify para marcas en Uruguay y Argentina, con páginas de producto optimizadas, colecciones, experiencia mobile y camino de compra orientado a la conversión.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Reveal as="section" className="faq-section">
      <div className="faq-section__head">
        <div className="home-label">Preguntas frecuentes</div>
        <h2>Todo lo que necesitás saber antes de arrancar.</h2>
      </div>
      <div className="faq-list">
        {faqs.map((item, i) => (
          <div key={i} className={`faq-item${open === i ? " faq-item--open" : ""}`}>
            <button
              className="faq-item__q"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span>{item.q}</span>
              <svg className="faq-item__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="faq-item__a">
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
