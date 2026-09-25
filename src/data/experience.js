export const experience = [
  {
    role: 'Backend Engineer',
    organisation: 'Bunchbay Nigeria Limited',
    period: 'Jun 2026 – Present',
    bullets: [
      'Build and maintain backend services for a multi-product marketplace platform, implementing transaction, billing, seller acceptance, and usage-governance workflows.',

      'Architected a seller acceptance workflow with multi-tier TTL expiry logic, including a 3-day seller decision window and 30-minute buyer payment window, with an append-only audit trail for complete transaction traceability.',

      'Integrated and hardened the Paystack REST API and webhooks, implementing dedicated event routing, signature verification, idempotency, and reconciliation checks for reliable payment processing.',

      'Configured Redis using Docker as part of the backend infrastructure, supporting application workflows and state management.',

      'Designed and enforced tiered usage quotas through backend middleware, returning structured API errors when exhibitor plan limits are exceeded across a 5-tier billing system.',

      'Secured third-party OAuth integrations, including Meta, using AES-256-GCM encryption and automated token-refresh workflows.',
    ],
  },

  {
    role: 'IT Intern — Applications & E-Channels Support | Software Development',
    organisation: 'Stanbic IBTC Group',
    period: 'Jun 2025 – Nov 2025',
    bullets: [
      'Developed backend business logic and reusable frontend components for 3+ internal enterprise applications, improving code maintainability and reducing development turnaround by ~20%.',

      'Diagnosed and resolved critical API integration failures (request/response mismatches, data persistence errors) across production systems, reducing incident resolution time by 35%.',

      'Authored and executed unit test suites for backend modules, achieving 85%+ code coverage and improving application stability pre-deployment.',

      'Optimized build and deployment workflows in Linux environments, cutting test-to-deploy cycle time by 25% through process standardization and scripting.',
    ],
  },

  {
    role: 'Community Lead',
    organisation: 'Interswitch Group — Interswitch Developer Community, FUTO',
    period: 'Nov 2025 – Present',
    bullets: [
      'Spearheading a community revamp initiative targeting 50% growth in active membership and 30% increase in event attendance through structured engagement and technical programming.',

      'Facilitated 10+ hands-on technical workshops on REST APIs, payment gateway integrations (Interswitch), and cloud services, directly impacting 400+ students.',

      'Managed end-to-end lifecycle of 2 open-source, education-focused projects from architecture planning to Demo Day deployment, producing deployable full-stack solutions.',

      'Coordinated cross-functional communication between IDC National, Interswitch technical teams, and 5+ student developer leads.',
    ],
  },

  {
    role: 'Chapter Lead',
    organisation: 'She Code Africa — Owerri Chapter',
    period: 'Apr 2026 – Present',
    bullets: [
      'Grew chapter membership by 32% within the first four months through structured community engagement, technical programming, and outreach.',
      
      'Organised and facilitated physical and virtual technical sessions, including campus outreach across FUTO, IMSU, Alvan Ikoku, and Nekede.',

      'Created member spotlight initiatives showcasing community members’ projects, achievements, and career milestones to increase their visibility and recognition.',

      'Coordinated a structured 2026 community calendar featuring anchor sessions, campus visits, and a Girl Child Tech Day event.'
    ],
  },
];