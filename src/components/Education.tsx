import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "GMR Institute of Technology",
      period: "2019 - 2023",
      grade: "CGPA: 7.56",
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sri Chaitanya Junior College",
      period: "2017 - 2019",
      grade: "CGPA: 9.28",
    },
    {
      degree: "Secondary Examination (10th)",
      institution: "Sri Chaitanya Techno School",
      period: "2016 - 2017",
      grade: "CGPA: 10.0",
    },
  ];

  const certifications = [
    {
      title: "Build Your Own Static Website",
      url: "https://certificates.ccbp.in/intensive/static-website?id=CWCCKRLUIN",
    },
    {
      title: "Build Your Own Responsive Website",
      url: "https://certificates.ccbp.in/intensive/responsive-website?id=EODCHFRIQD",
    },
    {
      title: "Programming Foundations with Python",
      url: "https://certificates.ccbp.in/intensive/programming-foundations?id=QYUMDEFFWW",
    },
    {
      title: "Introduction to Databases",
      url: "https://certificates.ccbp.in/intensive/introduction-to-databases?id=JCGOFRIVIO",
    },
    {
      title: "Version Control Foundation",
      url: "https://certificates.ccbp.in/intensive/developer-foundations?id=OJISULAYTW",
    },
    {
      title: "Namaste JavaScript",
      url: "https://namastedev.com/srirambhagavan441/certificates/namaste-javascript",
    },
    {
      title: "Namaste React",
      url: "https://namastedev.com/srirambhagavan441/certificates/namaste-react",
    },
    {
      title: "Namaste Node.js",
      url: "https://namastedev.com/srirambhagavan441/certificates/namaste-node",
    },
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Education & <span className="bg-gradient-primary bg-clip-text text-transparent">Certifications</span>
        </h2>

        <div className="max-w-6xl mx-auto">
          {/* Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gradient-card backdrop-blur-sm rounded-2xl p-6 border border-border shadow-card hover:shadow-glow transition-shadow"
                >
                  <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                  <p className="text-primary mb-2">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 text-muted-foreground text-sm">
                    <span>{edu.period}</span>
                    <span className="text-primary font-semibold">{edu.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Award className="w-8 h-8 text-primary" />
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <a
                  key={index}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-card backdrop-blur-sm rounded-xl p-6 border border-border shadow-card hover:shadow-glow hover:border-primary transition-all hover:-translate-y-1 group"
                >
                  <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mt-2">
                    Click to view certificate →
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
