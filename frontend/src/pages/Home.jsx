import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BookOpen, Heart, ArrowRight, Lock, ShieldCheck, Mail, Check } from 'lucide-react';

const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const testimonials = [
    {
      quote: "The messages on this platform have helped me stay grounded in scripture and encouraged me through difficult seasons. The lifetime access makes it incredibly valuable.",
      author: "Christian Community Member"
    },
    {
      quote: "Starting my morning with these biblical teachings has renewed my faith and brought peace to my heart. Truly a blessing in my daily walk with Christ.",
      author: "Sarah M. — Daily Reader"
    },
    {
      quote: "The depth of scripture combined with genuine practical encouragement is God-sent. A wonderful sanctuary for anyone seeking spiritual growth.",
      author: "David K. — Ministry Supporter"
    }
  ];

  // Auto cycle testimonials every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterSubscribed(false);
      setNewsletterEmail('');
    }, 3500);
  };

  return (
    <div className="animate-fade-in" style={{ padding: '1.25rem 0 2.5rem', backgroundColor: 'var(--bg-page)' }}>
      <div className="container">
        
        {/* ============================================================ */}
        {/* 1. HERO SECTION (Rounded Banner with Mountain Sunrise & Cross) */}
        {/* ============================================================ */}
        <section style={{
          position: 'relative',
          borderRadius: '16px',
          overflow: 'hidden',
          backgroundImage: 'url(/images/faith_hero_banner.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          minHeight: '440px',
          display: 'flex',
          alignItems: 'center',
          border: '1px solid var(--border-card)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
          marginBottom: '1.75rem'
        }}>
          {/* Subtle Warm Gradient Overlay for Left Side Readability */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(250, 247, 242, 0.96) 0%, rgba(250, 247, 242, 0.90) 36%, rgba(250, 247, 242, 0.45) 58%, rgba(250, 247, 242, 0) 100%)',
            zIndex: 1
          }} />

          {/* Hero Content */}
          <div style={{
            position: 'relative',
            zIndex: 2,
            padding: '3rem 2.5rem',
            maxWidth: '560px'
          }}>
            <h1 className="font-display" style={{
              fontSize: 'clamp(2.4rem, 4vw, 3.5rem)',
              fontWeight: 700,
              color: '#18231C',
              lineHeight: 1.12,
              marginBottom: '1rem',
              letterSpacing: '-0.01em'
            }}>
              Grow Stronger<br />in Faith Every Day
            </h1>

            <p style={{
              fontSize: '0.975rem',
              color: '#374151',
              lineHeight: 1.6,
              marginBottom: '1.75rem'
            }}>
              Discover inspiring Christian messages, biblical encouragement, and life-changing teachings designed to strengthen your walk with God.
            </p>

            {/* CTA Button Group */}
            <div className="flex items-center gap-3 flex-wrap" style={{ marginBottom: '1.25rem' }}>
              <Link 
                to="/donate" 
                className="btn btn-green"
                style={{ padding: '0.75rem 1.4rem', borderRadius: '6px', fontSize: '0.875rem' }}
              >
                <Lock size={15} />
                Donate & Unlock Access
              </Link>
              <Link 
                to="/messages" 
                className="btn btn-outline-white"
                style={{ padding: '0.75rem 1.4rem', borderRadius: '6px', fontSize: '0.875rem' }}
              >
                <BookOpen size={15} />
                Read Sample Messages
              </Link>
            </div>

            {/* Lifetime Access Trust Badge */}
            <div className="flex items-center gap-2" style={{ color: '#4B5563', fontSize: '0.8125rem' }}>
              <ShieldCheck size={16} style={{ color: '#4B5563' }} />
              <span>One-time donation of $5 or more for lifetime access</span>
            </div>
          </div>
        </section>


        {/* ============================================================ */}
        {/* 2. MAIN GRID (Features & Featured Message | Donation & Reviews) */}
        {/* ============================================================ */}
        <div 
          className="main-content-grid" 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1.5fr 1fr', 
            gap: '1.5rem', 
            alignItems: 'start' 
          }}
        >
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: 3 Feature Cards + Featured Message Card     */}
          {/* ======================================================== */}
          <div className="flex-col gap-4">
            
            {/* 3 Feature Cards Row */}
            <div 
              className="feature-cards-row" 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(3, 1fr)', 
                gap: '1rem' 
              }}
            >
              
              {/* Feature 1: Biblical Insights */}
              <div className="faith-card text-center" style={{ padding: '1.75rem 1.15rem' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: '#EDF2EE',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 0.85rem',
                  color: '#1E3A2F'
                }}>
                  <BookOpen size={20} />
                </div>
                <h3 className="font-sans" style={{ fontSize: '0.95rem', fontWeight: 700, color: '#18231C', marginBottom: '0.35rem' }}>
                  Biblical Insights
                </h3>
                <p style={{ fontSize: '0.785rem', color: '#52525B', lineHeight: 1.45 }}>
                  Scripture-based teachings and reflections to deepen your understanding of God's Word.
                </p>
              </div>

              {/* Feature 2: Daily Encouragement */}
              <div className="faith-card text-center" style={{ padding: '1.75rem 1.15rem' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: '#EDF2EE',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 0.85rem',
                  color: '#1E3A2F'
                }}>
                  {/* Praying hands SVG icon */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path>
                    <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"></path>
                    <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"></path>
                    <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path>
                  </svg>
                </div>
                <h3 className="font-sans" style={{ fontSize: '0.95rem', fontWeight: 700, color: '#18231C', marginBottom: '0.35rem' }}>
                  Daily Encouragement
                </h3>
                <p style={{ fontSize: '0.785rem', color: '#52525B', lineHeight: 1.45 }}>
                  Motivational messages that help strengthen faith during life's challenges.
                </p>
              </div>

              {/* Feature 3: Lifetime Access */}
              <div className="faith-card text-center" style={{ padding: '1.75rem 1.15rem' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: '#EDF2EE',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 0.85rem',
                  color: '#1E3A2F',
                  fontSize: '1.25rem',
                  fontWeight: 'bold'
                }}>
                  ∞
                </div>
                <h3 className="font-sans" style={{ fontSize: '0.95rem', fontWeight: 700, color: '#18231C', marginBottom: '0.35rem' }}>
                  Lifetime Access
                </h3>
                <p style={{ fontSize: '0.785rem', color: '#52525B', lineHeight: 1.45 }}>
                  Donate once and enjoy unlimited access to all current and future content.
                </p>
              </div>

            </div>

            {/* Featured Message Card */}
            <div 
              className="faith-card"
              style={{
                display: 'flex',
                overflow: 'hidden',
                borderRadius: '12px',
                flexDirection: 'row'
              }}
            >
              {/* Thumbnail Image */}
              <div style={{
                width: '185px',
                minWidth: '185px',
                backgroundImage: 'url(/images/featured_message_path.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.04)'
                }} />
              </div>

              {/* Text Content */}
              <div style={{ padding: '1.5rem 1.75rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{ 
                  fontSize: '0.75rem', 
                  fontFamily: 'var(--font-sans)', 
                  fontWeight: 600, 
                  color: '#4B5563', 
                  display: 'block',
                  marginBottom: '0.3rem' 
                }}>
                  Featured Message
                </span>

                <h3 className="font-display" style={{ 
                  fontSize: '1.35rem', 
                  fontWeight: 700, 
                  color: '#18231C', 
                  lineHeight: 1.25, 
                  marginBottom: '0.45rem' 
                }}>
                  Trusting God in Uncertain Times
                </h3>

                <p style={{ 
                  fontSize: '0.8125rem', 
                  color: '#52525B', 
                  lineHeight: 1.5, 
                  marginBottom: '0.85rem' 
                }}>
                  A reminder that God is with you in every season. His plans are good, even when the path is unclear.
                </p>

                <div>
                  <Link 
                    to="/messages/3" 
                    className="flex items-center gap-1"
                    style={{ 
                      fontSize: '0.8125rem', 
                      fontWeight: 700, 
                      color: '#18231C' 
                    }}
                  >
                    Read Message <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

          </div>


          {/* ======================================================== */}
          {/* RIGHT COLUMN: One Simple Donation ($5+) & Testimonials  */}
          {/* ======================================================== */}
          <div className="flex-col gap-4">
            
            {/* Dark Green Donation Card */}
            <div style={{
              backgroundColor: '#1E3A2F',
              borderRadius: '14px',
              padding: '2.25rem 1.75rem 1.65rem',
              color: '#FFFFFF',
              textAlign: 'center',
              position: 'relative',
              boxShadow: '0 8px 24px rgba(30, 58, 47, 0.18)',
              marginTop: '10px'
            }}>
              {/* Floating Top Heart Badge */}
              <div style={{
                position: 'absolute',
                top: '-18px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: '#C28B38',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
              }}>
                <Heart size={18} fill="#FFFFFF" color="#FFFFFF" />
              </div>

              <span style={{ 
                fontSize: '0.85rem', 
                color: '#D5E2DA', 
                display: 'block', 
                marginBottom: '0.2rem',
                fontWeight: 500
              }}>
                One Simple Donation
              </span>

              <div className="font-display" style={{ 
                fontSize: '2.85rem', 
                fontWeight: 700, 
                color: '#FFFFFF', 
                lineHeight: 1.1,
                marginBottom: '0.5rem'
              }}>
                $5+
              </div>

              <p style={{ 
                fontSize: '0.8125rem', 
                color: '#D1DDD6', 
                lineHeight: 1.5, 
                maxWidth: '300px', 
                margin: '0 auto 1.35rem' 
              }}>
                Make a one-time donation of $5 or more and unlock lifetime access to all Christian messages and future updates.
              </p>

              <Link 
                to="/donate" 
                className="btn btn-amber w-full"
                style={{ 
                  padding: '0.75rem 1rem', 
                  borderRadius: '6px', 
                  fontSize: '0.875rem', 
                  gap: '0.4rem'
                }}
              >
                <Lock size={15} />
                Donate & Become a Member
              </Link>

              <span style={{ 
                display: 'block', 
                fontSize: '0.72rem', 
                color: '#9EBEAC', 
                marginTop: '0.75rem' 
              }}>
                Secure payment · Instant access · Cancel anytime
              </span>
            </div>

            {/* Testimonials Card */}
            <div className="faith-card" style={{ padding: '1.5rem 1.75rem', position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                
                {/* Quotation Symbol */}
                <div style={{ 
                  color: '#D8B884', 
                  fontSize: '2.5rem', 
                  lineHeight: 0.8, 
                  fontFamily: 'serif',
                  fontWeight: 'bold',
                  userSelect: 'none'
                }}>
                  “
                </div>

                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#18231C', marginBottom: '0.4rem' }}>
                    What Members Are Saying
                  </h4>

                  <p style={{ fontSize: '0.8125rem', color: '#4B5563', lineHeight: 1.55, marginBottom: '0.65rem', minHeight: '52px' }}>
                    {testimonials[activeTestimonial].quote}
                  </p>

                  <span style={{ fontSize: '0.775rem', fontWeight: 600, color: '#18231C', display: 'block' }}>
                    — {testimonials[activeTestimonial].author}
                  </span>
                </div>

              </div>

              {/* Testimonial Carousel Dots */}
              <div className="flex justify-center items-center gap-1" style={{ marginTop: '0.75rem' }}>
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    style={{
                      width: activeTestimonial === idx ? '8px' : '6px',
                      height: activeTestimonial === idx ? '8px' : '6px',
                      borderRadius: '50%',
                      backgroundColor: activeTestimonial === idx ? '#B88536' : '#D1D5DB',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>


        {/* ============================================================ */}
        {/* 3. NEWSLETTER SECTION ("Join our community" Strip)            */}
        {/* ============================================================ */}
        <section 
          className="newsletter-bar"
          style={{
            backgroundColor: '#ECE5D8',
            borderRadius: '12px',
            padding: '1.25rem 2rem',
            marginTop: '1.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            border: '1px solid #E2D9C9'
          }}
        >
          {/* Left info & mail icon */}
          <div className="flex items-center gap-3">
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: '#B88536',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              flexShrink: 0
            }}>
              <Mail size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#18231C', lineHeight: 1.2 }}>
                Join our community
              </h3>
              <p style={{ fontSize: '0.8125rem', color: '#4B5563', margin: 0 }}>
                Get updates on new messages and encouragement straight to your inbox.
              </p>
            </div>
          </div>

          {/* Right Email Form */}
          <div style={{ minWidth: '340px' }}>
            {newsletterSubscribed ? (
              <div className="flex items-center gap-2" style={{
                backgroundColor: '#FFFFFF',
                color: '#065F46',
                padding: '0.6rem 1.25rem',
                borderRadius: '6px',
                fontSize: '0.85rem',
                fontWeight: 600
              }}>
                <Check size={16} /> Subscribed! Thank you for joining our community.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2" style={{ width: '100%' }}>
                <input 
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={e => setNewsletterEmail(e.target.value)}
                  style={{
                    flex: 1,
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #D6D3D1',
                    borderRadius: '6px',
                    padding: '0.55rem 0.85rem',
                    fontSize: '0.85rem',
                    color: '#18231C',
                    outline: 'none'
                  }}
                />
                <button 
                  type="submit"
                  className="btn btn-green"
                  style={{ padding: '0.55rem 1.35rem', borderRadius: '6px', fontSize: '0.85rem' }}
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;
