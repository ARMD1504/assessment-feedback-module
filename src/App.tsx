import { useState, useEffect, useCallback, useRef } from 'react';
import Slide01Hook from './components/slides/Slide01Hook';
import Slide02Explain from './components/slides/Slide02Explain';
import Slide03Visualise from './components/slides/Slide03Visualise';
import Slide04Explore from './components/slides/Slide04Explore';
import Slide05GuidedExample from './components/slides/Slide05GuidedExample';
import Slide06TryIt from './components/slides/Slide06TryIt';
import Slide07Feedback from './components/slides/Slide07Feedback';
import Slide08Takeaway from './components/slides/Slide08Takeaway';

const TOTAL_SLIDES = 8;
const SLIDE_LABELS = [
  'THE HOOK', 'EXPLAIN', 'VISUALISE', 'EXPLORE',
  'GUIDED EXAMPLE', 'TRY IT', 'FEEDBACK + CHALLENGE', 'TAKEAWAY'
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showInstructorPanel, setShowInstructorPanel] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const clickCount = useRef(0);
  const clickTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goNext = useCallback(() => {
    setCurrent(prev => Math.min(prev + 1, TOTAL_SLIDES - 1));
  }, []);

  const goPrev = useCallback(() => {
    setCurrent(prev => Math.max(prev - 1, 0));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (showPasswordModal || showInstructorPanel) return;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); goNext(); }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); goPrev(); }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev, showPasswordModal, showInstructorPanel]);

  // Hidden instructor trigger: 5 rapid clicks on slide number
  const handleSlideNumberClick = () => {
    clickCount.current += 1;
    if (clickTimer.current) clearTimeout(clickTimer.current);
    clickTimer.current = setTimeout(() => { clickCount.current = 0; }, 1500);
    if (clickCount.current >= 5) {
      clickCount.current = 0;
      setShowPasswordModal(true);
    }
  };

  const handlePasswordSubmit = () => {
    if (passwordInput === '1234') {
      setShowPasswordModal(false);
      setShowInstructorPanel(true);
      setPasswordInput('');
      setPasswordError(false);
    } else {
      setPasswordError(true);
      setPasswordInput('');
    }
  };

  const slides = [
    <Slide01Hook key="s1" />,
    <Slide02Explain key="s2" />,
    <Slide03Visualise key="s3" />,
    <Slide04Explore key="s4" />,
    <Slide05GuidedExample key="s5" />,
    <Slide06TryIt key="s6" />,
    <Slide07Feedback key="s7" />,
    <Slide08Takeaway key="s8" />,
  ];

  return (
    <>
      <div className="slide-shell">
        <div className="slide-content fade-in" key={current}>
          {slides[current]}
        </div>

        {/* Navigation Bar */}
        <nav className="nav-bar">
          <button
            className="nav-btn"
            onClick={goPrev}
            disabled={current === 0}
          >
            ← Previous
          </button>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
            <div className="nav-dots">
              {Array.from({ length: TOTAL_SLIDES }, (_, i) => (
                <button
                  key={i}
                  className={`nav-dot ${i === current ? 'active' : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <span
              className="slide-number"
              onClick={handleSlideNumberClick}
              role="button"
              tabIndex={-1}
            >
              {current + 1} / {TOTAL_SLIDES} · {SLIDE_LABELS[current]}
            </span>
          </div>

          <button
            className="nav-btn primary"
            onClick={goNext}
            disabled={current === TOTAL_SLIDES - 1}
          >
            Next →
          </button>
        </nav>
      </div>

      {/* Password Modal */}
      {showPasswordModal && (
        <div className="modal-overlay" onClick={() => { setShowPasswordModal(false); setPasswordInput(''); setPasswordError(false); }}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <h3>Instructor Access</h3>
            <input
              type="password"
              placeholder="Enter password"
              value={passwordInput}
              onChange={e => { setPasswordInput(e.target.value); setPasswordError(false); }}
              onKeyDown={e => e.key === 'Enter' && handlePasswordSubmit()}
              autoFocus
            />
            {passwordError && <p className="modal-error">Incorrect password.</p>}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button className="btn btn-teal" onClick={handlePasswordSubmit}>Unlock</button>
              <button className="btn btn-ghost" onClick={() => { setShowPasswordModal(false); setPasswordInput(''); setPasswordError(false); }}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Instructor Panel */}
      {showInstructorPanel && (
        <div className="instructor-panel">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2>Instructor Panel — Teaching Notes & Answer Keys</h2>
            <button className="btn btn-amber" onClick={() => setShowInstructorPanel(false)}>Lock & Close</button>
          </div>

          <h3>Slide 1 — The Hook: Answer Key</h3>
          <p><strong>Correct answer: B.</strong> Students looked at the grade and many discarded the feedback. This is documented by Wotjas (1998) and supported by Crooks (1988) who found that when marks accompany feedback, students pay less attention to comments. Use this to create cognitive dissonance: the lecturer invested effort in feedback that students never read.</p>

          <h3>Slide 2 — Explain: Facilitation Notes</h3>
          <p>The ten conditions divide into two categories: assessment design (1-3) shapes how much, where, and how students study; feedback (4-10) determines whether information about performance actually improves learning. Emphasise that feedback is the most powerful single influence on achievement (Hattie, 1987) but routinely fails in practice.</p>

          <h3>Slide 3 — Visualise: Key Teaching Points</h3>
          <p>The effort distribution simulator shows four assessment designs. Key insight: <strong>weekly peer assessment</strong> (Forbes & Spence, 1991) produces the most even effort distribution and the highest exam marks — without generating marking burden. The "exam only" design produces the classic cramming curve. Ask participants: which design matches your current module?</p>

          <h3>Slide 4 — Explore: Feedback Laboratory Guide</h3>
          <p>The distinctive live feature. Guide participants to compare "Grade Only" (all conditions violated) with "Feed-Forward" (all conditions met). Key discussion: the same content delivered as different feedback types produces radically different learning outcomes. Two-stage assignments (Cooper, 2000) and structured peer feedback (Forbes & Spence, 1991) both score highly.</p>

          <h3>Slide 5 — Guided Example: Facilitation Notes</h3>
          <p>Walk through each redesign step slowly. Ask participants to identify the condition being applied before revealing it. The four steps address: feedback attendance (Condition 9), timing (Condition 6), specificity (Condition 10), and effort distribution (Condition 2).</p>

          <h3>Slide 6 — Try It: Answer Key</h3>
          <p><strong>Recommended answer: B</strong> (bi-weekly tasks with peer assessment + two-stage essay). This addresses conditions 1, 2, 3, 4, 6, 9, and 10 simultaneously. Option A (MCQ only) risks surface approaches. Option C (more detailed feedback) doesn't solve structural problems. Option D (mid-term test) helps but adds only one data point.</p>

          <h3>Slide 7 — Feedback & Challenge: Discussion Guide</h3>
          <p>There is no single correct answer to the timing vs. quality trade-off. The key insight from Gibbs & Simpson: "imperfect feedback from a fellow student provided almost immediately may have much more impact than more perfect feedback from a tutor four weeks later." Push participants to think about hybrid solutions.</p>

          <h3>Slide 8 — Takeaway: Facilitation Notes</h3>
          <p>Encourage participants to select ONE condition they will address in their next module review. The ten conditions are offered as "a plausible set of guidelines" — not absolute rules. The evidence is strongest for feedback frequency, timing, and the removal of grades from formative feedback.</p>

          <h3>References</h3>
          <p style={{ fontSize: '0.78rem', lineHeight: 1.7 }}>
            Gibbs, G. & Simpson, C. (2005). Conditions under which assessment supports students' learning. <em>Learning and Teaching in Higher Education</em>, 1, 3-31.<br/>
            Black, P. & Wiliam, D. (1998). Assessment and classroom learning. <em>Assessment in Education</em>, 5(1), 7-74.<br/>
            Cooper, N.J. (2000). Facilitating learning from formative feedback. <em>Assessment and Evaluation in Higher Education</em>, 25(3), 279-291.<br/>
            Forbes, D. & Spence, J. (1991). An experiment in assessment for a large class. In R. Smith (ed) <em>Innovations in Engineering Education</em>. Ellis Horwood.<br/>
            Hattie, J.A. (1987). Identifying the salient facets of a model of student learning. <em>International Journal of Educational Research</em>, 11, 187-212.<br/>
            Snyder, B.R. (1971). <em>The Hidden Curriculum</em>. MIT Press.
          </p>
        </div>
      )}
    </>
  );
}
