"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/data";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const themeKey = "bh-theme-v3";
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(themeKey);
    } catch {}
    root.setAttribute("data-theme", saved === "dark" ? "dark" : "light");
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    if (pathname === "/") return;
    if (window.matchMedia("(hover:none)").matches || window.__bhCursorInitialized) return;
    const dot = document.getElementById("cursor");
    if (!dot) return;
    window.__bhCursorInitialized = true;
    dot.style.transform = "translate(-50%,-50%)";
    const move = (event: MouseEvent) => {
      dot.style.left = `${event.clientX}px`;
      dot.style.top = `${event.clientY}px`;
    };
    const enter = () => dot.classList.add("is-hover");
    const leave = () => dot.classList.remove("is-hover");
    window.addEventListener("mousemove", move, { passive: true });
    document.querySelectorAll("[data-hover],a,button").forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });
    return () => {
      window.removeEventListener("mousemove", move);
      document.querySelectorAll("[data-hover],a,button").forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
      window.__bhCursorInitialized = false;
    };
  }, [pathname]);

  function handleHomeClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (pathname !== "/") return;
    e.preventDefault();
    const lenis = (window as Window & { __bhLenis?: { scrollTo: (target: number, opts: object) => void } }).__bhLenis;
    if (lenis?.scrollTo) {
      lenis.scrollTo(0, { duration: 1.8 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setOpen(false);
  }

  function toggleTheme() {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("bh-theme-v3", next);
    } catch {}
  }

  return (
    <header className="nav site-nav" role="banner">
      <Link className="nav__brand" href="/" data-hover onClick={handleHomeClick}>
        Build Haus <span className="a">Studio</span>
      </Link>

      <nav className="nav__links" aria-label="Principal">
        {navItems.map((item) => (
          <Link
            key={item.href}
            data-hover
            href={item.href}
            aria-current={pathname === item.href ? "page" : undefined}
            onClick={item.href === "/" ? handleHomeClick : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="nav__actions">
        <Link className="nav__contact" data-hover href="/contacto">
          Contactanos
        </Link>
        <button className="theme-toggle" id="themeToggle" data-hover aria-label="Cambiar tema" onClick={toggleTheme}>
          <svg className="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
          <svg className="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></svg>
        </button>
        <button className="nav__pill" id="pill" data-hover aria-label="Contactanos" type="button">
          <span className="pulse" />
          <span className="pill-default">Cupos disponibles</span>
          <span className="pill-label" />
        </button>
        <button
          className="nav__menu"
          type="button"
          aria-label="Abrir navegación"
          aria-expanded={open}
          aria-controls="mobile-menu"
          data-hover
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className="mobile-menu" id="mobile-menu" data-open={open} aria-hidden={!open}>
        <nav aria-label="Navegación móvil">
          {navItems.map((item, index) => (
            <Link key={item.href} href={item.href} onClick={item.href === "/" ? handleHomeClick : () => setOpen(false)} data-hover>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="mobile-menu__cta" href="/contacto" onClick={() => setOpen(false)} data-hover>
          Contactanos →
        </Link>
      </div>
    </header>
  );
}
