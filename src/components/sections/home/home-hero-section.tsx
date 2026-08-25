"use client";

import * as React from "react";
import Link from "next/link";

const ACCENT_COLOR = "var(--primary)";

const FEATURE_GLYPHS = ["sync", "spark", "flow", "stack"] as const;

function HomeHeroSection() {
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = React.useState(true);
  const [phase, setPhase] = React.useState(0);

  React.useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(Boolean(entry?.isIntersecting)),
      { threshold: 0.1 },
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!isInView) return;

    let rafId = 0;
    let last = performance.now();

    const loop = (now: number) => {
      const delta = (now - last) / 1000;
      last = now;
      setPhase((prev) => prev + delta * 0.5);
      rafId = window.requestAnimationFrame(loop);
    };

    rafId = window.requestAnimationFrame(loop);
    return () => window.cancelAnimationFrame(rafId);
  }, [isInView]);

  const backgroundImage = React.useMemo(() => {
    const x1 = 20 + Math.sin(phase * 0.9) * 10;
    const y1 = 15 + Math.cos(phase * 0.8) * 8;
    const x2 = 78 + Math.sin(phase * 0.7) * 9;
    const y2 = 28 + Math.cos(phase * 0.6) * 7;
    const x3 = 45 + Math.sin(phase * 0.65) * 7;
    const y3 = 78 + Math.cos(phase * 0.5) * 8;

    return `radial-gradient(620px circle at ${x1}% ${y1}%, rgba(173, 216, 255, 0.48), transparent 62%),
      radial-gradient(540px circle at ${x2}% ${y2}%, rgba(215, 190, 255, 0.44), transparent 60%),
      radial-gradient(500px circle at ${x3}% ${y3}%, rgba(255, 194, 228, 0.38), transparent 58%),
      #ffffff`;
  }, [phase]);

  return (
    <section
      ref={sectionRef}
      aria-label="AI automation hero section"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-28 pb-20 md:pt-32"
      style={{ background: backgroundImage }}
    >
      <style>{`
        .automation-hero-main {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .automation-hero-grid {
          width: min(560px, 100%);
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin-top: 8px;
        }
        .automation-hero-tile {
          min-height: 98px;
        }
        @media (max-width: 768px) {
          .automation-hero-main { gap: 16px; }
          .automation-hero-grid { gap: 10px; }
          .automation-hero-tile { min-height: 88px; }
        }
      `}</style>

      <div className="page-layout">
        <main className="automation-hero-main mx-auto">
          <div
            className="font-manrope text-sm text-[#333333]"
            style={{
              background: "rgba(255,255,255,0.66)",
              border: "1px solid rgba(255,255,255,0.9)",
              borderRadius: 999,
              padding: "8px 14px",
            }}
          >
            AI Automation for Modern Business
          </div>

          <h1
            className="max-w-3xl font-manrope font-bold text-[#161616]"
            style={{
              fontSize: "clamp(2.25rem, 6vw, 56px)",
              lineHeight: "1.05em",
              letterSpacing: "-0.04em",
              textWrap: "balance",
            }}
          >
            We Build the Systems Behind Modern Business.
          </h1>

          <p className="max-w-2xl font-inter text-base leading-relaxed text-[#505050]">
            TechSaws builds AI, software, revenue, and security systems that
            help businesses operate smarter, grow faster, and scale.
          </p>

          <Link
            href="/"
            className="inline-flex items-center justify-center font-manrope text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.02]"
            style={{
              background: ACCENT_COLOR,
              borderRadius: 999,
              padding: "14px 22px",
              boxShadow: "0 12px 26px rgba(0, 0, 0, 0.18)",
            }}
          >
            Get Started
          </Link>

          <div className="automation-hero-grid" aria-label="Automation feature motif">
            {FEATURE_GLYPHS.map((glyph) => (
              <article
                key={glyph}
                className="automation-hero-tile"
                style={{
                  borderRadius: 16,
                  background: "rgba(255,255,255,0.62)",
                  border: "1px solid rgba(255,255,255,0.85)",
                  boxShadow:
                    "0 10px 20px rgba(33, 40, 87, 0.12), inset 0 1px 0 rgba(255,255,255,0.8)",
                  transform: "perspective(800px) rotateX(6deg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "12px",
                }}
              >
                <div aria-hidden="true" style={{ width: 48, height: 48, position: "relative" }}>
                  {glyph === "sync" && (
                    <>
                      <div
                        style={{
                          position: "absolute",
                          width: 30,
                          height: 30,
                          border: `3px solid ${ACCENT_COLOR}`,
                          borderRadius: "50%",
                          left: 9,
                          top: 9,
                          borderRightColor: "transparent",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          width: 8,
                          height: 8,
                          background: ACCENT_COLOR,
                          transform: "rotate(45deg)",
                          right: 7,
                          top: 18,
                        }}
                      />
                    </>
                  )}
                  {glyph === "spark" && (
                    <>
                      <div
                        style={{
                          position: "absolute",
                          inset: 17,
                          background: ACCENT_COLOR,
                          transform: "rotate(45deg)",
                          borderRadius: 3,
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          width: 2,
                          height: 16,
                          background: ACCENT_COLOR,
                          left: 23,
                          top: 2,
                          borderRadius: 2,
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          width: 16,
                          height: 2,
                          background: ACCENT_COLOR,
                          left: 16,
                          top: 23,
                          borderRadius: 2,
                        }}
                      />
                    </>
                  )}
                  {glyph === "flow" && (
                    <>
                      <div
                        style={{
                          position: "absolute",
                          width: 12,
                          height: 12,
                          borderRadius: 6,
                          background: ACCENT_COLOR,
                          top: 5,
                          left: 6,
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          width: 12,
                          height: 12,
                          borderRadius: 6,
                          background: ACCENT_COLOR,
                          top: 19,
                          left: 18,
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          width: 12,
                          height: 12,
                          borderRadius: 6,
                          background: ACCENT_COLOR,
                          top: 32,
                          left: 30,
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          width: 30,
                          height: 3,
                          background: ACCENT_COLOR,
                          top: 23,
                          left: 9,
                          transform: "rotate(34deg)",
                          borderRadius: 3,
                          opacity: 0.7,
                        }}
                      />
                    </>
                  )}
                  {glyph === "stack" && (
                    <>
                      <div
                        style={{
                          position: "absolute",
                          width: 30,
                          height: 10,
                          borderRadius: 5,
                          background: ACCENT_COLOR,
                          top: 7,
                          left: 9,
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          width: 30,
                          height: 10,
                          borderRadius: 5,
                          background: ACCENT_COLOR,
                          top: 19,
                          left: 9,
                          opacity: 0.8,
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          width: 30,
                          height: 10,
                          borderRadius: 5,
                          background: ACCENT_COLOR,
                          top: 31,
                          left: 9,
                          opacity: 0.6,
                        }}
                      />
                    </>
                  )}
                </div>
              </article>
            ))}
          </div>

          <p className="mt-1 font-inter text-sm text-[#5A5A5A]">
            Trusted by 10k+ businesses worldwide.
          </p>
        </main>
      </div>
    </section>
  );
}

export default HomeHeroSection;
