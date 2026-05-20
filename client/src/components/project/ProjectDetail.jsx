import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { projectsData } from '../../config';
import Footer from '../home/Footer';
import Disclaimer from './Disclaimer';

const disclaimerText = `
DISCLAIMER: The projects showcased in this portfolio are self-developed for educational, learning, research, and skill demonstration purposes only. These projects are intended to showcase my technical knowledge, software development skills, and understanding of modern technologies and system design.

Any references to existing platforms, trademarks, APIs, designs, or brand names are used strictly for educational and demonstration purposes, and all respective rights belong to their original owners.

The source code, project architecture, and technical implementations shared here are not intended for unauthorized commercial use, redistribution, malicious activities, cyber abuse, copyright infringement, data exploitation, security bypassing, or any illegal or unethical purpose under applicable IT and cybersecurity laws.

I do not promote, support, or take responsibility for any misuse, unauthorized copying, illegal deployment, modification, or redistribution of these projects by third parties. All showcased work is created solely for portfolio presentation, continuous learning, and professional development purposes.
`;
// ─────────────────────────────────────────────────────────────
//  Responsive helper — re-renders on window resize
// ─────────────────────────────────────────────────────────────
function useIsMobile(breakpoint = 640) {
  const [mobile, setMobile] = useState(() => window.innerWidth < breakpoint);
  useEffect(() => {
    const handler = () => setMobile(window.innerWidth < breakpoint);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [breakpoint]);
  return mobile;
}

// ─────────────────────────────────────────────────────────────
//  Styles
// ─────────────────────────────────────────────────────────────

const S = {
  page: (mode) => ({
    background: mode === 'light' ? '#f7f9fa' : '#0b0b0f',
    color: mode === 'light' ? '#0b0b0f' : '#e8e8f0',
    minHeight: '100vh',
    WebkitFontSmoothing: 'antialiased',
  }),

  // Wider container — 1200px max, tighter horizontal padding
  container: (mobile) => ({
    maxWidth: 1200,
    margin: '0 auto',
    padding: mobile ? '0 16px' : '0 40px',
  }),

  nav: { paddingTop: 28 },
  backBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    background: 'none',
    border: 'none',
    padding: 0,
    color: '#7a7a90',
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '.06em',
    textTransform: 'uppercase',
    cursor: 'pointer',
  },

  // Top margin added
  hero: (mobile) => ({
    paddingTop: mobile ? 36 : 52,
    marginTop: mobile ? 12 : 24,
  }),
  heroMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    marginBottom: 16,
    flexWrap: 'wrap',
  },

  makeBadge: (category) => {
    const map = {
      development: {
        bg: 'rgba(124,110,247,.12)',
        border: 'rgba(124,110,247,.3)',
        color: '#a89bf7',
        dot: '#7c6ef7',
        label: 'Development',
      },
      design: {
        bg: 'rgba(79,209,197,.12)',
        border: 'rgba(79,209,197,.3)',
        color: '#4fd1c5',
        dot: '#4fd1c5',
        label: 'Design',
      },
    };
    const m = map[category] ?? map.development;
    return { m, label: m.label };
  },

  yearLabel: (mode) => ({
    fontSize: 12,
    color: mode === 'light' ? '#6b6b7b' : '#7a7a90',
    fontWeight: 500,
  }),

  h1: (mobile, mode) => ({
    fontSize: mobile ? 'clamp(28px, 8vw, 40px)' : 'clamp(34px, 5vw, 58px)',
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: '-.025em',
    background:
      mode === 'light'
        ? 'linear-gradient(130deg, #0b0b0f 20%, #7c6ef7 100%)'
        : 'linear-gradient(130deg, #ffffff 20%, #a89bf7 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    margin: '0 0 12px',
  }),

  tagline: (mobile, mode) => ({
    fontSize: mobile ? 14 : 16,
    color: mode === 'light' ? '#6b6b7b' : '#7a7a90',
    fontWeight: 300,
    maxWidth: '100%',
    margin: '0 0 22px',
    lineHeight: 1.6,
  }),

  tagRow: { display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 26 },
  tag: (mode) => ({
    padding: '4px 11px',
    borderRadius: 5,
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '.05em',
    background:
      mode === 'light' ? 'rgba(124,110,247,.08)' : 'rgba(124,110,247,.1)',
    border:
      mode === 'light'
        ? '1px solid rgba(124,110,247,.22)'
        : '1px solid rgba(124,110,247,.2)',
    color: mode === 'light' ? '#5b4bb3' : '#a89bf7',
  }),

  // ── Buttons — compact & professional ─────────
  actions: (mobile) => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: mobile ? 36 : 48,
  }),

  btnPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '8px 16px',
    borderRadius: 8,
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '.03em',
    textDecoration: 'none',
    background: '#7c6ef7',
    color: '#fff',
    border: '1px solid #7c6ef7',
    cursor: 'pointer',
    boxShadow: '0 2px 10px rgba(124,110,247,.3)',
  },
  btnGhost: (mode) => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '8px 16px',
    borderRadius: 8,
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '.03em',
    textDecoration: 'none',
    background: 'transparent',
    color: mode === 'light' ? '#fff' : '#c5c5d8',
    border:
      mode === 'light'
        ? '1px solid #0b0b0f'
        : '1px solid rgba(255,255,255,.14)',
    cursor: 'pointer',
    backgroundColor: mode === 'light' ? '#0b0b0f' : 'transparent',
  }),
  btnCoffee: (mode) => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '8px 16px',
    borderRadius: 8,
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '.03em',
    textDecoration: 'none',
    background: mode === 'light' ? '#ffd166' : 'rgba(255,209,102,.08)',
    color: mode === 'light' ? '#0b0b0f' : '#ffd166',
    border:
      mode === 'light'
        ? '1px solid rgba(255,209,102,.55)'
        : '1px solid rgba(255,209,102,.2)',
    cursor: 'pointer',
  }),

  divider: (mode) => ({
    height: 1,
    background: mode === 'light' ? 'rgba(0,0,0,.08)' : 'rgba(255,255,255,.07)',
    margin: '0 0 40px',
  }),

  heroShot: {
    borderRadius: 14,
    border: '1px solid rgba(255,255,255,.08)',
    overflow: 'hidden',
    cursor: 'zoom-in',
  },
  featuredShot: {
    borderRadius: 14,
    border: '1px solid rgba(255,255,255,.08)',
    overflow: 'hidden',
    cursor: 'zoom-in',
    gridColumn: '1 / -1',
  },
  thumbShot: {
    borderRadius: 10,
    border: '1px solid rgba(255,255,255,.08)',
    overflow: 'hidden',
    cursor: 'zoom-in',
  },

  splitGrid: (mobile) => ({
    display: 'grid',
    gridTemplateColumns: mobile ? '1fr' : '1fr 1fr',
    gap: 12,
  }),

  shotImg: { width: '100%', display: 'block' },

  thumbStrip: (mobile) => ({
    display: 'grid',
    gridTemplateColumns: mobile
      ? 'repeat(auto-fill, minmax(90px, 1fr))'
      : 'repeat(auto-fill, minmax(130px, 1fr))',
    gap: 8,
    marginTop: 10,
  }),

  section: { marginBottom: 64 },
  sectionLabel: {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: '.12em',
    textTransform: 'uppercase',
    color: '#7c6ef7',
    marginBottom: 18,
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  sectionLine: (mode) => ({
    flex: 1,
    height: 1,
    background: mode === 'light' ? 'rgba(0,0,0,.08)' : 'rgba(255,255,255,.07)',
    maxWidth: 80,
  }),
  descPara: (mobile, mode) => ({
    fontSize: mobile ? 14 : 16,
    color: mode === 'light' ? 'rgba(0,0,0,.62)' : 'rgba(232,232,240,.78)',
    lineHeight: 1.82,
    fontWeight: 300,
    maxWidth: 720,
  }),

  footer: (mode) => ({
    borderTop:
      mode === 'light'
        ? '1px solid rgba(0,0,0,.08)'
        : '1px solid rgba(255,255,255,.07)',
    padding: '30px 0',
    marginTop: 16,
  }),
  footerInner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 10,
  },
  footerText: (mode) => ({
    fontSize: 12,
    color: mode === 'light' ? '#6b6b7b' : '#7a7a90',
  }),

  lightboxBg: {
    position: 'fixed',
    inset: 0,
    zIndex: 999,
    background: 'rgba(0,0,0,.92)',
    backdropFilter: 'blur(10px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  lightboxImg: {
    maxWidth: '100%',
    maxHeight: '90vh',
    borderRadius: 10,
    boxShadow: '0 40px 80px rgba(0,0,0,.7)',
  },
  lightboxClose: {
    position: 'absolute',
    top: 16,
    right: 20,
    background: 'rgba(255,255,255,.1)',
    border: '1px solid rgba(255,255,255,.15)',
    color: '#fff',
    width: 34,
    height: 34,
    borderRadius: '50%',
    fontSize: 15,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notFound: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60vh',
    gap: 14,
    textAlign: 'center',
  },
  notFoundH2: { fontSize: 28, fontWeight: 600, margin: 0 },
  paragraphStyle: (mode) => ({
    marginBottom: 14,
    marginTop: 14,
    color: mode === 'light' ? '#525252' : '#A0A0A0',
    fontWeight: 300,
  }),
};

// ─────────────────────────────────────────────────────────────
//  Lightbox
// ─────────────────────────────────────────────────────────────
function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div style={S.lightboxBg} onClick={onClose}>
      <button style={S.lightboxClose} onClick={onClose}>
        ✕
      </button>
      <img
        src={src}
        alt={alt}
        style={S.lightboxImg}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  Screenshot layouts
// ─────────────────────────────────────────────────────────────
function LayoutHero({ screenshots, onOpen }) {
  const [hov, setHov] = useState(false);
  const s = screenshots[0];
  return (
    <div
      style={S.heroShot}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={() => onOpen(s.src, s.alt)}
    >
      <img
        src={s.src}
        alt={s.alt}
        style={{
          ...S.shotImg,
          transform: hov ? 'scale(1.015)' : 'scale(1)',
          transition: 'transform .6s ease',
        }}
      />
    </div>
  );
}

function ThumbShot({ shot, onOpen }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      style={S.thumbShot}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={() => onOpen(shot.src, shot.alt)}
    >
      <img
        src={shot.src}
        alt={shot.alt}
        style={{
          ...S.shotImg,
          transform: hov ? 'scale(1.04)' : 'scale(1)',
          transition: 'transform .4s ease',
        }}
      />
    </div>
  );
}

function LayoutSplit({ screenshots, onOpen, mobile }) {
  const [featured, ...rest] = screenshots;
  return (
    <div style={S.splitGrid(mobile)}>
      <div
        style={S.featuredShot}
        onClick={() => onOpen(featured.src, featured.alt)}
      >
        <img src={featured.src} alt={featured.alt} style={S.shotImg} />
      </div>
      {rest.map((s, i) => (
        <ThumbShot key={i} shot={s} onOpen={onOpen} />
      ))}
    </div>
  );
}

function LayoutGallery({ screenshots, onOpen, mobile }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const active = screenshots[activeIdx];

  function switchTo(i) {
    if (i === activeIdx) return;
    setFading(true);
    setTimeout(() => {
      setActiveIdx(i);
      setFading(false);
    }, 160);
  }

  return (
    <div>
      <div style={S.heroShot} onClick={() => onOpen(active.src, active.alt)}>
        <img
          src={active.src}
          alt={active.alt}
          style={{
            ...S.shotImg,
            opacity: fading ? 0 : 1,
            transform: fading ? 'scale(.98)' : 'scale(1)',
            transition: 'opacity .16s ease, transform .16s ease',
          }}
        />
      </div>
      <div style={S.thumbStrip(mobile)}>
        {screenshots.map((s, i) => (
          <div
            key={i}
            onClick={() => switchTo(i)}
            style={{
              aspectRatio: '16/10',
              borderRadius: 6,
              overflow: 'hidden',
              cursor: 'pointer',
              border: `1px solid ${i === activeIdx ? '#7c6ef7' : 'rgba(255,255,255,.08)'}`,
              transform: i === activeIdx ? 'scale(.96)' : 'scale(1)',
              transition: 'border-color .2s, transform .2s',
            }}
          >
            <img
              src={s.src}
              alt={s.alt}
              style={{ ...S.shotImg, height: '100%', objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  Main component
// ─────────────────────────────────────────────────────────────
const ProjectDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const mobile = useIsMobile(640);
  const mode = useSelector((state) => state.theme?.mode) || 'dark';

  const project = projectsData.find((e) => e.id === Number(params.id));

  const [lightbox, setLightbox] = useState(null);
  const openLightbox = useCallback((src, alt) => setLightbox({ src, alt }), []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.id]);

  // ── 404 ─────────────────────────────────────
  if (!project) {
    return (
      <div
        style={{
          ...S.page,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={S.notFound}>
          <h2 style={S.notFoundH2}>Project not found</h2>
          <p
            style={{
              color: mode === 'light' ? '#6b6b7b' : '#7a7a90',
              margin: 0,
            }}
          >
            No project with id "{params.id}" exists.
          </p>
          <button
            onClick={() => navigate(-1)}
            style={{ ...S.btnPrimary, marginTop: 8 }}
          >
            ← Go back
          </button>
        </div>
      </div>
    );
  }

  const {
    title,
    category,
    date,
    link,
    image,
    tagline = '',
    description = [],
    tags = [],
    liveLink = '',
    coffeeLink = '',
    screenshots = [{ src: image, alt: title }],
  } = project;

  const n = screenshots.length;
  let ScreenshotBlock = null;
  if (n === 1)
    ScreenshotBlock = (
      <LayoutHero screenshots={screenshots} onOpen={openLightbox} />
    );
  else if (n <= 3)
    ScreenshotBlock = (
      <LayoutSplit
        screenshots={screenshots}
        onOpen={openLightbox}
        mobile={mobile}
      />
    );
  else
    ScreenshotBlock = (
      <LayoutGallery
        screenshots={screenshots}
        onOpen={openLightbox}
        mobile={mobile}
      />
    );

  const { m: bm, label: bLabel } = S.makeBadge(category);

  return (
    <>
      <div style={S.page(mode)}>
        <div style={S.container(mobile)}>
          {/* Back nav */}
          <nav style={S.nav}>
            {/* <button style={S.backBtn} onClick={() => navigate(-1)}>
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button> */}
          </nav>

          {/* Hero */}
          <header style={S.hero(mobile)}>
            <div style={S.heroMeta}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 5,
                  padding: '3px 10px',
                  borderRadius: 999,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '.07em',
                  textTransform: 'uppercase',
                  background: bm.bg,
                  border: `1px solid ${bm.border}`,
                  color: bm.color,
                }}
              >
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    background: bm.dot,
                  }}
                />
                {bLabel}
              </span>
              <span style={S.yearLabel(mode)}>{date}</span>
            </div>

            <h1 style={S.h1(mobile, mode)}>{title}</h1>
            {tagline && <p style={S.tagline(mobile, mode)}>{tagline}</p>}

            {tags.length > 0 && (
              <div style={S.tagRow}>
                {tags.map((t) => (
                  <span key={t} style={S.tag(mode)}>
                    {t}
                  </span>
                ))}
              </div>
            )}

            {/* Buttons */}
            <div style={S.actions(mobile)}>
              {liveLink && (
                <a
                  href={liveLink}
                  rel="noopener noreferrer"
                  style={S.btnPrimary}
                >
                  <svg
                    width="11"
                    height="11"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke={mode === 'light' ? '#ffffff' : '#ffffff'}
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Live Demo
                </a>
              )}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={S.btnGhost(mode)}
                >
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0112 6.8c.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
                  </svg>
                  GitHub
                </a>
              )}
              {coffeeLink && (
                <a
                  href={coffeeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={S.btnCoffee(mode)}
                >
                  <span style={{ fontSize: 11 }}>☕</span>
                  Buy me a coffee
                </a>
              )}
            </div>
          </header>

          <div style={S.divider(mode)} />

          {/* Screenshots */}
          <section style={{ marginBottom: 52 }}>{ScreenshotBlock}</section>
          {/* Project About */}
          <h1 style={{ fontSize: 40, fontWeight: 500, marginBottom: 30 }}>
            What It Does ?
          </h1>

          {/* Description */}
          {description.map((block, i) => {
            if (block.type === 'heading') {
              return (
                <h3
                  key={i}
                  style={{
                    marginTop: '50px',
                    marginBottom: '5px',
                    fontWeight: '600',
                    fontSize: '22px',
                  }}
                >
                  {block.content}
                </h3>
              );
            }

            if (block.type === 'paragraph') {
              return (
                <p key={i} style={S.paragraphStyle(mode)}>
                  {block.content}
                </p>
              );
            }

            if (block.type === 'list') {
              return (
                <ul
                  key={i}
                  style={{
                    paddingLeft: '10px',
                    listStyle: 'inside',
                    marginTop: '15px',
                    marginBottom: '15px',
                  }}
                >
                  {block.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              );
            }

            return null;
          })}
          <Disclaimer disclaimer={disclaimerText} />
        </div>
        {/* Footer */}
        <footer style={S.footer(mode)}>
          <div style={S.container(mobile)}>
            <div style={S.footerInner}>
              <span style={S.footerText(mode)}>
                Built with care &amp; lots of coffee ☕
              </span>
              <button style={S.backBtn} onClick={() => navigate(-1)}>
                ← All projects
              </button>
            </div>
          </div>
        </footer>
      </div>

      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}

      <Footer />
    </>
  );
};

export default ProjectDetail;
