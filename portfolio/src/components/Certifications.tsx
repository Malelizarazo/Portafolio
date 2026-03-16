"use client";

const certs = [
  {
    name: "AWS Certified Cloud Practitioner",
    shortName: "Cloud Practitioner",
    level: "Foundational",
    year: "2025",
    color: "#06b6d4",
    icon: "☁️",
    description:
      "Validates overall understanding of AWS Cloud, including services, security, architecture, pricing, and support.",
  },
  {
    name: "AWS Certified Solutions Architect Associate",
    shortName: "Solutions Architect",
    level: "Associate",
    year: "2025",
    color: "#3b82f6",
    icon: "🏗️",
    description:
      "Validates ability to design distributed systems and architectures on AWS with best practices for security and cost optimization.",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center glow-text">
          Certifications
        </h2>
        <div className="grid md:grid-cols-2 gap-8 justify-items-center">
          {certs.map((cert) => (
            <div
              key={cert.name}
              className="group w-full max-w-sm"
              style={{ perspective: "1000px" }}
            >
              <div
                className="relative w-full h-56 transition-transform duration-700"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front */}
                <div
                  className="absolute inset-0 rounded-xl border border-slate-800 bg-[#0a0e1a] p-6 flex flex-col items-center justify-center gap-4 backface-hidden group-hover:rotate-y-180 transition-transform duration-700"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <span className="text-5xl">{cert.icon}</span>
                  <div className="text-center">
                    <p
                      className="text-lg font-semibold"
                      style={{ color: cert.color }}
                    >
                      {cert.shortName}
                    </p>
                    <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">
                      {cert.level} · {cert.year}
                    </p>
                  </div>
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-b-xl"
                    style={{ backgroundColor: cert.color }}
                  />
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 rounded-xl border border-slate-800 bg-[#111827] p-6 flex flex-col items-center justify-center gap-3 rotate-y-180 group-hover:rotate-y-0 transition-transform duration-700"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <p className="text-sm font-semibold text-white text-center">
                    {cert.name}
                  </p>
                  <p className="text-xs text-slate-400 text-center leading-relaxed">
                    {cert.description}
                  </p>
                  <span
                    className="text-xs font-mono mt-2"
                    style={{ color: cert.color }}
                  >
                    Earned {cert.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-slate-600 mt-8">
          Hover over a card to see details
        </p>
      </div>
    </section>
  );
}
