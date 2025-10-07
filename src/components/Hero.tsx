import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import profilePhoto from "@/assets/IMG_20240726_121911.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 animate-fade-in">
          {/* Profile Photo */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <img
              src={profilePhoto}
              alt="Eatha K V V S S Rama Bhagavan"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/30 shadow-glow"
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Hi, I'm{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Rama Bhagavan
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground">
              Senior Engineer – IT at GMR Group
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Full Stack Developer specializing in MERN stack with 2 years of experience 
              delivering technology-driven projects in the airport domain. Passionate about 
              creating impactful digital solutions and leading cross-functional teams.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button
                onClick={() => {
                  const element = document.getElementById("contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  const element = document.getElementById("projects");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="border-primary/50 hover:bg-primary/10"
              >
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/eathakvvssramabhagavan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary/20 transition-colors border border-border hover:border-primary"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/SriramBhagavan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary/20 transition-colors border border-border hover:border-primary"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:Srirambhagavan441@gmail.com"
                className="p-3 rounded-full bg-card hover:bg-primary/20 transition-colors border border-border hover:border-primary"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
