import { MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 border border-border shadow-card">
            <div className="flex items-center gap-2 mb-6 text-muted-foreground">
              <MapPin className="w-5 h-5" />
              <span>Hyderabad, Telangana</span>
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              I'm a <span className="text-primary font-semibold">Full Stack Developer</span> with 3
              years of experience building and deploying production web applications at Hyderabad
              International Airport using{" "}
              <span className="text-primary font-semibold">React, Node.js and PostgreSQL on Azure</span>.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              I take applications from requirements to a live, supported system: development,
              testing, security clearance (SAST/VAPT), Docker-based deployment on Linux and 24/7
              support. I also use AI coding tools like Claude Code and OpenAI Codex every day.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-background/50 rounded-xl p-6 border border-border">
                <h3 className="text-xl font-semibold mb-3 text-primary">Professional Focus</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Full Stack Development (React, Node.js)</li>
                  <li>• Secure Web Applications (SAST / VAPT)</li>
                  <li>• Cloud Deployment (Azure, AWS)</li>
                  <li>• Docker, Nginx &amp; Linux</li>
                  <li>• AI-Assisted Development</li>
                </ul>
              </div>

              <div className="bg-background/50 rounded-xl p-6 border border-border">
                <h3 className="text-xl font-semibold mb-3 text-primary">Interests</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Playing Badminton</li>
                  <li>• Photography</li>
                </ul>
                <h3 className="text-xl font-semibold mb-3 mt-6 text-primary">Languages</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Telugu (Native)</li>
                  <li>• English (Fluent)</li>
                  <li>• Hindi (Intermediate)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
