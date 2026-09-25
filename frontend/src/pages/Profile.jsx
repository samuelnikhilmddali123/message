import { useAuth } from '../context/AuthContext';
import { ShieldCheck, User, Mail, Calendar, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { user } = useAuth();

  const formatDate = (isoString) => {
    if (!isoString) return 'Active Member';
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="container py-12 animate-fade-in" style={{ maxWidth: '640px' }}>
      
      <div className="card card-gold-accent flex-col gap-6" style={{ padding: '2.5rem 2rem' }}>
        
        <div className="text-center">
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'rgba(212,175,55,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1rem',
            color: 'var(--gold-primary)',
            fontSize: '1.6rem'
          }}>
            ✝
          </div>
          <span className="badge-gold mb-2">Member in Christ</span>
          <h1 className="text-3xl font-cinzel">{user?.name || 'Faithful Believer'}</h1>
          <p className="text-xs text-muted font-serif italic mt-1">"You are a chosen people, a royal priesthood, a holy nation." — 1 Peter 2:9</p>
        </div>

        <div className="flex-col gap-4 mt-4 pt-6 border-t" style={{ borderColor: 'var(--border-light)' }}>
          <div className="flex justify-between items-center py-2 border-b" style={{ borderColor: 'var(--border-light)' }}>
            <span className="text-sm text-muted">Email Address</span>
            <span className="text-base font-500">{user?.email || 'N/A'}</span>
          </div>

          <div className="flex justify-between items-center py-2 border-b" style={{ borderColor: 'var(--border-light)' }}>
            <span className="text-sm text-muted">Ministry Fellowship Since</span>
            <span className="text-base font-500">{formatDate(user?.joinedAt)}</span>
          </div>

          <div className="flex justify-between items-center py-2">
            <span className="text-sm text-muted">Access Level</span>
            <div>
              {user?.hasLifetimeAccess ? (
                <span className="badge-gold" style={{ background: 'rgba(212,175,55,0.15)', color: 'var(--gold-hover)', borderColor: 'var(--gold-primary)' }}>
                  <ShieldCheck size={14} />
                  Lifetime Faith Partner ✓
                </span>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted">Free Fellowship Tier</span>
                  <Link to="/donate" className="btn btn-primary" style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem' }}>
                    Unlock Access
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-4 p-4 rounded text-center" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
          <p className="text-xs text-muted font-serif italic">
            "May the peace of God, which surpasses all understanding, guard your heart and mind in Christ Jesus." — Philippians 4:7
          </p>
        </div>

      </div>
    </div>
  );
};

export default Profile;
