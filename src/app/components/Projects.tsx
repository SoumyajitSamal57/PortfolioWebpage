export function Projects() {
  const projects = [
    {
      title: 'AgriScan AI',
      description:
        'Full-stack plant disease detection web application built with a TensorFlow/Keras CNN model, FastAPI backend, and MongoDB-backed prediction history.',
      technologies: ['React', 'FastAPI', 'TensorFlow/Keras', 'MongoDB'],
      accent: 'orange',
    },
    {
      title: 'Expense Tracker Web Application',
      description:
        'Responsive expense tracker with add, edit, delete, category-wise tracking, and LocalStorage-based persistence for day-to-day budgeting.',
      technologies: ['React', 'HTML5', 'CSS3', 'LocalStorage'],
      accent: 'cyan',
      link: 'https://expense-tracker-wheat-kappa-98.vercel.app/',
      linkLabel: 'View Live',
    },
    {
      title: 'HopIn - Location-Based Activity Finder',
      description:
        'Mobile app for discovering and joining nearby activities through an interactive map with dynamic geolocation markers, powered by Firebase Firestore for real-time cloud data.',
      technologies: ['React Native (Expo)', 'Firebase Firestore', 'Geolocation', 'Real-time Data'],
      accent: 'orange',
      status: 'Ongoing',
      details:
        'Real-time chat and user authentication are currently being added to make the experience more interactive.',
    },
    {
      title: 'Game of Imposter',
      description:
        'Fun browser game experience where players guess the imposter through interactive gameplay and a lightweight web interface.',
      technologies: ['Web Game', 'Interactive UI', 'Browser-based'],
      accent: 'cyan',
      link: 'https://guesswho-zuky.onrender.com/',
      linkLabel: 'Play Game',
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 bg-gray-50 dark:bg-[#141414]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl mb-16 text-gray-900 dark:text-white">
          Projects<span className="text-orange-500">.</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-[#1a1a1a] p-8 border-l-4 border-gray-200 dark:border-gray-800 hover:border-current transition-colors"
            >
              <div className="mb-6">
                <div className={`text-6xl ${project.accent === 'orange' ? 'text-orange-500' : 'text-cyan-500'} opacity-20`}>
                  0{index + 1}
                </div>
              </div>
              {project.status ? (
                <p className={`mb-3 text-sm tracking-[0.3em] uppercase ${project.accent === 'orange' ? 'text-orange-500' : 'text-cyan-500'}`}>
                  {project.status}
                </p>
              ) : null}
              <h3 className={`text-2xl mb-4 ${project.accent === 'orange' ? 'text-orange-500' : 'text-cyan-500'}`}>
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              {project.details ? (
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.details}
                </p>
              ) : null}
              <div className="flex flex-wrap gap-3 text-sm text-gray-700 dark:text-gray-300 mb-6">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex text-sm uppercase tracking-[0.2em] ${project.accent === 'orange' ? 'text-orange-500 hover:text-orange-600' : 'text-cyan-500 hover:text-cyan-600'} transition-colors`}
                >
                  {project.linkLabel}
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
