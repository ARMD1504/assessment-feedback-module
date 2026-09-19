import { useState } from 'react';
import { conditions } from '../../data/content';

export default function Slide02Explain() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [filter, setFilter] = useState<'all' | 'assessment-design' | 'feedback'>('all');

  const filtered = filter === 'all' ? conditions : conditions.filter(c => c.category === filter);
  const selected = conditions.find(c => c.id === selectedId);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="slide-badge">Slide 2 of 8 · Explain</div>
      <p className="slide-subtitle">The Framework</p>
      <h1 className="slide-title">Ten Conditions Under Which Assessment Supports Learning</h1>
      <p className="slide-description">
        Gibbs & Simpson (2005) propose that assessment supports learning when a series of conditions are met. These divide into two categories: how assessment design shapes study behaviour, and how feedback influences learning. Click any condition to explore the key research finding.
      </p>

      {/* Category Filter */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
        <button
          className={`btn btn-sm ${filter === 'all' ? 'btn-teal' : 'btn-ghost'}`}
          onClick={() => setFilter('all')}
        >
          All Conditions
        </button>
        <button
          className={`btn btn-sm ${filter === 'assessment-design' ? 'btn-teal' : 'btn-ghost'}`}
          onClick={() => setFilter('assessment-design')}
        >
          Assessment Design (1–3)
        </button>
        <button
          className={`btn btn-sm ${filter === 'feedback' ? 'btn-teal' : 'btn-ghost'}`}
          onClick={() => setFilter('feedback')}
        >
          Feedback (4–10)
        </button>
      </div>

      <div className="two-col" style={{ flex: 1 }}>
        {/* Left: Conditions Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', overflowY: 'auto', paddingRight: '0.5rem' }}>
          {filtered.map(c => (
            <div
              key={c.id}
              className={`card card-interactive ${selectedId === c.id ? 'card-selected' : ''}`}
              onClick={() => setSelectedId(c.id)}
              style={{ padding: '0.6rem 0.8rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span
                  style={{
                    width: '1.6rem',
                    height: '1.6rem',
                    borderRadius: '50%',
                    background: c.category === 'assessment-design' ? 'rgba(232,145,58,0.15)' : 'rgba(0,165,168,0.15)',
                    color: c.category === 'assessment-design' ? '#E8913A' : '#00D4D7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {c.id}
                </span>
                <span style={{ fontSize: '0.78rem', color: '#C8D4E0', lineHeight: 1.35 }}>
                  {c.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Detail Panel */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: selected ? 'flex-start' : 'center', minHeight: '12rem' }}>
          {selected ? (
            <div className="fade-in">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span className={`tag ${selected.category === 'assessment-design' ? 'tag-amber' : 'tag-teal'}`}>
                  {selected.category === 'assessment-design' ? 'Assessment Design' : 'Feedback'}
                </span>
                <span style={{ fontSize: '0.7rem', color: '#5A6B7F' }}>Condition {selected.id}</span>
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '0.6rem' }}>
                {selected.title}
              </h3>
              <p style={{ fontSize: '0.82rem', lineHeight: 1.6, color: '#A0B0C0', marginBottom: '0.75rem' }}>
                {selected.summary}
              </p>
              <div className="key-point">
                <strong>Key finding:</strong> {selected.keyFinding}
              </div>
              <p style={{ fontSize: '0.68rem', color: '#5A6B7F', marginTop: '0.6rem' }}>
                {selected.source}
              </p>
            </div>
          ) : (
            <div style={{ textAlign: 'center', color: '#4A5568' }}>
              <p style={{ fontSize: '0.85rem' }}>← Select a condition to explore the research</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
