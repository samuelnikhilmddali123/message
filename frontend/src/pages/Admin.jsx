import { useState } from 'react';
import { messages } from '../data/messages';
import { BookOpen, Users, HeartHandshake, Plus, Edit3, Trash2, ShieldCheck } from 'lucide-react';

const Admin = () => {
  const [msgList, setMsgList] = useState(messages);

  return (
    <div className="container py-12 animate-fade-in">
      <div className="text-center mb-10">
        <div style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: 'rgba(197, 160, 89, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1rem',
          color: 'var(--gold-antique)',
          fontSize: '1.5rem'
        }}>
          ✝
        </div>
        <span className="badge-gold mb-2">Ministry Stewardship Console</span>
        <h1 className="text-3xl md:text-4xl font-cinzel">Devotional & Publication Management</h1>
        <p className="text-sm text-muted font-serif italic mt-2" style={{ maxWidth: '600px', margin: '0 auto' }}>
          "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters." — Colossians 3:23
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--space-6)', marginBottom: 'var(--space-10)' }}>
        <div className="card devotional-card text-center" style={{ padding: '2rem 1.5rem' }}>
          <div style={{ color: 'var(--gold-antique)', display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
            <BookOpen size={28} />
          </div>
          <h3 className="text-3xl font-cinzel text-accent mb-1">{msgList.length}</h3>
          <p className="text-xs uppercase tracking-widest text-muted">Devotional Messages</p>
        </div>
        <div className="card devotional-card text-center" style={{ padding: '2rem 1.5rem' }}>
          <div style={{ color: 'var(--gold-antique)', display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
            <Users size={28} />
          </div>
          <h3 className="text-3xl font-cinzel text-accent mb-1">1,245</h3>
          <p className="text-xs uppercase tracking-widest text-muted">Faithful Believers</p>
        </div>
        <div className="card devotional-card text-center" style={{ padding: '2rem 1.5rem' }}>
          <div style={{ color: 'var(--gold-antique)', display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
            <HeartHandshake size={28} />
          </div>
          <h3 className="text-3xl font-cinzel text-accent mb-1">$8,450</h3>
          <p className="text-xs uppercase tracking-widest text-muted">Ministry Seed Offerings</p>
        </div>
      </div>

      <div className="card devotional-card" style={{ padding: '2.5rem' }}>
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-2xl font-cinzel">Scripture Teachings & Messages</h2>
            <p className="text-xs text-muted font-serif italic">Review, publish, and curate biblical writings</p>
          </div>
          <button className="btn btn-primary flex items-center gap-2">
            <Plus size={16} /> Publish New Message
          </button>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-light)', fontFamily: 'var(--font-serif)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <th style={{ padding: '1rem 0.75rem' }}>TITLE & SCRIPTURE</th>
                <th style={{ padding: '1rem 0.75rem' }}>CATEGORY</th>
                <th style={{ padding: '1rem 0.75rem' }}>DATE PUBLISHED</th>
                <th style={{ padding: '1rem 0.75rem' }}>ACCESS TIER</th>
                <th style={{ padding: '1rem 0.75rem', textAlign: 'right' }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {msgList.map(msg => (
                <tr key={msg.id} style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <td style={{ padding: '1.25rem 0.75rem' }}>
                    <div className="font-serif font-600 text-base">{msg.title}</div>
                    <div className="text-xs text-muted font-serif italic">{msg.scripture}</div>
                  </td>
                  <td style={{ padding: '1.25rem 0.75rem' }}>
                    <span className="badge-gold" style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem' }}>{msg.category}</span>
                  </td>
                  <td style={{ padding: '1.25rem 0.75rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>{msg.date}</td>
                  <td style={{ padding: '1.25rem 0.75rem' }}>
                    {msg.isLocked ? (
                      <span className="badge-gold flex items-center gap-1" style={{ fontSize: '0.7rem', width: 'fit-content' }}>
                        <ShieldCheck size={12} /> Protected Message
                      </span>
                    ) : (
                      <span className="text-xs text-muted font-serif italic">Open Ministry Free</span>
                    )}
                  </td>
                  <td style={{ padding: '1.25rem 0.75rem', textAlign: 'right' }}>
                    <div className="flex gap-3 justify-end">
                      <button className="text-xs text-accent hover:underline flex items-center gap-1">
                        <Edit3 size={14} /> Edit
                      </button>
                      <button className="text-xs flex items-center gap-1" style={{ color: '#A3423C' }}>
                        <Trash2 size={14} /> Archive
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
