"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const navItems = [
  {
    label: "Servicios",
    href: "/servicios",
  },
  {
    label: "Resultados",
    href: "/resultados",
  },
  {
    label: "Casos de éxito",
    href: "/casos-de-exito",
  },
  {
    label: "Contacto",
    href: "/contacto",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <Link href="/" className={styles.brand} onClick={closeMenu}>
        <div className={styles.logoMark}>
          <img src="/favicon.ico" alt="Nutriólogo Erick Favela" />
        </div>

        <div className={styles.brandText}>
          <strong>Nutriólogo Erick Favela</strong>
          <span>Mexicali · Online · USA</span>
        </div>
      </Link>

      <button
        type="button"
        className={`${styles.menuButton} ${
          menuOpen ? styles.menuButtonOpen : ""
        }`}
        onClick={() => setMenuOpen((current) => !current)}
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`${styles.navWrap} ${menuOpen ? styles.navWrapOpen : ""}`}>
        <nav className={styles.nav} aria-label="Navegación principal">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/agendar" className={styles.cta} onClick={closeMenu}>
          Agendar consulta
        </Link>
      </div>
    </header>
  );
}
