import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { games, categories } from "./games.js";
import "./style.css";

function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);

  const filtered = useMemo(() => games.filter((game) => {
    const matchesCategory = category === "All" || game.category === category;
    const text = `${game.title} ${game.description} ${game.category}`.toLowerCase();
    return matchesCategory && text.includes(query.toLowerCase());
  }), [query, category]);

  return (
    <div className="app-shell">
      <aside className={`sidebar ${menuOpen ? "sidebar-open" : ""}`}>
        <a className="brand" href="/" aria-label="Home">
          <span className="brand-mark">P</span>
          <span>testing<span className="brand-light">-petezahs</span></span>
        </a>
        <div className="side-label">DISCOVER</div>
        <button className={`nav-item ${category === "All" ? "active" : ""}`} onClick={() => setCategory("All")}>
          <span className="nav-icon">⌂</span> All experiences
        </button>
        {categories.filter((item) => item !== "All").map((item) => (
          <button key={item} className={`nav-item ${category === item ? "active" : ""}`} onClick={() => setCategory(item)}>
            <span className="nav-icon">◇</span> {item}
          </button>
        ))}
        <div className="sidebar-bottom">
          <div className="status-dot" />
          <span>Local development</span>
          <span className="version">v0.1.0</span>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">☰</button>
          <div className="breadcrumbs">Library <span>/</span> Experiences</div>
          <div className="top-actions"><span className="local-pill"><i /> LOCAL</span></div>
        </header>

        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow"><span /> YOUR GAME SPACE</div>
            <h1>Find your next<br /><span>experience.</span></h1>
            <p>A growing library of games, all in one place.</p>
            <div className="hero-search">
              <span className="search-icon">⌕</span>
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search experiences..." aria-label="Search experiences" />
              <kbd>⌘ K</kbd>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="orb orb-one" /><div className="orb orb-two" />
            <div className="art-grid" />
            <div className="art-card"><span className="art-symbol">✳</span><span className="art-caption">PLAY SOMETHING NEW</span></div>
          </div>
        </section>

        <section className="library-section">
          <div className="section-heading">
            <div><div className="eyebrow">THE COLLECTION</div><h2>Top experiences</h2></div>
            <span className="result-count">{filtered.length} {filtered.length === 1 ? "experience" : "experiences"}</span>
          </div>
          <div className="game-grid">
            {filtered.map((game) => (
              <article className={`game-card ${game.disabled ? "game-disabled" : ""}`} key={game.id}>
                <a className="game-art" href={game.route || undefined} style={{ "--accent": game.accent }} onClick={(event) => { if (game.disabled) event.preventDefault(); }}>
                  <span className="game-art-glow" />
                  <span className="game-art-symbol">{game.id === "2048" ? "2048" : "＋"}</span>
                  <span className="play-overlay">{game.disabled ? "COMING SOON" : "PLAY NOW ↗"}</span>
                </a>
                <div className="game-info">
                  <div><h3>{game.title}</h3><p>{game.description}</p></div>
                  <span className="category-tag">{game.category}</span>
                </div>
              </article>
            ))}
            {filtered.length === 0 && <div className="empty-state"><span>⌕</span><h3>No experiences found</h3><p>Try another search or category.</p></div>}
          </div>
        </section>
        <footer><span>testing-petezahs</span><span>Built for learning · Local instance</span></footer>
      </main>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);
