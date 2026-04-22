import { useNavigate } from 'react-router-dom'
import './landing.css'

const C = {
  olive:    '#4A5740',
  oliveDk:  '#3A4532',
  oliveLt:  '#6B7A5E',
  sage:     '#A8BA98',
  cream:    '#EFE3CC',
  sand:     '#D4A87A',
  terra:    '#9B5E2A',
  terraDk:  '#7D4C22',
  parch:    '#FAF7F2',
  tint:     '#F0EBE0',
  border:   '#DDD5C4',
  ink:      '#2C2C2A',
  ink2:     '#4A4A46',
  muted:    '#6E6E68',
} as const

const HF = "'Bricolage Grotesque', system-ui, sans-serif"
const BF = "'Instrument Sans', system-ui, sans-serif"

function WavyUnderline({ width, color = C.sand }: { width: number; color?: string }) {
  const w = width
  return (
    <svg width={w} height={12} viewBox={`0 0 ${w} 12`} fill="none" aria-hidden="true" style={{ display: 'block', marginTop: -3 }}>
      <path
        d={`M4 9Q${w*0.16} 3 ${w*0.31} 8Q${w*0.46} 13 ${w*0.61} 7Q${w*0.76} 2 ${w*0.85} 7Q${w*0.92} 10 ${w-4} 8`}
        stroke={color}
        strokeWidth={2.2}
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

function BotanicalBranch({ color = C.sage, opacity = 0.1 }: { color?: string; opacity?: number }) {
  return (
    <svg width={400} height={600} viewBox="0 0 160 600" fill="none" aria-hidden="true" style={{ opacity }}>
      <path d="M80 590Q76 450 78 310Q80 170 78 20" stroke={color} strokeWidth={1.8} strokeLinecap="round" fill="none"/>
      <path d="M79 480Q55 448 42 408Q58 418 79 452" stroke={color} strokeWidth={1.5} strokeLinecap="round" fill="none"/>
      <path d="M79 420Q50 400 38 366Q56 382 79 408" stroke={color} strokeWidth={1.5} strokeLinecap="round" fill="none"/>
      <path d="M79 360Q46 335 36 298Q56 318 79 344" stroke={color} strokeWidth={1.5} strokeLinecap="round" fill="none"/>
      <path d="M79 480Q103 464 116 444Q100 454 79 468" stroke={color} strokeWidth={1.5} strokeLinecap="round" fill="none"/>
      <path d="M79 420Q108 404 120 374Q102 388 79 408" stroke={color} strokeWidth={1.5} strokeLinecap="round" fill="none"/>
      <path d="M79 360Q110 346 120 320Q100 330 79 348" stroke={color} strokeWidth={1.5} strokeLinecap="round" fill="none"/>
      <path d="M79 280Q106 258 112 226Q96 244 79 258" stroke={color} strokeWidth={1.3} strokeLinecap="round" fill="none"/>
      <path d="M79 200Q58 186 52 158Q66 174 79 186" stroke={color} strokeWidth={1.3} strokeLinecap="round" fill="none"/>
    </svg>
  )
}

function PhoneMockup() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{
        width: 240,
        background: C.parch,
        borderRadius: 32,
        overflow: 'hidden',
        boxShadow: `0 32px 80px rgba(0,0,0,.3), 0 0 0 8px rgba(255,255,255,.08)`,
      }}>
        {/* notch */}
        <div style={{ height: 28, background: C.oliveDk, display: 'flex', justifyContent: 'center', alignItems: 'flex-end', paddingBottom: 6 }}>
          <div style={{ width: 72, height: 5, borderRadius: 3, background: 'rgba(255,255,255,.2)' }} />
        </div>
        {/* header */}
        <div style={{ background: C.olive, padding: '24px 20px 20px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: -10, top: 0, opacity: .12, pointerEvents: 'none' }}>
            <svg width={80} height={120} viewBox="0 0 80 120" fill="none">
              <path d="M40 115Q38 80 40 50Q42 25 40 5" stroke={C.sage} strokeWidth={1.5} strokeLinecap="round" fill="none"/>
              <path d="M40 88Q28 78 22 64Q30 70 40 80" stroke={C.sage} strokeWidth={1.3} strokeLinecap="round" fill="none"/>
              <path d="M40 68Q52 60 58 48Q50 54 40 62" stroke={C.sage} strokeWidth={1.3} strokeLinecap="round" fill="none"/>
            </svg>
          </div>
          <div style={{ fontFamily: BF, fontSize: 9, textTransform: 'uppercase', letterSpacing: '.14em', color: 'rgba(250,247,242,.5)', marginBottom: 6 }}>Good morning</div>
          <div style={{ fontFamily: HF, fontSize: 17, fontWeight: 300, color: C.parch, letterSpacing: '.02em', lineHeight: 1.2 }}>
            How are you<br /><em style={{ fontStyle: 'italic', color: C.sand }}>feeling today?</em>
          </div>
        </div>
        {/* cards */}
        <div style={{ padding: 14 }}>
          {[
            { tag: 'Privates · Week 1', title: 'What\'s actually happening', body: 'Evidence-based, plainly explained.', label: '3 min read' },
            { tag: 'Physical · Training', title: 'Gentle breathing — Day 1', body: 'Pelvic floor, at your pace.', label: '5 mins' },
          ].map((card) => (
            <div key={card.tag} style={{ background: 'white', borderRadius: 10, padding: 12, marginBottom: 8, border: `1px solid ${C.border}` }}>
              <div style={{ fontFamily: BF, fontSize: 8, textTransform: 'uppercase', letterSpacing: '.12em', color: C.muted, marginBottom: 3 }}>{card.tag}</div>
              <div style={{ fontFamily: HF, fontSize: 12, color: C.olive, letterSpacing: '.02em', marginBottom: 4 }}>{card.title}</div>
              <div style={{ fontFamily: BF, fontSize: 10, color: C.ink2, lineHeight: 1.5 }}>{card.body}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
                <span style={{ fontFamily: BF, fontSize: 9, background: C.tint, padding: '2px 7px', borderRadius: 99, color: C.olive }}>{card.label}</span>
                <span style={{ fontFamily: BF, fontSize: 10, fontWeight: 500, color: C.terra }}>Start →</span>
              </div>
            </div>
          ))}
        </div>
        {/* bottom nav */}
        <div style={{ background: 'white', borderTop: `1px solid ${C.border}`, padding: '8px 14px 14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
            {['Home', 'Learn', 'Train', 'You'].map((tab, i) => (
              <div key={tab} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                <div style={{ width: 18, height: 3, borderRadius: 2, background: i === 0 ? C.olive : C.border }} />
                <div style={{ fontFamily: BF, fontSize: 7, color: i === 0 ? C.olive : C.muted, fontWeight: i === 0 ? 500 : 400 }}>{tab}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ height: 12, background: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: 4 }}>
          <div style={{ width: 60, height: 3, borderRadius: 2, background: C.border }} />
        </div>
      </div>
    </div>
  )
}

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <div style={{ fontFamily: BF, background: C.parch, color: C.ink, fontSize: 16, lineHeight: 1.6, WebkitFontSmoothing: 'antialiased' }}>

      {/* ── Nav ── */}
      <nav className="lp-nav" style={{
        background: C.parch,
        borderBottom: `1px solid ${C.border}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 60,
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <div style={{ fontFamily: HF, fontSize: 22, fontWeight: 300, color: C.olive, letterSpacing: '.02em' }}>
          Post<em style={{ fontStyle: 'italic', color: C.terra }}>mum</em>
        </div>
        <div className="lp-nav-links">
          {['The four Ps', 'Features', 'Contact'].map((link) => (
            <a key={link} href={`#${link === 'The four Ps' ? 'four-ps' : link === 'Features' ? 'features' : 'founder'}`}
              style={{ fontFamily: BF, fontSize: 14, color: C.ink2, textDecoration: 'none', fontWeight: 400 }}>
              {link}
            </a>
          ))}
          <button
            onClick={() => navigate('/onboarding')}
            style={{
              background: C.olive,
              color: C.parch,
              fontFamily: BF,
              fontSize: 13,
              fontWeight: 500,
              padding: '9px 20px',
              borderRadius: 4,
              border: `2px solid ${C.olive}`,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            Try the beta →
          </button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="lp-hero" style={{
        background: C.olive,
        display: 'grid',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        gap: 48,
      }}>
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 420, display: 'flex', alignItems: 'center', pointerEvents: 'none' }}>
          <BotanicalBranch />
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: BF, fontSize: 10, fontWeight: 600, letterSpacing: '.22em', textTransform: 'uppercase', color: C.sand, marginBottom: 16 }}>
            Now in web beta · iOS coming soon
          </div>
          <h1 style={{ fontFamily: HF, fontSize: 'clamp(2.8rem, 5.5vw, 4.2rem)', fontWeight: 300, color: C.parch, letterSpacing: '.02em', lineHeight: 1.05, marginBottom: 8, margin: 0 }}>
            Postmum is<br />for <em style={{ fontStyle: 'italic', color: C.sand }}>you, after baby.</em>
          </h1>
          <WavyUnderline width={160} color={C.sand} />
          <p style={{ fontFamily: BF, fontSize: 17, lineHeight: 1.75, color: 'rgba(250,247,242,.7)', marginTop: 20, marginBottom: 36, maxWidth: 440 }}>
            A postpartum recovery platform built entirely around the woman who just gave birth. Evidence-based, honest, and built for the next two years — not just the first six weeks.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button
              onClick={() => navigate('/onboarding')}
              style={{ background: C.terra, color: '#fff', fontFamily: BF, fontSize: 15, fontWeight: 500, padding: '14px 28px', borderRadius: 4, border: `2px solid ${C.terra}`, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8 }}
            >
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3" /></svg>
              Try the web app
            </button>
            <a
              href="https://tiktok.com/@postmum"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: 'rgba(255,255,255,.1)', color: 'rgba(250,247,242,.85)', fontFamily: BF, fontSize: 15, fontWeight: 500, padding: '14px 28px', borderRadius: 4, border: '2px solid rgba(255,255,255,.25)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}
            >
              <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.24 8.24 0 0 0 4.83 1.55V6.79a4.85 4.85 0 0 1-1.06-.1z" /></svg>
              Watch on TikTok
            </a>
          </div>
        </div>

        <div className="lp-phone-wrap"><PhoneMockup /></div>
      </section>

      {/* ── Trust bar ── */}
      <div className="lp-trust-bar" style={{ background: C.tint, borderBottom: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
        {[
          { icon: <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>, label: 'Evidence-based content' },
          { icon: <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true"><circle cx={12} cy={12} r={10} /><polyline points="12 6 12 12 16 14" /></svg>, label: 'Built for the full 2 years' },
          { icon: <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx={9} cy={7} r={4} /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>, label: 'Peer community included' },
          { icon: <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true"><rect x={3} y={11} width={18} height={11} rx={2} ry={2} /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>, label: 'Your data stays yours' },
          { icon: <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>, label: 'Free in beta' },
        ].map(({ icon, label }) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: BF, fontSize: 13, color: C.muted }}>
            <span style={{ opacity: .6 }}>{icon}</span>
            {label}
          </div>
        ))}
      </div>

      {/* ── Problem ── */}
      <section className="lp-problem" style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontFamily: BF, fontSize: 10, fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: C.terra, marginBottom: 16 }}>
          The information gap
        </div>
        <h2 style={{ fontFamily: HF, fontSize: 'clamp(1.9rem, 3.5vw, 2.9rem)', fontWeight: 300, color: C.olive, letterSpacing: '.02em', lineHeight: 1.15, marginBottom: 8, margin: 0 }}>
          Nobody tells you<br />what comes <em style={{ fontStyle: 'italic', color: C.terra }}>after.</em>
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
          <WavyUnderline width={200} color={C.terra} />
        </div>
        <p style={{ fontFamily: BF, fontSize: 17, lineHeight: 1.8, color: C.ink2, maxWidth: 640, margin: '20px auto 0' }}>
          You were told about trimesters and birth plans. Nobody told you about the pelvic floor, the hair loss, the identity shift, or the pain that doesn't have a name because it's been normalised. Postmum was built to close that gap.
        </p>
        <div className="lp-stats-grid" style={{ display: 'grid', gap: 24, marginTop: 60, textAlign: 'left' }}>
          {[
            { num: '2', unit: ' years', body: 'Minimum duration of postpartum recovery. Most women are told six weeks.' },
            { num: '10', unit: ' min', body: 'Average time given to mum at the six-week postnatal check. Mostly about the baby.' },
            { num: '0', unit: '', body: 'Apps in the UK built specifically for postpartum maternal recovery. Until now.' },
          ].map(({ num, unit, body }) => (
            <div key={num + unit} style={{ background: C.cream, borderRadius: 16, padding: 28, position: 'relative', overflow: 'hidden' }}>
              <div style={{ fontFamily: HF, fontSize: 52, fontWeight: 200, color: C.olive, letterSpacing: '.02em', lineHeight: 1, marginBottom: 8 }}>
                <em style={{ fontStyle: 'italic', color: C.terra }}>{num}</em>
                {unit && <span style={{ fontSize: 28, opacity: .6 }}>{unit}</span>}
              </div>
              <div style={{ fontFamily: BF, fontSize: 14, color: C.ink2, lineHeight: 1.55 }}>{body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Four Ps ── */}
      <section id="four-ps" className="lp-four-ps" style={{ background: C.oliveDk, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -60, top: -40, opacity: .07, pointerEvents: 'none' }}>
          <svg width={300} height={400} viewBox="0 0 160 400" fill="none">
            <path d="M80 390Q76 300 78 200Q80 110 78 20" stroke="white" strokeWidth={1.5} strokeLinecap="round" fill="none"/>
            <path d="M79 320Q55 298 42 268Q58 278 79 302" stroke="white" strokeWidth={1.3} strokeLinecap="round" fill="none"/>
            <path d="M79 260Q108 244 120 214Q102 228 79 248" stroke="white" strokeWidth={1.3} strokeLinecap="round" fill="none"/>
          </svg>
        </div>
        <div style={{ maxWidth: 1040, margin: '0 auto' }}>
          <div style={{ marginBottom: 52 }}>
            <div style={{ fontFamily: BF, fontSize: 10, fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: C.sand, marginBottom: 16 }}>
              Every woman should know these
            </div>
            <h2 style={{ fontFamily: HF, fontSize: 'clamp(1.9rem, 3.5vw, 2.7rem)', fontWeight: 300, color: C.parch, letterSpacing: '.02em', lineHeight: 1.15, margin: 0 }}>
              The four <em style={{ fontStyle: 'italic', color: C.sand }}>Ps</em> of postpartum.
            </h2>
            <WavyUnderline width={180} color={C.sand} />
            <p style={{ fontFamily: BF, fontSize: 16, lineHeight: 1.7, color: 'rgba(250,247,242,.6)', marginTop: 18, maxWidth: 540 }}>
              Nobody tells women these things before they give birth. Postmum covers all four — at your pace, when you're ready.
            </p>
          </div>
          <div className="lp-four-ps-grid" style={{ display: 'grid', gap: 16 }}>
            {[
              { title: 'rivates', body: "What's actually happening after birth — vaginal or caesarean. What's normal, what's not, what to watch for and when to act." },
              { title: 'hysical', body: "The full picture: hormones, hair, pelvic floor, core, sleep, nutrition. The bits that feel polite to mention and the bits that don't." },
              { title: 'heel', body: "The anxiety, the identity shift, the relationship strain, the mental load that has no name. Held with warmth, never alarm." },
              { title: 'ain', body: "What's normal-but-uncomfortable versus what needs attention — and how to tell the difference. Information you should have had from day one." },
            ].map(({ title, body }) => (
              <div key={title} style={{ background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 16, padding: '28px 24px' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(255,255,255,.12)', border: '1.5px solid rgba(255,255,255,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                  <span style={{ fontFamily: HF, fontSize: 20, fontWeight: 400, color: C.parch, letterSpacing: '.02em' }}>P</span>
                </div>
                <div style={{ fontFamily: HF, fontSize: 20, fontWeight: 400, color: C.parch, letterSpacing: '.02em', marginBottom: 10 }}>
                  <em style={{ fontStyle: 'italic', color: C.sand }}>P{title}</em>
                </div>
                <div style={{ fontFamily: BF, fontSize: 14, lineHeight: 1.7, color: 'rgba(250,247,242,.6)' }}>{body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="lp-features" style={{ maxWidth: 1040, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
          <div style={{ fontFamily: BF, fontSize: 10, fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: C.terra, marginBottom: 16 }}>What's inside</div>
          <h2 style={{ fontFamily: HF, fontSize: 'clamp(1.9rem, 3.5vw, 2.9rem)', fontWeight: 300, color: C.olive, letterSpacing: '.02em', lineHeight: 1.15, margin: 0 }}>
            Everything your recovery <em style={{ fontStyle: 'italic', color: C.terra }}>actually</em> needs.
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
            <WavyUnderline width={240} color={C.terra} />
          </div>
        </div>
        <div className="lp-features-grid" style={{ display: 'grid', gap: 20, marginTop: 56 }}>
          {[
            {
              title: 'Recovery knowledge',
              body: "Peer-reviewed research, written in plain language. Clinical depth without clinical language. No jargon, no scaremongering.",
              icon: <svg width={22} height={22} viewBox="0 0 32 32" fill="none" stroke={C.parch} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8 24c2-8 8-14 16-14-1 8-7 14-16 14z"/><line x1={8} y1={24} x2={16} y2={16}/></svg>,
            },
            {
              title: 'Home training',
              body: "Friendly workouts built for the postpartum body. Pelvic floor, abdominal, whole-body. No gym, no equipment, phased to where you are.",
              icon: <svg width={22} height={22} viewBox="0 0 32 32" fill="none" stroke={C.parch} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx={16} cy={8} r={3}/><path d="M10 14h12M16 14v10M12 28l4-4 4 4"/></svg>,
            },
            {
              title: 'Personalised plan',
              body: "Based on your birth date, birth type, and what you want to focus on. Adapts to your pace. Still there at month 18, not just week six.",
              icon: <svg width={22} height={22} viewBox="0 0 32 32" fill="none" stroke={C.parch} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 17.5A9 9 0 1 1 12.5 8 7 7 0 0 0 22 17.5z"/></svg>,
            },
            {
              title: 'Partner sharing',
              body: "Share what you're going through with your partner. Not a report — a window. So they can understand, and actually help.",
              icon: <svg width={22} height={22} viewBox="0 0 32 32" fill="none" stroke={C.parch} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 27s-11-7.5-11-14a6 6 0 0 1 11-3.4A6 6 0 0 1 27 13c0 6.5-11 14-11 14z"/></svg>,
            },
          ].map(({ title, body, icon }) => (
            <div key={title} style={{ background: C.cream, borderRadius: 16, padding: 28, border: `1px solid ${C.border}` }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: C.olive, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18, opacity: .9 }}>
                {icon}
              </div>
              <div style={{ fontFamily: HF, fontSize: 17, fontWeight: 400, color: C.olive, letterSpacing: '.02em', marginBottom: 8 }}>{title}</div>
              <div style={{ fontFamily: BF, fontSize: 14, lineHeight: 1.65, color: C.ink2 }}>{body}</div>
            </div>
          ))}

          {/* Healthcare share — coming soon */}
          <div style={{ background: C.cream, borderRadius: 16, padding: 28, border: `1.5px dashed ${C.border}`, opacity: .6 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: C.oliveLt, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: .7 }}>
                <svg width={22} height={22} viewBox="0 0 32 32" fill="none" stroke={C.parch} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 8a4 4 0 0 0-4 4c0 1.5.7 2.8 1.8 3.6A4 4 0 0 0 12 22h8a4 4 0 0 0 2.2-7.4A4 4 0 0 0 18 8h-6z"/><line x1={16} y1={22} x2={16} y2={26}/></svg>
              </div>
              <span style={{ fontFamily: BF, fontSize: 10, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: C.muted }}>Coming soon</span>
            </div>
            <div style={{ fontFamily: HF, fontSize: 17, fontWeight: 400, color: C.olive, letterSpacing: '.02em', marginBottom: 8 }}>Healthcare share</div>
            <div style={{ fontFamily: BF, fontSize: 14, lineHeight: 1.65, color: C.ink2 }}>Share your real experience with your GP, midwife, or physio. Your data. So you can get treated properly — not based on a two-minute appointment.</div>
          </div>

          {/* Peer community — coming soon */}
          <div style={{ background: C.cream, borderRadius: 16, padding: 28, border: `1.5px dashed ${C.border}`, opacity: .6 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: C.oliveLt, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: .7 }}>
                <svg width={22} height={22} viewBox="0 0 32 32" fill="none" stroke={C.parch} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H12l-6 4V8z"/></svg>
              </div>
              <span style={{ fontFamily: BF, fontSize: 10, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: C.muted }}>Coming soon</span>
            </div>
            <div style={{ fontFamily: HF, fontSize: 17, fontWeight: 400, color: C.olive, letterSpacing: '.02em', marginBottom: 8 }}>Peer community</div>
            <div style={{ fontFamily: BF, fontSize: 14, lineHeight: 1.65, color: C.ink2 }}>Find and follow other mums at the same stage. Not a forum. A community that lets her see she's not alone in what she's going through.</div>
          </div>
        </div>
      </section>

      {/* ── Beta CTA ── */}
      <section className="lp-beta" style={{ background: C.cream, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: C.olive, color: C.parch, fontFamily: BF, fontSize: 10, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 99, marginBottom: 24 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.sand, flexShrink: 0, display: 'inline-block' }} />
            Web beta — free access
          </div>
          <h2 style={{ fontFamily: HF, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: C.olive, letterSpacing: '.02em', lineHeight: 1.15, margin: 0 }}>
            Try Postmum.<br /><em style={{ fontStyle: 'italic', color: C.terra }}>Tell us what you think.</em>
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
            <WavyUnderline width={220} color={C.terra} />
          </div>
          <p style={{ fontFamily: BF, fontSize: 17, lineHeight: 1.8, color: C.ink2, maxWidth: 640, margin: '20px auto 0' }}>
            Postmum is in web beta and we want real women using it, breaking it, and telling us what's missing. Your feedback shapes the iOS app. No credit card. No commitment. Just honest.
          </p>
          <div style={{ background: 'white', border: `1.5px solid ${C.border}`, borderRadius: 14, padding: '20px 24px', marginTop: 32, textAlign: 'left', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={C.oliveLt} strokeWidth={2} strokeLinecap="round" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }}><circle cx={12} cy={12} r={10}/><polyline points="12 6 12 12 16 14"/></svg>
            <div>
              <div style={{ fontFamily: BF, fontSize: 13, fontWeight: 600, color: C.ink, marginBottom: 3 }}>What you're signing up for</div>
              <div style={{ fontFamily: BF, fontSize: 13, color: C.ink2, lineHeight: 1.65 }}>Free access to the full web app · A short feedback form after 2 weeks · The option to be involved in shaping the iOS version. Nothing else. Unsubscribe any time.</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginTop: 36 }}>
            <button
              onClick={() => navigate('/onboarding')}
              style={{ background: C.terra, color: '#fff', fontFamily: BF, fontSize: 16, fontWeight: 500, padding: '16px 32px', borderRadius: 4, border: `2px solid ${C.terra}`, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 10 }}
            >
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              Try the web app
            </button>
            <a
              href="mailto:hello@postmum.com"
              style={{ background: 'transparent', color: C.olive, fontFamily: BF, fontSize: 16, fontWeight: 500, padding: '16px 32px', borderRadius: 4, border: `2px solid ${C.olive}`, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}
            >
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Send feedback
            </a>
          </div>
          <p style={{ fontFamily: BF, fontSize: 13, color: C.muted, marginTop: 20, lineHeight: 1.6 }}>
            No account required to start · Free during beta · iOS coming soon
          </p>
        </div>
      </section>

      {/* ── Founder ── */}
      <section id="founder" className="lp-founder" style={{ maxWidth: 1040, margin: '0 auto', display: 'grid', alignItems: 'center' }}>
        <div>
          <div style={{ fontFamily: BF, fontSize: 10, fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: C.terra, marginBottom: 16 }}>Built by a mum, for mums</div>
          <h2 style={{ fontFamily: HF, fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 300, color: C.olive, letterSpacing: '.02em', lineHeight: 1.15, margin: 0 }}>
            There's a real<br />person <em style={{ fontStyle: 'italic', color: C.terra }}>behind this.</em>
          </h2>
          <WavyUnderline width={220} color={C.terra} />
          <p style={{ fontFamily: BF, fontSize: 17, lineHeight: 1.8, color: C.ink2, margin: '20px 0 0' }}>
            Postmum was built because this gap is real and personal. If you've got questions, feedback, or just want to tell us what you needed and didn't have — we genuinely want to hear it. Come find us on TikTok, or drop an email. We read everything.
          </p>
          <div style={{ marginTop: 28, padding: '18px 20px', background: C.tint, borderRadius: 12, border: `1px solid ${C.border}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: C.olive, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontFamily: HF, fontSize: 16, color: C.parch, fontWeight: 400 }}>N</span>
              </div>
              <div>
                <div style={{ fontFamily: BF, fontSize: 14, fontWeight: 500, color: C.ink }}>Nicole · Founder, Postmum</div>
                <div style={{ fontFamily: BF, fontSize: 12, color: C.muted, marginTop: 2 }}>Building in public · UK</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[
            {
              href: 'https://tiktok.com/@postmum',
              iconBg: '#000',
              icon: <svg width={22} height={22} viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.24 8.24 0 0 0 4.83 1.55V6.79a4.85 4.85 0 0 1-1.06-.1z"/></svg>,
              label: 'TikTok',
              title: '@postmum',
              body: 'Behind the build, real talk about postpartum, and the information nobody gives you. Come say hi.',
            },
            {
              href: 'mailto:hello@postmum.com',
              iconBg: C.olive,
              icon: <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={C.parch} strokeWidth={2} strokeLinecap="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
              label: 'Email',
              title: 'hello@postmum.com',
              body: 'Feedback, press, partnerships, or just want to share your experience. We read and respond to everything.',
            },
          ].map(({ href, iconBg, icon, label, title, body }) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
              style={{ background: C.cream, border: `1.5px solid ${C.border}`, borderRadius: 14, padding: '20px 22px', display: 'flex', gap: 16, alignItems: 'flex-start', textDecoration: 'none', color: 'inherit' }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {icon}
              </div>
              <div>
                <div style={{ fontFamily: BF, fontSize: 10, textTransform: 'uppercase', letterSpacing: '.14em', color: C.muted, marginBottom: 4 }}>{label}</div>
                <div style={{ fontFamily: HF, fontSize: 16, fontWeight: 400, color: C.olive, letterSpacing: '.02em', marginBottom: 4 }}>{title}</div>
                <div style={{ fontFamily: BF, fontSize: 13, color: C.ink2, lineHeight: 1.55 }}>{body}</div>
              </div>
            </a>
          ))}
          <div style={{ background: C.cream, border: `1.5px dashed ${C.border}`, borderRadius: 14, padding: '20px 22px', display: 'flex', gap: 16, alignItems: 'flex-start', opacity: .65 }}>
            <div style={{ width: 44, height: 44, borderRadius: 10, background: C.tint, border: `1.5px solid ${C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={C.muted} strokeWidth={2} strokeLinecap="round" aria-hidden="true"><rect x={2} y={2} width={20} height={20} rx={5} ry={5}/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1={17.5} y1={6.5} x2={17.51} y2={6.5}/></svg>
            </div>
            <div>
              <div style={{ fontFamily: BF, fontSize: 10, textTransform: 'uppercase', letterSpacing: '.14em', color: C.muted, marginBottom: 4 }}>Instagram · Coming soon</div>
              <div style={{ fontFamily: HF, fontSize: 16, fontWeight: 400, color: C.muted, letterSpacing: '.02em', marginBottom: 4 }}>@postmum</div>
              <div style={{ fontFamily: BF, fontSize: 13, color: C.ink2, lineHeight: 1.55 }}>Launching with the iOS beta.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="lp-footer" style={{ background: C.oliveDk, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
        <div>
          <div style={{ fontFamily: HF, fontSize: 20, fontWeight: 300, color: C.parch, letterSpacing: '.02em' }}>
            Post<em style={{ fontStyle: 'italic', color: C.sand }}>mum</em>
          </div>
          <div style={{ fontFamily: BF, fontSize: 13, color: 'rgba(250,247,242,.5)', marginTop: 4 }}>For you, after baby.</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <button
            onClick={() => navigate('/onboarding')}
            style={{ background: C.terra, color: '#fff', fontFamily: BF, fontSize: 13, fontWeight: 500, padding: '10px 22px', borderRadius: 4, border: `2px solid ${C.terra}`, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8 }}
          >
            Try the web app →
          </button>
          <div style={{ fontFamily: BF, fontSize: 11, color: 'rgba(250,247,242,.35)' }}>Free during beta</div>
        </div>
        <div style={{ display: 'flex', gap: 24 }}>
          {['Privacy', 'Terms', 'Contact'].map((link) => (
            <a key={link} href={link === 'Contact' ? 'mailto:hello@postmum.com' : '#'}
              style={{ fontFamily: BF, fontSize: 13, color: 'rgba(250,247,242,.55)', textDecoration: 'none' }}>
              {link}
            </a>
          ))}
        </div>
      </footer>

    </div>
  )
}
