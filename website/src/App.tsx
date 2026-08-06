import { useState } from 'react'
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock,
  ExternalLink,
  Facebook,
  Heart,
  HeartHandshake,
  Instagram,
  Mail,
  MapPin,
  Medal,
  Menu,
  PauseCircle,
  Radar,
  Swords,
  Ticket,
  Trophy,
  Users,
  X,
  Youtube,
} from 'lucide-react'
import './App.css'

const playpassUrl = 'https://playpass.com/seattle-handball-club'
const seasonSignupUrl = 'https://playpass.com/seattle-handball-club/seattle-handball-club-2025-2026-season-AXhvJ2F'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'The Court', href: '#court' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Membership', href: '#membership' },
  { label: 'Media', href: '#media' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
]

const featureCards = [
  {
    icon: Users,
    title: 'All Levels Welcome',
    text: "Whether you're a seasoned pro or have never touched a handball, our community is supportive and ready to help you grow.",
  },
  {
    icon: Swords,
    title: 'Competitive Play',
    text: 'We compete in regional and national tournaments across North America, including the annual Seattle Cup.',
  },
  {
    icon: HeartHandshake,
    title: 'Community First',
    text: 'More than just a sport, we are a community. Join us for social events, post-game hangouts, and team building.',
  },
]

const scheduleItems = [
  {
    day: 'Wednesday',
    title: 'Team Training',
    time: '7:15 PM - 9:00 PM',
    location: 'Dale Turner YMCA, Shoreline',
    directions: 'https://maps.google.com/?q=Dale+Turner+Family+YMCA',
    paused: true,
    statusLabel: 'Resumes Sept 2',
  },
  {
    day: 'Saturday',
    title: 'Tactics & Skills',
    time: '10:00 AM - 12:00 PM',
    location: 'Ballard Community Center, 6020 28th Ave NW, Seattle, WA 98107',
    directions: 'https://maps.google.com/?q=Ballard+Community+Center+6020+28th+Ave+NW+Seattle+WA+98107',
    paused: false,
    statusLabel: 'Running All August',
  },
]

const membershipPlans = [
  {
    name: 'Half Season',
    price: '$220',
    cadence: '/ season',
    description: 'Perfect for those joining mid-year or wanting to try it out.',
    features: ['Gym rental & Equipment', 'Professional Coaching', '1 Tournament Included'],
    cta: 'Select Plan',
    featured: false,
  },
  {
    name: 'Full Season',
    price: '$400',
    cadence: '/ year',
    description: 'For the committed player who wants the full experience.',
    features: ['Gym rental & Equipment', 'Professional Coaching', '2 Tournaments Included'],
    cta: 'Join Full Season',
    featured: true,
  },
]

const mediaItems = [
  {
    title: 'Seattle Cup 2025: Seattle vs. Portland',
    description: 'Highlights from our intense match against Portland at the 2025 Seattle Cup.',
    embed: 'https://www.youtube.com/embed/MTs3rVaDR40',
  },
  {
    title: 'Seattle vs. Vancouver Orcas',
    description: 'Game 3 from the 2024 Vancouver Cup. Full match footage.',
    embed: 'https://www.youtube.com/embed/dVE7529ul5I',
  },
]

const upcomingEvents = [
  {
    label: 'World Series',
    date: 'Aug 5-9',
    place: 'Las Vegas, NV',
    status: 'Confirmed',
  },
]

const pastEvents = [
  {
    date: 'APR 2026',
    days: '3-5',
    title: 'Seattle Handball Cup 2026',
    place: 'Everett Community College, Everett, WA',
    description: 'Our home tournament returned to Everett, with teams from across the region continuing the PNW handball tradition. Seattle Blue took home the title!',
    result: '1st Place - Seattle Blue',
  },
  {
    date: 'JAN 2026',
    days: '30-31',
    title: 'CalCup 2026 (19th Edition)',
    place: 'Centerville Jr. High, Fremont, CA',
    description: 'Seattle competed at the 19th annual California Cup, one of the largest handball tournaments on the West Coast.',
    result: '6th Place',
  },
  {
    date: 'NOV 2025',
    days: '8-9',
    title: 'Vancouver Cup 2025 (6th Edition)',
    place: 'Richmond Oval, Vancouver, BC',
    description: 'A strong showing for Seattle at the 6th edition of the Vancouver Cup, battling top Canadian and PNW clubs.',
    result: '2nd Place',
  },
  {
    date: 'MAR 2025',
    days: '28-30',
    title: 'Seattle Cup 2025',
    place: 'Everett Community College, Everett, WA',
    description: "The inaugural Team Handball Tournament in Seattle! Teams from across the region competed in Men's & Women's divisions.",
    result: '3rd Place',
  },
]

const faqItems = [
  {
    question: 'Do I need any prior experience to join?',
    answer: (
      <>
        Not at all! While the majority of our players have some previous experience, newcomers are always invited and welcome. In fact, more than 10 new players joined us just in the current 25-26 season! If you have a background in basketball, water polo, baseball, or soccer, you&apos;ll pick it up very quickly. We dedicate time in our practices specifically for teaching beginners the fundamentals.
      </>
    ),
  },
  {
    question: 'What equipment do I need to bring?',
    answer: (
      <>
        Just bring standard indoor athletic wear: a t-shirt, shorts, and a good pair of indoor court shoes (volleyball, basketball, or indoor soccer shoes work best). Don&apos;t forget a water bottle! We provide all the handballs and training equipment.
      </>
    ),
  },
  {
    question: 'Can I try a practice before committing to a membership?',
    answer: (
      <>
        Yes! Your first practice is completely free. We want you to come out, meet the team, and see if you enjoy the sport before you pay anything. Saturday practices are running all through August - just show up and introduce yourself to a coach or captain. Wednesday sessions resume September 2.
      </>
    ),
  },
  {
    question: "Are there separate men's and women's teams?",
    answer: (
      <>
        Our weekly practices are co-ed, meaning everyone trains together. However, when we travel to official tournaments (like CalCup or US Nationals), we compete in separate Men&apos;s and Women&apos;s divisions. We always send a Men&apos;s team, and for the Women&apos;s division, we either send our own team or join forces with other regional clubs to ensure everyone gets to compete!
      </>
    ),
  },
  {
    question: 'Can I join mid-season?',
    answer: (
      <>
        Absolutely! You don&apos;t need to wait for a new season to start. We welcome new players year-round - come join a Saturday practice this month, or wait for Wednesday training to return on September 2.
      </>
    ),
  },
  {
    question: 'Where can I watch handball to learn more?',
    answer: (
      <>
        Great question! Handball is one of the most exciting sports to watch. Check out{' '}
        <a href="https://www.youtube.com/@usateamhandball2948" target="_blank" rel="noreferrer">
          USA Team Handball on YouTube
        </a>{' '}
        for domestic highlights, or the{' '}
        <a href="https://www.youtube.com/@HomeofHandball" target="_blank" rel="noreferrer">
          EHF YouTube channel
        </a>{' '}
        for top European league action. You can also watch our own game footage in our{' '}
        <a href="#media">Media section</a> above!
      </>
    ),
  },
]

function CourtAnimation() {
  return (
    <svg viewBox="0 0 800 440" className="court-svg" aria-labelledby="court-title court-desc" role="img">
      <title id="court-title">Handball court animation</title>
      <desc id="court-desc">A tactical animation showing ball circulation that leads to a pivot goal.</desc>
      <rect x="0" y="0" width="800" height="440" className="court-floor" rx="8" />
      <rect x="20" y="20" width="760" height="400" className="court-line" />
      <line x1="400" y1="20" x2="400" y2="420" className="court-line" />
      <circle cx="400" cy="220" r="50" className="court-line" />
      <path d="M 20 50 Q 150 60 150 160 L 150 280 Q 150 380 20 390" className="court-zone" />
      <path d="M 20 20 Q 210 40 210 160 L 210 280 Q 210 400 20 420" className="court-dash" />
      <path d="M 780 50 Q 650 60 650 160 L 650 280 Q 650 380 780 390" className="court-zone" />
      <path d="M 780 20 Q 590 40 590 160 L 590 280 Q 590 400 780 420" className="court-dash" />
      <rect x="5" y="180" width="15" height="80" className="goal-post" />
      <rect x="780" y="180" width="15" height="80" className="goal-post" />
      <line x1="170" y1="210" x2="170" y2="230" className="mark-line" />
      <line x1="630" y1="210" x2="630" y2="230" className="mark-line" />
      <line x1="80" y1="215" x2="80" y2="225" className="mark-line" />
      <line x1="720" y1="215" x2="720" y2="225" className="mark-line" />
      <circle cx="50" cy="220" r="10" className="goalie p-gk" />
      <circle cx="750" cy="220" r="10" className="goalie" />
      <circle cx="130" cy="380" r="11" className="defender d-idle d-1" />
      <circle cx="154" cy="320" r="11" className="defender d-idle d-2" />
      <circle cx="154" cy="250" r="11" className="defender d-idle d-3" />
      <circle cx="154" cy="190" r="11" className="defender d-idle d-4" />
      <circle cx="154" cy="120" r="11" className="defender d-idle d-5" />
      <circle cx="130" cy="60" r="11" className="defender d-idle d-6" />
      <circle cx="165" cy="220" r="11" className="attacker p-piv" />
      <circle cx="170" cy="410" r="11" className="attacker" />
      <circle cx="240" cy="320" r="11" className="attacker p-rb" />
      <circle cx="280" cy="220" r="11" className="attacker p-cb" />
      <circle cx="240" cy="120" r="11" className="attacker p-lb" />
      <circle cx="170" cy="40" r="11" className="attacker p-lw" />
      <circle r="7" className="ball">
        <animateMotion
          dur="8s"
          repeatCount="indefinite"
          path="M 255 220 L 215 120 L 145 40 L 215 120 L 255 220 L 215 320 L 165 220 L 165 220 L 5 190 L 5 190"
          keyPoints="0;0.14;0.28;0.42;0.57;0.71;0.80;0.80;1;1"
          keyTimes="0;0.0625;0.125;0.1875;0.25;0.3125;0.343;0.42;0.4725;1"
          calcMode="linear"
        />
        <animate attributeName="opacity" values="1;1;1;0;0" keyTimes="0;0.52;0.55;0.56;1" dur="8s" repeatCount="indefinite" />
      </circle>
      <text x="400" y="400" className="goal-msg" textAnchor="middle" dominantBaseline="middle">
        GOAL!
      </text>
    </svg>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <nav className="site-nav" aria-label="Main navigation">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Seattle Handball Club home">
          <img src="/img/logo.png" alt="" className="brand-mark" />
          <span>Seattle Handball</span>
        </a>

        <div className="desktop-nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href={playpassUrl} target="_blank" rel="noreferrer">
            Join Now <ExternalLink size={16} aria-hidden="true" />
          </a>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      <div className={`mobile-nav ${menuOpen ? 'is-open' : ''}`}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a href={playpassUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
          Register Now
        </a>
      </div>

      <main id="top">
        <header className="hero-section">
          <img className="hero-bg" src="/img/pic1.jpg" alt="Seattle Handball Club player shooting during a match" />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow">Saturday Practices On - Wednesdays Resume Sept 2</p>
            <h1>Seattle&apos;s Premier Team Handball Club</h1>
            <p className="hero-copy">
              Saturday practices keep running all through August - only Wednesday training is paused until September 2. Sign up now and join us on the court this weekend.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#schedule">
                <CalendarDays size={20} aria-hidden="true" /> See Practice Times
              </a>
              <a className="button button-ghost" href="#membership">
                <Ticket size={20} aria-hidden="true" /> View Pricing
              </a>
            </div>
          </div>
          <aside className="hero-note" aria-label="Club highlights">
            <span>Weekly training</span>
            <span>Regional tournaments</span>
            <span>All skill levels</span>
          </aside>
        </header>

        <section className="new-player-callout" aria-labelledby="new-player-heading">
          <div className="new-player-copy">
            <span className="callout-label">
              <HeartHandshake size={18} aria-hidden="true" /> New players welcome
            </span>
            <h2 id="new-player-heading">First two practices are free.</h2>
            <p>Saturday practices are still on every week through August - Wednesdays resume September 2. No membership needed to start: bring indoor court shoes, meet the team, and try a friendly Saturday session.</p>
          </div>
          <div className="new-player-actions">
            <a className="button button-primary" href="#schedule">
              <CalendarDays size={20} aria-hidden="true" /> See Practice Times
            </a>
            <a className="callout-link" href="mailto:seattlehandballclub@gmail.com?subject=New%20player%20practice">
              Ask a Question <Mail size={18} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section id="about" className="section section-light">
          <div className="section-heading">
            <p className="eyebrow">Why Handball?</p>
            <h2>Welcome to the Club</h2>
          </div>
          <div className="feature-grid">
            {featureCards.map(({ icon: Icon, title, text }) => (
              <article className="feature-card" key={title}>
                <Icon className="card-icon" aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="court" className="section court-section">
          <div className="court-copy">
            <p className="eyebrow">The Court</p>
            <h2>The Game Setup</h2>
            <p>Tactical Animation: Watch the ball circulation leading to a <strong>Pivot Goal</strong>!</p>
            <div className="legend-list" aria-label="Court animation legend">
              <span><i className="legend-dot attacker-dot" /> Attackers (Scoring Play)</span>
              <span><i className="legend-dot defender-dot" /> Defense (6-0 Formation)</span>
              <span><i className="legend-dot goalie-dot" /> Goalkeeper (Dives Low)</span>
            </div>
          </div>
          <div className="court-panel">
            <CourtAnimation />
            <p>Scenario: Pivot Hold & Score</p>
          </div>
        </section>

        <section id="schedule" className="section section-cream">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Training</p>
              <h2>Weekly Schedule</h2>
              <p>Our regular weekly training sessions. Saturdays run all through August; Wednesdays return September 2.</p>
            </div>
            <span className="status-pill">Saturdays On</span>
          </div>
          <div className="schedule-notice">
            <PauseCircle size={22} aria-hidden="true" />
            <div>
              <h3>Wednesday practices are suspended until September 2.</h3>
              <p>Saturday sessions are still on every week through August - same time, same place. Only the Wednesday training is on pause, returning Wednesday, September 2.</p>
            </div>
          </div>
          <div className="schedule-grid">
            {scheduleItems.map((item) => (
              <article className="schedule-card" key={item.day}>
                <span className="day-label">{item.day}</span>
                <h3>{item.title}</h3>
                <div className="info-line">
                  <Clock size={18} aria-hidden="true" />
                  <span>{item.time}</span>
                </div>
                <div className="info-line">
                  <MapPin size={18} aria-hidden="true" />
                  <span>{item.location}</span>
                </div>
                <span className={item.paused ? 'paused-pill' : 'active-pill'}>{item.statusLabel}</span>
                <a className="text-link" href={item.directions} target="_blank" rel="noreferrer">
                  Get Directions <ArrowRight size={16} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="membership" className="section membership-section">
          <div className="section-heading">
            <p className="eyebrow">Pricing</p>
            <h2>Membership Options</h2>
            <p>Support the club and get access to all training sessions, equipment, and club events.</p>
          </div>
          <div className="plans-grid">
            {membershipPlans.map((plan) => (
              <article className={`plan-card ${plan.featured ? 'is-featured' : ''}`} key={plan.name}>
                {plan.featured && <span className="best-value">Best Value</span>}
                <h3>{plan.name}</h3>
                <div className="price-row">
                  <span>{plan.price}</span>
                  <small>{plan.cadence}</small>
                </div>
                <p>{plan.description}</p>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <CheckCircle2 size={18} aria-hidden="true" /> {feature}
                    </li>
                  ))}
                </ul>
                <a className="button button-plan" href={seasonSignupUrl} target="_blank" rel="noreferrer">
                  {plan.cta}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="gallery" className="section section-light">
          <div className="section-heading">
            <p className="eyebrow">Instagram</p>
            <h2>Follow us on Instagram</h2>
            <p>Recent posts from practice, tournaments, and team events.</p>
          </div>
          <div className="instagram-widget" aria-label="Instagram feed">
            <div className="elfsight-app-ab6f5b82-e4ed-434e-9c60-05cde62d1840" data-elfsight-app-lazy />
          </div>
        </section>

        <section id="media" className="section section-cream">
          <div className="section-heading">
            <p className="eyebrow">Watch</p>
            <h2>Club Media</h2>
            <p>Catch the action from our latest games and training.</p>
          </div>
          <div className="media-grid">
            {mediaItems.map((item) => (
              <article className="media-card" key={item.embed}>
                <div className="video-frame">
                  <iframe
                    src={item.embed}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div>
                  <Youtube size={22} aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="events" className="section events-section">
          <div className="events-column">
            <div className="section-heading compact-heading">
              <p className="eyebrow">What&apos;s Next</p>
              <h2>Upcoming Events</h2>
            </div>
            <div className="event-stack">
              <p className="event-kicker"><Radar size={16} aria-hidden="true" /> On Our Radar</p>
              {upcomingEvents.map((event) => (
                <article className="event-card compact-event" key={event.label}>
                  <div>
                    <h3>{event.label}</h3>
                    <p>{event.date} - {event.place}</p>
                  </div>
                  <span>{event.status}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="events-column">
            <div className="section-heading compact-heading muted-heading">
              <p className="eyebrow">Results</p>
              <h2>Past Events</h2>
            </div>
            <div className="event-stack">
              {pastEvents.map((event) => (
                <article className="event-card" key={event.title}>
                  <div className="date-box">
                    <span>{event.date}</span>
                    <strong>{event.days}</strong>
                  </div>
                  <div className="event-copy">
                    <h3>{event.title}</h3>
                    <p className="event-place"><MapPin size={15} aria-hidden="true" /> {event.place}</p>
                    <p>{event.description}</p>
                    <span className="result-pill"><Medal size={15} aria-hidden="true" /> {event.result}</span>
                    <span className="completed-pill">Completed</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section section-light faq-section">
          <div className="section-heading">
            <p className="eyebrow">Got Questions?</p>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know before stepping on the court.</p>
          </div>
          <div className="faq-list">
            {faqItems.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>
                  <span>{item.question}</span>
                  <ChevronDown aria-hidden="true" />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
          <p className="faq-contact">
            Still have questions? <a href="mailto:seattlehandballclub@gmail.com">Shoot us an email</a>.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div>
            <a className="footer-brand" href="#top">
              <Trophy aria-hidden="true" /> Seattle Handball Club
            </a>
            <p>Building the handball community in the Pacific Northwest. Join us on the court!</p>
            <div className="social-links">
              <a href="http://www.facebook.com/SeattleHC" target="_blank" rel="noreferrer" aria-label="Seattle Handball Club on Facebook">
                <Facebook aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/seattle_hc/" target="_blank" rel="noreferrer" aria-label="Seattle Handball Club on Instagram">
                <Instagram aria-hidden="true" />
              </a>
              <a href="mailto:seattlehandballclub@gmail.com" aria-label="Email Seattle Handball Club">
                <Mail aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h2>Quick Links</h2>
            <ul>
              <li><a href="#top">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#schedule">Schedule</a></li>
              <li><a href={playpassUrl} target="_blank" rel="noreferrer">Playpass Page</a></li>
            </ul>
          </div>

          <div>
            <h2>Contact</h2>
            <ul>
              <li><Mail size={16} aria-hidden="true" /> seattlehandballclub@gmail.com</li>
              <li><MapPin size={16} aria-hidden="true" /> Seattle, WA</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Seattle Handball Club. All rights reserved.</span>
          <span>Made with <Heart size={14} aria-hidden="true" /> in Seattle</span>
        </div>
      </footer>
    </div>
  )
}

export default App
