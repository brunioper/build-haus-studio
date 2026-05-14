import Link from "next/link";
import { contactEmail, navItems, whatsappHref } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Footer() {
  return (
    <Reveal as="footer" className="site-footer">
      <div className="site-footer__top">
        <div>
          <p className="site-footer__brand">Build Haus Studio</p>
          <p>Desde Montevideo, trabajando con empresas en Uruguay y Argentina.</p>
        </div>
        <nav className="links" aria-label="Footer">
          {navItems.map((item) => (
            <Link key={item.href} data-hover href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="site-footer__bottom">
        <div>© 2026 Build Haus Studio — Webs que convierten visitas en clientes.</div>
        <div className="links">
          <a data-hover href="#AGREGAR_INSTAGRAM">Instagram</a>
          <a data-hover href="#AGREGAR_LINKEDIN">LinkedIn</a>
          <a data-hover href={`mailto:${contactEmail}`}>Email</a>
          <a data-hover href={whatsappHref}>WhatsApp</a>
        </div>
      </div>
    </Reveal>
  );
}
