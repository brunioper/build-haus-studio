import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { bookingHref } from "@/lib/data";

export function BookingCTA() {
  return (
    <Reveal as="section" className="booking-cta">
      <div className="booking-cta__inner">
        <div className="booking-cta__left">
          <div className="home-label">Llamada sin compromiso</div>
          <h2>30 minutos para entender tu proyecto.</h2>
          <p>
            Contanos qué necesitás y te decimos si podemos ayudarte, cómo lo haríamos y cuánto podría costar.
            Sin venta, sin rodeos.
          </p>
          <ul className="booking-cta__list">
            <li>Revisamos tu situación actual</li>
            <li>Definimos el mejor enfoque</li>
            <li>Te damos un estimado real</li>
          </ul>
        </div>
        <div className="booking-cta__right">
          <a href={bookingHref} target="_blank" rel="noreferrer" className="booking-cta__btn" data-hover>
            Agendar llamada →
          </a>
          <Link href="/contacto" className="booking-cta__secondary" data-hover>
            O envianos un mensaje
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
