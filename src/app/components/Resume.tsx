export function Resume() {
  return (
    <section id="resume" className="py-32 px-6 bg-white dark:bg-[#1a1a1a] relative overflow-hidden">
      <div className="absolute top-16 left-20 w-20 h-20 rounded-full border-4 border-orange-500 opacity-30"></div>
      <div className="absolute bottom-20 right-24 w-24 h-24 bg-cyan-500 opacity-20"></div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl mb-8 text-gray-900 dark:text-white">
              Resume<span className="text-orange-500">.</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed max-w-2xl">
              View my latest resume to see my education, projects, technical skills, and internship certifications in one place.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              The portfolio design stays the same, and the full resume is available as a PDF for quick review.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-[#141414] p-10 border-l-4 border-cyan-500">
            <p className="text-sm tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400 mb-4">
              Resume Access
            </p>
            <h3 className="text-3xl text-gray-900 dark:text-white mb-6">
              Soumyajit Samal
            </h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="/Soumyajit_Samal_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-orange-500 text-white hover:bg-orange-600 transition-colors"
              >
                View Resume
              </a>
              <a
                href="/Soumyajit_Samal_Resume.pdf"
                download
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
