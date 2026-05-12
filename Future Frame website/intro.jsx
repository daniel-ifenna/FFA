// Cinematic intro overlay component
// Renders a book-opening sequence, page flips, popouts, paper plane, and reveal
// Skippable; persists "seen" state in sessionStorage so refresh during dev still shows it.

function CinematicIntro({ onDone }) {
  const [skip, setSkip] = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => {
      handleDone();
    }, 10500);
    return () => clearTimeout(t);
    // eslint-disable-next-line
  }, []);

  const handleDone = () => {
    const el = document.querySelector('.intro-overlay');
    if (el) el.classList.add('fade-out');
    setTimeout(() => onDone && onDone(), 800);
  };

  const stars = Array.from({ length: 40 }).map((_, i) => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 3,
    size: 1 + Math.random() * 2
  }));

  return (
    <div className="intro-overlay">
      <button className="intro-skip" onClick={handleDone}>Skip intro →</button>

      <div className="intro-stars">
        {stars.map((s, i) => (
          <span key={i} style={{
            left: `${s.left}%`, top: `${s.top}%`,
            width: `${s.size}px`, height: `${s.size}px`,
            animationDelay: `${s.delay}s`
          }}/>
        ))}
      </div>

      <div className="intro-stage">
        {/* The base "open book" — left and right pages always there */}
        <div className="book">
          <div className="book-page left">
            <div className="page-illust">
              <svg className="icon" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.2">
                <circle cx="40" cy="40" r="32"/>
                <ellipse cx="40" cy="40" rx="32" ry="14"/>
                <ellipse cx="40" cy="40" rx="14" ry="32"/>
                <line x1="8" y1="40" x2="72" y2="40"/>
                <line x1="40" y1="8" x2="40" y2="72"/>
                <path d="M14 22 Q26 28 40 22 T66 22" />
                <path d="M14 58 Q26 52 40 58 T66 58" />
              </svg>
              <div className="label">A world of opportunity</div>
              <div className="sub">Chapter I</div>
            </div>
          </div>
          <div className="book-page right">
            <div className="page-illust">
              <svg className="icon" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M10 32 L40 18 L70 32 L40 46 Z"/>
                <path d="M22 38 V52 Q22 58 40 58 Q58 58 58 52 V38"/>
                <line x1="70" y1="32" x2="70" y2="44"/>
                <circle cx="70" cy="46" r="2" fill="currentColor"/>
              </svg>
              <div className="label">Frame your future</div>
              <div className="sub">Chapter II</div>
            </div>
          </div>

          {/* The closed cover that opens */}
          <div className="book-cover">
            <div className="book-cover-content">
              <div className="cover-frame">
                <div className="crest">FF</div>
                <div className="cover-title">Future Frames<br/>Advisory</div>
                <div className="cover-sub">Est. 2021 · Lagos</div>
              </div>
            </div>
          </div>
          <div className="book-spine"></div>
          <div className="book-edge"></div>
          <div className="book-shadow"></div>

          {/* Flipping pages */}
          <div className="flip-page flip-page-1">
            <div className="face front">
              <div className="page-illust">
                <svg className="icon" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <rect x="14" y="22" width="52" height="40" rx="2"/>
                  <line x1="14" y1="32" x2="66" y2="32"/>
                  <circle cx="20" cy="27" r="1.5" fill="currentColor"/>
                  <circle cx="26" cy="27" r="1.5" fill="currentColor"/>
                  <line x1="22" y1="42" x2="58" y2="42"/>
                  <line x1="22" y1="48" x2="50" y2="48"/>
                  <line x1="22" y1="54" x2="44" y2="54"/>
                </svg>
                <div className="label">Study Abroad</div>
                <div className="sub">UK · CA · AU · US</div>
              </div>
            </div>
            <div className="face back">
              <div className="page-illust">
                <svg className="icon" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <circle cx="28" cy="28" r="9"/>
                  <circle cx="52" cy="30" r="7"/>
                  <path d="M12 60 C12 48 20 42 28 42 C36 42 44 48 44 60"/>
                  <path d="M42 60 C42 52 48 48 52 48 C56 48 64 52 64 60"/>
                </svg>
                <div className="label">Talent meets opportunity</div>
              </div>
            </div>
          </div>

          <div className="flip-page flip-page-2">
            <div className="face front">
              <div className="page-illust">
                <svg className="icon" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M22 12 H50 L58 20 V68 H22 Z"/>
                  <line x1="30" y1="28" x2="50" y2="28"/>
                  <line x1="30" y1="36" x2="50" y2="36"/>
                  <line x1="30" y1="44" x2="44" y2="44"/>
                  <circle cx="40" cy="56" r="4"/>
                </svg>
                <div className="label">Policy & Research</div>
                <div className="sub">Practitioner-led</div>
              </div>
            </div>
            <div className="face back"></div>
          </div>

          <div className="flip-page flip-page-3">
            <div className="face front">
              <div className="page-illust">
                <svg className="icon" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M40 12 L46 30 L66 30 L50 42 L56 60 L40 48 L24 60 L30 42 L14 30 L34 30 Z"/>
                </svg>
                <div className="label">Outcomes that compound</div>
                <div className="sub">300+ · 30+ · 120+</div>
              </div>
            </div>
            <div className="face back"></div>
          </div>
        </div>

        {/* Popouts — emerge from the open book in 3D */}
        <div className="popout popout-globe">
          <svg viewBox="0 0 90 90" fill="none" stroke="#C9A84C" strokeWidth="1.5">
            <circle cx="45" cy="45" r="38" fill="#0D1F3C"/>
            <circle cx="45" cy="45" r="38"/>
            <ellipse cx="45" cy="45" rx="38" ry="16"/>
            <ellipse cx="45" cy="45" rx="16" ry="38"/>
            <line x1="7" y1="45" x2="83" y2="45"/>
            <path d="M14 26 Q30 32 45 26 T76 26" stroke="#D9BE6E"/>
            <path d="M14 64 Q30 58 45 64 T76 64" stroke="#D9BE6E"/>
          </svg>
        </div>

        <div className="popout popout-cap">
          <svg viewBox="0 0 100 100" fill="none" stroke="#C9A84C" strokeWidth="1.5">
            <path d="M10 38 L50 22 L90 38 L50 54 Z" fill="#0D1F3C"/>
            <path d="M28 46 V64 Q28 72 50 72 Q72 72 72 64 V46" fill="#0D1F3C"/>
            <line x1="90" y1="38" x2="90" y2="56"/>
            <circle cx="90" cy="58" r="3" fill="#C9A84C"/>
            <path d="M86 58 Q82 66 84 76" />
          </svg>
        </div>

        <div className="popout popout-book">
          <svg viewBox="0 0 70 90" fill="none" stroke="#C9A84C" strokeWidth="1.5">
            <rect x="8" y="10" width="54" height="72" rx="2" fill="#0D1F3C"/>
            <line x1="35" y1="10" x2="35" y2="82"/>
            <line x1="14" y1="22" x2="30" y2="22"/>
            <line x1="14" y1="30" x2="28" y2="30"/>
            <line x1="40" y1="22" x2="56" y2="22"/>
            <line x1="40" y1="30" x2="54" y2="30"/>
          </svg>
        </div>

        <div className="popout popout-diploma">
          <svg viewBox="0 0 90 70" fill="none" stroke="#C9A84C" strokeWidth="1.5">
            <rect x="8" y="10" width="74" height="48" rx="2" fill="#FBF8F1"/>
            <line x1="20" y1="22" x2="70" y2="22" stroke="#C9A84C"/>
            <line x1="20" y1="30" x2="62" y2="30" stroke="rgba(13,31,60,0.4)"/>
            <line x1="20" y1="38" x2="58" y2="38" stroke="rgba(13,31,60,0.4)"/>
            <circle cx="68" cy="48" r="6" fill="#C9A84C"/>
            <path d="M68 54 L64 64 L68 60 L72 64 Z" fill="#C9A84C"/>
          </svg>
        </div>

        {/* Sparkles */}
        {[...Array(8)].map((_, i) => (
          <span key={i} className="popout-sparkle" style={{
            left: `${20 + (i * 9)}%`,
            top: `${30 + (i % 3) * 15}%`,
            animationDelay: `${4 + i * 0.2}s`
          }}/>
        ))}

        {/* Paper plane — flies into the camera */}
        <div className="plane">
          <div className="plane-trail"></div>
          <svg viewBox="0 0 60 60" fill="none">
            <defs>
              <linearGradient id="planeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF"/>
                <stop offset="100%" stopColor="#F0EEE8"/>
              </linearGradient>
              <linearGradient id="planeShade" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF"/>
                <stop offset="100%" stopColor="#C8C5BD"/>
              </linearGradient>
            </defs>
            {/* Main wing - white */}
            <path d="M4 30 L56 8 L42 30 Z" fill="url(#planeGrad)" stroke="#9A9690" strokeWidth="0.6"/>
            {/* Lower fold - shaded white */}
            <path d="M4 30 L42 30 L56 52 Z" fill="url(#planeShade)" stroke="#9A9690" strokeWidth="0.6"/>
            {/* Center crease */}
            <line x1="42" y1="30" x2="20" y2="38" stroke="#A9A59E" strokeWidth="0.8" opacity="0.5"/>
          </svg>
        </div>
      </div>

      {/* Title flash at the end */}
      <div className="intro-title-flash">
        <div className="lockup">
          <img src="logo.png" alt="Future Frames Advisory"/>
          <div className="ttext">Future Frames <em>Advisory</em></div>
          <div className="ttag">Shaping Futures · Building Capacity</div>
        </div>
      </div>
    </div>
  );
}

window.CinematicIntro = CinematicIntro;
