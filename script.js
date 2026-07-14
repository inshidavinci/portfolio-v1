/* ============================================================
   INNER PAGES — about / projects / marketing / blog / contact
   ============================================================ */
body.page-inner{ background: var(--cream); }

/* ---- About: intro grid ---- */
.about-grid-section{ padding-top: 20px; }
.about-grid{
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 48px;
  align-items: start;
}
.about-frame{
  aspect-ratio: 3/4;
  background: var(--white);
  border: 2px dashed var(--pink-line);
  border-radius: var(--radius-md);
  display: grid;
  place-items: center;
  text-align: center;
  transform: rotate(-2deg);
}
.about-frame span{ font-family: var(--font-hand); font-size: 1.2rem; color: var(--pink-line); }
.about-frame small{ display: block; margin-top: 6px; font-size: 0.72rem; color: var(--ink-soft); }

.edu-card{
  background: var(--pink-bg-soft);
  border-radius: var(--radius-md);
  padding: 20px 24px;
  margin: 16px 0 22px;
}
.edu-card h3{ font-family: var(--font-display); margin: 0 0 4px; font-size: 1.2rem; }
.edu-card p{ margin: 0; color: var(--ink-soft); font-size: 0.92rem; }
.about-lede{ font-size: 1.02rem; line-height: 1.75; color: var(--ink-soft); }

@media (max-width: 760px){
  .about-grid{ grid-template-columns: 1fr; }
  .about-frame{ max-width: 240px; margin: 0 auto; }
}

/* ---- Interests ---- */
.interest-grid{
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.interest-pill{
  background: var(--white);
  border: 1.5px solid var(--green);
  color: var(--green-deep);
  font-weight: 700;
  font-size: 0.88rem;
  padding: 12px 20px;
  border-radius: 999px;
}

/* ---- Values ---- */
.value-grid{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}
.value-card{
  background: var(--white);
  border-radius: var(--radius-md);
  padding: 24px;
  border: 1.5px solid rgba(46,42,44,0.08);
}
.value-mark{
  font-family: var(--font-hand);
  font-size: 1.5rem;
  color: var(--pink-line);
  display: block;
  margin-bottom: 8px;
}
.value-card p{ margin: 0; color: var(--ink-soft); font-size: 0.92rem; line-height: 1.6; }

/* ---- Timeline (experience) ---- */
.timeline{
  display: flex;
  flex-direction: column;
  gap: 0;
}
.timeline-item{
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 32px;
  padding: 26px 0;
  border-top: 1.5px dashed rgba(111,154,106,0.35);
}
.timeline-item:first-child{ border-top: none; }
.timeline-role h3{ font-family: var(--font-display); font-size: 1.15rem; margin: 0 0 4px; }
.timeline-role span{ font-size: 0.85rem; color: var(--green-deep); font-weight: 600; }
.timeline-list{ margin: 0; padding: 0; }
.timeline-list li{
  position: relative;
  padding-left: 18px;
  margin-bottom: 8px;
  font-size: 0.92rem;
  color: var(--ink-soft);
  line-height: 1.5;
}
.timeline-list li::before{
  content: '';
  position: absolute;
  left: 0; top: 8px;
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--pink-line);
}
@media (max-width: 720px){
  .timeline-item{ grid-template-columns: 1fr; gap: 10px; }
}

/* ---- Skills ---- */
.skills-grid{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 28px;
}
.skills-col h3{
  font-family: var(--font-display);
  font-size: 1.05rem;
  margin: 0 0 14px;
  color: var(--green-deep);
}
.chip-row{ display: flex; flex-wrap: wrap; gap: 8px; }

/* ---- Projects / Marketing / Blog page hero micro-nav ---- */
.filter-row{
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 36px;
}
.filter-pill{
  font-size: 0.8rem;
  font-weight: 700;
  padding: 8px 16px;
  border-radius: 999px;
  background: var(--white);
  border: 1.5px solid rgba(46,42,44,0.1);
  color: var(--ink-soft);
}
.filter-pill.active{ background: var(--ink); color: var(--pink-bg-soft); border-color: var(--ink); }

/* ---- Blog specific: timeline-style cards with era labels ---- */
.blog-era{
  font-family: var(--font-hand);
  font-size: 1.3rem;
  color: var(--pink-line);
  margin: 0 0 18px;
  transform: rotate(-1deg);
  display: inline-block;
}

/* ---- Contact ---- */
.contact-section{ padding-top: 10px; }
.contact-grid{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
}
.contact-card{
  background: var(--pink-bg-soft);
  border-radius: var(--radius-lg);
  padding: 40px;
}
.contact-card h2{
  font-family: var(--font-display);
  font-size: 1.8rem;
  margin: 0 0 10px;
}
.contact-card p{ color: var(--ink-soft); line-height: 1.65; margin: 0 0 26px; }
.contact-links{ display: flex; flex-direction: column; gap: 14px; }
.contact-link{
  display: flex;
  align-items: center;
  gap: 14px;
  background: var(--white);
  padding: 14px 18px;
  border-radius: var(--radius-sm);
  font-weight: 700;
  font-size: 0.92rem;
  transition: transform .18s ease, box-shadow .18s ease;
}
.contact-link:hover{ transform: translateX(4px); box-shadow: 0 6px 18px rgba(46,42,44,0.1); }
.contact-link .ico{
  width: 36px; height: 36px;
  border-radius: 50%;
  background: var(--pink-bg-soft);
  display: grid; place-items: center;
  flex-shrink: 0;
}
.contact-link .ico svg{ width: 17px; height: 17px; color: var(--pink-line); }
.contact-link small{ display: block; font-weight: 500; color: var(--ink-soft); font-size: 0.78rem; margin-top: 2px; }

.contact-note{
  border-radius: var(--radius-lg);
  border: 2px dashed var(--green);
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
}
.contact-note .hand{ font-family: var(--font-hand); font-size: 1.6rem; color: var(--green-deep); }
.contact-note p{ color: var(--ink-soft); line-height: 1.7; margin: 0; }

@media (max-width: 760px){
  .contact-grid{ grid-template-columns: 1fr; }
}
