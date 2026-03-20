import { useState } from "react";

const MEDAL_IMG = "https://cdn.poehali.dev/projects/022a832f-9252-4d4c-9f92-ce882da237a1/files/38260c4d-e2a9-4e99-8150-cf7c16bd55f6.jpg";
const ATHLETE_IMG = "https://cdn.poehali.dev/projects/022a832f-9252-4d4c-9f92-ce882da237a1/files/150ffb3f-7a4e-4c74-af8c-48a29b7488d9.jpg";

const FONTS = [
  { family: "'Bebas Neue', sans-serif", name: "Bebas Neue", tag: "Текущий" },
  { family: "'Russo One', sans-serif", name: "Russo One", tag: "Мощный" },
  { family: "'Unbounded', sans-serif", name: "Unbounded", tag: "Широкий" },
  { family: "'Teko', sans-serif", name: "Teko", tag: "Атлетичный" },
  { family: "'Exo 2', sans-serif", name: "Exo 2", tag: "Технологичный" },
  { family: "'Barlow Condensed', sans-serif", name: "Barlow Condensed", tag: "Динамичный" },
  { family: "'Saira Condensed', sans-serif", name: "Saira Condensed", tag: "Быстрый" },
  { family: "'Chakra Petch', sans-serif", name: "Chakra Petch", tag: "Кибер" },
  { family: "'Rajdhani', sans-serif", name: "Rajdhani", tag: "Боевой" },
  { family: "'Oswald', sans-serif", name: "Oswald", tag: "Классика" },
];

type Layout = "horizontal" | "vertical" | "square";

const layouts: { id: Layout; label: string; desc: string }[] = [
  { id: "horizontal", label: "Горизонтальный", desc: "Для шапок, баннеров, печатных материалов" },
  { id: "vertical", label: "Вертикальный", desc: "Для постеров, сторис, визиток" },
  { id: "square", label: "Квадратный", desc: "Для аватаров, иконок, соцсетей" },
];

function GoldText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={className}
      style={{
        background: "linear-gradient(135deg, #f5c842 0%, #ffd700 25%, #ffe878 50%, #d4a017 75%, #ffd700 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </span>
  );
}

function StarAccent() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ display: "inline-block" }}>
      <polygon
        points="12,2 14.5,9.5 22,9.5 16,14.5 18.5,22 12,17.5 5.5,22 8,14.5 2,9.5 9.5,9.5"
        fill="url(#goldStar)"
      />
      <defs>
        <linearGradient id="goldStar" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffd700" />
          <stop offset="50%" stopColor="#ffe878" />
          <stop offset="100%" stopColor="#d4a017" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function HorizontalLogo({ font = "'Bebas Neue', sans-serif" }: { font?: string }) {
  return (
    <div
      className="relative flex items-center gap-6 px-10 py-6 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #2d0a5e 0%, #4a1090 40%, #1a0535 100%)",
        borderRadius: 16,
        minWidth: 520,
        boxShadow: "0 0 60px rgba(180,80,255,0.3), 0 0 120px rgba(100,20,200,0.15), inset 0 1px 0 rgba(255,255,255,0.1)",
        border: "1px solid rgba(180,100,255,0.3)",
      }}
    >
      {/* Highlight streaks */}
      <div style={{
        position: "absolute", top: 0, left: "20%", width: 2, height: "100%",
        background: "linear-gradient(180deg, transparent, rgba(255,215,0,0.15), transparent)",
        transform: "skewX(-20deg)",
      }} />
      <div style={{
        position: "absolute", top: 0, right: "30%", width: 1, height: "100%",
        background: "linear-gradient(180deg, transparent, rgba(255,215,0,0.08), transparent)",
        transform: "skewX(-20deg)",
      }} />

      {/* Medal */}
      <div className="relative flex-shrink-0" style={{ width: 92, height: 92 }}>
        <div style={{
          position: "absolute", inset: -8,
          background: "radial-gradient(circle, rgba(255,215,0,0.4) 0%, transparent 70%)",
          borderRadius: "50%",
        }} />
        <img
          src={MEDAL_IMG}
          alt="Золотая медаль"
          style={{ width: 92, height: 92, borderRadius: "50%", objectFit: "cover", position: "relative", zIndex: 1, border: "2px solid rgba(255,215,0,0.5)" }}
        />
        <div style={{
          position: "absolute", top: 7, left: 13, width: 20, height: 8,
          background: "rgba(255,255,255,0.45)", borderRadius: "50%",
          filter: "blur(3px)", transform: "rotate(-30deg)", zIndex: 2,
        }} />
      </div>

      {/* Text block */}
      <div className="flex flex-col gap-1">
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <StarAccent />
          <span style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: 11,
            letterSpacing: "0.25em",
            color: "rgba(255,215,0,0.75)",
            textTransform: "uppercase",
            fontWeight: 500,
          }}>
            Спортивный центр
          </span>
          <StarAccent />
        </div>
        <div style={{
          fontFamily: font,
          fontSize: 52,
          lineHeight: 1,
          letterSpacing: "0.05em",
          background: "linear-gradient(135deg, #f5c842 0%, #ffd700 30%, #ffe878 55%, #d4a017 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textShadow: "none",
          filter: "drop-shadow(0 2px 8px rgba(255,215,0,0.5))",
        }}>
          ЧЕМПИОН
        </div>
        <div style={{
          width: "100%",
          height: 2,
          background: "linear-gradient(90deg, transparent, #ffd700, rgba(255,215,0,0.4), transparent)",
        }} />
      </div>
    </div>
  );
}

function VerticalLogo({ font = "'Bebas Neue', sans-serif" }: { font?: string }) {
  return (
    <div
      className="relative flex flex-col items-center gap-4 px-10 py-10 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #2d0a5e 0%, #4a1090 50%, #1a0535 100%)",
        borderRadius: 20,
        width: 260,
        boxShadow: "0 0 60px rgba(180,80,255,0.3), 0 0 120px rgba(100,20,200,0.15), inset 0 1px 0 rgba(255,255,255,0.1)",
        border: "1px solid rgba(180,100,255,0.3)",
      }}
    >
      {/* Corner decorations */}
      <div style={{
        position: "absolute", top: 12, left: 12, width: 30, height: 30,
        borderTop: "2px solid rgba(255,215,0,0.5)", borderLeft: "2px solid rgba(255,215,0,0.5)",
        borderRadius: "4px 0 0 0",
      }} />
      <div style={{
        position: "absolute", top: 12, right: 12, width: 30, height: 30,
        borderTop: "2px solid rgba(255,215,0,0.5)", borderRight: "2px solid rgba(255,215,0,0.5)",
        borderRadius: "0 4px 0 0",
      }} />
      <div style={{
        position: "absolute", bottom: 12, left: 12, width: 30, height: 30,
        borderBottom: "2px solid rgba(255,215,0,0.5)", borderLeft: "2px solid rgba(255,215,0,0.5)",
        borderRadius: "0 0 0 4px",
      }} />
      <div style={{
        position: "absolute", bottom: 12, right: 12, width: 30, height: 30,
        borderBottom: "2px solid rgba(255,215,0,0.5)", borderRight: "2px solid rgba(255,215,0,0.5)",
        borderRadius: "0 0 4px 0",
      }} />

      {/* Top label */}
      <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
        <StarAccent />
        <span style={{
          fontFamily: "'Oswald', sans-serif",
          fontSize: 10,
          letterSpacing: "0.3em",
          color: "rgba(255,215,0,0.7)",
          textTransform: "uppercase",
        }}>Спортивный центр</span>
        <StarAccent />
      </div>

      {/* Medal */}
      <div className="relative" style={{ width: 116, height: 116 }}>
        <div style={{
          position: "absolute", inset: -10,
          background: "radial-gradient(circle, rgba(255,215,0,0.35) 0%, transparent 70%)",
          borderRadius: "50%",
        }} />
        <div style={{
          position: "absolute", inset: -2,
          borderRadius: "50%",
          border: "2px solid rgba(255,215,0,0.45)",
        }} />
        <img
          src={MEDAL_IMG}
          alt="Золотая медаль"
          style={{ width: 116, height: 116, borderRadius: "50%", objectFit: "cover", position: "relative", zIndex: 1 }}
        />
        <div style={{
          position: "absolute", top: 9, left: 17, width: 24, height: 10,
          background: "rgba(255,255,255,0.38)", borderRadius: "50%",
          filter: "blur(4px)", transform: "rotate(-30deg)", zIndex: 2,
        }} />
      </div>

      {/* Divider */}
      <div style={{
        width: "80%", height: 1,
        background: "linear-gradient(90deg, transparent, rgba(255,215,0,0.6), transparent)",
      }} />

      {/* Title */}
      <div style={{
        fontFamily: font,
        fontSize: 48,
        lineHeight: 1,
        letterSpacing: "0.08em",
        textAlign: "center",
        background: "linear-gradient(135deg, #f5c842 0%, #ffd700 30%, #ffe878 55%, #d4a017 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        filter: "drop-shadow(0 2px 10px rgba(255,215,0,0.5))",
      }}>
        ЧЕМПИОН
      </div>

      {/* Bottom divider */}
      <div style={{
        width: "60%", height: 1,
        background: "linear-gradient(90deg, transparent, rgba(255,215,0,0.4), transparent)",
      }} />
    </div>
  );
}

function SquareLogo({ font = "'Bebas Neue', sans-serif" }: { font?: string }) {
  return (
    <div
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(145deg, #3a0d7a 0%, #4a1090 40%, #1e0645 100%)",
        borderRadius: 20,
        width: 220,
        height: 220,
        boxShadow: "0 0 60px rgba(180,80,255,0.3), 0 0 120px rgba(100,20,200,0.15), inset 0 1px 0 rgba(255,255,255,0.1)",
        border: "1px solid rgba(180,100,255,0.3)",
      }}
    >
      {/* Radial glow bg */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(circle at 50% 45%, rgba(255,215,0,0.12) 0%, transparent 65%)",
      }} />

      {/* Corner stars */}
      <div style={{ position: "absolute", top: 14, left: 14 }}><StarAccent /></div>
      <div style={{ position: "absolute", top: 14, right: 14 }}><StarAccent /></div>
      <div style={{ position: "absolute", bottom: 14, left: 14 }}><StarAccent /></div>
      <div style={{ position: "absolute", bottom: 14, right: 14 }}><StarAccent /></div>

      {/* Medal */}
      <div className="relative" style={{ width: 94, height: 94, marginBottom: 10 }}>
        <div style={{
          position: "absolute", inset: -8,
          background: "radial-gradient(circle, rgba(255,215,0,0.3) 0%, transparent 70%)",
          borderRadius: "50%",
        }} />
        <img
          src={MEDAL_IMG}
          alt="Золотая медаль"
          style={{ width: 94, height: 94, borderRadius: "50%", objectFit: "cover", position: "relative", zIndex: 1, border: "2px solid rgba(255,215,0,0.45)" }}
        />
        <div style={{
          position: "absolute", top: 7, left: 14, width: 20, height: 8,
          background: "rgba(255,255,255,0.38)", borderRadius: "50%",
          filter: "blur(3px)", transform: "rotate(-30deg)", zIndex: 2,
        }} />
      </div>

      {/* Title */}
      <div style={{
        fontFamily: font,
        fontSize: 36,
        lineHeight: 1,
        letterSpacing: "0.1em",
        background: "linear-gradient(135deg, #f5c842 0%, #ffd700 30%, #ffe878 55%, #d4a017 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        filter: "drop-shadow(0 2px 8px rgba(255,215,0,0.5))",
        position: "relative",
        zIndex: 1,
      }}>
        ЧЕМПИОН
      </div>

      {/* Bottom line */}
      <div style={{
        width: "55%", height: 1, marginTop: 6,
        background: "linear-gradient(90deg, transparent, rgba(255,215,0,0.6), transparent)",
      }} />
    </div>
  );
}

const Index = () => {
  const [active, setActive] = useState<Layout>("horizontal");
  const [activeFont, setActiveFont] = useState(FONTS[0].family);
  const [showFonts, setShowFonts] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "linear-gradient(160deg, #0f0020 0%, #1a0035 50%, #0a001a 100%)",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      {/* Header */}
      <div className="flex flex-col items-center pt-12 pb-6 px-4">
        <p style={{
          fontFamily: "'Oswald', sans-serif",
          fontSize: 11,
          letterSpacing: "0.4em",
          color: "rgba(180,100,255,0.7)",
          textTransform: "uppercase",
          marginBottom: 8,
        }}>
          Логотип
        </p>
        <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(36px, 6vw, 64px)",
          letterSpacing: "0.12em",
          background: "linear-gradient(135deg, #c87bff 0%, #a040ff 50%, #7b00d4 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          lineHeight: 1,
          marginBottom: 4,
        }}>
          ЧЕМПИОН
        </h1>
        <p style={{ color: "rgba(200,150,255,0.5)", fontSize: 13 }}>
          Три макета · Спортивный стиль · Золото на фиолетовом
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-3 px-4 mb-10">
        {layouts.map((l) => (
          <button
            key={l.id}
            onClick={() => setActive(l.id)}
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: 13,
              letterSpacing: "0.1em",
              padding: "8px 20px",
              borderRadius: 8,
              border: active === l.id
                ? "1px solid rgba(255,215,0,0.6)"
                : "1px solid rgba(180,100,255,0.25)",
              background: active === l.id
                ? "linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,180,0,0.05))"
                : "rgba(255,255,255,0.04)",
              color: active === l.id ? "#ffd700" : "rgba(200,150,255,0.6)",
              cursor: "pointer",
              transition: "all 0.2s ease",
              textTransform: "uppercase",
            }}
          >
            {l.label}
          </button>
        ))}
      </div>

      {/* Logo display */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 pb-12">

        {/* Canvas */}
        <div
          className="flex items-center justify-center"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px dashed rgba(180,100,255,0.2)",
            borderRadius: 24,
            padding: "60px 80px",
            minWidth: 340,
            minHeight: 240,
            position: "relative",
          }}
        >
          <div style={{
            position: "absolute", top: 12, left: 16,
            fontSize: 10,
            letterSpacing: "0.2em",
            color: "rgba(180,100,255,0.3)",
            fontFamily: "'Oswald', sans-serif",
            textTransform: "uppercase",
          }}>
            {layouts.find(l => l.id === active)?.desc}
          </div>

          {active === "horizontal" && <HorizontalLogo font={activeFont} />}
          {active === "vertical" && <VerticalLogo font={activeFont} />}
          {active === "square" && <SquareLogo font={activeFont} />}
        </div>

        {/* Font picker */}
        <div className="mt-8 w-full max-w-2xl">
          <button
            onClick={() => setShowFonts(!showFonts)}
            style={{
              display: "flex", alignItems: "center", gap: 8,
              margin: "0 auto",
              fontFamily: "'Oswald', sans-serif",
              fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase",
              color: "rgba(200,150,255,0.6)",
              background: "none", border: "none", cursor: "pointer",
              padding: "6px 16px",
            }}
          >
            <span style={{ fontSize: 16 }}>{showFonts ? "▲" : "▼"}</span>
            Шрифт: {FONTS.find(f => f.family === activeFont)?.name}
          </button>

          {showFonts && (
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
              gap: 10, marginTop: 12, padding: "0 8px",
            }}>
              {FONTS.map((f) => (
                <button
                  key={f.family}
                  onClick={() => { setActiveFont(f.family); setShowFonts(false); }}
                  style={{
                    fontFamily: f.family,
                    fontSize: 22,
                    padding: "14px 12px 10px",
                    borderRadius: 10,
                    border: activeFont === f.family
                      ? "1px solid rgba(255,215,0,0.6)"
                      : "1px solid rgba(180,100,255,0.2)",
                    background: activeFont === f.family
                      ? "linear-gradient(135deg, rgba(255,215,0,0.12), rgba(255,180,0,0.04))"
                      : "rgba(255,255,255,0.03)",
                    color: activeFont === f.family ? "#ffd700" : "rgba(220,180,255,0.75)",
                    cursor: "pointer", transition: "all 0.15s ease",
                    textAlign: "left",
                  }}
                >
                  <div>ЧЕМПИОН</div>
                  <div style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: 10, letterSpacing: "0.15em",
                    color: activeFont === f.family ? "rgba(255,215,0,0.6)" : "rgba(180,100,255,0.4)",
                    marginTop: 4, textTransform: "uppercase",
                  }}>
                    {f.name} · {f.tag}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* All previews small */}
        <div className="flex gap-6 mt-10 items-end flex-wrap justify-center">
          {layouts.map((l) => (
            <div
              key={l.id}
              onClick={() => setActive(l.id)}
              style={{
                cursor: "pointer",
                opacity: active === l.id ? 1 : 0.45,
                transition: "opacity 0.2s",
                transform: active === l.id ? "scale(1)" : "scale(0.92)",
              }}
            >
              <div
                style={{
                  transform: "scale(0.42)",
                  transformOrigin: "top center",
                  pointerEvents: "none",
                }}
              >
                {l.id === "horizontal" && <HorizontalLogo font={activeFont} />}
                {l.id === "vertical" && <VerticalLogo font={activeFont} />}
                {l.id === "square" && <SquareLogo font={activeFont} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;