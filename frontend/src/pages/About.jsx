import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container py-16 animate-fade-in" style={{ padding: '4.5rem 1.5rem 6rem' }}>
      <div className="container-narrow">
        
        {/* Header */}
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <div style={{ color: 'var(--gold-deep)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>✝</div>
          <span className="category-badge" style={{ marginBottom: '0.5rem' }}>Our Holy Calling</span>
          <h1 className="font-display text-4xl" style={{ color: 'var(--text-dark)', marginBottom: '0.75rem' }}>
            About Grace & Glory Ministry
          </h1>
          <p className="font-reading text-lg text-muted" style={{ fontStyle: 'italic', maxWidth: '580px', margin: '0 auto' }}>
            "Your word is a lamp for my feet, a light on my path." — Psalm 119:105
          </p>
        </div>

        {/* Main Devotional Page Box */}
        <div style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid var(--border-parchment)',
          boxShadow: 'var(--shadow-book)',
          padding: '3rem 2.5rem',
          borderRadius: '4px'
        }}>
          
          <h2 className="font-display text-3xl" style={{ color: 'var(--text-dark)', marginBottom: '1.25rem' }}>
            Our Mission & Purpose
          </h2>

          <div className="article-reading">
            <p>
              Welcome to <strong>Grace & Glory</strong>. We are a Christ-centered ministry committed to publishing biblically grounded written messages, devotional studies, and spiritual reflections to help believers draw closer to Jesus Christ and deepen their understanding of God's holy Word.
            </p>
            <p>
              In a culture crowded with noise, haste, and digital distraction, we believe there is immense spiritual fruit in taking quiet time to read, meditate on scripture, and sit peacefully before the Lord.
            </p>
          </div>

          {/* Statement of Faith Section */}
          <div style={{ 
            marginTop: '2.5rem', 
            paddingTop: '2rem', 
            borderTop: '1px solid var(--border-parchment)' 
          }}>
            <h3 className="font-display text-2xl" style={{ color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
              Statement of Faith
            </h3>

            <div className="flex-col gap-4 font-reading text-base">
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--gold-deep)', fontSize: '1.2rem', lineHeight: 1 }}>✝</span>
                <div>
                  <strong style={{ color: 'var(--text-dark)' }}>The Lordship of Jesus Christ:</strong>
                  <p className="text-muted" style={{ margin: '0.25rem 0 0' }}>
                    We believe in the virgin birth, sinless life, sacrificial death on the cross for the redemption of sin, bodily resurrection, and glorious return of Jesus Christ.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--gold-deep)', fontSize: '1.2rem', lineHeight: 1 }}>✝</span>
                <div>
                  <strong style={{ color: 'var(--text-dark)' }}>The Inerrant Word of God:</strong>
                  <p className="text-muted" style={{ margin: '0.25rem 0 0' }}>
                    The Holy Bible is inspired by God, infallible in its original manuscripts, and the supreme authority for Christian faith and conduct.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--gold-deep)', fontSize: '1.2rem', lineHeight: 1 }}>✝</span>
                <div>
                  <strong style={{ color: 'var(--text-dark)' }}>Salvation by Grace through Faith:</strong>
                  <p className="text-muted" style={{ margin: '0.25rem 0 0' }}>
                    Salvation is a free gift of God's grace received through faith in Jesus Christ alone, not by works of righteousness that we have done.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* The Great Commission Quote */}
          <blockquote className="scripture-parchment" style={{ margin: '2.5rem 0 1rem' }}>
            <p className="font-display" style={{ fontSize: '1.25rem', margin: 0 }}>
              "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you."
            </p>
            <cite className="font-cinzel" style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>— Matthew 28:19-20</cite>
          </blockquote>

        </div>

        {/* Support the Mission Card */}
        <div style={{
          marginTop: '3.5rem',
          backgroundColor: 'var(--bg-cream)',
          border: '1px solid var(--border-gold-subtle)',
          padding: '2.5rem 2rem',
          textAlign: 'center',
          borderRadius: '4px'
        }}>
          <h3 className="font-display text-2xl" style={{ color: 'var(--text-dark)', marginBottom: '0.5rem' }}>
            Join Hands in Spreading God's Word
          </h3>
          <p className="font-reading text-base text-muted" style={{ maxWidth: '580px', margin: '0 auto 1.5rem' }}>
            Our ministry is sustained by the voluntary offerings of faithful readers. A single gift of $5 or more grants you lifetime access to all written devotions.
          </p>
          <Link to="/donate" className="btn btn-primary">
            Support the Ministry
          </Link>
        </div>

      </div>
    </div>
  );
};

export default About;
