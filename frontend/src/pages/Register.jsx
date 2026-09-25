import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [designation, setDesignation] = useState('');
  const [location, setLocation] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    register(name, email, password, designation, location);
    navigate('/donate');
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
          <span className="category-badge" style={{ marginBottom: '0.5rem' }}>Fellowship Registry</span>
          
          <h1 className="font-display text-4xl" style={{ color: 'var(--text-dark)', marginBottom: '0.5rem' }}>
            Join in Fellowship
          </h1>
          
          <p className="font-reading text-base text-muted" style={{ fontStyle: 'italic', marginBottom: '2rem' }}>
            "For where two or three gather in my name, there am I with them." — Matthew 18:20
          </p>

          <form onSubmit={handleSubmit} className="flex-col gap-4 text-left">
            <div>
              <label className="font-sans text-xs text-muted" style={{ display: 'block', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                Full Name
              </label>
              <input 
                type="text" 
                className="input" 
                placeholder="e.g. John David"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
              />
            </div>
            
            <div>
              <label className="font-sans text-xs text-muted" style={{ display: 'block', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                Church or Fellowship Role (Optional)
              </label>
              <input 
                type="text" 
                className="input" 
                placeholder="e.g. Believer, Sunday School Teacher, Deacon, Pastor"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              />
            </div>

            <div>
              <label className="font-sans text-xs text-muted" style={{ display: 'block', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                Location / City (Optional)
              </label>
              <input 
                type="text" 
                className="input" 
                placeholder="e.g. Dallas, TX or Nashville, TN"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div>
              <label className="font-sans text-xs text-muted" style={{ display: 'block', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                Email Address
              </label>
              <input 
                type="email" 
                className="input" 
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                placeholder="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.85rem', marginTop: '0.75rem', fontSize: '0.95rem' }}>
              Create Account & Proceed
            </button>
          </form>

          <p className="font-sans text-xs text-muted" style={{ marginTop: '2rem' }}>
            Already a member? <Link to="/login" style={{ color: 'var(--gold-deep)', textDecoration: 'underline', fontWeight: 600 }}>Sign In</Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Register;
