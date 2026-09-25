import { useParams, Link } from 'react-router-dom';
import { messages } from '../data/messages';
import { useAuth } from '../context/AuthContext';
import { ArrowLeft, Lock, Share2, Check } from 'lucide-react';
import { useState } from 'react';

const MessageDetail = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [copied, setCopied] = useState(false);
  
  const message = messages.find(m => m.id === parseInt(id));

  if (!message) {
    return (
      <div className="container py-24 text-center">
        <h2 className="font-display text-3xl mb-4">Message Not Found</h2>
        <Link to="/messages" className="btn btn-primary">Return to Messages</Link>
      </div>
    );
  }

  const isLockedForUser = message.isLocked && (!user || !user.hasLifetimeAccess);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article className="animate-fade-in" style={{ backgroundColor: 'var(--bg-parchment)', minHeight: '80vh', padding: '3.5rem 0 6rem' }}>
      <div className="container-narrow">
        
        {/* Navigation back and share */}
        <div className="flex justify-between items-center" style={{ marginBottom: '2.5rem' }}>
          <Link to="/messages" className="font-sans text-sm text-muted hover:text-gold flex items-center gap-1">
            <ArrowLeft size={16} /> Back to Christian Messages
          </Link>
          <button 
            onClick={handleShare}
            className="btn btn-secondary" 
            style={{ padding: '0.35rem 0.85rem', fontSize: '0.8rem' }}
          >
            {copied ? (
              <span className="flex items-center gap-1 text-gold"><Check size={14} /> Link Copied</span>
            ) : (
              <span className="flex items-center gap-1"><Share2 size={14} /> Share Devotional</span>
            )}
          </button>
        </div>

        {/* Header Block */}
        <header className="text-center" style={{ marginBottom: '2.5rem' }}>
          <div style={{ color: 'var(--gold-deep)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>✝</div>
          <span className="category-badge" style={{ marginBottom: '0.75rem' }}>{message.category}</span>
          
          <h1 className="font-display text-4xl" style={{ color: 'var(--text-dark)', margin: '0.5rem 0 1.25rem', lineHeight: 1.2 }}>
            {message.title}
          </h1>

          <div className="font-sans text-xs text-muted flex justify-center items-center gap-3">
            <span>By {message.author}</span>
            <span>•</span>
            <span>{message.date}</span>
            {message.readTime && (
              <>
                <span>•</span>
                <span>{message.readTime}</span>
              </>
            )}
          </div>
        </header>

        {/* Large Scripture Anchor Callout */}
        {message.verseText && (
          <div className="scripture-parchment">
            <p>"{message.verseText}"</p>
            <cite>— {message.scripture}</cite>
          </div>
        )}

        {/* Reading Content or Locked Screen */}
        {isLockedForUser ? (
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--border-gold-subtle)',
            boxShadow: 'var(--shadow-book)',
            padding: '3.5rem 2rem',
            textAlign: 'center',
            margin: '3rem 0',
            borderRadius: '4px'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--gold-deep)' }}>
              🔒
            </div>

            <span className="category-badge" style={{ marginBottom: '0.5rem' }}>Protected Devotional</span>
            <h2 className="font-display text-3xl" style={{ color: 'var(--text-dark)', marginBottom: '1rem' }}>
              Go Deeper Into God's Word
            </h2>

            <p className="font-reading text-lg text-muted" style={{ maxWidth: '560px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
              Support this ministry with a one-time gift of <strong>$5 or more</strong> and receive lifetime access to our complete collection of Christian messages and devotional teachings.
            </p>

            <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
              <Link to="/donate" className="btn btn-primary" style={{ padding: '0.85rem 2rem', fontSize: '1rem' }}>
                Give $5+ & Receive Lifetime Access
              </Link>
              
              {!user && (
                <p className="font-sans text-xs text-muted">
                  Already a member? <Link to="/login" style={{ color: 'var(--gold-deep)', textDecoration: 'underline', fontWeight: 600 }}>Sign in to read</Link>
                </p>
              )}
            </div>
          </div>
        ) : (
          <div className="article-reading" style={{ marginTop: '2.5rem' }}>
            <div dangerouslySetInnerHTML={{ __html: message.content }} />
            
            {/* Benediction Footer Box */}
            <div style={{ 
              marginTop: '4rem', 
              padding: '2rem', 
              backgroundColor: 'var(--bg-cream)',
              borderTop: '1px solid var(--border-parchment)',
              borderBottom: '1px solid var(--border-parchment)',
              textAlign: 'center'
            }}>
              <div style={{ color: 'var(--gold-antique)', marginBottom: '0.5rem' }}>✝</div>
              <h4 className="font-cinzel text-sm" style={{ color: 'var(--gold-deep)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                THE BENEDICTION
              </h4>
              <p className="font-display italic" style={{ fontSize: '1.25rem', color: 'var(--text-dark)', margin: 0 }}>
                "The Lord bless you and keep you; the Lord make His face shine upon you and be gracious to you; the Lord lift up His countenance upon you and give you peace."
              </p>
              <span className="font-cinzel text-xs text-muted" style={{ display: 'block', marginTop: '0.5rem' }}>— Numbers 6:24-26</span>
            </div>
          </div>
        )}

        {/* Back Link */}
        <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
          <Link to="/messages" className="btn btn-secondary">
            &larr; Back to All Messages
          </Link>
        </div>

      </div>
    </article>
  );
};

export default MessageDetail;
