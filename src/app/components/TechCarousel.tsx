import {
  Shield,
  Award,
  BarChart3,
  Workflow,
  Code2,
  Settings,
} from 'lucide-react';

const ReactIcon = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-10 h-10"
    fill="none"
    stroke="currentColor"
    strokeWidth="5"
  >
    <ellipse cx="50" cy="50" rx="45" ry="15" />
    <ellipse cx="50" cy="50" rx="45" ry="15" transform="rotate(60 50 50)" />
    <ellipse cx="50" cy="50" rx="45" ry="15" transform="rotate(120 50 50)" />
    <circle cx="50" cy="50" r="7" fill="currentColor" />
  </svg>
);

const AngularIcon = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10" fill="currentColor">
    <polygon points="50,2 92,18 83,78 50,98 17,78 8,18" />
    <path d="M50,25 L68,72 H57 L53,56 H47 L43,72 H32 Z" fill="white" />
  </svg>
);

const VueIcon = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10" fill="currentColor">
    <polygon points="50,90 5,10 28,10 50,58 72,10 95,10" />
    <polygon points="50,70 30,16 44,16 50,40 56,16 70,16" fill="white" />
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10" fill="currentColor">
    <polygon points="50,5 93,27 93,73 50,95 7,73 7,27" />
    <text
      x="50"
      y="68"
      textAnchor="middle"
      fill="white"
      fontSize="40"
      fontFamily="sans-serif"
      fontWeight="bold"
    >
      N
    </text>
  </svg>
);

const OpenAIIcon = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10" fill="currentColor">
    {[0, 1, 2, 3, 4].map((i) => (
      <ellipse
        key={i}
        cx="50"
        cy="27"
        rx="20"
        ry="10"
        transform={`rotate(${i * 72} 50 50)`}
      />
    ))}
    <circle cx="50" cy="50" r="13" fill="white" />
  </svg>
);

const GeminiIcon = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10" fill="currentColor">
    <path d="M50,5 C50,32 68,50 95,50 C68,50 50,68 50,95 C50,68 32,50 5,50 C32,50 50,32 50,5 Z" />
  </svg>
);

const ICONS = [
  { name: 'React', icon: <ReactIcon /> },
  { name: 'Angular', icon: <AngularIcon /> },
  { name: 'Vue.js', icon: <VueIcon /> },
  { name: 'Node.js', icon: <NodeIcon /> },
  { name: 'OpenAI', icon: <OpenAIIcon /> },
  { name: 'Gemini', icon: <GeminiIcon /> },
  { name: 'ITIL', icon: <Shield className="w-10 h-10" /> },
  { name: 'Prince2', icon: <Award className="w-10 h-10" /> },
  { name: 'KPI / SLA', icon: <BarChart3 className="w-10 h-10" /> },
  { name: 'Workflow Automation', icon: <Workflow className="w-10 h-10" /> },
  { name: 'Custom Software', icon: <Code2 className="w-10 h-10" /> },
  { name: 'Service Operations', icon: <Settings className="w-10 h-10" /> },
];

export function TechCarousel() {
  return (
    <section className="py-10 bg-white border-y border-slate-100">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
          {ICONS.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 text-slate-700
                         opacity-[0.5] grayscale
                         hover:opacity-100 hover:grayscale-0
                         transition-all duration-300 cursor-default select-none w-[80px]"
            >
              {item.icon}
              <span className="text-[11px] font-medium text-center whitespace-nowrap leading-tight">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
