// Academic content sourced from Gibbs & Simpson (2005)
// "Conditions Under Which Assessment Supports Students' Learning"
// Learning and Teaching in Higher Education, Issue 1, 2004-05

export interface Condition {
  id: number;
  title: string;
  category: 'assessment-design' | 'feedback';
  summary: string;
  keyFinding: string;
  source: string;
}

export const conditions: Condition[] = [
  {
    id: 1,
    title: 'Sufficient assessed tasks capture study time',
    category: 'assessment-design',
    summary: 'Students allocate effort to what is assessed. Without assessed tasks, students simply do not do the associated studying.',
    keyFinding: 'Students allocate as little as 5% of their time to unassessed study tasks by year three (Innis, 1996).',
    source: 'Gibbs & Simpson, 2005, Condition 1'
  },
  {
    id: 2,
    title: 'Tasks orient effort to the most important aspects',
    category: 'assessment-design',
    summary: 'Students distribute time unevenly, often focusing only on assessed topics. Frequent small tasks distribute effort across the course; infrequent large ones create peaks and valleys.',
    keyFinding: 'Students described study effort graphs as looking "more like the Alps than Holland" with infrequent assessments.',
    source: 'Gibbs & Simpson, 2005, Condition 2'
  },
  {
    id: 3,
    title: 'Tasks engage productive learning activity',
    category: 'assessment-design',
    summary: 'The kind of learning activity matters as much as the amount. Some assessments generate unhelpful activity (rote memorisation for MCQ tests) while others generate deep engagement (essays that require reading around).',
    keyFinding: 'Students encouraged to be creative abandoned that aspiration when they discovered most marks came from rote memorisation for MCQ tests (Snyder, 1971).',
    source: 'Gibbs & Simpson, 2005, Condition 3'
  },
  {
    id: 4,
    title: 'Feedback is sufficient in frequency and detail',
    category: 'feedback',
    summary: 'One piece of detailed feedback after ten weeks is unlikely to support learning well. Feedback needs to be regular and on relatively small chunks of content.',
    keyFinding: 'Feedback is the most powerful single influence on student achievement (Hattie, 1987), yet 30% of students report it never helps them understand.',
    source: 'Gibbs & Simpson, 2005, Condition 4'
  },
  {
    id: 5,
    title: 'Feedback focuses on performance, not the person',
    category: 'feedback',
    summary: 'Feedback that tells students they are hopeless damages self-efficacy. Feedback on specific actions and content gives students options for improvement.',
    keyFinding: 'Self-efficacy is strongly related to effort and persistence, and predicts academic achievement well (Schunk, 1984).',
    source: 'Gibbs & Simpson, 2005, Condition 5'
  },
  {
    id: 6,
    title: 'Feedback is timely — received while it still matters',
    category: 'feedback',
    summary: 'If students do not receive feedback fast enough, they have moved on and the feedback becomes irrelevant. Imperfect peer feedback provided immediately may have more impact than perfect tutor feedback weeks later.',
    keyFinding: 'Weaker students who took practice tests with immediate feedback improved so much they outperformed stronger students (Sly, 1999).',
    source: 'Gibbs & Simpson, 2005, Condition 6'
  },
  {
    id: 7,
    title: 'Feedback is appropriate to purpose and criteria',
    category: 'feedback',
    summary: 'Different assignments need different feedback functions: correcting errors, developing understanding, generating further study, promoting meta-cognition, or maintaining motivation.',
    keyFinding: 'Students expected criteria about style and presentation while teachers emphasised theoretical understanding (Penny & Grover, 1996).',
    source: 'Gibbs & Simpson, 2005, Condition 7'
  },
  {
    id: 8,
    title: 'Feedback matches student understanding of the task',
    category: 'feedback',
    summary: 'Students may misunderstand the task, have unsophisticated conceptions of learning, or not understand the discourse of the discipline. Feedback must be sensitive to these gaps.',
    keyFinding: 'A student received positive feedback on a History essay and devastating feedback on a parallel Anthropology essay for the same work — the discourse expectations differed (Lea & Street, 1998).',
    source: 'Gibbs & Simpson, 2005, Condition 8'
  },
  {
    id: 9,
    title: 'Feedback is received and attended to',
    category: 'feedback',
    summary: 'Students often glance at the grade and discard the feedback. When marks accompany feedback, students pay less attention to the comments.',
    keyFinding: 'Some students threw away the feedback if they disliked the grade; others were concerned only with the final result and did not collect marked work (Wotjas, 1998).',
    source: 'Gibbs & Simpson, 2005, Condition 9'
  },
  {
    id: 10,
    title: 'Feedback is acted upon by the student',
    category: 'feedback',
    summary: 'Even when read, feedback may not change behaviour. It may come too late, be too vague, ask students to do something they cannot do, or have no follow-up.',
    keyFinding: 'Teaching students to monitor their own performance is the ultimate goal of feedback (Sadler, 1989).',
    source: 'Gibbs & Simpson, 2005, Condition 10'
  }
];

// Hook scenario data
export const hookScenario = {
  setup: 'Dr. Ahmad spent three hours writing detailed, personalised feedback on 40 assignments. Each comment addressed specific strengths, areas for improvement, and suggestions for the next submission. The assignments were returned two weeks before the final exam.',
  question: 'What happened when students received their assignments back?',
  options: [
    {
      id: 'a',
      text: 'Students read every comment carefully and applied the suggestions to their exam preparation.',
      isCorrect: false,
      feedback: 'Research shows this is rare. While this would be ideal, studies consistently find that most students glance at the grade and pay limited attention to written comments, especially when a mark is also provided.'
    },
    {
      id: 'b',
      text: 'Students looked at the grade, and many discarded the feedback — especially those who received lower marks.',
      isCorrect: true,
      feedback: 'This is what the research documents. Wotjas (1998) reported that "some students threw away the feedback if they disliked the grade." Where marks accompany feedback, students pay less attention to the comments (Crooks, 1988). This is one of the central problems Gibbs & Simpson identify.'
    },
    {
      id: 'c',
      text: 'Students used the feedback to form study groups and discuss their learning collaboratively.',
      isCorrect: false,
      feedback: 'While collaborative learning is valuable, Maclellen (2001) found that only 2% of students reported that feedback prompted discussion with a tutor, and 50% said feedback never prompted discussion. Feedback rarely triggers collaborative engagement on its own.'
    },
    {
      id: 'd',
      text: 'Students requested a meeting with Dr. Ahmad to discuss the feedback in detail.',
      isCorrect: false,
      feedback: 'Maclellen (2001) found that while 63% of lecturers responded that feedback frequently prompts discussion, only 2% of students agreed. Students rarely initiate feedback conversations without structural incentives.'
    }
  ]
};

// Effort distribution simulator scenarios
export const assessmentDesigns = [
  {
    id: 'exam-only',
    name: '100% Final Exam',
    description: 'One unseen examination at the end of the semester.',
    weekEffort: [2, 2, 2, 3, 3, 3, 4, 4, 5, 6, 8, 15, 20, 35],
    studentQuote: '"I just don\'t bother doing the homework now... it\'s amazing how little work you have to do if you really don\'t like the course." (Snyder, 1971)',
    outcome: 'Study concentrated into a short intense period. Topics not likely on the exam are ignored. Surface approach dominates revision.'
  },
  {
    id: 'essay-only',
    name: 'One Extended Essay',
    description: 'A single 3000-word essay due in week 10.',
    weekEffort: [2, 2, 2, 3, 3, 4, 5, 10, 18, 25, 3, 3, 3, 3],
    studentQuote: '"It\'s just work, in a way. Just all these essays, and reading\'s the worst part, it\'s just labouring really." (Hounsell, 1987)',
    outcome: 'Intense effort peaks around the deadline. Weeks before and after have minimal engagement. Essay generates reading around, but only for one topic area.'
  },
  {
    id: 'weekly-tasks',
    name: 'Weekly Problem Sheets + Peer Assessment',
    description: 'Short weekly tasks, peer-assessed (no marks contributing to grade).',
    weekEffort: [8, 8, 7, 8, 7, 8, 8, 7, 8, 7, 8, 7, 8, 8],
    studentQuote: '"When lecturers introduced periodic peer-assessment of the problem sheets — as a course requirement but without the marks contributing — students\' exam marks increased dramatically." (Forbes & Spence, 1991)',
    outcome: 'Effort distributed evenly across the semester. Social pressure of peer assessment drives engagement. Learning is sustained and cumulative.'
  },
  {
    id: 'mixed',
    name: 'Mixed: Quizzes + Mid-term + Final',
    description: 'Bi-weekly quizzes (20%), mid-term assignment (30%), final exam (50%).',
    weekEffort: [4, 5, 8, 5, 6, 10, 5, 6, 7, 8, 7, 8, 10, 14],
    studentQuote: 'Frequent assignments distribute student effort across the course, while infrequent assignments create intensive peaks (Gibbs & Simpson, 2005).',
    outcome: 'More even distribution with moderate peaks at assessment points. Students engage regularly but may still strategically neglect unassessed content.'
  }
];

// Feedback design laboratory examples
export interface FeedbackExample {
  id: string;
  name: string;
  description: string;
  exampleText: string;
  conditionsMet: number[];
  conditionsViolated: number[];
  effectiveness: 'high' | 'medium' | 'low';
  researchNote: string;
}

export const feedbackExamples: FeedbackExample[] = [
  {
    id: 'grade-only',
    name: 'Grade Only',
    description: 'A numerical mark with no written comments.',
    exampleText: '62/100',
    conditionsMet: [],
    conditionsViolated: [4, 5, 7, 8, 9, 10],
    effectiveness: 'low',
    researchNote: 'Grades without feedback may be particularly damaging. A grade is perceived as indicating personal ability and can damage self-efficacy (Gibbs & Simpson, 2005, Condition 5).'
  },
  {
    id: 'brief-comments',
    name: 'Brief Comments',
    description: 'Short evaluative comments alongside a grade.',
    exampleText: 'Satisfactory effort. More critical analysis of key issues would have helped.',
    conditionsMet: [4],
    conditionsViolated: [5, 7, 8, 10],
    effectiveness: 'low',
    researchNote: 'Higgins et al. (2001) describe a student left frustrated by feedback reading "A satisfactory effort. More critical analysis of key issues would have helped" — the student wanted to be better than satisfactory but received no actionable guidance.'
  },
  {
    id: 'detailed-comments',
    name: 'Detailed Comments + Grade',
    description: 'Thorough written feedback with a numerical grade.',
    exampleText: 'Your literature review covers key sources effectively (strength). However, the argument in section 3 relies on description rather than critical evaluation — compare how Smith (2020) and Jones (2021) reach different conclusions on the same evidence. For your next submission, try structuring each paragraph around a point of tension between sources rather than summarising them sequentially.',
    conditionsMet: [4, 5, 7, 8],
    conditionsViolated: [9, 10],
    effectiveness: 'medium',
    researchNote: 'Detailed feedback is valuable but when accompanied by a grade, students pay less attention to the comments (Crooks, 1988). Black & Wiliam (1998) found students read feedback more carefully in the absence of marks.'
  },
  {
    id: 'feed-forward',
    name: 'Feed-Forward (No Grade)',
    description: 'Forward-looking guidance without a numerical mark.',
    exampleText: 'Three things to focus on for your next submission: (1) Your analysis would strengthen if you compared at least two theoretical perspectives rather than presenting one. (2) The conclusion needs to synthesise your findings into a position, not just summarise. (3) Consider how your argument would change if you applied the framework from week 6 readings. Meet with me during office hours if you want to discuss approach.',
    conditionsMet: [4, 5, 6, 7, 8, 9, 10],
    conditionsViolated: [],
    effectiveness: 'high',
    researchNote: 'Feedback without marks is read more carefully and used to guide learning (Black & Wiliam, 1998). Feed-forward focuses on future action rather than past performance, aligning with Condition 10 — feedback is acted upon.'
  },
  {
    id: 'peer-feedback',
    name: 'Structured Peer Feedback',
    description: 'Students assess each other using explicit criteria, no grades.',
    exampleText: 'Using the rubric: Your peer notes that criterion 3 (critical analysis) is partially met — they identified where you describe rather than evaluate, and suggested you add a counter-argument in paragraph 4. They also noted your referencing is consistent (criterion 5 fully met).',
    conditionsMet: [3, 4, 5, 6, 7, 9, 10],
    conditionsViolated: [8],
    effectiveness: 'high',
    researchNote: 'When peer assessment replaced lecturer marking, exam marks increased dramatically (Forbes & Spence, 1991). Self- and peer-assessment helps students internalise standards (Dochy et al., 1999), but may lack expert depth on disciplinary discourse (Condition 8).'
  },
  {
    id: 'two-stage',
    name: 'Two-Stage Assignment',
    description: 'Draft receives feedback; revised version is graded.',
    exampleText: 'Stage 1 feedback: Your methodology section describes what you did but does not justify your choices. For the revised submission, explain why you chose this method over alternatives, referencing at least two methodological sources. Grade awarded only on Stage 2.',
    conditionsMet: [3, 4, 5, 6, 7, 8, 9, 10],
    conditionsViolated: [],
    effectiveness: 'high',
    researchNote: 'Cooper (2000) reported that two-stage assignments with feedback on the first stage improved almost all students\' performance, particularly weaker students. The grade follows the feedback, ensuring it is received and acted upon.'
  }
];

// Guided example — redesign walkthrough
export interface RedesignStep {
  step: number;
  title: string;
  before: string;
  decision: string;
  conditionApplied: number;
  after: string;
  outcome: string;
}

export const redesignSteps: RedesignStep[] = [
  {
    step: 1,
    title: 'Problem: Students ignore feedback',
    before: 'Detailed written feedback returned with a grade. Students look at the mark and rarely read comments.',
    decision: 'Remove the grade from the first submission. Provide comments only. Grade awarded on a revised second submission.',
    conditionApplied: 9,
    after: 'Stage 1: detailed comments, no grade. Stage 2: revised submission with grade.',
    outcome: 'Students read feedback more carefully in the absence of marks (Black & Wiliam, 1998). Two-stage design ensures feedback is acted upon (Cooper, 2000).'
  },
  {
    step: 2,
    title: 'Problem: Feedback arrives too late',
    before: 'Assignments submitted in week 8, feedback returned in week 12. Students have moved on to exam preparation.',
    decision: 'Replace one large assignment with three smaller tasks submitted at weeks 4, 7, and 10. Each receives feedback within one week.',
    conditionApplied: 6,
    after: 'Three staggered submissions with one-week turnaround. Each feeds into the next.',
    outcome: 'Feedback arrives while students are still engaged with the content and can apply it to subsequent tasks. Weaker students improved dramatically with practice tests and timely feedback (Sly, 1999).'
  },
  {
    step: 3,
    title: 'Problem: Feedback is too vague',
    before: '"Good work" or "Needs more analysis" — feedback that tells students something is wrong but not what to do about it.',
    decision: 'Use feed-forward language: specific, actionable suggestions that reference particular course materials and upcoming tasks.',
    conditionApplied: 10,
    after: '"Your analysis in section 2 describes the theory but does not apply it. For the next task, try applying Framework X to the case study from week 5 — compare your findings with the counter-example in Reading Y, pages 24-29."',
    outcome: 'Feedback becomes actionable when it references specific materials and future tasks. Vague feedback like "be more Sociological" asks students to do something they do not know how to do (Gibbs & Simpson, 2005).'
  },
  {
    step: 4,
    title: 'Problem: Students game the assessment',
    before: 'One final exam worth 100%. Students spot likely questions and ignore content they believe will not be tested.',
    decision: 'Add bi-weekly low-stakes quizzes covering different content areas each time, plus the final exam.',
    conditionApplied: 2,
    after: 'Six quizzes (30%) + final exam (70%). Quiz content rotates across all course topics.',
    outcome: 'Students distribute effort across the semester rather than cramming. The "hidden curriculum" no longer rewards strategic neglect of unassessed content (Snyder, 1971; Miller & Parlett, 1974).'
  }
];

// Try It scenario data
export interface TryItProblem {
  id: string;
  title: string;
  context: string;
  problems: string[];
  options: {
    id: string;
    text: string;
    conditionsAddressed: number[];
    isRecommended: boolean;
    explanation: string;
  }[];
}

export const tryItScenarios: TryItProblem[] = [
  {
    id: 'large-class',
    title: 'Large Enrolment Module (200 students)',
    context: 'You teach a first-year module with 200 students. Currently, students submit one essay at week 10 and receive feedback (with a grade) at week 13 — one week before the final exam. You have noticed that exam performance is poor and students rarely attend office hours to discuss their essays.',
    problems: [
      'Feedback arrives at week 13 — too late to influence learning before the exam (Condition 6)',
      'Only one assessed task — students study strategically and ignore most course content until the essay (Conditions 1 & 2)',
      'Grade accompanies feedback — students focus on the mark, not the comments (Condition 9)'
    ],
    options: [
      {
        id: 'a',
        text: 'Replace the essay with a 100% multiple-choice exam to save marking time.',
        conditionsAddressed: [1],
        isRecommended: false,
        explanation: 'While this captures study time, MCQ tests can orient students toward surface approaches (Scouler & Prosser, 1994). It does not address timing, engagement with feedback, or productive learning activity.'
      },
      {
        id: 'b',
        text: 'Add four short bi-weekly tasks with peer assessment (no marks). Move the essay to week 6 with comments-only feedback. Grade the revised essay at week 10.',
        conditionsAddressed: [1, 2, 3, 4, 6, 9, 10],
        isRecommended: true,
        explanation: 'This distributes effort (Condition 2), provides frequent feedback (Condition 4), arrives while it matters (Condition 6), uses peer assessment to scale without generating marking burden (Forbes & Spence, 1991), and the two-stage essay ensures feedback is read and acted upon (Cooper, 2000).'
      },
      {
        id: 'c',
        text: 'Keep the same structure but provide more detailed written feedback on the essay.',
        conditionsAddressed: [4],
        isRecommended: false,
        explanation: 'More detailed feedback helps with Condition 4 but does not address timing (still too late), the single-task problem, or the grade overshadowing comments. More of the same type of feedback rarely solves structural problems.'
      },
      {
        id: 'd',
        text: 'Add a single mid-term test worth 30% to motivate earlier study.',
        conditionsAddressed: [1, 2],
        isRecommended: false,
        explanation: 'A mid-term test helps distribute effort somewhat but adds only one additional assessment point. It does not address feedback quality, timing, or whether students engage with comments. A single additional test still allows long gaps of disengagement.'
      }
    ]
  }
];

// Feedback & Challenge — trade-off scenarios
export interface TradeoffScenario {
  id: string;
  title: string;
  context: string;
  optionA: {
    label: string;
    description: string;
    strengths: string[];
    weaknesses: string[];
  };
  optionB: {
    label: string;
    description: string;
    strengths: string[];
    weaknesses: string[];
  };
  keyInsight: string;
}

export const tradeoffScenarios: TradeoffScenario[] = [
  {
    id: 'timing-vs-quality',
    title: 'The Timing vs. Quality Trade-Off',
    context: 'You teach a module with 150 students. You can either provide rapid feedback within 48 hours using a brief rubric with short comments, or provide comprehensive feedback within three weeks with detailed written analysis of each submission.',
    optionA: {
      label: 'Rapid Feedback (48 hours)',
      description: 'Brief rubric-based comments, returned within 48 hours of submission.',
      strengths: [
        'Arrives while students are still thinking about the task (Condition 6)',
        'Students can apply feedback to their next piece of work immediately',
        'Imperfect feedback provided almost immediately may have more impact than perfect feedback weeks later (Gibbs & Simpson, 2005)'
      ],
      weaknesses: [
        'Brief comments may lack the specificity needed for action (Condition 10)',
        'May not address disciplinary discourse issues (Condition 8)',
        'Limited detail may not develop deeper understanding (Condition 7)'
      ]
    },
    optionB: {
      label: 'Comprehensive Feedback (3 weeks)',
      description: 'Detailed written analysis addressing content, argumentation, and disciplinary conventions.',
      strengths: [
        'Addresses conditions of specificity and detail (Condition 4)',
        'Can engage with disciplinary discourse expectations (Condition 8)',
        'More likely to develop understanding through explanations (Condition 7)'
      ],
      weaknesses: [
        'Three weeks later, students have moved on to new content (Condition 6)',
        'Much expensively provided feedback is likely to be wasted if it arrives after students have moved on',
        'If a grade accompanies detailed feedback, students may still focus on the mark (Condition 9)'
      ]
    },
    keyInsight: 'Gibbs & Simpson argue there may be a trade-off between rapidity and quality. Consider a hybrid: rapid initial feedback within 48 hours identifying the top 2-3 priorities, followed by optional detailed feedback available on request. The key question is: will the student still be engaged with this content when the feedback arrives?'
  }
];

// Takeaway — self-review checklist
export const selfReviewItems = conditions.map(c => ({
  conditionId: c.id,
  question: `Does your current assessment design satisfy: "${c.title}"?`,
  category: c.category,
  summary: c.summary
}));
