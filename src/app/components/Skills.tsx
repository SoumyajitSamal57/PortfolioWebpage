export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
      color: 'orange',
    },
    {
      title: 'Backend',
      skills: ['FastAPI', 'Python', 'REST APIs', 'MongoDB', 'Firebase Firestore'],
      color: 'cyan',
    },
    {
      title: 'Tools & Concepts',
      skills: ['Git', 'GitHub', 'Expo', 'Responsive Design', 'UI/UX'],
      color: 'orange',
    },
  ];

  return (
    <section id="skills" className="py-32 px-6 bg-white dark:bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl mb-16 text-gray-900 dark:text-white">
          Skills<span className="text-cyan-500">.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className={`text-2xl mb-6 ${category.color === 'orange' ? 'text-orange-500' : 'text-cyan-500'}`}>
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-gray-700 dark:text-gray-300 text-lg border-l-2 border-gray-300 dark:border-gray-700 pl-4 hover:border-current transition-colors">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
