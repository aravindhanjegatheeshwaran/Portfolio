export type SkillColor =
  | "blue"
  | "emerald"
  | "violet"
  | "orange"
  | "yellow"
  | "slate";

export interface SkillGroup {
  id: string;
  label: string;
  color: SkillColor;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    label: "Frontend & UI",
    color: "blue",
    items: [
      "React",
      "Next.js 14",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Zustand",
      "TanStack Query",
      "Shadcn UI",
      "Ant Design",
      "Mapbox GL JS",
      "Three.js",
    ],
  },
  {
    id: "backend",
    label: "Backend & APIs",
    color: "emerald",
    items: [
      "FastAPI",
      "Django",
      "Node.js",
      "Express",
      "SQLAlchemy",
      "Alembic",
      "Pydantic",
      "JWT / RBAC",
      "REST API",
      "Uvicorn",
    ],
  },
  {
    id: "database",
    label: "Database & Storage",
    color: "violet",
    items: [
      "PostgreSQL",
      "PostGIS",
      "Redis",
      "SQLite",
      "GeoServer",
      "Alembic Migrations",
    ],
  },
  {
    id: "hardware",
    label: "Hardware & IoT",
    color: "orange",
    items: [
      "Arduino Integration",
      "UART / Serial",
      "PySerial",
      "Sensor Telemetry",
      "GSM Modem",
      "AT Commands",
      "GPS / IMU",
      "Digital Twin",
      "Fault Detection",
      "Frame Parsing",
    ],
  },
  {
    id: "devops",
    label: "DevOps & Tooling",
    color: "yellow",
    items: ["Git", "GitHub Actions", "Docker", "Render", "FFmpeg", "Vite"],
  },
  {
    id: "languages",
    label: "Languages",
    color: "slate",
    items: ["Python", "TypeScript", "JavaScript", "SQL"],
  },
];
