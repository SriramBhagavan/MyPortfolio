import { Briefcase, Calendar } from "lucide-react";

const experience = {
  title: "Full Stack Developer",
  company: "GMR Group – Hyderabad International Airport",
  period: "Aug 2023 - Present",
  points: [
    "Delivered 3+ production web applications (React, Node.js, PostgreSQL) that digitized manual airport processes, owning requirements, development, testing, deployment and support in Agile/SDLC.",
    "Run SAST scans and share clean reports with the VAPT team, then remediate every observation until sign-off, so each application clears VAPT before go-live.",
    "Integrated LDAP/Active Directory login, SMTP email notifications and WhatsApp (Meta) messaging through third-party APIs.",
    "Deployed on Azure with Docker, Docker Compose, Nginx (TLS) and Linux; managed DNS and private/public network access.",
    "Provide support for live systems, troubleshooting production issues and using Claude Code and OpenAI Codex for faster debugging and refactoring.",
  ],
};

const highlight = {
  name: "Lost & Found Management System",
  tag: "Live · 24/7",
  stack: ["Node.js", "PostgreSQL", "Docker", "Azure"],
  points: [
    "Replaced a manual phone/email process that took 15+ minutes of staff typing per request; passengers now raise requests themselves, removing staff data entry for 100% of online requests.",
    "Passengers track their request online and get WhatsApp and email updates, instead of calling the department for status.",
    "Every action on an item is now recorded with who did it and when, giving 100% traceability where there was no audit trail before.",
    "Runs 24/7 with shift-wise airport staff, handling 20,000+ records in 6 months and about 100 public requests a day.",
  ],
  flow: [
    "Passenger raises request",
    "Staff match & verify",
    "Item handed over",
    "Passenger updated on WhatsApp / Email",
  ],
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 border border-border shadow-card hover:shadow-glow transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div className="flex items-center gap-3 mb-3 md:mb-0">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{experience.title}</h3>
                  <p className="text-primary">{experience.company}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>{experience.period}</span>
              </div>
            </div>

            <ul className="space-y-3">
              {experience.points.map((point, idx) => (
                <li key={idx} className="pl-4 border-l-2 border-primary/30 text-muted-foreground leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Project highlight */}
          <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 border border-border shadow-card hover:shadow-glow transition-shadow">
            <p className="text-sm font-mono text-primary mb-2">Project highlight</p>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 className="text-2xl font-bold">{highlight.name}</h3>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm border border-green-500/30">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                {highlight.tag}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-5">
              {highlight.stack.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/30"
                >
                  {t}
                </span>
              ))}
            </div>

            <ul className="space-y-3">
              {highlight.points.map((point, idx) => (
                <li key={idx} className="pl-4 border-l-2 border-primary/30 text-muted-foreground leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
              {highlight.flow.map((step, i) => (
                <div
                  key={step}
                  className="flex items-center gap-3 rounded-xl p-3 bg-primary/5 border border-dashed border-primary/30 text-sm"
                >
                  <span className="flex-none w-7 h-7 rounded-full bg-gradient-primary text-white grid place-items-center text-xs font-bold">
                    {i + 1}
                  </span>
                  {step}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
