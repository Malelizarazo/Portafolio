export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-[#111827]/50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 glow-text">Get in Touch</h2>
        <p className="text-slate-400 mb-2">Bogotá, Colombia</p>
        <p className="text-slate-500 mb-8 text-sm">
          Interested in collaborating or have a question? Feel free to reach out.
        </p>
        <a
          href="mailto:malelizarazo@gmail.com"
          className="inline-block px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors text-white font-medium glow"
        >
          Send Email
        </a>
        <div className="mt-8 flex justify-center gap-6 text-slate-500">
          <a
            href="https://github.com/Malelizarazo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/malelizarazo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="mt-16 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} María Alejandra Lizarazo. Built with
        Next.js, Three.js & Tailwind CSS.
      </div>
    </section>
  );
}
