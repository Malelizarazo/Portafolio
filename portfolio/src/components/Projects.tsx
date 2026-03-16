const projects = [
  {
    title: "Protein Thermal Stability Prediction",
    description:
      "Thesis project predicting protein thermal stability from amino acid sequences using Azure ML, Python, and predictive models like PCA and clustering.",
    tags: ["ML", "Bioinformatics", "Azure ML", "Python"],
    status: "In Progress",
  },
  {
    title: "AWS Gym Mini Architecture",
    description:
      "Lightweight cloud architecture playground for experimenting with AWS services, infrastructure as code, and serverless patterns.",
    tags: ["AWS", "IaC", "Serverless"],
    status: "Completed",
  },
  {
    title: "Power BI Data Analytics",
    description:
      "Data models and dashboards in Power BI with BigQuery integration. Automated reports and weighted average calculations across large datasets.",
    tags: ["Power BI", "BigQuery", "Data Analysis"],
    status: "Completed",
  },
  {
    title: "Petroleum Refining Data Analysis",
    description:
      "Analysis of operational variables in SCADA systems and product quality testing for petroleum refining processes.",
    tags: ["Data Analysis", "SCADA", "Chemical Eng."],
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
