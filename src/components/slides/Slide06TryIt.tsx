import { useState } from 'react';
import { tryItScenarios } from '../../data/content';

export default function Slide06TryIt() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const scenario = tryItScenarios[0];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="slide-badge">Slide 6 of 8 · Try It</div>
      <p className="slide-subtitle">Apply the Conditions</p>
      <h1 className="slide-title">Redesign This Module</h1>
      <p className="slide-description">
        {scenario.context}
      </p>

      <div className="two-col" style={{ flex: 1 }}>
        {/* Left: Problems + Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          {/* Identified Problems */}
          <div className="card" style={{ padding: '0.75rem 1rem' }}>
            <h4 style={{ fontSize: '0.72rem', fontWeight: 600, color: '#EF4444', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
              Problems identified in this module
            </h4>
            {scenario.problems.map((p, i) => (
              <p key={i} style={{ fontSize: '0.78rem', color: '#A0B0C0', lineHeight: 1.5, marginBottom: '0.3rem' }}>
                • {p}
              </p>
            ))}
          </div>

          {/* Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <h4 style={{ fontSize: '0.72rem', fontWeight: 600, color: '#7B8FA3', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Choose your redesign approach
            </h4>
            {scenario.options.map(opt => {
              let className = 'scenario-option';
              if (selectedId === opt.id) className += opt.isRecommended ? ' correct' : ' selected';
              if (selectedId && opt.isRecommended && opt.id !== selectedId) className += ' correct';

              return (
                <div
                  key={opt.id}
                  className={className}
                  onClick={() => !selectedId && setSelectedId(opt.id)}
                >
                  <div className="option-marker">{opt.id.toUpperCase()}</div>
                  <div>
                    <p style={{ fontSize: '0.82rem', color: '#C8D4E0', lineHeight: 1.4, fontWeight: 500 }}>
                      {opt.text}
                    </p>
                    <div style={{ display: 'flex', gap: '0.3rem', marginTop: '0.3rem', flexWrap: 'wrap' }}>
                      {opt.conditionsAddressed.map(cId => (
                        <span key={cId} className="tag tag-teal" style={{ fontSize: '0.58rem' }}>C{cId}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Feedback Panel */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: selectedId ? 'flex-start' : 'center' }}>
          {selectedId ? (
            <div className="fade-in">
              {(() => {
                const chosen = scenario.options.find(o => o.id === selectedId)!;
                return (
                  <>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                      <span className={`tag ${chosen.isRecommended ? 'tag-green' : 'tag-amber'}`}>
                        {chosen.isRecommended ? 'Recommended approach' : 'Not the strongest choice'}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff', marginBottom: '0.5rem' }}>
                      {chosen.isRecommended ? 'This addresses the most conditions simultaneously' : 'Consider what this misses'}
                    </h3>
                    <p style={{ fontSize: '0.82rem', color: '#A0B0C0', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                      {chosen.explanation}
                    </p>
                    <div className="key-point">
                      <strong>Conditions addressed:</strong>{' '}
                      {chosen.conditionsAddressed.map(c => `C${c}`).join(', ')} ({chosen.conditionsAddressed.length} of 10)
                    </div>
                    <button
                      className="btn btn-ghost btn-sm"
                      onClick={() => setSelectedId(null)}
                      style={{ marginTop: '0.75rem' }}
                    >
                      Try a different approach
                    </button>
                  </>
                );
              })()}
            </div>
          ) : (
            <div style={{ textAlign: 'center', color: '#4A5568' }}>
              <p style={{ fontSize: '0.85rem' }}>Select an option to see the analysis</p>
              <p style={{ fontSize: '0.72rem', marginTop: '0.5rem' }}>
                Consider which approach addresses the most conditions while being practical for a large class.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
