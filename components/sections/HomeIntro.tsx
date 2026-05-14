"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
  { value: 20, suffix: "+", label: "Proyectos\nlanzados" },
  { value: 5, suffix: "", label: "Servicios\ndisponibles" },
  { value: 2, suffix: "", label: "Mercados\natendidos" },
  { value: 48, suffix: "h", label: "Propuesta\nen menos de" },
];

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    const dur = 1800;
    const start = performance.now();
    function tick(now: number) {
      const k = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - k, 3);
      setCount(Math.round(value * eased));
      if (k < 1) requestAnimationFrame(tick);
      else setDone(true);
    }
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <div className="stat" ref={ref}>
      <span className={`stat__num${done ? " is-done" : ""}`}>
        {count}{suffix}
      </span>
      <span className="stat__label" style={{ whiteSpace: "pre-line" }}>{label}</span>
    </div>
  );
}

export function HomeIntro() {
  return (
    <section className="home-section studio" id="inicio-positioning">
      <div className="home-shell">
        <div className="home-grid">
          <Reveal>
            <div className="home-label">01 — Estudio</div>
            <h2 className="home-head home-head--wide">Webs que no solo se ven bien. Funcionan.</h2>
          </Reveal>
          <div className="home-copy">
            <Reveal as="p" delay={0.05}>
              Build Haus Studio diseña y desarrolla sitios web, landing pages, e-commerce y plataformas digitales para empresas que necesitan convertir visitas en consultas, ventas o clientes.
            </Reveal>
            <Reveal as="p" delay={0.1}>
              Trabajamos con empresas en Uruguay y Argentina desde una lógica simple: estrategia clara, diseño premium, código sólido y una experiencia pensada para que el usuario avance.
            </Reveal>
            <Reveal delay={0.15}>
              <Link className="home-cta" href="/servicios" data-hover>
                Ver servicios →
              </Link>
            </Reveal>
            <Reveal className="conversion-map" delay={0.18} aria-label="Mapa de conversión">
              <div className="conversion-map__meta">
                <span>Mapa comercial</span>
                <span>01 / 03</span>
              </div>
              <div className="conversion-map__steps">
                <span>Visita</span>
                <span>Claridad</span>
                <span>Contacto</span>
              </div>
              <div className="conversion-map__line" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
            </Reveal>
          </div>
        </div>
        <div className="stats">
          {stats.map((s) => (
            <AnimatedStat key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
