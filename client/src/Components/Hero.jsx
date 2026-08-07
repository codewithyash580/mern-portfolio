const Hero = () => {
  return (
    <section
      id="home"
      className="bg-black text-white min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-blue-500">Yash Chauhan</span>
          </h1>

          <h2 className="text-2xl md:text-3xl mt-4 text-gray-300">
            Full Stack Developer
          </h2>

          <p className="mt-4 text-gray-400">
            I build modern, responsive and scalable web applications using
            React, Node.js and MongoDB.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button
              className="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600 transition"
              onClick={() => {
                document.getElementById("skills")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              View Skills
            </button>

            <button
              className="border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Contact Me
            </button>
          </div>
        </div>

      
        <div>
        
        </div>

      </div>
    </section>
  );
};

export default Hero;