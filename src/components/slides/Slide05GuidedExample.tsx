import { useState } from 'react';
import { redesignSteps, conditions } from '../../data/content';

export default function Slide05GuidedExample() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showAfter, setShowAfter] = useState(false);
  const step = redesignSteps[currentStep];

  const handleNextStep = () => {
    setShowAfter(false);
    setCurrentStep(prev => Math.min(prev + 1, redesignSteps.length - 1));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="slide-badge">Slide 5 of 8 · Guided Example</div>
      <p className="slide-subtitle">Redesigning Assessment for Learning</p>
      <h1 className="slide-title">From Problem to Solution — Step by Step</h1>
      <p className="slide-description">
        A colleague redesigns their module's assessment to address common feedback failures. Follow each step: see the problem, understand the decision, and discover which condition is being applied.
      </p>

      {/* Step Navigation */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', alignItems: 'center' }}>
        {redesignSteps.map((s, i) => (
          <button
            key={i}
            className={`btn btn-sm ${i === currentStep ? 'btn-teal' : 'btn-ghost'}`}
            onClick={() => { setCurrentStep(i); setShowAfter(false); }}
          >
            Step {s.step}
          </button>
        ))}
      </div>

      <div className="two-col" style={{ flex: 1 }}>
        {/* Left: Before → Decision → After */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <span className="tag tag-red">Before</span>
              <h3 style={{ fontSize: '0.88rem', fontWeight: 600, color: '#fff' }}>{step.title}</h3>
            </div>
            <p style={{ fontSize: '0.82rem', color: '#A0B0C0', lineHeight: 1.55 }}>
              {step.before}
            </p>
          </div>

          <div className="card" style={{ background: 'rgba(0,165,168,0.06)', borderColor: 'rgba(0,165,168,0.2)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <span className="tag tag-teal">Decision</span>
            </div>
            <p style={{ fontSize: '0.82rem', color: '#C8D4E0', lineHeight: 1.55 }}>
              {step.decision}
            </p>
            <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ fontSize: '0.7rem', color: '#5A6B7F' }}>Applies:</span>
              <span className="tag tag-teal">Condition {step.conditionApplied}: {conditions.find(c => c.id === step.conditionApplied)?.title}</span>
            </div>
          </div>

          {showAfter ? (
            <div className="card fade-in" style={{ background: 'rgba(34,197,94,0.06)', borderColor: 'rgba(34,197,94,0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <span className="tag tag-green">After</span>
              </div>
              <p style={{ fontSize: '0.82rem', color: '#C8D4E0', lineHeight: 1.55, marginBottom: '0.5rem' }}>
                {step.after}
              </p>
              <p style={{ fontSize: '0.78rem', color: '#7B8FA3', lineHeight: 1.5 }}>
                <strong style={{ color: '#22C55E' }}>Outcome:</strong> {step.outcome}
              </p>
            </div>
          ) : (
            <button
              className="btn btn-amber"
              onClick={() => setShowAfter(true)}
              style={{ alignSelf: 'flex-start' }}
            >
              Reveal the outcome →
            </button>
          )}
        </div>

        {/* Right: Visual summary */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '4rem',
              height: '4rem',
              borderRadius: '50%',
              background: 'rgba(0,165,168,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
              fontSize: '1.5rem',
              fontWeight: 800,
              color: '#00D4D7',
            }}>
              {step.step}
            </div>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
              {step.title.replace('Problem: ', '')}
            </h3>
            <p style={{ fontSize: '0.78rem', color: '#5A6B7F', lineHeight: 1.5, marginBottom: '1rem' }}>
              Addressing Condition {step.conditionApplied} of 10
            </p>

            <div className="progress-track" style={{ maxWidth: '12rem', margin: '0 auto' }}>
              <div className="progress-fill" style={{ width: `${((currentStep + 1) / redesignSteps.length) * 100}%` }} />
            </div>
            <p style={{ fontSize: '0.68rem', color: '#4A5568', marginTop: '0.3rem' }}>
              Step {currentStep + 1} of {redesignSteps.length}
            </p>
          </div>

          {currentStep < redesignSteps.length - 1 && showAfter && (
            <button
              className="btn btn-teal fade-in"
              onClick={handleNextStep}
              style={{ alignSelf: 'center', marginTop: '1rem' }}
            >
              Next redesign step →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
