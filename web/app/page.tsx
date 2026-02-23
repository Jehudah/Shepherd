import Image from 'next/image';
import FeedbackForm from './FeedbackForm';

const SCREENSHOTS: { src: string; caption: string }[] = [
  // Drop your screenshots into web/public/screenshots/ and list them here.
  // Example: { src: '/screenshots/home.png', caption: 'Home' },
];

const PLACEHOLDER_SCREENS = [
  { caption: 'Home', emoji: '🏠' },
  { caption: 'Lessons', emoji: '📖' },
  { caption: 'Quiz', emoji: '✏️' },
  { caption: 'Verses', emoji: '📜' },
  { caption: 'Progress', emoji: '🏆' },
];

export default function Home() {
  return (
    <>
      {/* ── Navigation ── */}
      <nav>
        <div className="container nav-inner">
          <div className="nav-logo">
            <Image src="/icon.png" alt="Shepherd" width={36} height={36} />
            Shepherd
          </div>
          <ul className="nav-links">
            <li><a href="#mission">Mission</a></li>
            <li><a href="#screenshots">Screenshots</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#feedback">Feedback</a></li>
          </ul>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="hero">
        <div className="container">
          <h1>
            Grow in faith,<br />
            <span>one lesson at a time.</span>
          </h1>
          <p>
            Shepherd is a free mobile app for new and seasoned Christians who want to
            explore the Bible through engaging quizzes, verse memorization, and
            character-guided lessons.
          </p>
          <div className="hero-buttons">
            <a className="btn btn-primary" href="#feedback">Share feedback</a>
            <a className="btn btn-outline" href="#mission">Learn more</a>
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="mission" id="mission">
        <div className="container">
          <span className="section-label">Our mission</span>
          <h2 className="section-title">Making the Bible accessible to everyone</h2>
          <p className="section-sub">
            Whether you are taking your first steps in faith or have walked with God for
            decades, Shepherd meets you where you are and helps you go deeper.
          </p>

          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon" style={{ background: '#EFF6FF' }}>🌱</div>
              <h3>For new believers</h3>
              <p>
                Start with the basics — who are the key people of the Bible, what are the
                core themes, and where do the books fit together? Friendly characters guide
                you every step of the way.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon" style={{ background: '#ECFDF5' }}>📖</div>
              <h3>For experienced Christians</h3>
              <p>
                Deepen your knowledge with harder questions on parables, timeline events,
                and verse memorisation. Challenge yourself and discover how much more
                there is to learn.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon" style={{ background: '#FFF7ED' }}>🎯</div>
              <h3>Learn through play</h3>
              <p>
                Short daily lessons, XP points, streaks, and a leaderboard keep you
                motivated. Learning the Bible has never felt this rewarding.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon" style={{ background: '#F5F3FF' }}>🤝</div>
              <h3>Community-driven</h3>
              <p>
                Questions are continuously improved based on your feedback. If something
                is wrong or unclear, you can report it directly so it gets fixed quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Screenshots ── */}
      <section className="screenshots" id="screenshots">
        <div className="container">
          <span className="section-label">The app</span>
          <h2 className="section-title">See it in action</h2>
          <p className="section-sub">
            A clean, distraction-free experience designed to keep your focus on the Word.
          </p>

          <div className="screenshots-grid">
            {SCREENSHOTS.length > 0
              ? SCREENSHOTS.map((s, i) => (
                  <div className="screenshot-frame" key={i}>
                    <Image src={s.src} alt={s.caption} width={220} height={440} />
                    <div className="screenshot-caption">{s.caption}</div>
                  </div>
                ))
              : PLACEHOLDER_SCREENS.map((s, i) => (
                  <div className="screenshot-frame" key={i}>
                    <div className="screenshot-placeholder">
                      <span>{s.emoji}</span>
                      {s.caption}
                      <small style={{ marginTop: 8, color: '#D1D5DB' }}>
                        Add screenshot to<br />public/screenshots/
                      </small>
                    </div>
                    <div className="screenshot-caption">{s.caption}</div>
                  </div>
                ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="features" id="features">
        <div className="container">
          <span className="section-label">Features</span>
          <h2 className="section-title">Everything you need to grow</h2>

          <div className="features-grid">
            {[
              { emoji: '👤', title: 'Bible characters', desc: 'Learn about prophets, kings, apostles, and women of faith through focused lesson sets.' },
              { emoji: '📖', title: 'Themes & books', desc: 'Dive into love, grace, prayer, and more — or study individual books of the Bible.' },
              { emoji: '🗓️', title: 'Bible timeline', desc: 'Put events in chronological order and understand how the whole story fits together.' },
              { emoji: '📜', title: 'Verse memorisation', desc: 'Progressive exercises that gradually hide more words, helping you lock verses into memory.' },
              { emoji: '🎭', title: 'Parables', desc: 'Explore the parables of Jesus in depth, understanding their context and meaning.' },
              { emoji: '🏆', title: 'XP & streaks', desc: 'Earn experience points, build daily streaks, and track your progress over time.' },
            ].map((f, i) => (
              <div className="feature-card" key={i}>
                <div className="feature-emoji">{f.emoji}</div>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feedback ── */}
      <section className="feedback" id="feedback">
        <div className="container">
          <div className="feedback-inner">
            <span className="section-label">Feedback</span>
            <h2 className="section-title">Help us make Shepherd better</h2>
            <p className="section-sub" style={{ marginBottom: 40 }}>
              Found an incorrect question? Have a great idea for a new lesson? Let us know —
              every submission is read and considered.
            </p>
            <FeedbackForm />
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer>
        <div className="container">
          <p>© {new Date().getFullYear()} <strong>Shepherd</strong> · Made with faith and care</p>
        </div>
      </footer>
    </>
  );
}
