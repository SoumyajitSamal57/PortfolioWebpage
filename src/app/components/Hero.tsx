export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-white dark:bg-[#1a1a1a]">
      <div className="absolute top-20 right-20 w-24 h-24 rounded-full border-4 border-cyan-500"></div>
      <div className="absolute bottom-40 left-32 w-16 h-16 rounded-full bg-orange-500"></div>
      <div className="absolute top-1/3 left-20 w-12 h-12 rounded-full border-4 border-orange-500"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-8">
          <span className="text-sm tracking-widest text-gray-600 dark:text-gray-400 uppercase">Computer Science Undergraduate</span>
        </div>
        <h1 className="text-6xl md:text-8xl mb-6 text-gray-900 dark:text-white leading-tight">
          Hello<span className="text-orange-500">.</span>
          <br />
          I am
          <br />
          <span className="text-cyan-500">Soumyajit Samal</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-xl">
          Building responsive and scalable web applications with React, FastAPI, and a focus on clean UI, performance, and usability.
        </p>
        <div className="flex gap-6">
          <a
            href="#projects"
            className="px-8 py-4 bg-orange-500 text-white hover:bg-orange-600 transition-colors"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
