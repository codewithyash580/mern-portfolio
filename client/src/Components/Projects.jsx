const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-black text-white min-h-screen py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-semibold text-blue-500">
              Mental Health Prediction
            </h3>

            <p className="text-gray-400 mt-4">
              AI/ML based Mental Health Prediction web application built with
              React, FastAPI and Machine Learning.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="https://mental-health-score-1-s1fl.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 px-5 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/codewithyash580/Mental-Health-Score"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-blue-500 px-5 py-2 rounded-lg hover:bg-blue-500 hover:text-black transition"
              >
                GitHub
              </a>
            </div>
          </div>

        
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-semibold text-blue-500">
              Portfolio Website
            </h3>

            <p className="text-gray-400 mt-4">
              Responsive portfolio website built using React and Tailwind CSS.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="https://full-stack-web-new-1.onrender.com"
                className="bg-blue-500 px-5 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/codewithyash580/Full_stack_Web_New"
                className="border border-blue-500 px-5 py-2 rounded-lg hover:bg-blue-500 hover:text-black transition"
              >
                GitHub
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;