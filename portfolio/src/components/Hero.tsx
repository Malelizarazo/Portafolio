"use client";

import dynamic from "next/dynamic";

const MolecularScene = dynamic(() => import("./MolecularScene"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <MolecularScene />

      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 glow-text">
          Maria Alejandra Lizarazo
        </h1>
        <p className="text-lg md:text-xl text-slate-400 mb-2 tracking-wide">
          Chemical & Systems Engineer
        </p>
        <p className="text-md text-slate-500 mb-8">
          AWS · Machine Learning · Data Analytics · Bioinformatics
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors text-white font-medium glow"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-slate-600 hover:border-blue-500 hover:text-blue-400 transition-colors text-slate-300 font-medium"
          >
            Contact
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0e1a] to-transparent z-10" />
    </section>
  );
}
