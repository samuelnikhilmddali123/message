import { Link } from 'react-router-dom';
import { messages, categories } from '../data/messages';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Search, ArrowRight, Lock } from 'lucide-react';

const MessagesList = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { user } = useAuth();
  
  const filteredMessages = messages.filter(m => {
    const matchesCategory = activeCategory === 'All' || m.category === activeCategory;
    const matchesSearch = m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          m.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (m.scripture && m.scripture.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container py-16 animate-fade-in" style={{ padding: '4.5rem 1.5rem 6rem' }}>
      
      {/* Header */}
      <div className="text-center" style={{ marginBottom: '3.5rem' }}>
        <div style={{ color: 'var(--gold-deep)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>✝</div>
        <span className="category-badge" style={{ marginBottom: '0.5rem' }}>The Written Word</span>
        <h1 className="font-display text-4xl" style={{ color: 'var(--text-dark)', marginBottom: '0.75rem' }}>
          Christian Messages & Devotionals
        </h1>
        <p className="font-reading text-lg text-muted" style={{ maxWidth: '620px', margin: '0 auto' }}>
          Explore written teachings grounded in Holy Scripture, designed to encourage your spirit and deepen your walk with Jesus Christ.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex-col gap-6 items-center" style={{ marginBottom: '3.5rem' }}>
        
        {/* Search */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '520px' }}>
          <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input 
            type="text"
            className="input"
            placeholder="Search scripture, topic or title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ paddingLeft: '2.75rem', backgroundColor: '#FFFFFF' }}
          />
        </div>

        {/* Category Filters */}
        <div className="flex gap-2 justify-center flex-wrap" style={{ maxWidth: '900px' }}>
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`btn ${activeCategory === cat ? 'btn-primary' : 'btn-secondary'}`}
              style={{ padding: '0.45rem 1.1rem', fontSize: '0.85rem' }}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* Messages Grid */}
      {filteredMessages.length === 0 ? (
        <div className="devotional-card text-center py-12" style={{ maxWidth: '500px', margin: '0 auto' }}>
          <p className="font-reading text-lg text-muted mb-4">No messages found matching your search.</p>
          <button onClick={() => { setSearchQuery(''); setActiveCategory('All'); }} className="btn btn-secondary">
            Clear Filters
          </button>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))', gap: '2.5rem' }}>
          {filteredMessages.map(msg => {
            const isLockedForUser = msg.isLocked && (!user || !user.hasLifetimeAccess);
            
            return (
              <article key={msg.id} className="devotional-card flex-col justify-between" style={{ display: 'flex' }}>
                <div>
                  <div className="flex justify-between items-center" style={{ marginBottom: '1rem', borderBottom: '1px solid var(--border-parchment)', paddingBottom: '0.5rem' }}>
                    <span className="category-badge">{msg.category}</span>
                    <span className="text-xs text-muted font-sans">{msg.date}</span>
                  </div>

                  <h3 className="font-display text-2xl" style={{ marginBottom: '0.75rem', color: 'var(--text-dark)' }}>
                    {msg.title}
                  </h3>

                  {msg.verseText && (
                    <div style={{ 
                      borderLeft: '2px solid var(--gold-antique)', 
                      padding: '0.65rem 0.85rem',
                      margin: '0.85rem 0 1rem',
                      backgroundColor: 'var(--bg-cream)'
                    }}>
                      <p className="font-reading" style={{ fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--text-dark)', margin: 0 }}>
                        "{msg.verseText}"
                      </p>
                      <span className="font-cinzel" style={{ fontSize: '0.75rem', color: 'var(--gold-deep)', display: 'block', marginTop: '0.25rem', fontWeight: 600 }}>
                        — {msg.scripture}
                      </span>
                    </div>
                  )}

                  <p className="text-muted font-reading" style={{ fontSize: '1.05rem', lineHeight: 1.65 }}>
                    {msg.excerpt}
                  </p>
                </div>
                
                <div style={{ marginTop: '1.75rem', paddingTop: '1rem', borderTop: '1px solid var(--border-parchment)' }} className="flex justify-between items-center">
                  <Link to={`/messages/${msg.id}`} className="font-sans" style={{ 
                    color: 'var(--gold-deep)', 
                    fontWeight: 600, 
                    fontSize: '0.9rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}>
                    Read Message <ArrowRight size={15} />
                  </Link>

                  {isLockedForUser ? (
                    <span className="font-sans text-xs flex items-center gap-1" style={{ color: 'var(--gold-deep)', fontWeight: 600 }}>
                      <Lock size={12} /> Member Offering
                    </span>
                  ) : (
                    <span className="font-sans text-xs text-muted">Free Access</span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      )}
      
      {/* Bottom Lifetime Access Stewardship Card */}
      {(!user || !user.hasLifetimeAccess) && (
        <div style={{ 
          marginTop: '5rem',
          backgroundColor: 'var(--bg-cream)',
          border: '1px solid var(--border-gold-subtle)',
          padding: '3rem 2rem',
          textAlign: 'center'
        }}>
          <div style={{ color: 'var(--gold-deep)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>🕊️</div>
          <h3 className="font-display text-3xl" style={{ color: 'var(--text-dark)', marginBottom: '0.5rem' }}>
            Unlock Lifetime Access to All Messages
          </h3>
          <p className="font-reading text-lg text-muted" style={{ maxWidth: '640px', margin: '0 auto 1.75rem' }}>
            Support our Christian ministry with a single gift of $5 or more and read our full collection of devotionals anytime. No recurring subscriptions.
          </p>
          <Link to="/donate" className="btn btn-primary" style={{ padding: '0.85rem 2rem' }}>
            Give $5+ & Receive Lifetime Access
          </Link>
        </div>
      )}

    </div>
  );
};

export default MessagesList;
