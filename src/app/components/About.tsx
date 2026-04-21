export function About() {
  return (
    <section id="about" className="py-32 px-6 bg-gray-50 dark:bg-[#141414] relative">
      <div className="absolute top-20 right-40 w-20 h-20 rounded-full bg-cyan-500 opacity-20"></div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl mb-8 text-gray-900 dark:text-white">
              About<span className="text-orange-500">.</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                I'm a Computer Science and Communication Engineering undergraduate at KIIT, Bhubaneswar, with a strong interest in full-stack development.
              </p>
              <p>
                I enjoy building responsive web applications with React and Next.js on the frontend and FastAPI-powered REST APIs on the backend.
              </p>
              <p>
                My work combines database management, frontend-backend integration, and user-centered UI design with an emphasis on performance and usability.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="w-full aspect-square bg-gradient-to-br from-orange-500 to-cyan-500 flex items-center justify-center">
              <div className="text-9xl text-white opacity-20">SS</div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-orange-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
