"use client";

function CloudPractitionerBadge() {
  return (
    <svg viewBox="0 0 120 120" className="w-24 h-24" aria-hidden="true">
      <defs>
        <linearGradient id="cpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2D9CDB" />
          <stop offset="100%" stopColor="#1A6FB5" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="56" fill="none" stroke="url(#cpGrad)" strokeWidth="3" />
      <circle cx="60" cy="60" r="48" fill="#0F1B2D" />
      <path
        d="M45 65c-5.5 0-10-4.5-10-10s4.5-10 10-10c.7-7 6.5-12.5 13.5-12.5 5.5 0 10.2 3.2 12.4 7.8C72.2 39.5 74 39 76 39c5.5 0 10 4.5 10 10 0 .5 0 1-.1 1.5C89.2 52 92 55.7 92 60c0 5.5-4.5 10-10 10H45z"
        fill="url(#cpGrad)"
        opacity="0.9"
      />
      <text x="60" y="90" textAnchor="middle" fill="#2D9CDB" fontSize="7" fontFamily="monospace">
        FOUNDATIONAL
      </text>
    </svg>
  );
}

function SolutionsArchitectBadge() {
  return (
    <svg viewBox="0 0 120 120" className="w-24 h-24" aria-hidden="true">
      <defs>
        <linearGradient id="saGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#6D28D9" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="56" fill="none" stroke="url(#saGrad)" strokeWidth="3" />
      <circle cx="60" cy="60" r="48" fill="#0F1B2D" />
      <path d="M60 30L85 75H35L60 30z" fill="none" stroke="url(#saGrad)" strokeWidth="2.5" />
      <path d="M60 42L77 70H43L60 42z" fill="url(#saGrad)" opacity="0.3" />
      <circle cx="60" cy="58" r="6" fill="url(#saGrad)" opacity="0.9" />
      <text x="60" y="90" textAnchor="middle" fill="#8B5CF6" fontSize="7" fontFamily="monospace">
        ASSOCIATE
      </text>
    </svg>
  );
}

function GenAIPractitionerBadge() {
  return (
    <svg viewBox="0 0 120 120" className="w-24 h-24" aria-hidden="true">
      <defs>
        <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#0891B2" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="56" fill="none" stroke="url(#aiGrad)" strokeWidth="3" />
      <circle cx="60" cy="60" r="48" fill="#0F1B2D" />
      <circle cx="60" cy="52" r="8" fill="none" stroke="url(#aiGrad)" strokeWidth="2" />
      <circle cx="45" cy="65" r="5" fill="none" stroke="url(#aiGrad)" strokeWidth="1.5" />
      <circle cx="75" cy="65" r="5" fill="none" stroke="url(#aiGrad)" strokeWidth="1.5" />
      <line x1="54" y1="57" x2="48" y2="62" stroke="url(#aiGrad)" strokeWidth="1.5" />
      <line x1="66" y1="57" x2="72" y2="62" stroke="url(#aiGrad)" strokeWidth="1.5" />
      <circle cx="60" cy="52" r="3" fill="url(#aiGrad)" opacity="0.7" />
      <circle cx="45" cy="65" r="2" fill="url(#aiGrad)" opacity="0.5" />
      <circle cx="75" cy="65" r="2" fill="url(#aiGrad)" opacity="0.5" />
      <text x="60" y="90" textAnchor="middle" fill="#06B6D4" fontSize="7" fontFamily="monospace">
        FOUNDATIONAL
      </text>
    </svg>
  );
}

const certs = [
  {
    name: "AWS Certified Cloud Practitioner",
    shortName: "Cloud Practitioner",
    level: "Foundational",
    year: "2025",
    color: "#2D9CDB",
    badge: CloudPractitionerBadge,
    description:
      "Validates overall understanding of AWS Cloud, including services, security, architecture, pricing, and support.",
  },
  {
    name: "AWS Certified Solutions Architect Associate",
    shortName: "Solutions Architect",
    level: "Associate",
    year: "2025",
    color: "#8B5CF6",
    badge: SolutionsArchitectBadge,
    description:
      "Validates ability to design distributed systems and architectures on AWS with best practices for security and cost optimization.",
  },
  {
    name: "AWS Certified AI Practitioner",
    shortName: "Gen AI Practitioner",
    level: "Foundational",
    year: "2025",
    color: "#06B6D4",
    badge: GenAIPractitionerBadge,
    description:
      "Validates understanding of generative AI concepts, foundation models, and responsible AI practices on AWS.",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center glow-text">
          Certifications
        </h2>
        <div className="grid md:grid-cols-3 gap-8 justify-items-center">
          {certs.map((cert) => (
            <div
              key={cert.name}
              className="group w-full max-w-xs"
              style={{ perspective: "1000px" }}
            >
              <div
                className="relative w-full h-64 transition-transform duration-700"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front */}
                <div
                  className="absolute inset-0 rounded-xl border border-slate-800 bg-[#0a0e1a] p-6 flex flex-col items-center justify-center gap-4 backface-hidden group-hover:rotate-y-180 transition-transform duration-700"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <cert.badge />
                  <div className="text-center">
                    <p
                      className="text-sm font-semibold"
                      style={{ color: cert.color }}
                    >
                      {cert.shortName}
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
                    {cert.level} · {cert.year}
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
