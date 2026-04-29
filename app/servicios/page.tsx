"use client";

import Link from "next/link";
import styles from "./servicios.module.css";
import Reveal from "../components/Reveal";
import AnimatedText from "../components/AnimatedText";

const serviceItems = [
  {
    title: "Consulta presencial",
    description:
      "Atención personalizada en Mexicali para ayudarte a mejorar tu salud, tus hábitos y tu composición corporal con una estrategia realista.",
  },
  {
    title: "Consulta online",
    description:
      "Seguimiento remoto para pacientes en México, USA y cualquier parte del mundo, con acompañamiento cercano y estructura clara.",
  },
  {
    title: "Planes personalizados",
    description:
      "Planes adaptados a tu estilo de vida, horarios, preferencias, objetivos y nivel de compromiso para que el proceso sea sostenible.",
  },
  {
    title: "Transformación corporal",
    description:
      "Programas enfocados en pérdida de grasa, recomposición corporal, aumento de masa muscular y construcción de mejores hábitos.",
  },
];

const processItems = [
  "Agenda tu valoración inicial",
  "Se analizan tus objetivos y contexto",
  "Se diseña una estrategia personalizada",
  "Recibes seguimiento y ajustes",
];

export default function ServiciosPage() {
  return (
    <main className={styles.page}>
<header
  style={{
    width: "100%",
    padding: "14px 18px",
    background: "#ffffff",
    borderBottom: "1px solid rgba(0,0,0,0.08)",
    position: "relative",
    zIndex: 50,
  }}
>
  <div
    style={{
      width: "100%",
      maxWidth: "1180px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "18px",
      flexWrap: "wrap",
    }}
  >
    <a
      href="/"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        textDecoration: "none",
        color: "#111",
      }}
    >
      <img
        src="/logo-header.png"
        alt="Logo Erick Favela"
        style={{
          width: "42px",
          height: "42px",
          objectFit: "contain",
          borderRadius: "50%",
        }}
      />

      <div>
        <p
          style={{
            margin: 0,
            fontSize: "15px",
            fontWeight: 800,
            lineHeight: 1.1,
          }}
        >
          Nutriólogo Erick Favela
        </p>

        <p
          style={{
            margin: "3px 0 0",
            fontSize: "12px",
            color: "rgba(0,0,0,0.55)",
            lineHeight: 1,
          }}
        >
          Mexicali · Online · USA
        </p>
      </div>
    </a>

    <nav
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        flexWrap: "wrap",
      }}
    >
      <a
        href="/servicios"
        style={{
          padding: "10px 13px",
          borderRadius: "999px",
          background: "#f4f4f4",
          color: "#111",
          textDecoration: "none",
          fontSize: "14px",
          fontWeight: 700,
        }}
      >
        Servicios
      </a>

      <a
        href="/resultados"
        style={{
          padding: "10px 13px",
          borderRadius: "999px",
          background: "#f4f4f4",
          color: "#111",
          textDecoration: "none",
          fontSize: "14px",
          fontWeight: 700,
        }}
      >
        Resultados
      </a>

      <a
        href="/contacto"
        style={{
          padding: "10px 13px",
          borderRadius: "999px",
          background: "#f4f4f4",
          color: "#111",
          textDecoration: "none",
          fontSize: "14px",
          fontWeight: 700,
        }}
      >
        Contacto
      </a>

      <a
        href="https://wa.me/526861234567?text=Hola%20Erick%2C%20quiero%20informaci%C3%B3n%20sobre%20una%20consulta."
        target="_blank"
        rel="noreferrer"
        style={{
          padding: "10px 15px",
          borderRadius: "999px",
          background: "#111",
          color: "#fff",
          textDecoration: "none",
          fontSize: "14px",
          fontWeight: 800,
        }}
      >
        Agendar
      </a>
    </nav>
  </div>
</header> 
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div>
              <Reveal delay={0.08} mode="load">
                <span className={styles.eyebrow}>Servicios</span>
              </Reveal>

              <AnimatedText
                as="h1"
                text="Una estructura de servicios diseñada para consulta local y crecimiento internacional."
                className={styles.title}
                delay={0.12}
                mode="load"
              />

              <Reveal delay={0.28} mode="load">
                <p className={styles.description}>
                  Esta página presenta una oferta clara para pacientes
                  presenciales en Mexicali, atención online para México y USA, y
                  una base sólida para escalar la marca personal de Erick
                  Favela.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.18} mode="load">
              <div className={styles.heroCard}>
                <img
                  src="/collage-4.png"
                  alt="Servicios de nutrición Erick Favela"
                  className={styles.heroImage}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.cardsGrid}>
            {serviceItems.map((item, index) => (
              <Reveal key={item.title} delay={0.08 + index * 0.06}>
                <article className={styles.card}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.splitSection}>
            <div>
              <Reveal delay={0.08}>
                <span className={styles.eyebrow}>Cómo funciona</span>
              </Reveal>

              <AnimatedText
                as="h2"
                text="Un proceso simple, claro y enfocado en resultados."
                className={styles.sectionTitle}
                delay={0.12}
              />

              <Reveal delay={0.22}>
                <p className={styles.sectionText}>
                  La experiencia está pensada para que el paciente entienda qué
                  sigue, qué recibe y cómo será acompañado en cada etapa.
                </p>
              </Reveal>
            </div>

            <div className={styles.processList}>
              {processItems.map((item, index) => (
                <Reveal key={item} delay={0.1 + index * 0.06}>
                  <div className={styles.processItem}>
                    <span className={styles.processNumber}>
                      0{index + 1}
                    </span>
                    <p>{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <Reveal delay={0.08}>
            <div className={styles.ctaBox}>
              <div>
                <span className={styles.eyebrow}>Agenda</span>
                <AnimatedText
                  as="h2"
                  text="El siguiente paso es empezar con una estrategia realista."
                  className={styles.sectionTitle}
                  delay={0.12}
                />
              </div>

              <div className={styles.ctaActions}>
                <a
                  className={styles.ctaDark}
                  href="https://wa.me/526861234567?text=Hola%20Erick%2C%20quiero%20agendar%20una%20consulta."
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
                <Link href="/contacto" className={styles.ctaLight}>
                  Ir a contacto
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
            <footer className="footer">
              <div className="container footer-grid">
                <Reveal delay={0.08}>
                  <div className="footer-brand">
                    <div className="footer-logo-row">
                      <img
                        src="/logo-header.png"
                        alt="Logo Erick Favela"
                        className="footer-logo"
                      />
                      <div>
                        <p className="footer-brand-title">Nutriólogo Erick Favela</p>
                        <p className="footer-brand-subtitle">Mexicali · Online · USA</p>
                      </div>
                    </div>
      
                    <p className="footer-description">
                      Nutrición personalizada para transformar tu salud, tus hábitos y
                      tu composición corporal con una estrategia realista y
                      sostenible.
                    </p>
                  </div>
                </Reveal>
      
                <Reveal delay={0.14}>
                  <div className="footer-links">
                    <p className="footer-heading">Navegación</p>
                    <a href="#about">Sobre Erick</a>
                    <a href="#services">Servicios</a>
                    <a href="#results">Resultados</a>
                    <a href="#contact">Contacto</a>
                  </div>
                </Reveal>
      
                <Reveal delay={0.2}>
                  <div className="footer-links">
                    <p className="footer-heading">Servicios</p>
                    <a href="#">Consulta presencial</a>
                    <a href="#">Consulta online</a>
                    <a href="#">Planes personalizados</a>
                    <a href="#">Transformación corporal</a>
                  </div>
                </Reveal>
      
                <Reveal delay={0.26}>
                  <div className="footer-links">
                    <p className="footer-heading">Contacto</p>
                    <a
                      href="https://wa.me/526861234567?text=Hola%20Erick%2C%20quiero%20informaci%C3%B3n%20sobre%20una%20consulta."
                      target="_blank"
                      rel="noreferrer"
                    >
                      WhatsApp
                    </a>
                    <a href="mailto:contacto@erickfavela.com">
                      contacto@erickfavela.com
                    </a>
                    <a
                      href="https://instagram.com/nutriologo.erickfavela"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Instagram
                    </a>
                    <span>Mexicali, Baja California</span>
                  </div>
                </Reveal>
              </div>
      
              <div className="container footer-bottom">
                <p>© 2026 Nutriólogo Erick Favela. Todos los derechos reservados.</p>
                <p>Diseño profesional enfocado en confianza, claridad y conversión.</p>
              </div>
            </footer>
          </main>
  );
}
