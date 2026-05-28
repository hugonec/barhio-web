"use client";

import { useActionState, useState } from "react";
import { joinWaitlist, type WaitlistState } from "./actions";
import { LANGS, t, type Lang } from "./i18n";

const initialState: WaitlistState = { ok: false };

function Logo({ className }: { className?: string }) {
  return (
    <a href="#" className={`logo ${className ?? ""}`}>
      Bar<span className="dot">h</span>io
    </a>
  );
}

function HeroHeadline({ lang }: { lang: Lang }) {
  if (lang === "fr") {
    return (
      <h1>
        Tes adresses.
        <br />
        <span className="line2">Les gens en qui tu as confiance.</span>
      </h1>
    );
  }
  if (lang === "es") {
    return (
      <h1>
        Tus sitios.
        <br />
        <span className="line2">La gente en quien confías.</span>
      </h1>
    );
  }
  return (
    <h1>
      Your places.
      <br />
      <span className="line2">The people you trust.</span>
    </h1>
  );
}

function FeaturesTitle({ lang }: { lang: Lang }) {
  if (lang === "fr") {
    return (
      <h2 className="section-title">
        Tout ce que Google Maps
        <br />a <em>oublié</em> de faire.
      </h2>
    );
  }
  if (lang === "es") {
    return (
      <h2 className="section-title">
        Todo lo que Google Maps
        <br />
        olvidó <em>construir.</em>
      </h2>
    );
  }
  return (
    <h2 className="section-title">
      Everything Google Maps
      <br />
      forgot to build.
    </h2>
  );
}

function HowTitle({ lang }: { lang: Lang }) {
  const parts = {
    en: { a: "Three gestures.", b: "That's it." },
    fr: { a: "Trois gestes.", b: "C'est tout." },
    es: { a: "Tres gestos.", b: "Nada más." },
  } as const;
  const p = parts[lang];
  return (
    <h2 className="section-title" style={{ marginBottom: 0 }}>
      {p.a}
      <br />
      <em>{p.b}</em>
    </h2>
  );
}

function PromiseText({ lang }: { lang: Lang }) {
  if (lang === "fr") {
    return (
      <div className="promise-text">
        Le feed, les notes d&apos;amis et les recommandations ne sont{" "}
        <strong>jamais influencés par l&apos;argent.</strong> Les restaurants
        peuvent compléter leur profil, mais ils ne peuvent jamais acheter de
        visibilité. <strong>Jamais.</strong>
      </div>
    );
  }
  if (lang === "es") {
    return (
      <div className="promise-text">
        El feed, las valoraciones de amigos y las recomendaciones{" "}
        <strong>nunca están influenciadas por el dinero.</strong> Los
        restaurantes pueden completar su perfil, pero nunca pueden comprar
        visibilidad. <strong>Jamás.</strong>
      </div>
    );
  }
  return (
    <div className="promise-text">
      User feed, friend ratings, and recommendations are{" "}
      <strong>never influenced by money.</strong> Restaurants complete their
      profile — photos, menu, website — but they can never buy ranking or
      visibility. <strong>Ever.</strong>
    </div>
  );
}

function FinalHeadline({ lang }: { lang: Lang }) {
  if (lang === "fr") {
    return (
      <h2>
        Tes adresses.
        <br />
        <em>Tes amis.</em>
        <br />
        Leur confiance.
      </h2>
    );
  }
  if (lang === "es") {
    return (
      <h2>
        Tus sitios.
        <br />
        <em>Tus amigos.</em>
        <br />
        Su confianza.
      </h2>
    );
  }
  return (
    <h2>
      Your places.
      <br />
      <em>Your friends.</em>
      <br />
      Their trust.
    </h2>
  );
}

const marqueeItems = [
  "Friend ratings only",
  "Zero ads, ever",
  "Free forever",
  "Save from Instagram",
  "Import Google Maps",
  "Share via WhatsApp",
  "Barcelona · Paris · Madrid · Lyon",
];

export default function Page() {
  const [lang, setLang] = useState<Lang>("en");
  const [heroState, heroAction, heroPending] = useActionState(
    joinWaitlist,
    initialState,
  );
  const [finalState, finalAction, finalPending] = useActionState(
    joinWaitlist,
    initialState,
  );

  const errorMsg = (s: WaitlistState) =>
    s.error === "invalid_email" ? t.invalidEmail[lang] : t.serverError[lang];

  return (
    <>
      <nav>
        <Logo />
        <div className="nav-right">
          <div className="lang-toggle" role="group" aria-label="Language">
            {LANGS.map((l) => (
              <button
                key={l}
                type="button"
                className={`lang-btn ${l === lang ? "active" : ""}`}
                onClick={() => setLang(l)}
                aria-pressed={l === lang}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <a href="#waitlist" className="cta-nav">
            {t.navCta[lang]}
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-badge">
          <span className="blink" />
          <span>{t.heroBadge[lang]}</span>
        </div>

        <HeroHeadline lang={lang} />

        <div className="hero-row">
          <div>
            <p className="hero-sub">{t.heroSub[lang]}</p>
            <div className="waitlist-wrap">
              {heroState.ok ? (
                <div className="success-msg" role="status">
                  {t.heroSuccess[lang]}
                </div>
              ) : (
                <form action={heroAction}>
                  <div className="form-row">
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      aria-label="Email"
                    />
                    <input type="hidden" name="lang" value={lang} />
                    <input type="hidden" name="source" value="hero" />
                    <button type="submit" disabled={heroPending}>
                      {t.heroCta[lang]}
                    </button>
                  </div>
                </form>
              )}
              {!heroState.ok && heroState.error ? (
                <p className="form-error">{errorMsg(heroState)}</p>
              ) : (
                <p className="form-note">{t.heroFormNote[lang]}</p>
              )}
            </div>
          </div>
        </div>

        {/* Floating sticker cards */}
        <div className="stickers" aria-hidden="true">
          <div className="sticker float-a" style={{ transform: "rotate(-2deg)" }}>
            <div className="sticker-badge">3 friends saved this</div>
            <div className="sticker-label">Visited ✓</div>
            <div className="sticker-stars">★★★★★</div>
            <div className="sticker-place">Bodega Hidden Kitchen</div>
            <div className="sticker-meta">Poblenou, Barcelona</div>
            <div className="sticker-friends">
              <div className="friend-avatars">
                <div className="friend-avatar fa1" style={{ marginLeft: 0 }}>
                  M
                </div>
                <div className="friend-avatar fa2">S</div>
                <div className="friend-avatar fa3">L</div>
              </div>
              <div className="friends-text">Marco, Sophie + 1 love this</div>
            </div>
          </div>

          <div
            className="sticker float-b"
            style={{ transform: "rotate(1.5deg)", marginLeft: "2rem" }}
          >
            <div className="sticker-label">Wishlist ♡</div>
            <div className="sticker-place">Bar Calders</div>
            <div className="sticker-meta">Sant Antoni · saved from Instagram</div>
          </div>

          <div className="notif-sticker float-c">
            <div className="notif-icon-box">📍</div>
            <div>
              <div className="notif-app">BARHIO · now</div>
              <div className="notif-title">Sophie shared a list</div>
              <div className="notif-body">Date Night 🕯️ — 8 spots in Paris</div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="marquee-item">
              <span className="marquee-sep">★</span> {item}
            </span>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <section className="section">
        <span className="section-eyebrow">{t.featuresEyebrow[lang]}</span>
        <FeaturesTitle lang={lang} />
        <p className="section-sub">{t.featuresSub[lang]}</p>

        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-emoji">👥</span>
            <div className="feature-title">{t.feature1Title[lang]}</div>
            <div className="feature-body">{t.feature1Body[lang]}</div>
          </div>
          <div className="feature-card">
            <span className="feature-emoji">⭐</span>
            <div className="feature-title">{t.feature2Title[lang]}</div>
            <div className="feature-body">{t.feature2Body[lang]}</div>
          </div>
          <div className="feature-card">
            <span className="feature-emoji">📲</span>
            <div className="feature-title">{t.feature3Title[lang]}</div>
            <div className="feature-body">{t.feature3Body[lang]}</div>
          </div>
          <div className="feature-card">
            <span className="feature-emoji">📍</span>
            <div className="feature-title">{t.feature4Title[lang]}</div>
            <div className="feature-body">{t.feature4Body[lang]}</div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="how-grid">
          <div>
            <span className="section-eyebrow">{t.howEyebrow[lang]}</span>
            <HowTitle lang={lang} />
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-num">01</div>
              <div>
                <div className="step-title">{t.step1Title[lang]}</div>
                <div className="step-body">{t.step1Body[lang]}</div>
                <span className="step-pill">{t.step1Pill[lang]}</span>
              </div>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <div>
                <div className="step-title">{t.step2Title[lang]}</div>
                <div className="step-body">{t.step2Body[lang]}</div>
                <span className="step-pill">{t.step2Pill[lang]}</span>
              </div>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <div>
                <div className="step-title">{t.step3Title[lang]}</div>
                <div className="step-body">{t.step3Body[lang]}</div>
                <span className="step-pill">{t.step3Pill[lang]}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROMISE */}
      <div className="promise">
        <div className="promise-lock">🔒</div>
        <div>
          <div className="promise-label">{t.promiseLabel[lang]}</div>
          <PromiseText lang={lang} />
        </div>
      </div>

      {/* FINAL CTA */}
      <div id="waitlist">
        <div className="final">
          <FinalHeadline lang={lang} />
          <p>{t.finalSub[lang]}</p>
          {finalState.ok ? (
            <div className="success-msg final-success" role="status">
              {t.heroSuccess[lang]}
            </div>
          ) : (
            <form action={finalAction}>
              <div className="final-form">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  aria-label="Email"
                />
                <input type="hidden" name="lang" value={lang} />
                <input type="hidden" name="source" value="final" />
                <button type="submit" disabled={finalPending}>
                  {t.finalCta[lang]}
                </button>
              </div>
            </form>
          )}
          {!finalState.ok && finalState.error ? (
            <p className="form-error">{errorMsg(finalState)}</p>
          ) : (
            <p className="final-note">{t.finalNote[lang]}</p>
          )}
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <Logo />
        <ul className="footer-links">
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="mailto:hello@barhio.com">Contact</a>
          </li>
          <li>
            <a href="https://instagram.com/barhio">Instagram</a>
          </li>
        </ul>
        <span className="footer-copy">© 2025 Barhio</span>
      </footer>
    </>
  );
}
