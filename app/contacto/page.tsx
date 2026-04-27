"use client";

import Link from "next/link";
import styles from "./contacto.module.css";
import Reveal from "../components/Reveal";
import AnimatedText from "../components/AnimatedText";

export default function ContactoPage() {
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
    </main>
  );
}
