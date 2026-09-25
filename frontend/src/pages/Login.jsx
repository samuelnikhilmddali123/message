import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link, useLocation } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    
    const searchParams = new URLSearchParams(location.search);
    const redirect = searchParams.get('redirect');
    
    if (redirect === 'donate') {
      navigate('/donate');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="container py-16 animate-fade-in" style={{ padding: '4.5rem 1.5rem 6rem' }}>
      <div className="container-narrow" style={{ maxWidth: '480px' }}>
        
        <div style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid var(--border-parchment)',
          boxShadow: 'var(--shadow-book)',
          padding: '3rem 2.5rem',
          borderRadius: '4px',
          textAlign: 'center'
        }}>
          
          <div style={{ color: 'var(--gold-deep)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>✝</div>
          <span className="category-badge" style={{ marginBottom: '0.5rem' }}>Fellowship Sign In</span>
          
          <h1 className="font-display text-4xl" style={{ color: 'var(--text-dark)', marginBottom: '0.5rem' }}>
            Welcome Back
          </h1>
          
          <p className="font-reading text-base text-muted" style={{ fontStyle: 'italic', marginBottom: '2rem' }}>
            "The Lord is near to all who call on Him in truth." — Psalm 145:18
          </p>

          <form onSubmit={handleSubmit} className="flex-col gap-4 text-left">
            <div>
              <label className="font-sans text-xs text-muted" style={{ display: 'block', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                Email Address
              </label>
              <input 
                type="email" 
                className="input" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required 
              />
            </div>

            <div>
              <label className="font-sans text-xs text-muted" style={{ display: 'block', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                Password
              </label>
              <input 
                type="password" 
                className="input" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required 
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.85rem', marginTop: '0.75rem', fontSize: '0.95rem' }}>
              Enter Sanctuary
            </button>
          </form>

          <p className="font-sans text-xs text-muted" style={{ marginTop: '2rem' }}>
            New to our fellowship? <Link to="/register" style={{ color: 'var(--gold-deep)', textDecoration: 'underline', fontWeight: 600 }}>Create an Account</Link>
          </p>
          
          <div style={{ marginTop: '1.5rem', padding: '0.85rem', backgroundColor: 'var(--bg-cream)', border: '1px solid var(--border-parchment)', fontSize: '0.8125rem', color: 'var(--text-muted)', borderRadius: '4px' }}>
            💡 <em>Demo test:</em> Use any email containing <strong>'paid'</strong> (e.g. <code>paid@faith.org</code>) to test Lifetime Partner access.
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
