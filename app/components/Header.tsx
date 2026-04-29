"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const navItems = [
  { label: "Sobre Erick", href: "/about" },
  { label: "Servicios", href: "/servicios" },
  { label: "Resultados", href: "/resultados" },
  { label: "Contacto", href: "/contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Reveal delay={0.08} mode="load">
        <a href="/" className="brand">
          <div className="brand-mark">EF</div>

          <div className="brand-copy">
            <p className="logo-title">Nutriólogo Erick Favela</p>
            <p className="logo-subtitle">Mexicali · Online · USA</p>
          </div>
        </a>
      </Reveal>

      <Reveal delay={0.15} mode="load">
        <nav className="menu desktop-menu">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </Reveal>

      <Reveal delay={0.22} mode="load">
        <a
          className="btn btn-primary desktop-cta"
          href="https://wa.me/526861234567?text=Hola%20Erick%2C%20quiero%20informaci%C3%B3n%20sobre%20una%20consulta."
          target="_blank"
          rel="noreferrer"
        >
          Agendar
        </a>
      </Reveal>

      <button
        className={`mobile-menu-button ${open ? "is-open" : ""}`}
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`mobile-menu-panel ${open ? "is-open" : ""}`}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}

        <a
          className="mobile-menu-cta"
          href="https://wa.me/526861234567?text=Hola%20Erick%2C%20quiero%20informaci%C3%B3n%20sobre%20una%20consulta."
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          Agendar consulta
        </a>
      </div>
    </header>
  );
}
