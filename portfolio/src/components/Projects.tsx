const projects = [
  {
    title: "AWS Marketing & Campaign Analytics",
    description:
      "Interactive campaign landing pages, KPI tracking dashboards, and team performance analytics for 200+ sales professionals across LATAM. Built with HTML, CSS, JS, and QuickSight.",
    tags: ["AWS", "QuickSight", "JavaScript", "Analytics"],
    status: "Current",
  },
  {
    title: "Amazon Q CLI Agents",
    description:
      "Custom agents for email automation and content generation, including web scraping capabilities for public event data collection and processing.",
    tags: ["Amazon Q", "Automation", "Python"],
    status: "Current",
  },
  {
    title: "Protein Thermal Stability Prediction",
    description:
      "Thesis project predicting protein thermal stability from amino acid sequences using ML models, Python, Azure ML, and large scale embeddings.",
    tags: ["ML", "Bioinformatics", "Azure ML", "Python"],
    status: "Completed",
  },
  {
    title: "Power BI Data Analytics",
    description:
      "Data models and dashboards in Power BI with BigQuery integration. Automated reports and weighted average calculations across large datasets.",
    tags: ["Power BI", "BigQuery", "Data Analysis"],
    status: "Completed",
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
              className="rounded-xl border border-slate-800 bg-[#0a0e1a]/80 p-6 hover:border-blue-500/50 transition-colors group"
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
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-slate-800 text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
