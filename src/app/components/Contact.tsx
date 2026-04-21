export function Contact() {
  const emailLink =
    'https://mail.google.com/mail/?view=cm&fs=1&to=mailsoumyajit57@gmail.com&su=Portfolio%20Inquiry&body=Hello%20Soumyajit%2C%0D%0A%0D%0A';

  return (
    <section id="contact" className="py-32 px-6 bg-white dark:bg-[#1a1a1a] relative overflow-hidden">
      <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full border-4 border-cyan-500 opacity-30"></div>
      <div className="absolute top-40 left-20 w-20 h-20 bg-orange-500 opacity-30"></div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl mb-8 text-gray-900 dark:text-white">
          Let's Talk<span className="text-cyan-500">.</span>
        </h2>
        <p className="text-2xl text-gray-600 dark:text-gray-400 mb-16 max-w-2xl">
          I'm always open to internships, collaborations, and opportunities to build meaningful web experiences.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <a
              href={emailLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-xl text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors"
            >
              mailsoumyajit57@gmail.com
            </a>
            <p className="text-lg text-gray-600 dark:text-gray-400">Bhubaneswar, India - +91 7751975155</p>
            <div className="flex gap-8 text-lg">
              <a
                href="https://www.linkedin.com/in/soumyajit-samal-493690284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/SoumyajitSamal57"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="flex items-end justify-end">
            <a
              href={emailLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-4 bg-orange-500 text-white hover:bg-orange-600 transition-colors text-lg"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <footer className="pt-12 border-t border-gray-300 dark:border-gray-800">
          <p className="text-gray-600 dark:text-gray-500 text-sm">
            (c) 2026 Soumyajit Samal
          </p>
        </footer>
      </div>
    </section>
  );
}
