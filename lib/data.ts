export const PROFILE = {
  name: "Supat Yadav",
  role: "Full Stack Software Engineer",
  contact: "supat.yad@gmail.com",
  phone: "098-939-9121",
  location: "Bangkok, Thailand",
  focus: "Full-stack development · Cloud deployment · AI integration",
  languages: "EN · TH",
  education: "B.Sc. Information Technology · Kasetsart University · First-Class Honors · GPA 3.91",
  social: [
    { label: "GitHub", handle: "github.com/supat9", href: "https://github.com/supat9" },
    { label: "LinkedIn", handle: "in/supat9", href: "https://www.linkedin.com/in/supat9" },
    { label: "Email", handle: "supat.yad@gmail.com", href: "mailto:supat.yad@gmail.com" },
  ],
};

export interface Project {
  n: string;
  year: string;
  title: string;
  kicker: string;
  role: string;
  category?: "experience";
  summary: string;
  overview: string;
  highlights: string[];
  challenge?: string;
  stack: string[];
  images?: string[];
  link?: string;
}

export const PROJECTS: Project[] = [
  {
    n: "01",
    year: "Jul 2026 – Present",
    title: "Atiz Innovation Co., Ltd.",
    kicker: "Professional experience",
    category: "experience",
    role: "Full Stack Developer",
    summary:
      "Full Stack Developer building web applications with React.js, Next.js, and Go, integrating payment gateways, LINE Official Accounts, and AI capabilities, with AWS deployment and CI/CD workflows.",
    overview:
      "Develop and maintain full-stack web applications at Atiz Innovation, connecting frontend interfaces, backend services, and application data. My work includes payment and LINE integrations, project setup, AWS deployment, and AI features that help users find and understand information.",
    highlights: [
      "Develop React.js and Next.js frontends and backend services with Go and the Gin framework",
      "Design and develop RESTful APIs and integrate MongoDB, PostgreSQL, and MySQL",
      "Integrate payment gateways for online payments and connect applications with LINE Official Accounts",
      "Set up application projects and deploy to AWS using CI/CD workflows",
      "Integrate AI for internal knowledge retrieval, data summarization, and explanation",
    ],
    stack: ["React.js", "Next.js", "Go", "Gin", "MongoDB", "PostgreSQL", "MySQL", "AWS", "CI/CD", "AI Integration"],
  },
  {
    n: "02",
    year: "Apr – Jun 2025",
    title: "Ngern Hai Jai Co., Ltd.",
    kicker: "Professional experience",
    category: "experience",
    role: "Software Engineer",
    summary:
      "Software Engineer developing production features with Next.js and Go in an Agile team, working with microservices and applying Domain-Driven Design.",
    overview:
      "At Ngern Hai Jai I worked as a Software Engineer, developing and maintaining production features with Next.js and Go. I collaborated with an Agile team on requirement discussions, sprint planning, and iterative delivery through deployment, using Git and GitHub for branching, pull requests, and code reviews.",
    highlights: [
      "Developed and optimised production features using Next.js and Golang",
      "Collaborated on requirement discussions, sprint planning, and iterative delivery through deployment",
      "Managed codebase via Git and GitHub: branching, pull requests, code review",
      "Worked with Microservices architecture for scalable, modular backend services",
      "Applied Domain-Driven Design (DDD) to organise business logic",
    ],
    stack: ["Next.js", "Go", "GoFiber", "Microservices", "DDD", "Git", "GitHub"],
    images: ["/ngern-hai-jai.png"],
  },
  {
    n: "03",
    year: "2025",
    title: "Borrow-Return System",
    kicker: "Equipment management",
    role: "Full-stack",
    summary:
      "A web-based system to manage equipment borrowing, returns, and maintenance requests — with role-based access for Admin, Staff, and Users, and full Swagger API documentation.",
    overview:
      "Built a complete equipment lifecycle management system for an organisation. The platform handles the full flow from a user submitting a borrow request, through staff approval, to return and maintenance tracking. Every API endpoint is documented in Swagger for clean front-end integration.",
    highlights: [
      "RESTful API with Node.js and Express.js covering users, equipment, and requests",
      "Role-based access control for three user levels: Admin, Staff, User",
      "Borrow module tracking the full request lifecycle — submission, approval, return",
      "Maintenance module for issue reporting and repair status management",
      "Reporting feature generating equipment usage and maintenance summaries",
      "Full Swagger API documentation for all endpoints",
    ],
    challenge:
      "Modelling the equipment lifecycle cleanly — so that the same item could be in borrow, pending return, and under maintenance simultaneously — required careful state-machine thinking and clear separation between the borrowing and maintenance modules.",
    stack: ["Next.js", "Node.js", "Express.js", "Tailwind CSS", "SQL", "Swagger"],
    images: ["/Borrow-Return System.png", "/Borrow-Return System1.png", "/Borrow-Return System2.png", "/Borrow-Return System3.png", "/Borrow-Return System4.png"],
  },
  {
    n: "04",
    year: "2025",
    title: "Car Repair Booking",
    kicker: "Service booking platform",
    role: "Full-stack",
    summary:
      "A web-based car repair appointment system with real-time booking management, payment verification, and repair history — built with React.js, Node.js, and PostgreSQL.",
    overview:
      "Designed and built a full-stack booking platform for a car repair service. Customers can register, book appointments, and track their repair and payment history. Staff manage schedules and service status from the same interface.",
    highlights: [
      "Responsive UI with React.js and Tailwind CSS across all device sizes",
      "RESTful API with Node.js and PostgreSQL for bookings and repair schedules",
      "Payment verification system for tracking and confirming service payments",
      "User authentication with secure login and registration",
      "Repair history module storing complete service records per customer",
      "Payment history feature for full transaction traceability",
    ],
    challenge:
      "Keeping booking state consistent between the customer-facing UI and the staff management view — especially around concurrent bookings for the same slot — required careful API design and optimistic UI patterns on the frontend.",
    stack: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "PostgreSQL"],
    images: ["/dlogtech.png", "/dlogtech3.png", "/dlogtech2.png"],
  },
  {
    n: "05",
    year: "2026",
    title: "Ledger — Income & Expenses",
    kicker: "Personal finance app",
    role: "Full-stack",
    summary:
      "A full-featured personal finance tracker with dashboard charts, budget management, savings goals, and debt tracking — built with Next.js 16 and Supabase.",
    overview:
      "Ledger is a personal finance web app that covers the full money-management lifecycle. Users can log transactions, organise them by custom categories, set per-category budgets, track savings goals with deposit history, and monitor outstanding debts. A dashboard with Area, Bar, and Donut charts gives a monthly overview at a glance, and a reports module summarises spending by category across any month or year. The app supports Thai and English via a built-in i18n system and offers dark/light theme switching.",
    highlights: [
      "Dashboard with Area, Bar, and Donut charts showing monthly income vs. expenses",
      "Full CRUD for transactions with category, type, and date-range filters plus CSV export",
      "Category management with custom icons and colours",
      "Per-category budget tracking with real-time spend-vs-budget comparison",
      "Savings Goals module — set targets, record deposits, and track progress",
      "Debt tracker — log liabilities, record payments, and view remaining balances",
      "Monthly and yearly reports broken down by category",
      "Thai / English i18n switchable from Settings; Dark / Light theme support",
    ],
    challenge:
      "Keeping financial state consistent across independent modules — transactions, budgets, savings goals, and debts — required a clean data model in Supabase and careful API design so that each module could aggregate the same transaction data without duplicating logic.",
    stack: ["Next.js 16", "TypeScript", "Supabase", "PostgreSQL", "NextAuth", "Lucide React", "Node.js"],
    images: ["/income-expenses.png", "/income-expenses1.png", "/income-expenses2.png", "/income-expenses3.png", "/income-expenses4.png", "/income-expenses5.png", "/income-expenses6.png", "/income-expenses7.png", "/income-expenses8.png"],
    link: "https://income-expenses-app.vercel.app/",
  },
  {
    n: "06",
    year: "2026",
    title: "Portfolio Tracker",
    kicker: "Stock portfolio management",
    role: "Full-stack",
    summary:
      "A multi-user stock portfolio tracker with real-time pricing, transaction management, and AI-powered analysis via Gemini — migrated from Google Apps Script to Next.js 14 and Supabase.",
    overview:
      "Portfolio Tracker started as a personal Google Apps Script spreadsheet and was rebuilt as a full-stack web application. Users sign in with Google OAuth and get an isolated portfolio dashboard showing live stock prices from Finnhub. The app handles the full transaction lifecycle — adding positions, buying more shares, partial sales, and deletions — with automatic average price calculations. An AI analysis layer powered by Gemini provides both portfolio-wide overviews and per-stock insights on demand.",
    highlights: [
      "Google OAuth authentication via NextAuth.js with per-user data isolation",
      "Live stock prices fetched from Finnhub API, displayed in a real-time portfolio table",
      "Transaction engine supporting buy, sell, and delete with automatic average price calculation",
      "AI-powered portfolio analysis and individual stock insights using Google Gemini",
      "Server-side Supabase access with service role key — credentials never exposed to the client",
      "Middleware protecting the dashboard route with NextAuth session validation",
      "Migrated from Google Apps Script to a production Next.js app on Vercel",
    ],
    challenge:
      "Keeping each user's portfolio data strictly isolated without relying on Row Level Security meant pushing all data access through server-side API routes that validate the NextAuth session before every query — a deliberate trade-off that kept the security model explicit and auditable.",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "NextAuth.js", "Finnhub API", "Google Gemini", "Vercel"],
    images: ["/portfolio-app1.png", "/portfolio-app2.png", "/portfolio-app3.png", "/portfolio-app4.png", "/portfolio-app5.png", "/portfolio-app6.png", "/portfolio-app7.png"],
    link: "https://portfolio-app-drab-nu.vercel.app/dashboard",
  },
];

export const SKILLS = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "SQL", "Python", "Go"] },
  { group: "Frontend", items: ["Next.js", "React.js", "Vue.js", "Tailwind CSS", "Bootstrap"] },
  { group: "Backend", items: ["Go / Gin", "Node.js", "Express.js", "NestJS", "GoFiber", "RESTful APIs", "Prisma ORM"] },
  { group: "Database", items: ["PostgreSQL", "MySQL", "Supabase", "MongoDB"] },
  { group: "Cloud & Tools", items: ["AWS", "CI/CD", "Docker", "Git", "GitHub", "Postman", "Vercel", "Figma"] },
  { group: "AI", items: ["AI Integration", "Knowledge Retrieval", "Data Summarization", "Claude Code", "ChatGPT"] },
];
