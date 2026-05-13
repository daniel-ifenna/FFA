// App composition + reveal-on-scroll + tweaks
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "rotateSpeed": 2400,
  "palette": "Navy & Gold",
  "showMotion": true
}/*EDITMODE-END*/;

const PALETTES = {
  "Navy & Gold": {
    "--navy": "#0D1F3C", "--navy-2": "#0A1830", "--navy-soft": "#1B3055",
    "--gold": "#C9A84C", "--gold-soft": "#D9BE6E",
    "--ivory": "#F7F3EA", "--ivory-2": "#EFE8D6", "--paper": "#FBF8F1",
    "--ink": "#0D1F3C"
  },
  "Forest & Sand": {
    "--navy": "#1F3A2E", "--navy-2": "#172A22", "--navy-soft": "#2C4F40",
    "--gold": "#D4A574", "--gold-soft": "#E2BB8E",
    "--ivory": "#F4EFE3", "--ivory-2": "#E8DFC9", "--paper": "#FAF6EC",
    "--ink": "#1F3A2E"
  },
  "Ink & Coral": {
    "--navy": "#15161A", "--navy-2": "#0E0F12", "--navy-soft": "#252830",
    "--gold": "#E27D5A", "--gold-soft": "#EE9978",
    "--ivory": "#F2EEE8", "--ivory-2": "#E5DFD3", "--paper": "#F8F5EE",
    "--ink": "#15161A"
  }
};

function App() {
  const [tweaks, setTweak] = window.useTweaks(TWEAK_DEFAULTS);
  const [showIntro, setShowIntro] = React.useState(true);

  const handleIntroDone = () => {
    setShowIntro(false);
  };

  React.useEffect(() => {
    const p = PALETTES[tweaks.palette] || PALETTES["Navy & Gold"];
    Object.entries(p).forEach(([k, v]) => document.documentElement.style.setProperty(k, v));
  }, [tweaks.palette]);

  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  React.useEffect(() => {
    const state = tweaks.showMotion ? 'running' : 'paused';
    document.querySelectorAll('.marquee-track, .ph-img, .float-card').forEach(el => {
      el.style.animationPlayState = state;
    });
  }, [tweaks.showMotion]);

  const { TweaksPanel, TweakSection, TweakRadio, TweakSlider, TweakToggle } = window;

  return (
    <>
      {showIntro && <CinematicIntro onDone={handleIntroDone}/>}
      <Nav/>
      <Hero rotateMs={tweaks.rotateSpeed}/>
      <Marquee/>
      <About/>
      <Pillars/>
      <Stats/>
      <Destinations/>
      <Testimonials/>
      <Founder/>
      <CTA/>
      <Footer/>
      <WhatsAppFab/>

      <TweaksPanel>
        <TweakSection label="Palette"/>
        <TweakRadio
          label="Theme"
          value={tweaks.palette}
          options={["Navy & Gold", "Forest & Sand", "Ink & Coral"]}
          onChange={v => setTweak('palette', v)}
        />
        <TweakSection label="Motion"/>
        <TweakSlider
          label="Headline rotation"
          min={1200} max={5000} step={200}
          value={tweaks.rotateSpeed}
          unit="ms"
          onChange={v => setTweak('rotateSpeed', v)}
        />
        <TweakToggle
          label="Animations"
          value={tweaks.showMotion}
          onChange={v => setTweak('showMotion', v)}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
