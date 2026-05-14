const items = [
  "Diseño web",
  "Estrategia digital",
  "Landing pages",
  "E-commerce",
  "Aplicaciones web",
  "Mobile-first",
  "Código limpio",
  "Performance",
  "Uruguay & Argentina",
  "Conversión",
  "Next.js",
  "Lanzamiento en 7 días",
];

function MarqueeRow() {
  return (
    <div>
      {items.flatMap((text, i) => [
        <span className="name" key={`name-${i}`}>{text}</span>,
        <span className="dot" key={`dot-${i}`} aria-hidden="true" />,
      ])}
    </div>
  );
}

export function MarqueeSection() {
  return (
    <div className="marquee-section" aria-hidden="true">
      <div className="marquee-track">
        <MarqueeRow />
        <MarqueeRow />
      </div>
    </div>
  );
}
