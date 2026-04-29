"use client";

import Link from "next/link";
import styles from "./resultados.module.css";
import Reveal from "../components/Reveal";
import AnimatedText from "../components/AnimatedText";

const transformations = [
  {
    title: "Pérdida de grasa",
    text: "Procesos enfocados en resultados reales y sostenibles, sin extremos innecesarios.",
    image: "/collage-1.jpg",
  },
  {
    title: "Mejores hábitos",
    text: "Construcción de rutinas alimenticias que puedan mantenerse en el tiempo.",
    image: "/collage-2.jpg",
  },
  {
    title: "Más energía y adherencia",
    text: "Estrategias que buscan que el paciente se sienta mejor y permanezca constante.",
    image: "/collage-3.jpg",
  },
];

const stats = [
  { value: "+50,000", label: "Consultas realizadas" },
  { value: "Online + Presencial", label: "Atención híbrida" },
  { value: "100%", label: "Planes personalizados" },
];

export default function ResultadosPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.nav}>
            <Link href="/" className={styles.logoWrap}>
              <img
                src="/logo-header.png"
                alt="Logo Erick Favela"
                className={styles.logo}
              />
              <div>
                <p className={styles.logoTitle}>Nutriólogo Erick Favela</p>
                <p className={styles.logoSubtitle}>Mexicali · Online · USA</p>
              </div>
            </Link>

            <nav className={styles.menu}>
              <Link href="/">Inicio</Link>
              <Link href="/servicios">Servicios</Link>
              <Link href="/resultados">Resultados</Link>
              <Link href="/contacto">Contacto</Link>
            </nav>

            <a
              className={styles.cta}
              href="https://wa.me/526861234567?text=Hola%20Erick%2C%20quiero%20informaci%C3%B3n%20sobre%20una%20consulta."
              target="_blank"
              rel="noreferrer"
            >
              Agendar
            </a>
          </div>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.container}>
          <Reveal delay={0.08} mode="load">
            <span className={styles.eyebrow}>Resultados</span>
          </Reveal>

          <AnimatedText
            as="h1"
            text="Resultados que fortalecen la confianza, la autoridad y la marca personal."
            className={styles.title}
            delay={0.12}
            mode="load"
          />

          <Reveal delay={0.24} mode="load">
            <p className={styles.description}>
              Esta página está pensada para mostrar transformación, seguimiento
              real y evidencia visual de que Erick Favela ofrece una experiencia
              profesional enfocada en cambios sostenibles.
            </p>
          </Reveal>

          <div className={styles.statsGrid}>
            {stats.map((item, index) => (
              <Reveal key={item.label} delay={0.1 + index * 0.06}>
                <div className={styles.statCard}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.resultsGrid}>
            {transformations.map((item, index) => (
              <Reveal key={item.title} delay={0.1 + index * 0.06}>
                <article className={styles.resultCard}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.resultImage}
                  />
                  <div className={styles.resultBody}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.quoteBox}>
            <Reveal delay={0.08}>
              <span className={styles.eyebrow}>Percepción de marca</span>
            </Reveal>

            <AnimatedText
              as="h2"
              text="Una sección de resultados bien presentada convierte credibilidad en intención de agendar."
              className={styles.sectionTitle}
              delay={0.12}
            />

            <Reveal delay={0.22}>
              <p className={styles.quoteText}>
                Mostrar evolución, constancia y casos reales ayuda a que la
                marca personal se vea más sólida, más confiable y más lista para
                crecer fuera de lo local.
              </p>
            </Reveal>
          </div>
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
