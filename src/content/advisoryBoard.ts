export type AdvisoryBoardMember = {
  adviser: string;
  domain: "Environment" | "Engineering" | "Business" | "Policy" | "Science" | "Health" | "Law" | "Finance" | "Design" | "Education";
  want: string;
  courseCorrect: string;
  costLevel: "Low" | "Medium" | "High";
  costNotes: string;
  benefits: string;
  results: string;
};

export const advisoryBoardMembers: AdvisoryBoardMember[] = [
  {
    adviser: "Jane Goodall",
    domain: "Environment",
    want: "Wildlife protection from tyre pollution",
    courseCorrect: "Add animal impact tracking via field studies integrated into TLRS database",
    costLevel: "Low",
    costNotes: "~$1,000–$5,000 for software updates to add eco-impact fields",
    benefits: "Enhanced environmental reports for regulators and TSA compliance",
    results: "Reduced harm to native wildlife, e.g., less soil/water pollution"
  },
  {
    adviser: "David Attenborough",
    domain: "Environment",
    want: "Focus on habitat loss from tyre dumping",
    courseCorrect: "Enable user-uploaded video logs of dumping sites in TLRS app",
    costLevel: "Low",
    costNotes: "~$500 for upload feature in React.js frontend",
    benefits: "Increased public awareness and support for recycling initiatives",
    results: "Higher tyre recovery rates (beyond 66% benchmark)"
  },
  {
    adviser: "Hedy Lamarr",
    domain: "Engineering",
    want: "Strong tech integration with AI",
    courseCorrect: "Add AI-driven wear prediction models (e.g., scikit-learn) to TLRS analytics",
    costLevel: "Medium",
    costNotes: "~$10,000–$20,000 for AI development and cloud compute",
    benefits: "Early failure detection, reducing maintenance costs",
    results: "Cost savings for fleets (e.g., 15% longer tyre life)"
  },
  {
    adviser: "Elon Musk",
    domain: "Engineering",
    want: "Advanced sensor integration",
    courseCorrect: "Embed real-time sensors (e.g., TPMS, BLE) in tyres, integrated via API",
    costLevel: "High",
    costNotes: "~$50,000–$100,000 for sensor hardware and integration",
    benefits: "Improved safety through real-time monitoring",
    results: "Fewer accidents from tyre failures"
  },
  {
    adviser: "Sheryl Sandberg",
    domain: "Business",
    want: "Clear scaling strategy",
    courseCorrect: "Build partnerships with fleets (e.g., Goodyear Fleet QLD) via outreach",
    costLevel: "Low",
    costNotes: "~$1,000 for CRM tools and email campaigns",
    benefits: "Expanded user base, faster adoption",
    results: "Increased revenue from new users (e.g., $120,000/year from 100 businesses)"
  },
  {
    adviser: "Warren Buffett",
    domain: "Business",
    want: "Sustainable growth model",
    courseCorrect: "Focus on value-driven onboarding (e.g., free trials for retailers like JAX Tyres)",
    costLevel: "Low",
    costNotes: "Strategic shift, no direct cost",
    benefits: "Steady, organic expansion with loyal users",
    results: "Long-term profitability with minimal churn"
  },
  {
    adviser: "Ruth Bader Ginsburg",
    domain: "Policy",
    want: "Fair access for all stakeholders",
    courseCorrect: "Offer free tools to small shops (e.g., solo mechanics) via freemium tier",
    costLevel: "Medium",
    costNotes: "~$5,000–$10,000 for subsidized hosting",
    benefits: "Inclusive participation across business sizes",
    results: "Equitable system use, boosting adoption"
  },
  {
    adviser: "Nelson Mandela",
    domain: "Policy",
    want: "Inclusive regulatory framework",
    courseCorrect: "Promote community input via TLRS feedback forms and public dashboards",
    costLevel: "Low",
    costNotes: "~$2,000 for form integration and community outreach",
    benefits: "Builds trust among stakeholders",
    results: "Wider adoption by retailers/fleets"
  },
  {
    adviser: "Marie Curie",
    domain: "Science",
    want: "Chemical testing for tyre safety",
    courseCorrect: "Add lab checks for toxins (e.g., TRWP) via partnerships with universities",
    costLevel: "Medium",
    costNotes: "~$10,000–$25,000 for lab data integration",
    benefits: "Safer tyre products, reduced health risks",
    results: "Less environmental and health impact from tyre waste"
  },
  {
    adviser: "Albert Einstein",
    domain: "Science",
    want: "High data accuracy",
    courseCorrect: "Use physics-based wear models (e.g., friction analysis) in TLRS analytics",
    costLevel: "Low",
    costNotes: "~$5,000 for software tweaks in Python",
    benefits: "Precise lifecycle forecasts",
    results: "Better maintenance schedules, reducing waste"
  },
  {
    adviser: "Florence Nightingale",
    domain: "Health",
    want: "Disease tracking from tyre stockpiles",
    courseCorrect: "Monitor stockpiles for mosquito breeding via sensors and TLRS alerts",
    costLevel: "Medium",
    costNotes: "~$10,000 for sensor integration and alert system",
    benefits: "Prevents disease outbreaks (e.g., dengue)",
    results: "Healthier communities near tyre sites"
  },
  {
    adviser: "Jonas Salk",
    domain: "Health",
    want: "Proactive health risk alerts",
    courseCorrect: "Flag health threats (e.g., stockpile risks) in real-time dashboards",
    costLevel: "Low",
    costNotes: "~$2,000 for alert logic in Node.js backend",
    benefits: "Quick response to health issues",
    results: "Fewer illnesses linked to tyre waste"
  },
  {
    adviser: "Sandra Day O'Connor",
    domain: "Law",
    want: "Strong penalties for non-compliance",
    courseCorrect: "Add legal alert system for regulators (e.g., QLD fines up to $12,000)",
    costLevel: "Low",
    costNotes: "~$3,000 for alert notifications in TLRS",
    benefits: "Deters illegal dumping and fraud",
    results: "Increased compliance with TSA/state laws"
  },
  {
    adviser: "Thurgood Marshall",
    domain: "Law",
    want: "Fair enforcement mechanisms",
    courseCorrect: "Implement case review tools for regulators in TLRS admin panel",
    costLevel: "Medium",
    costNotes: "~$5,000 for audit dashboard features",
    benefits: "Ensures just enforcement outcomes",
    results: "Trusted system, fewer legal disputes"
  },
  {
    adviser: "Christine Lagarde",
    domain: "Finance",
    want: "Funding to lower barriers",
    courseCorrect: "Seek government grants (e.g., QLD circular economy funds) for TLRS rollout",
    costLevel: "Low",
    costNotes: "~$1,000–$3,000 for application time",
    benefits: "Reduced costs for users, wider access",
    results: "More stakeholders onboarded"
  },
  {
    adviser: "Alan Greenspan",
    domain: "Finance",
    want: "Stable economic model",
    courseCorrect: "Analyze cost structures (e.g., pricing tiers) via TLRS analytics",
    costLevel: "Low",
    costNotes: "~$2,000 for financial dashboard in React.js",
    benefits: "Stable pricing, predictable revenue",
    results: "Profitable growth (e.g., $50–$200/month tiers)"
  },
  {
    adviser: "Zaha Hadid",
    domain: "Design",
    want: "User-friendly interface",
    courseCorrect: "Redesign UI for intuitive use (e.g., simpler forms for mechanics)",
    costLevel: "Medium",
    costNotes: "~$5,000–$10,000 for UI/UX work in React.js",
    benefits: "Easier navigation for all users",
    results: "Higher engagement, fewer errors"
  },
  {
    adviser: "Frank Lloyd Wright",
    domain: "Design",
    want: "Natural workflow integration",
    courseCorrect: "Fit forms to user workflows (e.g., dealer repair logs) via usability tests",
    costLevel: "Low",
    costNotes: "~$3,000 for testing and tweaks",
    benefits: "Intuitive tools for mechanics/dealers",
    results: "Faster adoption by stakeholders"
  },
  {
    adviser: "Maria Montessori",
    domain: "Education",
    want: "Comprehensive learning guides",
    courseCorrect: "Create video/text tutorials for TLRS usage (e.g., for retailers)",
    costLevel: "Low",
    costNotes: "~$2,000–$5,000 for content creation",
    benefits: "Improved user skills and confidence",
    results: "Better system operation, fewer support queries"
  },
  {
    adviser: "John Dewey",
    domain: "Education",
    want: "Hands-on training resources",
    courseCorrect: "Add interactive demos (e.g., mock tyre scans) in TLRS app",
    costLevel: "Medium",
    costNotes: "~$5,000 for video/demo integration",
    benefits: "Practical knowledge for users",
    results: "Effective use, higher retention"
  }
];