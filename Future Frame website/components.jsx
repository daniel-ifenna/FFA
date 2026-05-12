/* Future Frames Advisory — section components */

const PHOTOS = {
  heroBg: [
    "photos/event-wide.jpg",
    "photos/networking.jpg",
    "photos/speaking.jpg"
  ],
  heroMain: [
    {
      src: "photos/event-wide.jpg",
      label: "University fair — Lagos"
    },
    {
      src: "photos/consulting.jpg",
      label: "One-on-one advisory"
    },
    {
      src: "photos/speaking.jpg",
      label: "Education forum — Lagos"
    },
    {
      src: "photos/networking.jpg",
      label: "Talent meets opportunity"
    }
  ],
  about: "photos/consulting.jpg",
  founder: "photos/speaking.jpg",
  pillars: {
    education: "photos/event-wide.jpg",
    capital: "photos/team-smile.jpg",
    policy: "photos/networking.jpg"
  },
  destinations: {
    nigeria: "photos/event-wide.jpg",
    uk: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=900&q=80&auto=format&fit=crop",
    canada: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=900&q=80&auto=format&fit=crop",
    australia: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=900&q=80&auto=format&fit=crop",
    usa: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=900&q=80&auto=format&fit=crop"
  },
  testimonialAvatars: [
    "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop"
  ]
};

// SVG flags
const Flag = ({ country }) => {
  const flags = {
    NG: (
      <svg viewBox="0 0 60 30" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
        <rect width="20" height="30" x="0" fill="#008751"/>
        <rect width="20" height="30" x="20" fill="#fff"/>
        <rect width="20" height="30" x="40" fill="#008751"/>
      </svg>
    ),
    UK: (
      <svg viewBox="0 0 60 30" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
        <clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
        <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
      </svg>
    ),
    CA: (
      <svg viewBox="0 0 60 30" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
        <path d="M0,0 h15 v30 h-15 z M45,0 h15 v30 h-15 z" fill="#FF0000"/>
        <path d="M15,0 h30 v30 h-30 z" fill="#fff"/>
        <path d="M30,7 l1,3 3,-1 -2,3 3,1 -3,1 1,3 -3,-1 -1,3 -1,-3 -3,1 1,-3 -3,-1 3,-1 -2,-3 3,1 z" fill="#FF0000"/>
      </svg>
    ),
    AU: (
      <svg viewBox="0 0 60 30" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
        <rect width="60" height="30" fill="#012169"/>
        <path d="M0,0 L30,15 M30,0 L0,15 M30,0 L0,15" stroke="#fff" strokeWidth="3"/>
        <path d="M0,0 L30,15 M30,0 L0,15" stroke="#C8102E" strokeWidth="1.5"/>
        <path d="M15,0 v15 M0,7.5 h30" stroke="#fff" strokeWidth="4"/>
        <path d="M15,0 v15 M0,7.5 h30" stroke="#C8102E" strokeWidth="2"/>
        <circle cx="45" cy="8" r="1.5" fill="#fff"/>
        <circle cx="50" cy="14" r="1.5" fill="#fff"/>
        <circle cx="42" cy="20" r="1.2" fill="#fff"/>
        <circle cx="52" cy="22" r="1" fill="#fff"/>
      </svg>
    ),
    US: (
      <svg viewBox="0 0 60 30" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
        <rect width="60" height="30" fill="#fff"/>
        {[0,2,4,6,8,10,12].map(i => (
          <rect key={i} y={i*30/13} width="60" height={30/13} fill="#B22234"/>
        ))}
        <rect width="24" height="16.15" fill="#3C3B6E"/>
      </svg>
    )
  };
  return <span className="flag">{flags[country]}</span>;
};

// ============ NAV ============
function Nav() {
  return (
    <nav className="nav">
      <a href="#top" className="nav-logo">
        <img src="logo.png" alt="" className="logo-img"/>
        <span>Future Frames Advisory</span>
      </a>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#impact">Impact</a>
        <a href="#voices">Voices</a>
      </div>
      <a href="#contact" className="nav-cta">Book Consultation</a>
    </nav>
  );
}

// ============ HERO ============
function Hero({ rotateMs = 2400 }) {
  const words = ["Education.", "Talent.", "Policy.", "Futures."];
  const [idx, setIdx] = React.useState(0);
  const [phase, setPhase] = React.useState('in'); // in | exit | enter
  const [bgIdx, setBgIdx] = React.useState(0);
  const [photoIdx, setPhotoIdx] = React.useState(0);

  React.useEffect(() => {
    const exit = setTimeout(() => setPhase('exit'), rotateMs - 550);
    const change = setTimeout(() => {
      setIdx(i => (i + 1) % words.length);
      setPhase('enter');
    }, rotateMs);
    const enter = setTimeout(() => setPhase('in'), rotateMs + 30);
    return () => { clearTimeout(exit); clearTimeout(change); clearTimeout(enter); };
  }, [idx, phase, rotateMs]);

  React.useEffect(() => {
    const t = setInterval(() => setBgIdx(i => (i + 1) % PHOTOS.heroBg.length), 5500);
    return () => clearInterval(t);
  }, []);

  React.useEffect(() => {
    const t = setInterval(() => setPhotoIdx(i => (i + 1) % PHOTOS.heroMain.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="corner-orn tl"></div>
      <div className="corner-orn br"></div>
      <div className="hero-bg-photos">
        {PHOTOS.heroBg.map((src, i) => (
          <div key={i} className={`slide ${i === bgIdx ? 'active' : ''}`} style={{ backgroundImage: `url(${src})` }}></div>
        ))}
      </div>

      <div className="hero-inner-l">
        <div className="hero-eyebrow">
          <span className="line"></span>
          <span>Education &amp; Human Capital Consulting</span>
        </div>
        <h1 className="hero-title">
          Framing the future<br/>
          of African{' '}
          <span className="rotator">
            <span className={`rot-word ${phase === 'exit' ? 'exit' : phase === 'enter' ? 'enter' : ''}`}>
              {words[idx]}
            </span>
          </span>
        </h1>
        <p className="hero-lede">
          We connect students, graduates, and institutions to opportunities that shape their futures
          across school and career guidance within Nigeria, postgraduate study abroad, structured
          recruitment, and policy advisory. We are rooted in context, global in reach, and built for
          results that last.
        </p>
        <div className="hero-cta-row">
          <a href="#contact" className="btn btn-primary">
            Start your journey <span className="arrow"></span>
          </a>
          <a href="#services" className="btn btn-ghost">
            Explore our services
          </a>
        </div>
        <div className="hero-trust">
          <span>FIVE YEARS</span>
          <span className="divider"></span>
          <span>FIVE COUNTRIES</span>
          <span className="divider"></span>
          <span>300+ APPLICATIONS</span>
        </div>
      </div>

      <div className="hero-visual">
        <div className="photo-stack">
          <div className="photo-card photo-main">
            {PHOTOS.heroMain.map((p, i) => (
              <div
                key={i}
                className={`ph-img ${i === photoIdx ? 'active' : ''}`}
                style={{ backgroundImage: `url(${p.src})` }}
              />
            ))}
            <div className="photo-overlay">
              <div className="label">{PHOTOS.heroMain[photoIdx].label}</div>
              <div className="progress">
                {PHOTOS.heroMain.map((_, i) => (
                  <span key={i} className={`pip ${i === photoIdx ? 'active' : ''}`}></span>
                ))}
              </div>
            </div>
          </div>

          <div className="float-card float-stat">
            <div className="value">300<sup>+</sup></div>
            <div className="label">Study abroad applications</div>
          </div>

          <div className="float-card float-country">
            <div className="flag-row">
              <Flag country="UK" />
              <Flag country="CA" />
              <Flag country="AU" />
              <Flag country="US" />
            </div>
            <div className="meta">
              Partners in
              <strong>4 destinations</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ MARQUEE ============
function Marquee() {
  const items = [
    "International Education", "Human Capital", "Policy & Research",
    "Postgraduate Admissions", "Graduate Recruitment", "Practicum Placements",
    "SOP Development", "Visa Advisory", "Institutional Planning"
  ];
  const all = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {all.map((t, i) => (
          <span key={i} className="marquee-item">
            {t} <span className="star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ============ ABOUT ============
function About() {
  return (
    <section className="section about reveal" id="about">
      <div className="about-grid">
        <div className="about-photo">
          <img src={PHOTOS.about} alt="Future Frames Advisory team consultation"/>
          <div className="badge">
            <div>
              <div>Established 2021 — Lagos</div>
              <strong>Practitioner-led advisory</strong>
            </div>
          </div>
        </div>
        <div className="about-text">
          <div className="eyebrow"><span className="dot"></span>About FFA</div>
          <h3>An education and human capital consulting firm for an opportunity-rich Africa.</h3>
          <p>
            Future Frames Advisory operates at the intersection of education, workforce development,
            and strategic policy, serving students, graduates, employers, and institutions across
            multiple regions.
          </p>
          <p>
            Our advisory team brings expert policy knowledge and practitioner experience across
            Nigerian, Canadian, British, and other international education systems, grounded in
            deep contextual understanding, international in reach, and resolute in our commitment
            to outcomes that compound.
          </p>
          <div className="about-pillars-mini">
            <div>
              <div className="num">i.</div>
              <div className="pname">International<br/>Education</div>
            </div>
            <div>
              <div className="num">ii.</div>
              <div className="pname">Human Capital<br/>&amp; Recruitment</div>
            </div>
            <div>
              <div className="num">iii.</div>
              <div className="pname">Policy &amp;<br/>Research</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ PILLARS ============
const ICONS = {
  edu: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M12 3 L22 8 L12 13 L2 8 Z"/>
      <path d="M6 10 V16 C6 16 8 18 12 18 C16 18 18 16 18 16 V10"/>
      <line x1="22" y1="8" x2="22" y2="14"/>
    </svg>
  ),
  capital: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="9" cy="8" r="3.5"/>
      <circle cx="17" cy="9" r="2.5"/>
      <path d="M3 20 C3 16 6 14 9 14 C12 14 15 16 15 20"/>
      <path d="M14 20 C14 17 16 15.5 17 15.5 C18 15.5 21 17 21 20"/>
    </svg>
  ),
  policy: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M5 3 H17 L19 5 V21 H5 Z"/>
      <line x1="8" y1="8" x2="16" y2="8"/>
      <line x1="8" y1="12" x2="16" y2="12"/>
      <line x1="8" y1="16" x2="13" y2="16"/>
    </svg>
  )
};

function Pillars() {
  const pillars = [
    {
      num: "i.",
      icon: ICONS.edu,
      title: "Education Consulting",
      desc: "We support Nigerian students and young professionals through postgraduate admissions and visa processing for study in the UK, Canada, Australia, and the USA, while also partnering with Nigerian and international universities to connect institutions to the right candidates.",
      list: ["Domestic education support & advisory", "Destination and program strategy", "Statement of Purpose coaching & drafting", "End-to-end application management", "Visa documentation & application support", "Pre-departure orientation"],
      photo: PHOTOS.pillars.education
    },
    {
      num: "ii.",
      icon: ICONS.capital,
      title: "Human Capital & Recruitment",
      desc: "We connect educated talent to the labour market through structured recruitment, practicum placement, and work experience pipelines for SMEs and corporates.",
      list: ["End-to-end recruitment", "Graduate-to-market transition", "Practicum placement pipelines", "Talent sourcing & shortlisting", "Employer advisory services"],
      photo: PHOTOS.pillars.capital
    },
    {
      num: "iii.",
      icon: ICONS.policy,
      title: "Policy & Research Consulting",
      desc: "Policy analysis, research design, and documentation for institutions, NGOs, government agencies, and development organisations — with depth in African education systems.",
      list: ["Public policy analysis", "Research design & execution", "Policy documentation", "Strategic & institutional planning", "Education policy advisory"],
      photo: PHOTOS.pillars.policy
    }
  ];

  return (
    <section className="pillars" id="services">
      <div className="pillars-inner">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow"><span className="dot"></span>Three pillars</div>
            <h2>Where talent meets <em>direction.</em></h2>
          </div>
          <div className="lede">
            Three integrated practice areas serving individuals, employers, and institutions at every
            stage of their journey — from intent, through opportunity, to outcome.
          </div>
        </div>

        <div className="pillar-grid">
          {pillars.map((p, i) => (
            <div className="pillar-card reveal" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="pillar-photo" style={{ backgroundImage: `url(${p.photo})` }}></div>
              <div className="pillar-num">{p.num}</div>
              <div className="pillar-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <ul className="pillar-list">
                {p.list.map((l, j) => <li key={j}>{l}</li>)}
              </ul>
              <a href="#contact" className="pillar-link">Learn more <span className="arrow"></span></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ STATS ============
function useCounter(target, suffix = '+', duration = 1600, trigger = true) {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    if (!trigger) return;
    const start = performance.now();
    let raf;
    const step = (t) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, trigger]);
  return { val, suffix };
}

function Stat({ target, suffix = '+', label, trigger }) {
  const { val } = useCounter(target, suffix, 1600, trigger);
  return (
    <div className="stat">
      <div className="value">{val}<sup>{suffix}</sup></div>
      <div className="label">{label}</div>
    </div>
  );
}

function Stats() {
  const ref = React.useRef(null);
  const [trigger, setTrigger] = React.useState(false);
  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTrigger(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <section className="stats" id="impact" ref={ref}>
      <div className="stats-inner">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow"><span className="dot"></span>Track record</div>
            <h2>Five years.<br/><em>Numbers that compound.</em></h2>
          </div>
          <div className="lede">
            Every outcome we deliver across postgraduate placements, graduate recruitment, and policy
            engagements is verified through structured employer and client feedback.
          </div>
        </div>
        <div className="stats-grid">
          <Stat target={300} label="Study Abroad Applications" trigger={trigger}/>
          <Stat target={5} label="Years in Operation" trigger={trigger}/>
          <Stat target={30} label="Companies Served" trigger={trigger}/>
          <Stat target={120} label="Jobs Filled" trigger={trigger}/>
        </div>
      </div>
    </section>
  );
}

// ============ DESTINATIONS ============
function Destinations() {
  const dests = [
    { code: "NG", name: "Nigeria", desc: "School selection and career guidance across Nigerian institutions.", visa: "Domestic admissions", photo: PHOTOS.destinations.nigeria },
    { code: "UK", name: "United Kingdom", desc: "Partner institutions across England, Scotland, and Wales.", visa: "UK Student Visa", photo: PHOTOS.destinations.uk },
    { code: "CA", name: "Canada", desc: "Colleges and universities across major provinces.", visa: "Canadian Study Permit", photo: PHOTOS.destinations.canada },
    { code: "AU", name: "Australia", desc: "Group of Eight and regional universities.", visa: "Australian Student Visa", photo: PHOTOS.destinations.australia },
    { code: "US", name: "United States", desc: "Postgraduate and professional programs.", visa: "US F-1 Visa", photo: PHOTOS.destinations.usa }
  ];
  return (
    <section className="destinations">
      <div className="destinations-inner">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow"><span className="dot"></span>Destinations</div>
            <h2>Where you study,<br/><em>matters.</em></h2>
          </div>
          <div className="lede">
            From school selection and admissions matching to visa documentation and arrival, we are
            with you at every stage — whether your destination is a Nigerian institution or a
            university abroad.
          </div>
        </div>
        <div className="destinations-grid">
          {dests.map((d, i) => (
            <div key={d.code} className="destination reveal" style={{ transitionDelay: `${i * 0.06}s` }}>
              <div className="photo" style={{ backgroundImage: `url(${d.photo})` }}></div>
              <div className="flag-tag"><Flag country={d.code}/> {d.code}</div>
              <h4>{d.name}</h4>
              <p className="desc">{d.desc}</p>
              <div className="visa">{d.visa}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ TESTIMONIALS ============
function Testimonials() {
  const items = [
    {
      quote: "Future Frames Advisory came on board late in my admission process and took over seamlessly, managing everything through to my successful resumption. Their attention to detail and guidance made the process smooth, and I am now in my second semester at my university.",
      name: "Oluwatobi Gabriel Adewuyi",
      role: "MSc International Business Management, UK",
      pillar: "Study Abroad",
      initials: "OA"
    },
    {
      quote: "Future Frames Advisory handled the recruitment for my executive assistant and distinguished themselves through a structured, thoughtful approach that ensured we found the right candidate quickly and with confidence.",
      name: "Olawale Kadri",
      role: "CEO, OwnerCheap Nigeria Limited",
      pillar: "Recruitment",
      initials: "OK"
    },
    {
      quote: "When we first conceived the idea of an education intervention, we approached this team, and they tailored the program to align with our policy direction. Their policy team brought rigour and contextual depth to both design and implementation. We have successfully delivered two editions of our essay competition and continue to collaborate on additional programs.",
      name: "Oluwatosin Ogunwole",
      role: "Programmes & Events Coordinator, TAF NGO",
      pillar: "Policy & Research",
      initials: "OO"
    }
  ];
  return (
    <section className="testimonials" id="voices">
      <div className="testimonials-inner">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow"><span className="dot"></span>Voices</div>
            <h2>Outcomes,<br/><em>in their own words.</em></h2>
          </div>
          <div className="lede">
            Verified feedback from students, employers, and institutional partners we've supported
            across the three service pillars.
          </div>
        </div>
        <div className="testimonial-grid">
          {items.map((t, i) => (
            <div key={i} className="testimonial reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="pillar-tag">{t.pillar}</div>
              <div className="quote-mark">“</div>
              <p className="quote">{t.quote}</p>
              <div className="author">
                <div className="avatar avatar-mono">{t.initials}</div>
                <div className="who">
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ FOUNDER ============
function Founder() {
  return (
    <section className="founder">
      <div className="founder-inner">
        <div className="founder-photo reveal">
          <img src={PHOTOS.founder} alt="Olaniyi Ayodele, Director of Future Frames Advisory"/>
          <span className="corner-tl"></span>
          <span className="corner-br"></span>
        </div>
        <div className="reveal">
          <div className="eyebrow"><span className="dot"></span>From the Director</div>
          <p className="founder-quote">
            “The gap between <em>African talent</em> and <em>global opportunity</em> has never been a
            talent problem. It has always been a framing problem. We exist to change that frame.”
          </p>
        </div>
      </div>
    </section>
  );
}

// ============ CTA ============
function CTA() {
  return (
    <section className="cta-banner" id="contact">
      <div className="cta-banner-inner reveal">
        <div className="eyebrow"><span className="dot"></span>Begin</div>
        <h2>Your future, <em>framed with purpose.</em></h2>
        <p>
          Book a free consultation and we'll walk you through the right pathway — whether you're a
          student, an employer, or an institution.
        </p>
        <div className="cta-row">
          <a href="mailto:futureframesadvisoryltd@gmail.com" className="btn btn-primary">
            Book a free consultation <span className="arrow"></span>
          </a>
          <a href="https://wa.me/2349056190153" className="btn btn-ghost">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

// ============ FOOTER ============
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="nav-logo">
            <img src="logo.png" alt="" className="logo-img"/>
            <span>Future Frames Advisory</span>
          </div>
          <p>
            We are an education and human capital consultancy built around one core belief:
            that the right opportunity, reached at the right time, changes everything.
          </p>
          <div className="footer-socials">
            <a href="https://x.com/ffadvisory" aria-label="X">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://instagram.com/futureframesadvisory" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/></svg>
            </a>
            <a href="https://wa.me/2349056190153" aria-label="WhatsApp">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.1.8.8-3-.2-.3C4.4 14.9 4 13.5 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z"/></svg>
            </a>
          </div>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li><a href="#services">Study Abroad</a></li>
            <li><a href="#services">Recruitment</a></li>
            <li><a href="#services">Policy &amp; Research</a></li>
            <li><a href="#services">Practicum Placement</a></li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#impact">Impact</a></li>
            <li><a href="#voices">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:futureframesadvisoryltd@gmail.com">futureframesadvisoryltd@gmail.com</a></li>
            <li><a href="https://wa.me/2349056190153">+234 905 619 0153</a></li>
            <li><a href="https://x.com/ffadvisory">@ffadvisory</a></li>
            <li><a href="https://instagram.com/futureframesadvisory">@futureframesadvisory</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© 2026 Future Frames Advisory Ltd. All rights reserved.</div>
        <div>Lagos, Nigeria — serving Africa &amp; beyond</div>
      </div>
    </footer>
  );
}

// ============ WHATSAPP FAB ============
function WhatsAppFab() {
  return (
    <a className="whatsapp-fab" href="https://wa.me/2349056190153" aria-label="Chat on WhatsApp">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm5.4 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.5-.6-2.7-1.2-4.4-3.9-4.6-4.1-.1-.2-1.1-1.4-1.1-2.7 0-1.3.7-1.9.9-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.5.7 1.8.8 1.9.1.1.1.3 0 .5-.1.2-.2.3-.3.5l-.3.4c-.1.1-.2.3 0 .5.1.2.6 1 1.3 1.6.9.8 1.6 1 1.8 1.1.2.1.4.1.5-.1l.6-.7c.2-.2.3-.2.6-.1.2.1 1.4.7 1.7.8.2.1.4.2.5.3 0 .1 0 .6-.2 1.2z"/></svg>
    </a>
  );
}

Object.assign(window, {
  Nav, Hero, Marquee, About, Pillars, Stats, Destinations,
  Testimonials, Founder, CTA, Footer, WhatsAppFab
});
