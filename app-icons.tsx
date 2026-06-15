import { useState } from "react";

const palette = {
  lightest: "#FFF5EE",
  light: "#F1DECD",
  mid: "#D2B59C",
  warm: "#A4775B",
  dark: "#4A2F25",
};

const actions = [
  { icon: "✏️", label: "Write", emoji: "✏️" },
  { icon: "📖", label: "Read", emoji: "📖" },
  { icon: "🗒️", label: "Notes", emoji: "🗒️" },
  { icon: "🔍", label: "Search", emoji: "🔍" },
  { icon: "🖼️", label: "Gallery", emoji: "🖼️" },
  { icon: "⚙️", label: "Settings", emoji: "⚙️" },
  { icon: "📤", label: "Share", emoji: "📤" },
  { icon: "❤️", label: "Saved", emoji: "❤️" },
];

const svgIcons = {
  Write: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
      <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
    </svg>
  ),
  Read: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
  Notes: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
    </svg>
  ),
  Search: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  Gallery: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
      <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
    </svg>
  ),
  Settings: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
      <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  Share: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
      <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  ),
  Saved: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
};

export default function App() {
  const [active, setActive] = useState(null);

  return (
    <div style={{
      minHeight: "100vh",
      background: `linear-gradient(160deg, ${palette.lightest} 0%, ${palette.light} 100%)`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      padding: "40px 20px",
    }}>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <p style={{
          fontSize: "11px",
          letterSpacing: "0.25em",
          color: palette.warm,
          textTransform: "uppercase",
          marginBottom: "10px",
          fontFamily: "'Helvetica Neue', sans-serif",
          fontWeight: 500,
        }}>Your Space</p>
        <h1 style={{
          fontSize: "36px",
          fontWeight: 400,
          color: palette.dark,
          margin: 0,
          letterSpacing: "-0.5px",
        }}>What will you create?</h1>
      </div>

      {/* Icon Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "16px",
        maxWidth: "420px",
        width: "100%",
      }}>
        {actions.map(({ label }) => {
          const isActive = active === label;
          return (
            <button
              key={label}
              onClick={() => setActive(isActive ? null : label)}
              style={{
                background: isActive
                  ? palette.dark
                  : palette.lightest,
                border: `1.5px solid ${isActive ? palette.dark : palette.mid}`,
                borderRadius: "18px",
                padding: "20px 10px 14px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                transition: "all 0.2s ease",
                boxShadow: isActive
                  ? `0 6px 24px ${palette.dark}33`
                  : `0 2px 8px ${palette.mid}44`,
                transform: isActive ? "scale(0.96)" : "scale(1)",
              }}
              onMouseEnter={e => {
                if (!isActive) {
                  e.currentTarget.style.background = palette.light;
                  e.currentTarget.style.borderColor = palette.warm;
                  e.currentTarget.style.transform = "scale(1.04)";
                }
              }}
              onMouseLeave={e => {
                if (!isActive) {
                  e.currentTarget.style.background = palette.lightest;
                  e.currentTarget.style.borderColor = palette.mid;
                  e.currentTarget.style.transform = "scale(1)";
                }
              }}
            >
              <div style={{ color: isActive ? palette.light : palette.dark }}>
                {svgIcons[label]}
              </div>
              <span style={{
                fontSize: "11px",
                letterSpacing: "0.08em",
                color: isActive ? palette.mid : palette.warm,
                fontFamily: "'Helvetica Neue', sans-serif",
                fontWeight: 500,
                textTransform: "uppercase",
              }}>{label}</span>
            </button>
          );
        })}
      </div>

      {/* Active label */}
      <div style={{
        marginTop: "36px",
        height: "28px",
        display: "flex",
        alignItems: "center",
      }}>
        {active && (
          <p style={{
            fontSize: "13px",
            color: palette.warm,
            fontFamily: "'Helvetica Neue', sans-serif",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            margin: 0,
          }}>
            ↳ {active} selected
          </p>
        )}
      </div>

      {/* Palette strip */}
      <div style={{
        display: "flex",
        gap: "0",
        borderRadius: "10px",
        overflow: "hidden",
        marginTop: "48px",
        boxShadow: `0 2px 12px ${palette.dark}22`,
      }}>
        {Object.entries(palette).map(([name, hex]) => (
          <div key={name} title={hex} style={{
            width: "44px",
            height: "18px",
            background: hex,
          }} />
        ))}
      </div>
      <p style={{
        fontSize: "10px",
        color: palette.warm,
        fontFamily: "'Helvetica Neue', sans-serif",
        letterSpacing: "0.15em",
        marginTop: "8px",
        textTransform: "uppercase",
      }}>Your palette</p>

    </div>
  );
}
