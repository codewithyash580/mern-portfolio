const Skills = () => {
  const skills = [
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "React.js", level: "Intermediate" },
    { name: "Node.js", level: "Basic" },
    { name: "MongoDB", level: "Basic" },
  ];

  return (
    <div id = "Skills" className="p-6 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4 text-center">My Skills</h2>

      <div className="grid md:grid-cols-3 gap-4"> 
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-4 hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold">{skill.name}</h3>
            <p className="text-gray-600">{skill.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;