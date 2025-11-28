import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Engineer – IT",
      company: "GMR Group",
      period: "August 2024 - Present",
      projects: [
        {
          name: "QR-Based Washroom Feedback Dashboard",
          description: "Developed a responsive React-based feedback application enabling passengers to submit instant feedback via QR codes. Optimized form performance reducing load time by 30%.",
        },
        {
          name: "Airport Gate Wait-Time & Queue Length Dashboard",
          description: "Built a real-time dashboard displaying passenger queue lengths and wait times with auto-pagination and smooth UI refresh. Reduced data lag by 40% and improved response time for airport staff.",
        },
        {
          name: "Airport Cab Availability Dashboard",
          description: "Created a real-time monitoring system for cab availability across parking zones. Optimized API fetch intervals reducing network calls by 35%.",
        },
        {
          name: "Pushpak Bus Timetable Dashboard",
          description: "Developed a real-time timetable dashboard with live clock synchronization. Reduced UI update lag by 40% ensuring accurate schedule information.",
        },
        {
          name: "Flight Information Display System (FIDS)",
          description: "Led end-to-end implementation of FIDS at GMR Nagpur Airport, coordinating cross-functional teams to deliver a cloud-hosted, multi-language passenger information system.",
        },
      ],
    },
    {
      title: "Graduate Engineer Trainee – IT",
      company: "GMR Group",
      period: "August 2023 - July 2024",
      projects: [
        {
          name: "Airport Operations Centre (APOC) – AI/ML-Based Dashboard",
          description: "Coordinated implementation and testing of an AI/ML-powered dashboard monitoring real-time wait times, cab availability, and safety compliance. Enabled faster incident response reducing response time by 40%.",
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 border border-border shadow-card hover:shadow-glow transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center gap-3 mb-3 md:mb-0">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{exp.title}</h3>
                    <p className="text-primary">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <div className="space-y-6">
                {exp.projects.map((project, idx) => (
                  <div key={idx} className="pl-4 border-l-2 border-primary/30">
                    <h4 className="text-lg font-semibold mb-2 text-primary">
                      {project.name}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
