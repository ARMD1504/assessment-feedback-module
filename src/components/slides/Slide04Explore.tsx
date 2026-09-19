import { useState } from 'react';
import { feedbackExamples, conditions, type FeedbackExample } from '../../data/content';

function ConditionPill({ id, met }: { id: number; met: boolean }) {
  const c = conditions.find(x => x.id === id);
  if (!c) return null;
  return (
    <span
      title={met ? `✓ ${c.title}` : `✗ ${c.title}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.25rem',
        padding: '0.15rem 0.45rem',
        borderRadius: '0.3rem',
        fontSize: '0.62rem',
        fontWeight: 600,
        background: met ? 'rgba(34,197,94,0.12)' : 'rgba(239,68,68,0.1)',
        color: met ? '#22C55E' : '#EF4444',
        border: `1px solid ${met ? 'rgba(34,197,94,0.25)' : 'rgba(239,68,68,0.2)'}`,
        whiteSpace: 'nowrap',
      }}
    >
      {met ? '✓' : '✗'} C{id}
    </span>
  );
}

export default function Slide04Explore() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = feedbackExamples.find(f => f.id === selectedId);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="slide-badge">Slide 4 of 8 · Explore</div>
      <p className="slide-subtitle">Feedback Design Laboratory</p>
      <h1 className="slide-title">What Makes Feedback Work?</h1>
      <p className="slide-description">
        Select a feedback type to see the same learning content delivered through different approaches. Each type meets different conditions from the Gibbs & Simpson framework. Compare them to discover which design choices make the biggest difference.
      </p>

      {/* Feedback Type Selector */}
      <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
        {feedbackExamples.map(f => {
          const isActive = f.id === selectedId;
          const borderColor = f.effectiveness === 'high' ? 'rgba(34,197,94,0.4)' : f.effectiveness === 'medium' ? 'rgba(232,145,58,0.4)' : 'rgba(239,68,68,0.3)';
          return (
            <button
              key={f.id}
              className={`btn btn-sm ${isActive ? 'btn-teal' : 'btn-ghost'}`}
              style={!isActive ? { borderColor } : {}}
              onClick={() => setSelectedId(f.id)}
            >
              {f.name}
            </button>
          );
        })}
      </div>

      {selected ? (
        <div className="two-col" style={{ flex: 1 }}>
          {/* Left: Feedback Example */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div className="card fade-in">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff' }}>{selected.name}</h3>
                <span className={`tag ${selected.effectiveness === 'high' ? 'tag-green' : selected.effectiveness === 'medium' ? 'tag-amber' : 'tag-red'}`}>
                  {selected.effectiveness} effectiveness
                </span>
              </div>
              <p style={{ fontSize: '0.72rem', color: '#7B8FA3', marginBottom: '0.6rem' }}>{selected.description}</p>
              <div style={{
                background: 'rgba(0,0,0,0.2)',
                borderRadius: '0.5rem',
                padding: '1rem',
                borderLeft: '3px solid rgba(0,165,168,0.4)',
                fontSize: '0.82rem',
                color: '#C8D4E0',
                lineHeight: 1.6,
                fontStyle: 'italic',
              }}>
                "{selected.exampleText}"
              </div>
            </div>

            <div className="card fade-in fade-in-delay-1" style={{ background: 'rgba(0,165,168,0.06)' }}>
              <p style={{ fontSize: '0.75rem', color: '#7B8FA3', lineHeight: 1.5 }}>
                <strong style={{ color: '#00D4D7' }}>Research note:</strong> {selected.researchNote}
              </p>
            </div>
          </div>

          {/* Right: Conditions Met / Violated */}
          <div className="card fade-in fade-in-delay-2" style={{ overflowY: 'auto' }}>
            <h4 style={{ fontSize: '0.75rem', fontWeight: 600, color: '#7B8FA3', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.6rem' }}>
              Conditions Assessment
            </h4>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '0.75rem' }}>
              {conditions.map(c => (
                <ConditionPill
                  key={c.id}
                  id={c.id}
                  met={selected.conditionsMet.includes(c.id)}
                />
              ))}
            </div>

            <div style={{ marginBottom: '0.75rem' }}>
              <p style={{ fontSize: '0.7rem', fontWeight: 600, color: '#22C55E', marginBottom: '0.3rem' }}>
                ✓ Conditions met ({selected.conditionsMet.length})
              </p>
              {selected.conditionsMet.map(id => {
                const c = conditions.find(x => x.id === id)!;
                return (
                  <p key={id} style={{ fontSize: '0.75rem', color: '#8B9CB0', lineHeight: 1.5, marginBottom: '0.25rem' }}>
                    <strong>C{id}:</strong> {c.title}
                  </p>
                );
              })}
            </div>

            <div>
              <p style={{ fontSize: '0.7rem', fontWeight: 600, color: '#EF4444', marginBottom: '0.3rem' }}>
                ✗ Conditions violated ({selected.conditionsViolated.length})
              </p>
              {selected.conditionsViolated.map(id => {
                const c = conditions.find(x => x.id === id)!;
                return (
                  <p key={id} style={{ fontSize: '0.75rem', color: '#8B9CB0', lineHeight: 1.5, marginBottom: '0.25rem' }}>
                    <strong>C{id}:</strong> {c.title}
                  </p>
                );
              })}
            </div>

            {/* Progress bar */}
            <div style={{ marginTop: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                <span style={{ fontSize: '0.68rem', color: '#5A6B7F' }}>Conditions met</span>
                <span style={{ fontSize: '0.68rem', color: selected.conditionsMet.length >= 6 ? '#22C55E' : selected.conditionsMet.length >= 3 ? '#E8913A' : '#EF4444' }}>
                  {selected.conditionsMet.length} / 10
                </span>
              </div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: `${(selected.conditionsMet.length / 10) * 100}%` }} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="card" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ fontSize: '0.9rem', color: '#4A5568', textAlign: 'center' }}>
            Select a feedback type above to inspect it against the ten conditions
          </p>
        </div>
      )}
    </div>
  );
}
