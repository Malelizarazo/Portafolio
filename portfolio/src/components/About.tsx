export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center glow-text">
          About Me
        </h2>
        <div className="text-slate-400 leading-relaxed space-y-4 text-center max-w-2xl mx-auto">
          <p>
            Software engineer with two degrees from Universidad de los Andes:
            Systems and Computer Engineering, and Chemical Engineering. I work
            on AI agents, software engineering and machine learning for
            science.
          </p>
          <p>
            I am a Junior Cloud Support Engineer at Amadeus, supporting 24/7
            production platforms on Linux and Kubernetes/OpenShift with
            Grafana and Prometheus. Before that, as an intern at Amazon Web
            Services, I built web applications used by 200+ people and a
            multi-agent generative AI prototype on Amazon Bedrock.
          </p>
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
          <h3 className="text-sm font-mono text-cyan-400 mb-4 uppercase tracking-wider text-center">
            Education
          </h3>
          <div className="text-center space-y-2">
            <p className="text-white font-semibold">Universidad de los Andes</p>
            <p className="text-slate-500 text-sm">
              B.S. Systems and Computer Engineering · 2025
            </p>
            <p className="text-slate-500 text-sm">
              B.S. Chemical Engineering · 2025
            </p>
          </div>
        </div>

        <div className="mt-10 max-w-2xl mx-auto">
          <h3 className="text-sm font-mono text-cyan-400 mb-4 uppercase tracking-wider text-center">
            Languages
          </h3>
          <div className="flex justify-center gap-6 text-sm text-slate-400">
            <span>Spanish · Native</span>
            <span>English · C1</span>
            <span>French · B1</span>
          </div>
        </div>
      </div>
    </section>
  );
}
