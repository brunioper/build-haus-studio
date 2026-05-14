"use client";

import { useRef } from "react";
import { useInView } from "motion/react";
import { Reveal } from "@/components/ui/Reveal";

/* ── Responsive device wireframe ── */
function DeviceMockup() {
  return (
    <div className="cap-devices">
      {/* Desktop browser */}
      <div className="cap-device cap-device--desktop">
        <div className="cap-device__chrome">
          <i /><i /><i />
          <span className="cap-device__url">buildhaus.studio</span>
        </div>
        <div className="cap-device__screen">
          <div className="cap-device__sim-nav" />
          <div className="cap-device__sim-hero">
            <div className="cap-device__sim-h1" />
            <div className="cap-device__sim-h1" style={{ width: "72%" }} />
            <div className="cap-device__sim-cta" />
          </div>
          <div className="cap-device__sim-cards">
            <div /><div /><div />
          </div>
        </div>
      </div>
      {/* Mobile phone */}
      <div className="cap-device cap-device--mobile">
        <div className="cap-device__notch" />
        <div className="cap-device__screen">
          <div className="cap-device__sim-nav cap-device__sim-nav--sm" />
          <div className="cap-device__sim-hero">
            <div className="cap-device__sim-h1" />
            <div className="cap-device__sim-h1" style={{ width: "82%" }} />
            <div className="cap-device__sim-cta" style={{ width: "78%" }} />
          </div>
          <div className="cap-device__sim-cards cap-device__sim-cards--sm">
            <div /><div />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Core Web Vitals bars ── */
function SpeedBars() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const metrics = [
    { label: "LCP", value: "< 1.2s", pct: 91 },
    { label: "FID", value: "< 10ms", pct: 96 },
    { label: "CLS", value: "0.01",   pct: 99 },
  ];
  return (
    <div className="cap-speed" ref={ref}>
      {metrics.map((m) => (
        <div key={m.label} className="cap-speed__row">
          <span className="cap-speed__label">{m.label}</span>
          <div className="cap-speed__track">
            <div
              className="cap-speed__fill"
              style={{ width: inView ? `${m.pct}%` : "0%", transitionDelay: `${metrics.indexOf(m) * 120}ms` }}
            />
          </div>
          <span className="cap-speed__val">{m.value}</span>
        </div>
      ))}
    </div>
  );
}

/* ── Bar chart (results card) ── */
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
            style={{ height: inView ? `${b.h}%` : "0%", transitionDelay: `${i * 130}ms` }}
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

          {/* ── Card 1: Responsive + Speed ── */}
          <Reveal className="cap-card cap-card--perf" delay={0.04}>
            <div className="cap-card__tag">Responsive &amp; rápido</div>
            <DeviceMockup />
            <SpeedBars />
            <p className="cap-card__copy">
              Sitios que cargan rápido en cualquier dispositivo. Mobile-first, Core Web Vitals optimizados.
            </p>
          </Reveal>

          {/* ── Card 2: Code ── */}
          <Reveal className="cap-card cap-card--code" delay={0.06}>
            <div className="cap-card__tag">Código a medida</div>
            <div className="cap-terminal">
              <div className="cap-terminal__bar">
                <i /><i /><i />
                <span>Hero.tsx — buildhaus.studio</span>
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
