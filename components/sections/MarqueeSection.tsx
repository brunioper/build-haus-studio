const clients = [
  { name: "Hemistion",              img: "/assets/clients/hemistion.jpg" },
  { name: "Opertti Asociados",      img: "/assets/clients/opertti-asociados.jpg" },
  { name: "Growit UY",              img: "/assets/clients/growituy.jpg" },
  { name: "Cockpit UY",             img: "/assets/clients/cockpit-uy.jpg" },
  { name: "Zona Franca C.S.",       img: "/assets/clients/zona-franca-colonia-suiza.jpg" },
  { name: "JUV Activewear",         img: "/assets/clients/juv-activewear.jpg" },
];

function MarqueeRow() {
  const items = [...clients, ...clients];
  return (
    <div>
      {items.flatMap((c, i) => [
        <span className="marquee-client" key={`client-${i}`}>
          <img src={c.img} alt={c.name} width={56} height={40} loading="lazy" />
          <span className="name">{c.name}</span>
        </span>,
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
