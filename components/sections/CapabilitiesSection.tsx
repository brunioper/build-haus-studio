"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { Reveal } from "@/components/ui/Reveal";

function ScoreRing({ score }: { score: number }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapRef, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);
  const r = 58;
  const circ = 2 * Math.PI * r;

  useEffect(() => {
    if (!inView) return;
    const dur = 1800;
    const start = performance.now();
    function tick(now: number) {
      const k = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - k, 2.8);
      setCount(Math.round(score * eased));
      if (k < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, score]);

  return (
    <div className="cap-ring-wrap" ref={wrapRef}>
      <svg className="cap-ring" viewBox="0 0 136 136">
        <circle cx="68" cy="68" r={r} fill="none" stroke="var(--line)" strokeWidth="5" />
        <circle
          cx="68" cy="68" r={r}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={circ - (count / 100) * circ}
          transform="rotate(-90 68 68)"
        />
      </svg>
      <span className="cap-ring__num">{count}<small>/100</small></span>
    </div>
  );
}

function BarChart() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const bars = [
    { h: 32, label: "Ene" },
    { h: 48, label: "Feb" },
    { h: 58, label: "Mar" },
    { h: 72, label: "Abr" },
    { h: 91, label: "May" },
  ];

  return (
    <div className="cap-chart" ref={ref}>
      {bars.map((b, i) => (
        <div key={i} className="cap-chart__col">
          <div
            className="cap-chart__bar"
            style={{
              height: inView ? `${b.h}%` : "0%",
              transitionDelay: `${i * 130}ms`,
            }}
          />
          <span>{b.label}</span>
        </div>
      ))}
    </div>
  );
}

const CODE = `export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7,
        ease: [0.22, 1, 0.36, 1] }}
    >
      <h1>Tu próxima web
        empieza aquí.</h1>
      <Link href="/contacto">
        Hablemos →
      </Link>
    </motion.section>
  );
}`;

const PALETTE = [
  { hex: "#071A33", name: "Navy" },
  { hex: "#1D64F2", name: "Accent" },
  { hex: "#61A5FF", name: "Light" },
  { hex: "#EAF2FF", name: "Surface" },
  { hex: "#F7FAFF", name: "BG" },
];

const STACK = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Figma", "Vercel"];

export function CapabilitiesSection() {
  return (
    <section className="home-section capabilities-section">
      <div className="home-shell">
        <Reveal>
          <div className="home-label">Capacidades</div>
          <h2 className="home-head home-head--wide">
            Velocidad, diseño y código.<br />Los tres sin compromiso.
          </h2>
        </Reveal>

        <div className="cap-grid">

          {/* ── Card 1: Performance ── */}
          <Reveal className="cap-card cap-card--perf" delay={0.04}>
            <div className="cap-card__tag">Rendimiento</div>
            <ScoreRing score={100} />
            <p className="cap-card__copy">
              Sitios que pasan 100/100 en Google Lighthouse. Carga instantánea,
              mejor ranking, menor rebote.
            </p>
            <div className="cap-badges">
              {["Performance", "SEO", "Best Practices", "Accessibility"].map((b) => (
                <span key={b}>{b}</span>
              ))}
            </div>
          </Reveal>

          {/* ── Card 2: Code ── */}
          <Reveal className="cap-card cap-card--code" delay={0.06}>
            <div className="cap-card__tag">Código a medida</div>
            <div className="cap-terminal">
              <div className="cap-terminal__bar">
                <i /><i /><i />
                <span>Hero.tsx</span>
              </div>
              <pre className="cap-terminal__body"><code>{CODE}</code></pre>
            </div>
            <p className="cap-card__copy">
              Sin templates ni page-builders. Cada componente escrito a medida,
              rápido y mantenible.
            </p>
          </Reveal>

          {/* ── Card 3: Design ── */}
          <Reveal className="cap-card cap-card--design" delay={0.04}>
            <div className="cap-card__tag">Diseño premium</div>
            <div className="cap-type-hero">
              <span>Aa</span>
            </div>
            <div className="cap-palette">
              {PALETTE.map((p) => (
                <div key={p.hex} className="cap-swatch" title={p.name}>
                  <span style={{ background: p.hex }} />
                  <small>{p.name}</small>
                </div>
              ))}
            </div>
            <p className="cap-card__copy">
              Identidad visual pensada para cada proyecto. Ningún sitio se parece al anterior.
            </p>
          </Reveal>

          {/* ── Card 4: Metrics ── */}
          <Reveal className="cap-card cap-card--results" delay={0.07}>
            <div className="cap-card__tag">Resultados medibles</div>
            <BarChart />
            <p className="cap-card__copy">
              Analytics y conversión configurados desde el día uno.
              Seguimos el número que importa.
            </p>
          </Reveal>

          {/* ── Card 5: Stack ── */}
          <Reveal className="cap-card cap-card--stack" delay={0.1}>
            <div className="cap-card__tag">Stack 2025</div>
            <ul className="cap-stack">
              {STACK.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
