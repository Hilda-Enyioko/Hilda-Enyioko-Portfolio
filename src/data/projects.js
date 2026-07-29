export const projects = [
  {
    name: 'TheeInsurance Portal',
    category: 'Fintech',
    status: 'In Progress',
    description: 'A headless, API-first insurance distribution platform for Nigeria — think Stripe for insurance. Partners embed insurance products directly into their own platforms via a simple API integration, instead of building distribution infrastructure from scratch.',
    longDescription: 'TheeInsurance is built as an independent, multi-tenant distribution layer sitting between insurance providers and the platforms that want to sell their products — fintech apps, e-commerce checkouts, HR platforms, and more. Partners authenticate via X-Partner-Key headers and get a full policy lifecycle: plan discovery, subscription, payment, and renewal, without needing to build any of it themselves. Payments run through both Nomba (checkout, card tokenization, recurring billing) and Interswitch Quickteller Pay, with automated dunning workflows via n8n handling failed renewal charges before a policy lapses. Built end-to-end with role-based access control (Super Admin, Provider Admin, End User), KYC document storage via private Cloudinary delivery, and rate limiting on all partner-facing endpoints. Co-founded 50/50, currently building toward an MVP1 deadline of end of September 2026.',
    stack: ['Python', 'Django', 'DRF', 'React', 'TypeScript', 'PostgreSQL', 'Nomba', 'Interswitch', 'n8n', 'Redis', 'Cloudinary'],
    images: {
      cover: '/projects/theeinsurance-cover.jpg',
      gallery: [
        '/projects/theeinsurance-dashboard.png',
        '/projects/theeinsurance-architecture.png',
      ],
    },
    liveUrl: null,
    repoUrl: null,
  },
  {
    name: 'FUTO Aid',
    category: 'Community · EdTech',
    status: 'In Progress',
    description: 'A verified student support and fundraising platform for FUTO students. Built as IDC-FUTO\'s first community product, with Interswitch payment integration, Cloudinary media handling, and a full campaign management system.',
    longDescription: 'FUTO Aid was conceived and built as IDC-FUTO\'s first community-owned product — a platform where verified students can raise funds for tuition, emergencies, and academic needs, with donors able to trust that campaigns are legitimate and tied to real, verified students. Built by a 9-person team using a modular monolith architecture (Django/DRF + React/TypeScript + PostgreSQL), the platform handles campaign creation and verification, Interswitch-powered donations, and media uploads for campaign evidence via Cloudinary. Development followed structured sprint planning across the full team, making it as much a lesson in shipping a real product as a community-lead as it was a technical build.',
    stack: ['Django', 'DRF', 'React', 'TypeScript', 'PostgreSQL', 'Interswitch', 'Cloudinary'],
    images: {
      cover: '/projects/futo-aid-cover.png',
      gallery: [
        '/projects/futo-aid-campaigns.png',
        '/projects/futo-aid-donation-flow.png',
      ],
    },
    liveUrl: null,
    repoUrl: null,
  },
  {
    name: 'IoT-Based Hazard Security System',
    category: 'Hardware · IoT',
    status: 'Final Year Project',
    description: 'An ESP32-powered industrial building security system with four sensor subsystems — fire detection, gas detection, surveillance, and forced entry — with real-time mobile alerts via Blynk IoT.',
    longDescription: 'My final-year Electronic Engineering project: a harm-aware security system designed for industrial and household buildings, combining four independent hazard-detection subsystems on a single ESP32 microcontroller. MQ-series gas sensors detect leaks, an SW-420 vibration sensor flags forced entry or structural disturbance, and an RFID RC522 module handles access control — all reporting in real time to the Blynk IoT platform, which pushes instant mobile alerts to building occupants or security personnel. The project moved through full seminar defense (completed May 2026), covering sensor calibration, false-positive handling, and system reliability under continuous operation.',
    stack: ['ESP32', 'C++', 'Blynk IoT', 'Arduino', 'MQ Gas Sensors', 'RFID RC522', 'SW-420'],
    images: {
      cover: '/projects/iot-security-cover.jpeg',
      gallery: [
        '/projects/iot-security-circuit.png',
        '/projects/iot-security-cover.jpeg',
      ],
    },
    liveUrl: null,
    repoUrl: null,
  },
  {
    name: 'AkuMart',
    category: 'Hackathon · Sustainability',
    status: 'Hack4FUTO 3rd Edition — Winner',
    description: 'An eco-friendly B2B marketplace that lets businesses and individuals trade waste seamlessly, turning what would be discarded material into a tradeable resource.',
    longDescription: 'AkuMart is a waste-to-resource marketplace built to make trading recyclable and reusable waste as simple as any other e-commerce transaction. Instead of waste generators and waste processors operating in disconnected, informal channels, AkuMart gives them a shared platform to list, discover, and transact — turning a manual, relationship-dependent process into something structured and scalable. The project won Hack4FUTO\'s 3rd edition, judged on both technical execution and the strength of the sustainability case behind it.',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    images: {
      cover: '/projects/akumart-cover.png',
      gallery: [
        '/projects/akumart-marketplace.png',
        '/projects/akumart-demo-day.png',
      ],
    },
    liveUrl: null,
    repoUrl: null,
  },
]