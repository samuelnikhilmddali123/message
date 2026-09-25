import { Link } from 'react-router-dom';
import { useState } from 'react';
import { X } from 'lucide-react';

const Footer = () => {
  const [modalType, setModalType] = useState(null);

  return (
    <>
      <footer style={{ 
        backgroundColor: '#18181B', 
        color: '#D4D4D8', 
        padding: '1.25rem 0',
        marginTop: 'auto',
        fontSize: '0.8125rem'
      }}>
        <div className="container flex items-center justify-between flex-wrap gap-4">
          <div>
            &copy; 2026 Faith Journey. All Rights Reserved.
          </div>

          <div className="flex items-center gap-3" style={{ color: '#A1A1AA' }}>
            <button 
              onClick={() => setModalType('privacy')} 
              style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: 'inherit' }}
            >
              Privacy Policy
            </button>
            <span>|</span>
            <button 
              onClick={() => setModalType('terms')} 
              style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: 'inherit' }}
            >
              Terms of Use
            </button>
            <span>|</span>
            <Link 
              to="/about" 
              style={{ color: 'inherit' }}
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>

      {/* Policy Modals */}
      {modalType && (
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
            maxWidth: '540px',
            width: '100%',
            padding: '2rem',
            position: 'relative',
            color: '#18231C'
          }}>
            <button 
              onClick={() => setModalType(null)}
              style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <X size={20} />
            </button>

            <h3 className="font-display text-2xl" style={{ marginBottom: '1rem' }}>
              {modalType === 'privacy' ? 'Privacy Policy' : 'Terms of Use'}
            </h3>

            <div style={{ maxHeight: '320px', overflowY: 'auto', fontSize: '0.9rem', color: '#4B5563', lineHeight: 1.6 }}>
              {modalType === 'privacy' ? (
                <>
                  <p style={{ marginBottom: '0.75rem' }}>
                    At Faith Journey, we respect and safeguard your personal information. When you donate or subscribe to receive our Christian messages, your email is kept strictly private.
                  </p>
                  <p style={{ marginBottom: '0.75rem' }}>
                    We do not sell, rent, or share user data with third-party advertisers. Payments are processed with bank-level security encryption.
                  </p>
                  <p>
                    For inquiries or to delete your record at any time, please contact our ministry team.
                  </p>
                </>
              ) : (
                <>
                  <p style={{ marginBottom: '0.75rem' }}>
                    Faith Journey provides Christ-centered devotionals, scriptures, and teachings for spiritual growth and personal reflection.
                  </p>
                  <p style={{ marginBottom: '0.75rem' }}>
                    Lifetime access is granted upon any single donation of $5 or more, unlocking all written messages and future ministry devotionals.
                  </p>
                  <p>
                    Content may be shared for personal study, small groups, and church ministries with proper credit.
                  </p>
                </>
              )}
            </div>

            <button 
              onClick={() => setModalType(null)}
              className="btn btn-green w-full" 
              style={{ marginTop: '1.5rem', padding: '0.65rem' }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
