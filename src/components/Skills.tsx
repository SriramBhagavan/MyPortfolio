const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "ReactJS", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      skills: ["NodeJS", "ExpressJS"],
    },
    {
      title: "Database",
      skills: ["MongoDB"],
    },
    {
      title: "Tools & Platforms",
      skills: ["GitHub", "VS Code", "Postman"],
    },
    {
      title: "Deployment & Cloud",
      skills: ["AWS", "Vercel", "Render", "Netlify"],
    },
    {
      title: "Testing",
      skills: ["Manual Testing"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-card backdrop-blur-sm rounded-2xl p-6 border border-border shadow-card hover:shadow-glow transition-shadow"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-2 rounded-lg bg-background/50 text-foreground text-sm border border-border hover:border-primary hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
