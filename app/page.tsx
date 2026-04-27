"use client";

import { useState } from "react";
import Reveal from "./components/Reveal";
import AnimatedText from "./components/AnimatedText";
import Link from "next/link";

const services = [
  {
    title: "Consulta presencial",
    description:
      "Atención personalizada en Mexicali para ayudarte a mejorar tu salud, hábitos y composición corporal.",
  },
  {
    title: "Consulta online",
    description:
      "Seguimiento remoto para pacientes en México, USA y cualquier parte del mundo.",
  },
  {
    title: "Planes personalizados",
    description:
      "Estrategias adaptadas a tus horarios, objetivos, preferencias y estilo de vida.",
  },
  {
    title: "Transformación corporal",
    description:
      "Programas enfocados en pérdida de grasa, recomposición corporal y aumento de masa muscular.",
  },
];

const gallerySlides = [
  {
    src: "/collage-1.jpg",
    alt: "1",
  },
  {
    src: "/collage-2.jpg",
    alt: "2",
  },
  {
    src: "/collage-3.jpg",
    alt: "3",
  },
  {
    src: "/collage-4.png",
    alt: "4",
  },
  {
    src: "/collage-5.png",
    alt: "5",
  },
  {
    src: "/collage-6.png",
    alt: "6",
  },
];

const faqs = [
  {
    question: "¿La consulta es presencial o también online?",
    answer:
      "Erick Favela ofrece atención presencial en Mexicali y también seguimiento online para pacientes en otras ciudades, estados o países.",
  },
  {
    question: "¿Qué incluye una consulta nutricional?",
    answer:
      "Incluye valoración inicial, análisis de objetivos, estrategia personalizada, recomendaciones prácticas y seguimiento según el servicio elegido.",
  },
  {
    question: "¿Atiendes pacientes en Estados Unidos?",
    answer:
      "Sí, el sitio está pensado para facilitar la atención online y el crecimiento de la marca personal hacia pacientes hispanos en USA.",
  },
  {
    question: "¿Los planes son personalizados?",
    answer:
      "Sí. Cada plan se adapta a tus objetivos, horarios, estilo de vida, preferencias alimenticias y nivel de compromiso.",
  },
  {
    question: "¿Solo trabajas pérdida de peso?",
    answer:
      "No. También puede enfocarse en recomposición corporal, mejora de hábitos, aumento de masa muscular y acompañamiento nutricional integral.",
  },
  {
    question: "¿Cómo puedo agendar una cita?",
    answer:
      "Puedes agendar por WhatsApp, correo o mediante el sistema de contacto que se integre al sitio web.",
  },
];

const results = [
  {
    name: "Pérdida de grasa",
    text: "Planes sostenibles para lograr cambios reales sin dietas imposibles.",
  },
  {
    name: "Más energía y mejor salud",
    text: "Mejora tu alimentación, tu digestión y tu rendimiento diario.",
  },
  {
    name: "Seguimiento real",
    text: "Acompañamiento cercano para ajustar tu proceso y mantener resultados.",
  },
];

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(1);
const [openFaq, setOpenFaq] = useState<number | null>(0);

const toggleFaq = (index: number) => {
  setOpenFaq((prev) => (prev === index ? null : index));
};

const goPrevSlide = () => {
  setActiveSlide((prev) =>
    prev === 0 ? gallerySlides.length - 1 : prev - 1
  );
};

const goNextSlide = () => {
  setActiveSlide((prev) =>
    prev === gallerySlides.length - 1 ? 0 : prev + 1
  );
};

const getVisibleSlides = () => {
  const total = gallerySlides.length;

  return [
    gallerySlides[(activeSlide - 2 + total) % total],
    gallerySlides[(activeSlide - 1 + total) % total],
    gallerySlides[activeSlide],
    gallerySlides[(activeSlide + 1) % total],
  ];
};

const visibleSlides = getVisibleSlides();

  return (
    <main className="site">
      <header className="header">
        <div className="container nav">
          <Reveal delay={0.05} mode="load">
            <div className="logo">
              <img
                src="/logo-header.png"
                alt="Logo Erick Favela"
                className="logo-image"
              />
              <div>
                <AnimatedText
                  as="p"
                  text="Nutriólogo Erick Favela"
                  className="logo-title"
                  delay={0.08}
                  mode="load"
                />
                <Reveal delay={0.18} mode="load">
                  <p className="logo-subtitle">Mexicali · Online · USA</p>
                </Reveal>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} mode="load">
            <nav className="menu">
              <a href="/about">Sobre Erick</a>
              <a href="/servicios">Servicios</a>
              <a href="/resultados">Resultados</a>
              <a href="/contacto">Contacto</a>
            </nav>
          </Reveal>
          <Reveal delay={0.22} mode="load">
            <a
              className="btn btn-primary"
              href="https://wa.me/526861234567?text=Hola%20Erick%2C%20quiero%20informaci%C3%B3n%20sobre%20una%20consulta."
              target="_blank"
              rel="noreferrer"
            >
              Agendar
            </a>
                </Reveal>

        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <Reveal delay={0.1}>
              <span className="eyebrow">Nutrición presencial y online</span>
            </Reveal>

            <AnimatedText
              as="h1"
              text="Transforma tu salud, tu físico y tus hábitos con una estrategia realista y personalizada."
              className="hero-title"
              delay={0.15}
            />

            <Reveal delay={0.45}>
              <p className="hero-description">
                Atención en Mexicali y seguimiento online para pacientes en
                México, USA y cualquier parte del mundo. Construye resultados
                sostenibles con el acompañamiento de Erick Favela.
              </p>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="hero-actions">
                <a
                  className="btn btn-primary"
                  href="https://wa.me/526861234567?text=Hola%20Erick%2C%20quiero%20agendar%20una%20consulta."
                  target="_blank"
                  rel="noreferrer"
                >
                  Agenda tu consulta
                </a>

                <a className="btn btn-secondary" href="#services">
                  Ver servicios
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.75}>
              <div className="hero-stats">
                <div className="stat-card">
                  <strong>Presencial</strong>
                  <span>Mexicali, B.C.</span>
                </div>

                <div className="stat-card">
                  <strong>Online</strong>
                  <span>México y USA</span>
                </div>

                <div className="stat-card">
                  <strong>Personalizado</strong>
                  <span>Planes a tu medida</span>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <div className="hero-image-wrap">
              <img
                src="/erick-hero.png"
                alt="Nutriólogo Erick Favela"
                className="hero-image"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container about-grid">
          <Reveal delay={0.1}>
            <div className="about-image-wrap">
              <img
                src="/erick-about.png"
                alt="Erick Favela consulta nutricional"
                className="about-image"
              />
            </div>
          </Reveal>

          <div className="about-copy">
            <Reveal delay={0.12}>
              <span className="section-tag">Sobre Erick</span>
            </Reveal>

            <AnimatedText
              as="h2"
              text="Una marca personal de nutrición lista para crecer más allá de Mexicali."
              className="section-title"
              delay={0.18}
            />

            <Reveal delay={0.28}>
              <p>
                Este sitio está pensado para posicionar a Erick Favela como una
                referencia en nutrición, transformación corporal y
                acompañamiento personalizado, no solo en Mexicali, sino también
                en el mercado digital para pacientes en México y Estados Unidos.
              </p>
            </Reveal>

            <Reveal delay={0.36}>
              <p>
                El objetivo no es solo mostrar información, sino convertir
                visitas en citas, consultas online y futuros programas
                escalables.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="services">
        <div className="container">
          <div className="section-heading">
            <Reveal delay={0.1}>
              <span className="section-tag">Servicios</span>
            </Reveal>

            <AnimatedText
              as="h2"
              text="Diseñado para consulta local y crecimiento internacional"
              className="section-title"
              delay={0.16}
            />

            <Reveal delay={0.28}>
              <p>
                Una estructura clara para pacientes presenciales, consultas
                online y futuros programas digitales.
              </p>
            </Reveal>
          </div>

          <div className="cards-grid">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={0.12 + index * 0.08}>
                <article className="card">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section slider-collage-section">
  <div className="container">
    <div className="slider-collage-shell">
      <button
        type="button"
        className="slider-arrow slider-arrow-left"
        onClick={goPrevSlide}
        aria-label="Imagen anterior"
      >
        ←
      </button>

      <div className="slider-collage-track">
        {visibleSlides.map((slide, index) => {
          const classes = [
            "slider-collage-item",
            index === 0 ? "is-far-left" : "",
            index === 1 ? "is-left" : "",
            index === 2 ? "is-center" : "",
            index === 3 ? "is-right" : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <div className={classes} key={`${slide.src}-${index}`}>
              <img
                src={slide.src}
                alt={slide.alt}
                className="slider-collage-image"
              />
            </div>
          );
        })}
      </div>

      <button
        type="button"
        className="slider-arrow slider-arrow-right"
        onClick={goNextSlide}
        aria-label="Siguiente imagen"
      >
        →
      </button>
    </div>
  </div>
</section>
      <section className="section" id="results">
        <div className="container">
          <div className="section-heading">
            <Reveal delay={0.1}>
              <span className="section-tag">Resultados</span>
            </Reveal>

            <AnimatedText
              as="h2"
              text="Un sitio enfocado en confianza, autoridad y conversión"
              className="section-title"
              delay={0.16}
            />
          </div>

          <div className="results-grid">
            {results.map((item, index) => (
              <Reveal key={item.name} delay={0.12 + index * 0.08}>
                <article className="result-card">
                  <h3>{item.name}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>\

    <section className="section faq-section">
  <div className="container faq-layout">
    <div className="faq-intro">
      <Reveal delay={0.1}>
        <span className="section-tag">FAQ</span>
      </Reveal>

      <AnimatedText
        as="h2"
        text="Resolvemos las dudas más comunes antes de que agendes."
        className="section-title"
        delay={0.16}
      />

      <Reveal delay={0.26}>
        <p className="faq-text">
          Esta sección ayuda a responder objeciones, generar confianza y hacer
          más fácil la decisión de agendar una consulta presencial u online.
        </p>
      </Reveal>
    </div>

    <div className="faq-list">
      {faqs.map((faq, index) => {
        const isOpen = openFaq === index;

        return (
          <Reveal delay={0.1 + index * 0.06} key={faq.question}>
            <div className={`faq-item ${isOpen ? "is-open" : ""}`}>
              <button
                type="button"
                className="faq-question"
                onClick={() => toggleFaq(index)}
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{isOpen ? "−" : "+"}</span>
              </button>

              <div className={`faq-answer-wrap ${isOpen ? "is-open" : ""}`}>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  </div>
</section>


      <section className="section cta-section" id="contact">
        <Reveal delay={0.1}>
          <div className="container cta-box">
            <div>
              <span className="section-tag">Contacto</span>
              <AnimatedText
                as="h2"
                text="Mejora tu salud y lleva tu vida a otro nivel"
                className="section-title cta-title"
                delay={0.16}
              />
              <Reveal delay={0.26}>
                <p>
                  Una web bien hecha puede ayudarte a conseguir más pacientes,
                  automatizar el contacto y abrir mercado fuera de tu ciudad.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.34}>
              <div className="cta-actions">
                <a
                  className="btn btn-primary"
                  href="https://wa.me/526861234567?text=Hola%20Erick%2C%20quiero%20informaci%C3%B3n%20sobre%20una%20consulta."
                  target="_blank"
                  rel="noreferrer"
                >
                  Escribir por WhatsApp
                </a>
                <a
                  className="btn btn-secondary"
                  href="mailto:contacto@erickfavela.com"
                >
                  Enviar correo
                </a>
              </div>
            </Reveal>
          </div>
        </Reveal>
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
