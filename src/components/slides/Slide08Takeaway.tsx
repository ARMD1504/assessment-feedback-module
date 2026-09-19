import { useState } from 'react';
import { selfReviewItems } from '../../data/content';

export default function Slide08Takeaway() {
  const [ratings, setRatings] = useState<Record<number, 'yes' | 'partial' | 'no' | null>>({});

  const toggleRating = (id: number, rating: 'yes' | 'partial' | 'no') => {
    setRatings(prev => ({ ...prev, [id]: prev[id] === rating ? null : rating }));
  };

  const totalRated = Object.values(ratings).filter(Boolean).length;
  const yesCount = Object.values(ratings).filter(r => r === 'yes').length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="slide-badge">Slide 8 of 8 · Takeaway</div>
      <p className="slide-subtitle">Self-Review Checklist</p>
      <h1 className="slide-title">How Does Your Module Measure Up?</h1>
      <p className="slide-description">
        Rate your current assessment design against each of the ten conditions. This is a diagnostic tool — identify one condition to address in your next module review.
      </p>

      <div className="two-col" style={{ flex: 1 }}>
        {/* Left: Checklist */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', overflowY: 'auto', paddingRight: '0.5rem' }}>
          {selfReviewItems.map(item => (
            <div
              key={item.conditionId}
              className="card"
              style={{
                padding: '0.5rem 0.7rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: ratings[item.conditionId] === 'yes' ? 'rgba(34,197,94,0.06)' : ratings[item.conditionId] === 'partial' ? 'rgba(232,145,58,0.06)' : ratings[item.conditionId] === 'no' ? 'rgba(239,68,68,0.06)' : 'rgba(255,255,255,0.02)',
                borderColor: ratings[item.conditionId] === 'yes' ? 'rgba(34,197,94,0.2)' : ratings[item.conditionId] === 'partial' ? 'rgba(232,145,58,0.2)' : ratings[item.conditionId] === 'no' ? 'rgba(239,68,68,0.2)' : 'rgba(255,255,255,0.06)',
              }}
            >
              <span
                style={{
                  width: '1.4rem',
                  height: '1.4rem',
                  borderRadius: '50%',
                  background: item.category === 'assessment-design' ? 'rgba(232,145,58,0.15)' : 'rgba(0,165,168,0.15)',
                  color: item.category === 'assessment-design' ? '#E8913A' : '#00D4D7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                {item.conditionId}
              </span>
              <span style={{ flex: 1, fontSize: '0.72rem', color: '#B0C0D0', lineHeight: 1.35 }}>
                {item.question}
              </span>
              <div style={{ display: 'flex', gap: '0.25rem', flexShrink: 0 }}>
                {(['yes', 'partial', 'no'] as const).map(r => (
                  <button
                    key={r}
                    className={`btn btn-sm ${ratings[item.conditionId] === r ? (r === 'yes' ? 'btn-teal' : r === 'partial' ? 'btn-amber' : '') : 'btn-ghost'}`}
                    style={{
                      padding: '0.2rem 0.4rem',
                      fontSize: '0.6rem',
                      ...(ratings[item.conditionId] === r && r === 'no' ? { background: 'rgba(239,68,68,0.2)', color: '#EF4444', border: 'none' } : {}),
                    }}
                    onClick={() => toggleRating(item.conditionId, r)}
                  >
                    {r === 'yes' ? '✓' : r === 'partial' ? '◐' : '✗'}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right: Summary */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div className="card">
            <h3 style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff', marginBottom: '0.5rem' }}>Your Assessment Health</h3>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.75rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#00D4D7' }}>{totalRated}</div>
                <div style={{ fontSize: '0.65rem', color: '#5A6B7F' }}>Rated</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#22C55E' }}>{yesCount}</div>
                <div style={{ fontSize: '0.65rem', color: '#5A6B7F' }}>Met</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: totalRated > 0 ? '#E8913A' : '#4A5568' }}>
                  {totalRated > 0 ? Math.round((yesCount / totalRated) * 100) : 0}%
                </div>
                <div style={{ fontSize: '0.65rem', color: '#5A6B7F' }}>Score</div>
              </div>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: totalRated > 0 ? `${(yesCount / totalRated) * 100}%` : '0%' }} />
            </div>
          </div>

          <div className="card" style={{ background: 'rgba(0,165,168,0.06)' }}>
            <p style={{ fontSize: '0.78rem', color: '#A0B0C0', lineHeight: 1.6 }}>
              <strong style={{ color: '#00D4D7' }}>Next step:</strong> Choose the one condition rated lowest and plan a single change for your next module review. Small, targeted improvements are more sustainable than wholesale redesign.
            </p>
          </div>

          <div className="quote-block">
            "These conditions are offered as a plausible set of guidelines... They are offered as a checklist by any teacher wishing to review and make sense of the effectiveness of their own course's assessment system." — Gibbs & Simpson, 2005
          </div>

          <div className="card" style={{ fontSize: '0.7rem', color: '#5A6B7F', lineHeight: 1.6 }}>
            <strong style={{ color: '#7B8FA3' }}>Reference:</strong> Gibbs, G. & Simpson, C. (2005). Conditions under which assessment supports students' learning. <em>Learning and Teaching in Higher Education</em>, 1, 3-31.
          </div>
        </div>
      </div>
    </div>
  );
}
