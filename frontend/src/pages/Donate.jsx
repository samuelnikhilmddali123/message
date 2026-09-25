import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { ShieldCheck, Heart } from 'lucide-react';

const Donate = () => {
  const [amount, setAmount] = useState('5');
  const [customAmount, setCustomAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const { user, upgradeAccess } = useAuth();
  const navigate = useNavigate();

  const handleDonate = (e) => {
    e.preventDefault();
    if (!user) {
      // Must be logged in to tie access to account
      navigate('/login?redirect=donate');
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate reverent donation processing
    setTimeout(() => {
      setIsProcessing(false);
      upgradeAccess();
      navigate('/dashboard');
    }, 1200);
  };

  const finalAmount = amount === 'custom' ? customAmount : amount;

  const givingTiers = [
    { val: '5', label: 'Seed Offering', desc: 'Full Lifetime Access to all written messages' },
    { val: '15', label: 'Ministry Supporter', desc: 'Sponsors scripture messages for readers in need' },
    { val: '25', label: 'Kingdom Partner', desc: 'Supports ongoing pastoral writing & biblical research' },
    { val: '50', label: 'Faith Benefactor', desc: 'Extends global Christian outreach & devotions' }
  ];

  return (
    <div className="container py-16 animate-fade-in" style={{ padding: '4.5rem 1.5rem 6rem' }}>
      <div className="container-narrow">
        
        <div style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid var(--border-parchment)',
          boxShadow: 'var(--shadow-book)',
          padding: '3rem 2.5rem',
          borderRadius: '4px'
        }}>
          
          {/* Header */}
          <div className="text-center" style={{ marginBottom: '2rem' }}>
            <div style={{ color: 'var(--gold-deep)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>✝</div>
            <span className="category-badge" style={{ marginBottom: '0.5rem' }}>Christian Stewardship</span>
            
            <h1 className="font-display text-4xl" style={{ color: 'var(--text-dark)', marginBottom: '0.75rem' }}>
              Support Grace & Glory Ministry
            </h1>

            <p className="font-reading text-lg text-muted" style={{ maxWidth: '580px', margin: '0 auto', lineHeight: 1.6 }}>
              Support this ministry with a one-time gift of <strong>$5 or more</strong> and receive lifetime access to our complete collection of Christian messages and devotional teachings.
            </p>
          </div>

          {/* Scripture Anchor */}
          <blockquote className="scripture-parchment" style={{ margin: '1.5rem 0 2rem' }}>
            <p className="font-display" style={{ fontSize: '1.25rem', margin: 0 }}>
              "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
            </p>
            <cite className="font-cinzel" style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>— 2 Corinthians 9:7</cite>
          </blockquote>

          {/* Giving Form */}
          <form onSubmit={handleDonate} className="flex-col gap-5">
            
            {/* 3 Value Pillars */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '1rem',
              backgroundColor: 'var(--bg-cream)',
              border: '1px solid var(--border-parchment)',
              padding: '1.25rem',
              textAlign: 'center',
              borderRadius: '4px'
            }}>
              <div>
                <span className="font-cinzel text-xs text-muted" style={{ display: 'block' }}>GIFT TYPE</span>
                <strong className="font-display text-lg" style={{ color: 'var(--text-dark)' }}>ONE-TIME GIFT</strong>
              </div>
              <div>
                <span className="font-cinzel text-xs text-muted" style={{ display: 'block' }}>MINIMUM</span>
                <strong className="font-display text-xl" style={{ color: 'var(--gold-deep)' }}>$5+</strong>
              </div>
              <div>
                <span className="font-cinzel text-xs text-muted" style={{ display: 'block' }}>ACCESS</span>
                <strong className="font-display text-lg" style={{ color: 'var(--text-dark)' }}>LIFETIME ACCESS</strong>
              </div>
            </div>

            {/* Select Gift Tier */}
            <div>
              <label className="font-sans text-xs text-muted" style={{ display: 'block', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                Select Your Offering Amount
              </label>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.75rem' }}>
                {givingTiers.map(t => (
                  <button
                    key={t.val}
                    type="button"
                    onClick={() => setAmount(t.val)}
                    style={{
                      padding: '0.85rem 0.5rem',
                      border: amount === t.val ? '2px solid var(--gold-antique)' : '1px solid var(--border-parchment)',
                      backgroundColor: amount === t.val ? 'var(--bg-cream)' : '#FFFFFF',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      textAlign: 'center'
                    }}
                  >
                    <span className="font-display text-2xl" style={{ display: 'block', color: 'var(--text-dark)', fontWeight: 600 }}>${t.val}</span>
                    <span className="font-sans text-xs text-muted" style={{ display: 'block', marginTop: '0.2rem' }}>{t.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Amount Button */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setAmount('custom')}
                className={`btn ${amount === 'custom' ? 'btn-primary' : 'btn-secondary'}`}
                style={{ fontSize: '0.85rem', padding: '0.45rem 1rem' }}
              >
                Custom Amount
              </button>
              {amount === 'custom' && (
                <input
                  type="number"
                  min="5"
                  placeholder="Enter gift amount (min $5)"
                  className="input"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  style={{ maxWidth: '240px' }}
                  required
                />
              )}
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.95rem', fontSize: '1.05rem', marginTop: '0.5rem' }}
              disabled={isProcessing || (amount === 'custom' && (!customAmount || parseFloat(customAmount) < 5))}
            >
              {isProcessing ? 'Processing Offering...' : `Give $${finalAmount || '5'} & Receive Lifetime Access`}
            </button>

            {/* Active Partner Notice or Free Account Alert */}
            {user?.hasLifetimeAccess ? (
              <div style={{ padding: '1rem', backgroundColor: 'var(--bg-cream)', border: '1px solid var(--border-gold-subtle)', textAlign: 'center', borderRadius: '4px' }}>
                <p className="font-reading text-sm" style={{ color: 'var(--gold-deep)', margin: 0 }}>
                  ✝ You already hold <strong>Lifetime Access</strong>. Any additional gift is a voluntary offering to bless the ongoing publication of God's Word.
                </p>
              </div>
            ) : (
              <p className="font-sans text-xs text-muted text-center">
                🔒 Safe, secure, and purely voluntary. No monthly subscription or automated renewals.
              </p>
            )}

            {!user && (
              <p className="font-sans text-xs text-muted text-center" style={{ marginTop: '0.5rem' }}>
                Already registered? <Link to="/login?redirect=donate" style={{ color: 'var(--gold-deep)', textDecoration: 'underline' }}>Sign in to connect your gift</Link>
              </p>
            )}

          </form>

        </div>

      </div>
    </div>
  );
};

export default Donate;
