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
              I'm a <span className="text-primary font-semibold">Senior Engineer – IT</span> with 
              2 years of experience delivering technology-driven projects in the airport domain. 
              My expertise lies in <span className="text-primary font-semibold">full stack web development</span> using 
              the MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS).
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              I excel at leading project execution, coordinating with vendors, and deploying 
              digital solutions across multiple stakeholders. My work at GMR Group has enabled 
              me to create real-time dashboards and systems that improve airport operations 
              and passenger experience.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-background/50 rounded-xl p-6 border border-border">
                <h3 className="text-xl font-semibold mb-3 text-primary">Professional Focus</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Full Stack Development (MERN)</li>
                  <li>• IT Project Management</li>
                  <li>• System Integration</li>
                  <li>• Real-time Dashboards</li>
                  <li>• Cloud Deployment (AWS)</li>
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
