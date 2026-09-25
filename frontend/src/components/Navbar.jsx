import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Menu, X, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  const handleLogout = () => {
    logout();
    navigate('/');
    setMobileMenuOpen(false);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email) return;
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setContactModalOpen(false);
      setContactForm({ name: '', email: '', message: '' });
    }, 2000);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header style={{ 
        backgroundColor: '#FFFFFF', 
        borderBottom: '1px solid #EAE5DB',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 1px 4px rgba(0, 0, 0, 0.03)'
      }}>
        <div className="container flex items-center justify-between" style={{ height: '76px' }}>
          
          {/* Left: Faith Journey Brand & Cross */}
          <Link to="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
            {/* Elegant Latin Cross Symbol */}
            <div style={{
              color: '#B88536',
              fontSize: '2rem',
              lineHeight: 1,
              fontWeight: 700,
              fontFamily: 'serif'
            }}>
              ✝
            </div>
            <div className="flex-col">
              <span className="font-display" style={{ 
                color: '#18231C', 
                fontWeight: 700, 
                fontSize: '1.45rem', 
                letterSpacing: '-0.01em', 
                lineHeight: 1 
              }}>
                Faith Journey
              </span>
              <span style={{ 
                fontSize: '0.625rem', 
                fontFamily: 'var(--font-sans)', 
                color: '#5A625C', 
                fontWeight: 600, 
                letterSpacing: '0.12em', 
                textTransform: 'uppercase',
                marginTop: '2px'
              }}>
                CHRISTIAN MESSAGES
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" style={{ display: 'flex' }}>
            <Link 
              to="/" 
              style={{ 
                fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: isActive('/') ? '#18231C' : '#4B5563',
                position: 'relative',
                padding: '6px 0'
              }}
            >
              Home
              {isActive('/') && (
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: '#B88536',
                  borderRadius: '1px'
                }} />
              )}
            </Link>

            <Link 
              to="/messages" 
              style={{ 
                fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: isActive('/messages') ? '#18231C' : '#4B5563',
                position: 'relative',
                padding: '6px 0'
              }}
            >
              Messages
              {isActive('/messages') && (
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: '#B88536',
                  borderRadius: '1px'
                }} />
              )}
            </Link>

            <Link 
              to="/about" 
              style={{ 
                fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: isActive('/about') ? '#18231C' : '#4B5563',
                position: 'relative',
                padding: '6px 0'
              }}
            >
              About
              {isActive('/about') && (
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: '#B88536',
                  borderRadius: '1px'
                }} />
              )}
            </Link>

            <button 
              onClick={() => setContactModalOpen(true)}
              style={{ 
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#4B5563',
                padding: '6px 0'
              }}
            >
              Contact
            </button>

            <Link 
              to="/donate" 
              style={{ 
                fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: isActive('/donate') ? '#18231C' : '#4B5563',
                position: 'relative',
                padding: '6px 0'
              }}
            >
              Donate
              {isActive('/donate') && (
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: '#B88536',
                  borderRadius: '1px'
                }} />
              )}
            </Link>
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3" style={{ display: 'flex' }}>
            {user ? (
              <div className="flex items-center gap-3">
                <Link 
                  to="/dashboard" 
                  className="btn btn-nav-login"
                >
                  Dashboard
                </Link>
                {user.role === 'admin' && (
                  <Link 
                    to="/admin" 
                    className="btn btn-outline-white"
                    style={{ padding: '0.45rem 0.85rem', fontSize: '0.825rem' }}
                  >
                    Admin
                  </Link>
                )}
                <button 
                  onClick={handleLogout} 
                  className="btn btn-outline-white"
                  style={{ padding: '0.45rem 0.85rem', fontSize: '0.825rem' }}
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link 
                  to="/login" 
                  className="btn btn-nav-login"
                >
                  Login
                </Link>
                <Link 
                  to="/donate" 
                  className="btn btn-nav-donate"
                >
                  Join / Donate
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu hamburger */}
          <button 
            className="md:hidden flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#18231C', padding: '0.5rem' }}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div style={{
            backgroundColor: '#FFFFFF',
            borderTop: '1px solid #EAE5DB',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <Link to="/" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 500, padding: '0.4rem 0' }}>Home</Link>
            <Link to="/messages" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 500, padding: '0.4rem 0' }}>Messages</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 500, padding: '0.4rem 0' }}>About</Link>
            <button 
              onClick={() => { setMobileMenuOpen(false); setContactModalOpen(true); }} 
              style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', fontWeight: 500, padding: '0.4rem 0', fontFamily: 'inherit', fontSize: '1rem', color: 'inherit' }}
            >
              Contact
            </button>
            <Link to="/donate" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 500, padding: '0.4rem 0' }}>Donate</Link>
            
            <div style={{ height: '1px', backgroundColor: '#EAE5DB', margin: '0.5rem 0' }}></div>
            
            {user ? (
              <div className="flex-col gap-2">
                <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)} className="btn btn-outline-white w-full text-center">Dashboard</Link>
                <button onClick={handleLogout} className="btn btn-outline-white w-full">Sign Out</button>
              </div>
            ) : (
              <div className="flex-col gap-2">
                <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="btn btn-outline-white w-full text-center">Login</Link>
                <Link to="/donate" onClick={() => setMobileMenuOpen(false)} className="btn btn-green w-full text-center">Join / Donate</Link>
              </div>
            )}
          </div>
        )}
      </header>

      {/* Contact Modal */}
      {contactModalOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(3px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '1rem'
        }}>
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '12px',
            maxWidth: '480px',
            width: '100%',
            padding: '2rem',
            position: 'relative',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
          }}>
            <button 
              onClick={() => setContactModalOpen(false)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#6B7280'
              }}
            >
              <X size={20} />
            </button>

            <div className="text-center" style={{ marginBottom: '1.5rem' }}>
              <div style={{ color: '#B88536', fontSize: '1.5rem', marginBottom: '0.25rem' }}>✝</div>
              <h3 className="font-display text-2xl" style={{ color: '#18231C' }}>Connect with Faith Journey</h3>
              <p className="text-sm text-muted" style={{ marginTop: '0.25rem' }}>
                We'd love to pray with you or answer any questions about our ministry.
              </p>
            </div>

            {contactSubmitted ? (
              <div style={{
                backgroundColor: '#ECFDF5',
                color: '#065F46',
                padding: '1.5rem',
                borderRadius: '8px',
                textAlign: 'center',
                fontWeight: 500
              }}>
                ✓ Thank you! Your message has been received. May God bless you!
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="flex-col gap-3">
                <div>
                  <label className="text-xs" style={{ fontWeight: 600, color: '#374151', display: 'block', marginBottom: '4px' }}>Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Your name" 
                    className="input" 
                    value={contactForm.name} 
                    onChange={e => setContactForm({ ...contactForm, name: e.target.value })} 
                  />
                </div>

                <div>
                  <label className="text-xs" style={{ fontWeight: 600, color: '#374151', display: 'block', marginBottom: '4px' }}>Email</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="your.email@example.com" 
                    className="input" 
                    value={contactForm.email} 
                    onChange={e => setContactForm({ ...contactForm, email: e.target.value })} 
                  />
                </div>

                <div>
                  <label className="text-xs" style={{ fontWeight: 600, color: '#374151', display: 'block', marginBottom: '4px' }}>Message or Prayer Request</label>
                  <textarea 
                    rows={3} 
                    required 
                    placeholder="How can we encourage or pray for you?" 
                    className="input" 
                    style={{ resize: 'vertical' }}
                    value={contactForm.message} 
                    onChange={e => setContactForm({ ...contactForm, message: e.target.value })} 
                  />
                </div>

                <button type="submit" className="btn btn-green w-full" style={{ marginTop: '0.5rem', padding: '0.75rem' }}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
