"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#" className="brand" aria-label="Página inicial">
            <span className="brand-name">Igreja em Sobradinho</span>
          </a>
          <nav className={`nav ${menuOpen ? "open" : ""}`}>
            <ul className="nav-list">
              <li>
                <a className="btn-nav" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="btn-nav" href="#eventos">
                  Eventos
                </a>
              </li>
              <li>
                <a className="btn-nav" href="#sobre">
                  Sobre
                </a>
              </li>
              <li>
                <a className="btn-nav" href="#localizacao">
                  Localização
                </a>
              </li>
            </ul>
          </nav>
          <button
            className="nav-toggle"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </header>

      <section id="hero" className="hero" aria-label="Banner de boas-vindas">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title">Jesus é o Senhor!</h1>
          <p className="hero-subtitle">fé, serviço e esperança.</p>
          <div className="hero-actions">
            <a className="btn-primary" href="#eventos">
              Ver próximos eventos
            </a>
            <a className="btn-link" href="#sobre">
              Conheça a igreja
            </a>
          </div>
        </div>
      </section>

      <section id="eventos" className="section" aria-labelledby="eventos-title">
        <div className="container">
          <h2 id="eventos-title" className="section-title">
            Eventos
          </h2>
          <div className="cards">
            <article className="card">
              <h3 className="card-title">Reunião de Domingo</h3>
              <p className="card-meta">Dom, 9h30</p>
              <p className="card-text">Partir do pão.</p>
            </article>
            <article className="card">
              <h3 className="card-title">Reunião de Sabado</h3>
              <p className="card-meta">Sab, 19h30</p>
              <p className="card-text">Estudo da Palavra</p>
            </article>
          </div>
        </div>
      </section>

      <section
        id="sobre"
        className="section section-muted"
        aria-labelledby="sobre-title">
        <div className="container about-grid">
          <div>
            <h2 id="sobre-title" className="section-title">
              Sobre a igreja
            </h2>
            <p className="lead">
              Somos uma comunidade dedicada a viver e compartilhar a fé com
              amor, serviço e esperança.
            </p>
            <p>
              Fundada para acolher e inspirar, promovemos encontros, estudos e
              ações sociais que fortalecem nossa caminhada.
            </p>
          </div>
          <div className="about-card">
            <h3 className="card-title">Missão</h3>
            <p>Servir a Deus e ao próximo, cultivando fé e compaixão.</p>
            <h3 className="card-title">Valores</h3>
            <p>Amor, integridade, comunidade e generosidade.</p>
          </div>
        </div>
      </section>

      <section
        id="localizacao"
        className="section"
        aria-labelledby="localizacao-title">
        <div className="container">
          <h2 id="localizacao-title" className="section-title">
            Onde nos achar
          </h2>
          <p>Quadra 7 Área Esp 2 s/n - Sobradinho, Brasília - DF</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3841.9568419587868!2d-47.80359170000004!3d-15.64728649999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a39ca00919e2b%3A0x5bb918e150b11c53!2sIgreja%20em%20Sobradinho!5e0!3m2!1spt-BR!2sbr!4v1768250434912!5m2!1spt-BR!2sbr"
            width="600"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
      <footer className="site-footer">
        <div className="container footer-inner">
          <p className="footer-brand">Igreja em Sobradinho</p>
          <p className="footer-note">© 2025</p>
        </div>
      </footer>
    </>
  );
}
