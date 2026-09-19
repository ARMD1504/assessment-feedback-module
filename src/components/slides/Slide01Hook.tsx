import { useState } from 'react';
import { hookScenario } from '../../data/content';

export default function Slide01Hook() {
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);

  const handleSelect = (id: string) => {
    if (revealed) return;
    setSelected(id);
    setRevealed(true);
  };

  const selectedOption = hookScenario.options.find(o => o.id === selected);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="slide-badge">Slide 1 of 8 · The Hook</div>
      <p className="slide-subtitle">Assessment & Feedback That Supports Learning</p>
      <h1 className="slide-title">The Feedback Paradox</h1>
      <p className="slide-description">
        {hookScenario.setup}
      </p>

      <div className="key-point fade-in fade-in-delay-1" style={{ marginBottom: '1rem' }}>
        <strong>{hookScenario.question}</strong>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
        {hookScenario.options.map(opt => {
          let className = 'scenario-option';
          if (revealed && opt.id === selected) className += opt.isCorrect ? ' correct' : ' incorrect';
          if (revealed && opt.isCorrect && opt.id !== selected) className += ' correct';

          return (
            <div
              key={opt.id}
              className={className}
              onClick={() => handleSelect(opt.id)}
            >
              <div className="option-marker">{opt.id.toUpperCase()}</div>
              <span style={{ fontSize: '0.82rem', lineHeight: 1.5, color: '#C8D4E0' }}>
                {opt.text}
              </span>
            </div>
          );
        })}
      </div>

      {revealed && selectedOption && (
        <div className="card fade-in" style={{ marginTop: '0.75rem', background: 'rgba(0,165,168,0.08)', borderColor: 'rgba(0,165,168,0.2)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <span className={`tag ${selectedOption.isCorrect ? 'tag-green' : 'tag-amber'}`}>
              {selectedOption.isCorrect ? 'Correct' : 'Not quite'}
            </span>
            <span style={{ fontSize: '0.75rem', color: '#7B8FA3' }}>Research evidence</span>
          </div>
          <p style={{ fontSize: '0.82rem', lineHeight: 1.6, color: '#B0C0D0' }}>
            {selectedOption.feedback}
          </p>
        </div>
      )}

      {revealed && (
        <div className="quote-block fade-in" style={{ marginTop: '0.75rem' }}>
          "Some students threw away the feedback if they disliked the grade, while others seemed concerned only with the final result and did not collect the marked work." — Wotjas, 1998
        </div>
      )}
    </div>
  );
}
