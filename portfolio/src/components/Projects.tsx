type Project = {
  title: string;
  description: string;
  tags: string[];
  status: string;
  link?: { href: string; label: string };
};

const projects: Project[] = [
  {
    title: "Protein Thermostability Predictor",
    description:
      "Undergraduate thesis. Predicts protein melting temperature from the amino acid sequence: 20,000+ Meltome Atlas sequences fetched from the UniProt API, ESM-2 protein-language-model embeddings and PyTorch MLP/LSTM regressors (best R² = 0.74), benchmarked against Random Forest and Azure ML AutoML. Deployed as a web app.",
    tags: ["PyTorch", "ESM-2", "Scikit-learn", "Azure ML", "FastAPI"],
    status: "Thesis · 2025",
    link: {
      href: "https://github.com/Malelizarazo/protein-thermostability-predictor",
      label: "View code",
    },
  },
  {
    title: "Multi-Agent Generative AI Prototype",
    description:
      "Internal prototype at AWS: an orchestrator in Python coordinating specialised agents with tool calling, memory and retrieval-augmented generation over a Bedrock Knowledge Base.",
    tags: ["Python", "Amazon Bedrock AgentCore", "Strands Agents", "RAG"],
    status: "AWS · 2025–2026",
  },
  {
    title: "Campaign Web Applications",
    description:
      "Campaign web apps with KPI tracking, prize management and team performance dashboards, used by 200+ sales professionals across LATAM. Designed within Amazon's internal rules and approved services.",
    tags: ["JavaScript", "HTML", "CSS"],
    status: "AWS · 2025–2026",
  },
  {
    title: "Amazon Q Developer CLI Agents",
    description:
      "AI agents for email automation and content generation, including web scraping of public event data.",
    tags: ["Amazon Q Developer", "AI agents", "Automation"],
    status: "AWS · 2025–2026",
  },
  {
    title: "Universe: Team Organization App",
    description:
      "Mobile app for managing schedules, friends, teams and shared projects, built by a student team in Flutter.",
    tags: ["Flutter", "Dart", "Team project"],
    status: "Coursework · 2025",
    link: {
      href: "https://github.com/ISIS3510-Grupo33-20251/group33_dart",
      label: "View code",
    },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-[#111827]/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center glow-text">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-slate-800 bg-[#0a0e1a]/80 p-6 hover:border-blue-500/50 transition-colors group flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-cyan-400 font-mono">
                  {p.status}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-slate-500 mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-slate-800 text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {p.link && (
                <a
                  href={p.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {p.link.label} →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
