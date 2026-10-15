import { useEffect, useState } from "react";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import profilePhoto from "@/assets/IMG_20240726_121911.jpg";

const roles = [
  "Full Stack Developer",
  "React & Node.js Engineer",
  "Cloud & DevOps Enthusiast",
  "AI-Assisted Builder",
];

const stats = [
  { value: "3+", label: "Years of experience" },
  { value: "3+", label: "Apps in production" },
  { value: "20,000+", label: "Records handled in 6 months" },
  { value: "24/7", label: "Live system support" },
];

const useTyping = (words: string[]) => {
  const [text, setText] = useState("");
  useEffect(() => {
    let w = 0;
    let c = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const word = words[w];
      c += deleting ? -1 : 1;
      setText(word.slice(0, c));
      let delay = deleting ? 40 : 85;
      if (!deleting && c === word.length) {
        deleting = true;
        delay = 1500;
      } else if (deleting && c === 0) {
        deleting = false;
        w = (w + 1) % words.length;
        delay = 350;
      }
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, [words]);
  return text;
};

const Hero = () => {
  const role = useTyping(roles);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-10 px-4">
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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border text-sm text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Open to full stack &amp; AI engineering roles
            </span>
            <h1 className="text-4xl md:text-6xl font-bold">
              Hi, I'm{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Rama Bhagavan
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-primary font-mono min-h-[2rem]">
              {role}
              <span className="inline-block w-0.5 h-6 bg-primary ml-1 align-middle animate-pulse"></span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Full Stack Developer with 3 years of experience building and deploying production web
              applications at Hyderabad International Airport using React, Node.js and PostgreSQL on
              Azure. I handle development, testing, security clearance (SAST/VAPT) and 24/7 support,
              and use AI coding tools daily.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button
                asChild
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                <a href="Bhagavan_resume_v2.pdf" download className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  const element = document.getElementById("contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="border-primary/50 hover:bg-primary/10"
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  const element = document.getElementById("experience");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="border-primary/50 hover:bg-primary/10"
              >
                View Work
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/eathakvvssramabhagavan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-full bg-card hover:bg-primary/20 transition-colors border border-border hover:border-primary"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/SriramBhagavan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-full bg-card hover:bg-primary/20 transition-colors border border-border hover:border-primary"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:srirambhagavan441@gmail.com"
                aria-label="Email"
                className="p-3 rounded-full bg-card hover:bg-primary/20 transition-colors border border-border hover:border-primary"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center rounded-2xl p-5 bg-gradient-card backdrop-blur-sm border border-border shadow-card"
            >
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-primary bg-clip-text text-transparent">
                {s.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
