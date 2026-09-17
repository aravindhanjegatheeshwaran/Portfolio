export type ProjectTag =
  | "Freelance"
  | "Enterprise"
  | "SaaS"
  | "IoT"
  | "Embedded"
  | "GIS"
  | "Automation"
  | "Consulting"
  | "Web App"
  | "AI/ML";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  impact: string;
  tags: ProjectTag[];
  featured: boolean;
  embeddedDetail?: {
    protocol: string;
    frameFormat?: string;
    hardware?: string;
  };
  status: "delivered" | "in-development";
}

export const projects: Project[] = [
  {
    id: "ctms",
    title: "CTMS",
    subtitle: "Tender Intelligence Platform",
    description:
      "Enterprise document intelligence platform for Indian Railways procurement automation. Ingests raw PDF tender notices from the IREPS portal, extracts eleven structured fields via a multi-strategy parsing engine, and generates standardised correspondence through a template system — eliminating manual data entry entirely.",
    stack: [
      "React 19",
      "FastAPI",
      "PostgreSQL",
      "TanStack Query",
      "Zustand",
      "Ant Design",
      "Vite",
      "SQLAlchemy",
      "JWT",
      "Alembic",
    ],
    impact:
      "Full audit trail per generated document; background job engine handles PDF extraction without blocking API responses; three-stage parsing strategy covers both digital and scanned tender PDFs.",
    tags: ["Freelance", "Automation"],
    featured: true,
    status: "delivered",
  },
  {
    id: "rail360",
    title: "Rail360 Vision",
    subtitle: "Railway Inspection & Geospatial Platform",
    description:
      "Intelligent railway inspection platform synchronising 360° video playback, GIS-based track visualisation, GPS/IMU-derived positioning, and POI-based inspection workflows. Any position in the system resolves bidirectionally across video timestamp, chainage (km), and geo-coordinate via a shared sync engine.",
    stack: [
      "React 18",
      "Mapbox GL JS",
      "Three.js",
      "Node.js",
      "Express",
      "PostgreSQL",
      "PostGIS",
      "GeoServer",
      "FFmpeg",
      "Zod",
      "TypeScript",
    ],
    impact:
      "Bidirectional sync engine shared across frontend and backend; HLS video processing pipeline via FFmpeg; geospatial track corridors stored in PostGIS with WMS/WFS served by GeoServer.",
    tags: ["Enterprise", "GIS"],
    featured: true,
    status: "in-development",
  },
  {
    id: "hiretrack",
    title: "HireTrack",
    subtitle: "Job Search Pipeline Manager",
    description:
      "Enterprise-grade SaaS platform for job seekers to track applications, manage company relationships, analyse pipeline health, and automate follow-up workflows. Server state (TanStack Query) is cleanly separated from client state (Zustand) — eliminating manual loading/cache management code.",
    stack: [
      "Next.js 14",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Zustand",
      "TanStack Query",
      "Shadcn UI",
      "Framer Motion",
      "JWT/RBAC",
      "Scrapling",
    ],
    impact:
      "JWT RBAC with Redis-backed token blacklisting; async job-scraping pipeline (Scrapling); pipeline analytics dashboard with stage and company-level tracking.",
    tags: ["SaaS"],
    featured: true,
    status: "in-development",
  },
  {
    id: "motor-dt",
    title: "Motor Digital Twin Monitor",
    subtitle: "UART Hardware Monitoring Dashboard",
    description:
      "Real-time desktop Digital Twin dashboard for hardware motor monitoring. Reads structured UART frames from a physical device over serial, evaluates 5 independent fault conditions, renders 4 live scrolling graphs, and logs all telemetry to CSV — with reconnect-safe serial ingestion and hardware-free demo mode.",
    stack: [
      "Python 3.11",
      "Tkinter",
      "Matplotlib",
      "PySerial",
      "Pillow",
      "CSV",
    ],
    impact:
      "Five-condition fault engine: high temperature, low humidity, no current, low voltage, overvoltage; reconnect-safe serial thread handles device disconnects transparently; demo mode cycles 5 realistic fault scenarios without hardware.",
    tags: ["IoT", "Embedded"],
    featured: true,
    embeddedDetail: {
      protocol: "UART / Serial",
      frameFormat:
        "0XZZ , t=<val> , h=<val> , m=<val> , I=<val> , V=<val> , 0XFF",
      hardware: "Hardware motor monitoring device at 9600 baud (COM4)",
    },
    status: "delivered",
  },
  {
    id: "greenhouse-dt",
    title: "Smart Greenhouse Digital Twin",
    subtitle: "Arduino IoT Sensor Dashboard",
    description:
      "Real-time digital twin of a physical greenhouse reading live sensor data from an Arduino over serial. Monitors soil moisture, temperature, humidity, and irrigation pump state — evaluates alert thresholds and derives pump-control recommendations with priority logic.",
    stack: [
      "Python 3.10",
      "Tkinter",
      "Matplotlib",
      "PySerial",
      "Pillow",
      "CSV",
    ],
    impact:
      "Priority-based pump logic (invalid soil overrides dry-soil detection); programmatic dashboard icon generation at runtime via Pillow; demo mode covers all 5 sensor fault scenarios without hardware.",
    tags: ["IoT", "Embedded"],
    featured: true,
    embeddedDetail: {
      protocol: "Arduino Serial",
      frameFormat:
        "0xAA , S=<soil_%> , T=<temp_°C> , H=<humidity_%> , M=<ON|OFF> , 0xBB",
      hardware:
        "Arduino with soil moisture, temperature, and humidity sensors (COM3, 9600 baud)",
    },
    status: "delivered",
  },
  {
    id: "ssapms",
    title: "SSAPMS",
    subtitle: "Smart Attendance & Performance System",
    description:
      "Django web application replacing manual attendance with webcam-based facial recognition (OpenCV LBPH). Includes staff and student portals for marks entry, attendance viewing, and downloadable PDF academic performance reports.",
    stack: [
      "Python / Django",
      "OpenCV LBPH",
      "ReportLab",
      "SQLite",
      "Bootstrap 4",
      "jQuery",
    ],
    impact:
      "Automated attendance capture via Haar Cascade face detection; auto-calculated grades from internal and semester marks; downloadable PDF attendance and performance reports.",
    tags: ["Web App", "AI/ML"],
    featured: false,
    status: "delivered",
  },
  {
    id: "alaaya-decor",
    title: "Alaaya Decor",
    subtitle: "Shopify Technical Audit",
    description:
      "Comprehensive technical audit for a Shopify-based home-decor e-commerce platform. Identified performance bottlenecks, integration gaps, conversion blockers, and technical debt — delivered as a structured, prioritised report with actionable remediation steps and business impact assessment.",
    stack: [
      "Shopify",
      "E-Commerce Analysis",
      "Performance Auditing",
      "Technical Writing",
    ],
    impact:
      "Executive audit report with prioritised findings, business-impact assessment per issue, and a remediation roadmap for the client team.",
    tags: ["Freelance", "Consulting"],
    featured: false,
    status: "delivered",
  },
];
