import { useState } from 'react';
import { tradeoffScenarios } from '../../data/content';

export default function Slide07Feedback() {
  const scenario = tradeoffScenarios[0];
  const [choice, setChoice] = useState<'A' | 'B' | null>(null);
  const [showInsight, setShowInsight] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="slide-badge">Slide 7 of 8 · Feedback & Challenge</div>
      <p className="slide-subtitle">Nuanced Trade-Offs</p>
      <h1 className="slide-title">{scenario.title}</h1>
      <p className="slide-description">
        {scenario.context}
      </p>

      <div className="two-col" style={{ flex: 1 }}>
        {/* Option A */}
        <div
          className={`card card-interactive ${choice === 'A' ? 'card-selected' : ''}`}
          onClick={() => { setChoice('A'); setShowInsight(false); }}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <span className="tag tag-amber" style={{ marginBottom: '0.5rem', alignSelf: 'flex-start' }}>Option A</span>
          <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff', marginBottom: '0.4rem' }}>
            {scenario.optionA.label}
          </h3>
          <p style={{ fontSize: '0.78rem', color: '#7B8FA3', marginBottom: '0.6rem' }}>
            {scenario.optionA.description}
          </p>

          <div style={{ marginBottom: '0.5rem' }}>
            <p style={{ fontSize: '0.68rem', fontWeight: 600, color: '#22C55E', marginBottom: '0.25rem' }}>Strengths</p>
            {scenario.optionA.strengths.map((s, i) => (
              <p key={i} style={{ fontSize: '0.75rem', color: '#8B9CB0', lineHeight: 1.45, marginBottom: '0.2rem' }}>✓ {s}</p>
            ))}
          </div>

          <div>
            <p style={{ fontSize: '0.68rem', fontWeight: 600, color: '#EF4444', marginBottom: '0.25rem' }}>Weaknesses</p>
            {scenario.optionA.weaknesses.map((w, i) => (
              <p key={i} style={{ fontSize: '0.75rem', color: '#8B9CB0', lineHeight: 1.45, marginBottom: '0.2rem' }}>✗ {w}</p>
            ))}
          </div>
        </div>

        {/* Option B */}
        <div
          className={`card card-interactive ${choice === 'B' ? 'card-selected' : ''}`}
          onClick={() => { setChoice('B'); setShowInsight(false); }}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <span className="tag tag-teal" style={{ marginBottom: '0.5rem', alignSelf: 'flex-start' }}>Option B</span>
          <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff', marginBottom: '0.4rem' }}>
            {scenario.optionB.label}
          </h3>
          <p style={{ fontSize: '0.78rem', color: '#7B8FA3', marginBottom: '0.6rem' }}>
            {scenario.optionB.description}
          </p>

          <div style={{ marginBottom: '0.5rem' }}>
            <p style={{ fontSize: '0.68rem', fontWeight: 600, color: '#22C55E', marginBottom: '0.25rem' }}>Strengths</p>
            {scenario.optionB.strengths.map((s, i) => (
              <p key={i} style={{ fontSize: '0.75rem', color: '#8B9CB0', lineHeight: 1.45, marginBottom: '0.2rem' }}>✓ {s}</p>
            ))}
          </div>

          <div>
            <p style={{ fontSize: '0.68rem', fontWeight: 600, color: '#EF4444', marginBottom: '0.25rem' }}>Weaknesses</p>
            {scenario.optionB.weaknesses.map((w, i) => (
              <p key={i} style={{ fontSize: '0.75rem', color: '#8B9CB0', lineHeight: 1.45, marginBottom: '0.2rem' }}>✗ {w}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Discussion / Insight */}
      {choice && !showInsight && (
        <div style={{ marginTop: '0.75rem', textAlign: 'center' }}>
          <button className="btn btn-teal" onClick={() => setShowInsight(true)}>
            Reveal the key insight →
          </button>
        </div>
      )}

      {showInsight && (
        <div className="card fade-in" style={{ marginTop: '0.75rem', background: 'rgba(232,145,58,0.08)', borderColor: 'rgba(232,145,58,0.2)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <span className="tag tag-amber">Key Insight</span>
            <span style={{ fontSize: '0.7rem', color: '#7B8FA3' }}>There is no single correct answer</span>
          </div>
          <p style={{ fontSize: '0.82rem', color: '#C8D4E0', lineHeight: 1.6 }}>
            {scenario.keyInsight}
          </p>
        </div>
      )}
    </div>
  );
}
