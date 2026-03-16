const skillGroups = [
  {
    category: "Programming",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "HTML", "SQL"],
  },
  {
    category: "Data & ML",
    skills: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "PCA",
      "Clustering",
      "Predictive Modeling",
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: ["Azure ML", "Google Cloud", "AWS", "Docker", "Power Automate"],
  },
  {
    category: "Data Tools",
    skills: ["Power BI", "BigQuery", "Jupyter", "Git"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center glow-text">
          Skills & Tools
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-mono text-cyan-400 mb-4 uppercase tracking-wider">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg border border-slate-700 text-slate-300 hover:border-blue-500/50 hover:text-blue-400 transition-colors"
                  >
                    {skill}
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
