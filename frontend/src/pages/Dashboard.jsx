import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { messages } from '../data/messages';
import { ArrowRight, Check } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();
  const currentDevotional = messages[0];
  const recentlyAdded = messages.slice(1, 4);

  return (
    <div className="container py-16 animate-fade-in" style={{ padding: '4rem 1.5rem 6rem' }}>
      
      {/* Top Sanctuary Greeting */}
      <div className="flex justify-between items-start flex-wrap gap-4" style={{ marginBottom: '3rem', borderBottom: '1px solid var(--border-parchment)', paddingBottom: '2rem' }}>
        <div>
          <span className="category-badge" style={{ marginBottom: '0.25rem' }}>Personal Devotional Sanctuary</span>
          <h1 className="font-display text-4xl" style={{ color: 'var(--text-dark)', marginTop: '0.25rem' }}>
            Welcome back, {user?.name || 'Faithful Reader'}
          </h1>
          <p className="font-reading text-lg text-muted" style={{ fontStyle: 'italic', marginTop: '0.25rem' }}>
            "May God's Word encourage you today."
          </p>
        </div>

        {user?.hasLifetimeAccess ? (
          <div style={{
            backgroundColor: 'var(--bg-cream)',
            border: '1px solid var(--border-gold-subtle)',
            padding: '0.65rem 1.25rem',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span style={{ color: 'var(--gold-deep)' }}>✝</span>
            <span className="font-cinzel text-xs" style={{ color: 'var(--gold-deep)', fontWeight: 700, letterSpacing: '0.08em' }}>
              LIFETIME ACCESS ACTIVE ✓
            </span>
          </div>
        ) : (
          <Link to="/donate" className="btn btn-primary" style={{ padding: '0.65rem 1.4rem' }}>
            Get Lifetime Access ($5+)
          </Link>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
        
        {/* Left: Main Devotional Reading Space */}
        <div className="flex-col gap-8" style={{ gridColumn: 'span 2' }}>
          
          {/* Continue Reading Section */}
          <section>
            <div className="flex items-center gap-2" style={{ marginBottom: '1.25rem' }}>
              <span style={{ color: 'var(--gold-deep)' }}>📖</span>
              <h2 className="font-display text-2xl" style={{ color: 'var(--text-dark)' }}>
                Continue Reading
              </h2>
            </div>

            <div className="devotional-card" style={{ backgroundColor: '#FFFFFF' }}>
              <span className="category-badge">{currentDevotional.category}</span>
              <h3 className="font-display text-3xl" style={{ margin: '0.5rem 0 0.75rem', color: 'var(--text-dark)' }}>
                {currentDevotional.title}
              </h3>
              
              {currentDevotional.verseText && (
                <p className="font-reading text-base text-muted italic" style={{ marginBottom: '1.25rem' }}>
                  "{currentDevotional.verseText}" — {currentDevotional.scripture}
                </p>
              )}

              <p className="font-reading text-base text-body" style={{ marginBottom: '1.75rem' }}>
                {currentDevotional.excerpt}
              </p>

              <Link to={`/messages/${currentDevotional.id}`} className="btn btn-primary" style={{ padding: '0.75rem 1.6rem' }}>
                Resume Reading
              </Link>
            </div>
          </section>

          {/* Recently Added Devotionals */}
          <section style={{ marginTop: '1rem' }}>
            <div className="flex justify-between items-center" style={{ marginBottom: '1.25rem' }}>
              <div className="flex items-center gap-2">
                <span style={{ color: 'var(--gold-deep)' }}>✝</span>
                <h2 className="font-display text-2xl" style={{ color: 'var(--text-dark)' }}>
                  Recently Added Messages
                </h2>
              </div>
              <Link to="/messages" className="font-sans text-xs text-muted hover:text-gold" style={{ fontWeight: 600 }}>
                View All Catalog &rarr;
              </Link>
            </div>

            <div className="flex-col gap-4">
              {recentlyAdded.map(msg => (
                <div key={msg.id} className="devotional-card flex justify-between items-center gap-4 flex-wrap" style={{ padding: '1.25rem 1.75rem' }}>
                  <div>
                    <span className="category-badge" style={{ fontSize: '0.7rem' }}>{msg.category}</span>
                    <h4 className="font-display text-xl" style={{ color: 'var(--text-dark)', marginTop: '0.2rem' }}>
                      {msg.title}
                    </h4>
                    <span className="font-reading text-xs text-muted italic">{msg.scripture || msg.date}</span>
                  </div>
                  <Link to={`/messages/${msg.id}`} className="font-sans text-sm text-gold hover:underline font-600 flex items-center gap-1">
                    Read &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Right Sidebar: Personal Prayer & Quick Paths */}
        <div className="flex-col gap-6">
          
          {/* Prayer Reflection Box */}
          <div style={{
            backgroundColor: 'var(--bg-cream)',
            border: '1px solid var(--border-gold-subtle)',
            padding: '2rem',
            borderRadius: '4px'
          }}>
            <div style={{ color: 'var(--gold-deep)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>🙏</div>
            <h3 className="font-display text-2xl" style={{ color: 'var(--text-dark)', marginBottom: '0.5rem' }}>
              A Place for Prayer
            </h3>
            <p className="font-reading text-base text-muted" style={{ lineHeight: 1.6, marginBottom: '1.25rem' }}>
              "Be still, and know that I am God." Take a quiet moment in prayer before resuming your study of Scripture.
            </p>
            <a href="/#prayer" className="btn btn-secondary w-full text-center" style={{ width: '100%', fontSize: '0.85rem' }}>
              Go to Prayer Sanctuary
            </a>
          </div>

          {/* Stewardship Card */}
          <div className="devotional-card text-center">
            <h4 className="font-display text-xl" style={{ color: 'var(--text-dark)', marginBottom: '0.5rem' }}>
              Support the Ministry
            </h4>
            <p className="font-reading text-sm text-muted" style={{ marginBottom: '1.25rem' }}>
              {user?.hasLifetimeAccess 
                ? "You have lifetime access. If you'd like to make a voluntary gift, your offering supports spreading God's Word."
                : "A single gift of $5+ gives you lifetime access to all messages."}
            </p>
            <Link to="/donate" className="btn btn-primary w-full text-center" style={{ width: '100%', fontSize: '0.85rem' }}>
              {user?.hasLifetimeAccess ? "Give Freewill Gift" : "Unlock All Messages ($5)"}
            </Link>
          </div>

          {/* Quick Paths */}
          <div className="devotional-card">
            <h4 className="font-cinzel text-xs text-muted" style={{ letterSpacing: '0.1em', marginBottom: '1rem' }}>
              SANCTUARY NAVIGATION
            </h4>
            <ul className="flex-col gap-3 font-sans text-sm" style={{ listStyle: 'none' }}>
              <li>
                <Link to="/messages" className="text-muted hover:text-gold flex items-center gap-2">
                  <span>📖</span> All Scripture Messages
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-muted hover:text-gold flex items-center gap-2">
                  <span>✝</span> My Profile & Fellowship
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted hover:text-gold flex items-center gap-2">
                  <span>🕊️</span> Statement of Faith
                </Link>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;
