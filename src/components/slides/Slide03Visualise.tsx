import { useState } from 'react';
import { assessmentDesigns } from '../../data/content';

export default function Slide03Visualise() {
  const [activeDesign, setActiveDesign] = useState('exam-only');
  const design = assessmentDesigns.find(d => d.id === activeDesign)!;
  const maxEffort = Math.max(...design.weekEffort);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="slide-badge">Slide 3 of 8 · Visualise</div>
      <p className="slide-subtitle">How Assessment Design Shapes Student Effort</p>
      <h1 className="slide-title">The Hidden Curriculum in Action</h1>
      <p className="slide-description">
        Students allocate their study time based on what is assessed. Select an assessment design to see how a typical student distributes effort across a 14-week semester.
      </p>

      {/* Design Selector */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
        {assessmentDesigns.map(d => (
          <button
            key={d.id}
            className={`btn btn-sm ${d.id === activeDesign ? 'btn-teal' : 'btn-ghost'}`}
            onClick={() => setActiveDesign(d.id)}
          >
            {d.name}
          </button>
        ))}
      </div>

      <div className="two-col" style={{ flex: 1 }}>
        {/* Left: Effort Distribution Chart */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#7B8FA3', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Weekly Study Effort (hours)
            </span>
            <span className="tag tag-amber">{design.name}</span>
          </div>

          {/* Bar Chart */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '0.3rem', paddingBottom: '1.5rem', position: 'relative' }}>
            {design.weekEffort.map((effort, i) => {
              const height = (effort / maxEffort) * 100;
              const isHigh = effort >= maxEffort * 0.7;
              const isLow = effort <= maxEffort * 0.2;
              return (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.2rem',
                  }}
                >
                  <span style={{ fontSize: '0.6rem', color: isHigh ? '#E8913A' : isLow ? '#4A5568' : '#7B8FA3' }}>
                    {effort}h
                  </span>
                  <div
                    style={{
                      width: '100%',
                      maxWidth: '2.5rem',
                      height: `${height}%`,
                      minHeight: '4px',
                      background: isHigh
                        ? 'linear-gradient(180deg, #E8913A, #C47520)'
                        : isLow
                        ? 'rgba(255,255,255,0.06)'
                        : 'linear-gradient(180deg, #00A5A8, #007B7D)',
                      borderRadius: '0.25rem 0.25rem 0 0',
                      transition: 'height 0.5s ease, background 0.3s',
                    }}
                  />
                  <span style={{ fontSize: '0.55rem', color: '#4A5568', position: 'absolute', bottom: 0 }}>
                    W{i + 1}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Analysis Panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div className="card">
            <h3 style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff', marginBottom: '0.4rem' }}>
              {design.name}
            </h3>
            <p style={{ fontSize: '0.78rem', color: '#7B8FA3', marginBottom: '0.5rem' }}>
              {design.description}
            </p>
            <div className="key-point" style={{ fontSize: '0.78rem' }}>
              <strong>Outcome:</strong> {design.outcome}
            </div>
          </div>

          <div className="quote-block">
            {design.studentQuote}
          </div>

          <div className="card" style={{ background: 'rgba(0,165,168,0.06)' }}>
            <p style={{ fontSize: '0.75rem', color: '#7B8FA3', lineHeight: 1.5 }}>
              <strong style={{ color: '#00D4D7' }}>Reflect:</strong> Which assessment design most closely matches your current module? Where do students allocate the least effort, and is that content important for learning?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
