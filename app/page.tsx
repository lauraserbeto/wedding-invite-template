import Image from "next/image";
import { MapPin, Heart, CalendarPlus, Gift, Linkedin } from "lucide-react";
import Countdown from "@/src/components/Countdown/Countdown";
import AudioPlayer from "@/src/components/AudioPlayer/AudioPlayer";
import ScrollReveal from "@/src/components/ScrollReveal/ScrollReveal";
import ParallaxPhoto from "@/src/components/ParallaxPhoto/ParallaxPhoto";
import GallerySection from "@/src/components/GallerySection";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Igreja+Matriz+de+Exemplo+Rua+Ficticia+123+Centro";

const CALENDAR_URL =
  "https://calendar.google.com/calendar/render?action=TEMPLATE" +
  "&text=Casamento+Ana+%26+Beto" +
  "&dates=20261012T230000Z/20261013T020000Z" +
  "&details=Celebração+do+casamento+de+Ana+e+Beto" +
  "&location=Igreja+Matriz+de+Exemplo,+Rua+Fictícia,+123+-+Centro,+Cidade+-+UF" +
  "&sf=true&output=xml";

const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=Igreja+Matriz+de+Exemplo,+Rua+Fictícia,+123,+Centro,+Cidade+-+UF&t=&z=16&ie=UTF8&iwloc=&output=embed";

export default function WeddingInvite() {
  return (
    <main>
      {/* ========== HERO SECTION ========== */}
      <section className="hero">
        <Image
          src="/hero_wedding.jpg"
          alt="Ana e Beto"
          fill
          className="object-cover hero-image"
          priority
          sizes="100vw"
        />
        <div className="hero-overlay" />
        <div className="hero-fade-bottom" />

        <div className="hero-content fade-in-up">
          <h1 className="hero-names font-serif">
            Ana <span className="hero-ampersand">&</span> Beto
          </h1>
          <p className="hero-date">12 de Outubro de 2026</p>
        </div>

        <div className="scroll-indicator">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>

      {/* ========== COUNTDOWN ========== */}
      <Countdown />

      {/* ========== INVITE BODY ========== */}
      <section className="invite-section">
        {/* Ornamento Superior */}
        <ScrollReveal>
          <Image
            src="/1.svg"
            alt="Ornamento"
            width={200}
            height={80}
            className="ornament-img"
          />
        </ScrollReveal>

        {/* Nomes */}
        <ScrollReveal delay={100}>
          <p className="gift-editorial-eyebrow" style={{ marginBottom: '0.5rem' }}>Com alegria convidam</p>
          <div className="invite-names font-serif">
            <h2 className="invite-name">Ana Beatriz da Silva</h2>
            <span className="invite-and">e</span>
            <h2 className="invite-name">Roberto Carlos de Oliveira</h2>
          </div>
        </ScrollReveal>

        {/* Texto Formal */}
        <ScrollReveal delay={200}>
          <p className="invite-text">
            Juntamente com suas famílias solicitam
            <br />
            a honra de sua presença na celebração
            <br />
            de seu casamento
          </p>
        </ScrollReveal>

      

        {/* Data e Hora */}
        <ScrollReveal delay={300}>
          <div className="invite-datetime">
            <p className="invite-datetime-pre font-sans">
              Que se realizará às 20 horas do
            </p>
            <p className="invite-datetime-main font-serif">
              Segunda-feira, dia 12 de Outubro de 2026
            </p>
          </div>
        </ScrollReveal>

        {/* Local */}
        <ScrollReveal delay={400}>
          <div className="invite-location">
            <p className="invite-location-text">
              Na Igreja Matriz de Exemplo 
            </p>
          </div>
        </ScrollReveal>

        {/* Ornamento Inferior */}
        <ScrollReveal delay={500}>
          <Image
            src="/2 (2).svg"
            alt="Ornamento"
            width={100}
            height={60}
            className="ornament-img"
          />
        </ScrollReveal>
      </section>

      <GallerySection />

      {/* ========== LOCATION SECTION ========== */}
      <section className="location-section">
        <div className="location-content">
          {/* Info Column */}
          <div className="location-info">
            <ScrollReveal>
              <p className="gift-editorial-eyebrow" style={{ marginBottom: '0.5rem' }}>Onde nos encontrar</p>
              <h3 className="location-title font-serif">
                Igreja Matriz de Exemplo
              </h3>
              <p className="location-address">
                Rua Fictícia, Nº 123 — Bairro Centro, Cidade – UF
              </p>

              <div className="location-actions">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="location-btn location-btn-primary"
                >
                  <MapPin size={14} />
                  Ver no Maps
                </a>
                <a
                  href={CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="location-btn location-btn-secondary"
                >
                  <CalendarPlus size={14} />
                  Adicionar à Agenda
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Map Column */}
          <div className="location-map">
            <iframe
              title="Localização da cerimônia"
              src={MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ========== LISTA DE PRESENTES ========== */}
      <section className="gift-editorial-section">
        {/* Ornamental top rule */}
        <ScrollReveal>
          <div className="gift-editorial-ornament">
            <span className="gift-ornament-line" />
            <span className="gift-ornament-icon">✦</span>
            <span className="gift-ornament-line" />
          </div>
        </ScrollReveal>

        {/* Arch photo + copy side by side */}
        <div className="gift-editorial-inner">
          <div className="gift-editorial-photo-col">
            <ScrollReveal>
              <div className="arch-photo-frame">
                <Image
                  src="/arch_wedding.png"
                  alt="Ana e Beto"
                  fill
                  className="object-cover arch-photo-img"
                  loading="lazy"
                  sizes="(max-width: 768px) 70vw, 320px"
                />
              </div>
            </ScrollReveal>
          </div>

          <div className="gift-editorial-copy-col">
            <ScrollReveal delay={150}>
              <p className="gift-editorial-eyebrow">Para os Nossos Convidados</p>
              <h3 className="gift-editorial-title font-serif">Lista de<br />Presentes</h3>
             
              <p className="gift-editorial-desc">
                Sua presença já é o nosso maior presente.<br />
                Mas se desejar nos presentear, preparamos<br />
                uma lista com muito carinho para ajudar<br />
                a construir o nosso novo lar.
              </p>
              <button className="gift-editorial-btn" style={{ cursor: 'default' }}>
                <span>Acessar Lista</span>
                <span className="gift-btn-arrow">→</span>
              </button>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal>
          <div className="gift-editorial-ornament">
            <span className="gift-ornament-line" />
            <span className="gift-ornament-icon">✦</span>
            <span className="gift-ornament-line" />
          </div>
        </ScrollReveal>
      </section>

      <footer className="wedding-footer">
        <div className="footer-info">
          <div className="footer-monogram">
            <Image
              src="/icon-black.png"
              alt="Ana & Beto"
              width={60}
              height={60}
              className="footer-monogram-img"
            />
          </div>
          <p className="footer-names font-serif">Ana & Beto</p>
          <p className="footer-date">12 de Outubro de 2026</p>
        </div>

        <div className="credits-card-wrapper">
          <a 
            href="https://www.linkedin.com/in/lauraserbeto/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="credits-card"
          >
            <div className="credits-card-glass" />
            <div className="credits-card-content">
              <div className="credits-card-left">
                <div className="credits-label">DESENVOLVIDO POR</div>
                <div className="credits-name">Laura Serbêto</div>
              </div>
              <div className="credits-card-right">
                <Linkedin size={16} />
              </div>
            </div>
          </a>
        </div>
      </footer>

      {/* ========== FLOATING AUDIO PLAYER ========== */}
      <AudioPlayer />
    </main>
  );
}