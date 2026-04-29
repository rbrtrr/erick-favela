"use client";

import Link from "next/link";
import styles from "./contacto.module.css";
import Reveal from "../components/Reveal";
import AnimatedText from "../components/AnimatedText";

export default function ContactoPage() {
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
                <span className={styles.eyebrow}>Contacto</span>
              </Reveal>

              <AnimatedText
                as="h1"
                text="Una página de contacto clara para convertir interés en cita."
                className={styles.title}
                delay={0.12}
                mode="load"
              />

              <Reveal delay={0.24} mode="load">
                <p className={styles.description}>
                  Esta página está pensada para facilitar el contacto,
                  profesionalizar la marca y ayudar a que el siguiente paso sea
                  agendar una consulta presencial u online.
                </p>
              </Reveal>

              <div className={styles.contactCards}>
                <Reveal delay={0.1}>
                  <div className={styles.infoCard}>
                    <h3>WhatsApp</h3>
                    <p>Atención rápida para resolver dudas y agendar.</p>
                    <a
                      href="https://wa.me/526861234567?text=Hola%20Erick%2C%20quiero%20informaci%C3%B3n%20sobre%20una%20consulta."
                      target="_blank"
                      rel="noreferrer"
                    >
                      Escribir ahora
                    </a>
                  </div>
                </Reveal>

                <Reveal delay={0.16}>
                  <div className={styles.infoCard}>
                    <h3>Correo</h3>
                    <p>Ideal para colaboraciones o contacto más formal.</p>
                    <a href="mailto:contacto@erickfavela.com">
                      contacto@erickfavela.com
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>

            <Reveal delay={0.18} mode="load">
              <div className={styles.mapCard}>
                <iframe
                  src="https://www.google.com/maps?q=Mexicali%20Baja%20California&z=13&output=embed"
                  className={styles.map}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.bottomGrid}>
            <Reveal delay={0.08}>
              <div className={styles.detailBox}>
                <span className={styles.eyebrow}>Ubicación</span>
                <h2 className={styles.sectionTitle}>Mexicali, Baja California</h2>
                <p>
                  Puedes personalizar esta sección con la dirección exacta,
                  horarios de atención, referencias o instrucciones para llegar.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className={styles.detailBox}>
                <span className={styles.eyebrow}>Instagram</span>
                <h2 className={styles.sectionTitle}>@nutriologo.erickfavela</h2>
                <p>
                  Un enlace directo a su red social ayuda a fortalecer la marca
                  personal y conectar el sitio con su presencia digital actual.
                </p>
              </div>
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
