export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center glow-text">
          About Me
        </h2>
        <div className="text-slate-400 leading-relaxed space-y-4 text-center max-w-2xl mx-auto">
          <p>
            Engineering student at Universidad de los Andes pursuing a dual
            degree in Chemical and Systems Engineering. I have experience in
            data analysis, software development, and Machine Learning applied
            to bioinformatics.
          </p>
          <p>
            I&apos;m passionate about the intersection between biotechnology
            and computational technology, from predicting protein thermal
            stability to building cloud architectures and automating data
            pipelines.
          </p>
        </div>

        {/* Education */}
        <div className="mt-12 max-w-2xl mx-auto">
          <h3 className="text-sm font-mono text-cyan-400 mb-4 uppercase tracking-wider text-center">
            Education
          </h3>
          <div className="text-center">
            <p className="text-white font-semibold">Universidad de los Andes</p>
            <p className="text-slate-500 text-sm">
              Dual degree in Chemical and Systems Engineering · 2020 · Present
            </p>
          </div>
        </div>

        {/* Languages */}
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
