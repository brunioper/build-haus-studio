const items = [
  "Hemistion",
  "Landing Pages",
  "Opertti Asociados",
  "E-commerce",
  "Growit UY",
  "Sitios Empresariales",
  "Cockpit UY",
  "Apps & Plataformas",
  "JUV Activewear",
  "Diseño Premium",
  "Zona Franca C.S.",
  "Código a Medida",
];

function MarqueeRow() {
  return (
    <div>
      {items.flatMap((name, i) => [
        <span className="name" key={`name-${i}`}>{name}</span>,
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
