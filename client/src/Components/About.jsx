const About = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Image */}
        <div>
          <img
            src="https://via.placeholder.com/400"
            alt="about"
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>

          <p className="text-gray-700 mb-4">
            I am a passionate Full Stack Developer with a strong interest in
            building modern and scalable web applications. I enjoy working with
            technologies like React, Node.js, and MongoDB.
          </p>

          <p className="text-gray-700 mb-4">
            I have experience in creating responsive websites, REST APIs, and
            dynamic user interfaces. I am continuously learning and improving my
            skills by building real-world projects.
          </p>

          {/* Skills Highlights */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold">Frontend</h3>
              <p className="text-gray-600">React, HTML, CSS, JS</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold">Backend</h3>
              <p className="text-gray-600">Node.js, Express</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold">Database</h3>
              <p className="text-gray-600">MongoDB</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold">Tools</h3>
              <p className="text-gray-600">Git, GitHub</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;