import { ExternalLink, Github, Youtube } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "DevTinder – Developer Networking Platform",
      description:
        "Full-stack developer networking platform enabling users to connect, chat, and collaborate. Features secure authentication, real-time communication via WebSockets, premium subscriptions with Razorpay, and cloud deployment with AWS.",
      tech: ["MERN Stack", "WebSockets", "Razorpay", "AWS"],
      demoUrl: "http://13.53.197.4/",
      youtubeUrl: "https://youtu.be/PvTuOHsAL8g", // YouTube demo link
      featured: true,
    },
    {
      title: "NetflixGPT – AI-Powered Movie Recommendation",
      description:
        "Netflix-inspired web application with AI-powered movie recommendations using React, Redux, TailwindCSS, and TMDB APIs. Features secure authentication, GPT-based movie search, and real-time trailers with multi-language support.",
      tech: ["React", "Redux", "OpenAI", "Firebase", "TMDB API"],
      demoUrl: "https://netflix-chat-gpt.vercel.app",
       youtubeUrl: "https://youtu.be/IwFCSzteE-o",
      featured: true,
    },
    {
      title: "YouTube Clone (Namaste YouTube)",
      description:
        "YouTube clone replicating core features with search suggestion caching, video fetching via YouTube Data API, and responsive UI components. Focused on state management and API optimization.",
      tech: ["React", "Redux Toolkit", "TailwindCSS", "YouTube API"],
      demoUrl: "https://youtube-application-kappa.vercel.app",
       youtubeUrl: "https://youtu.be/sNc3B8UQqtI",
      featured: false,
    },
    {
      title: "Food Ordering Application",
      description:
        "Swiggy-inspired food ordering app enabling users to browse restaurants, view menus, add items to cart, and place orders. Implements routing, search, filtering, and lazy loading for optimized performance.",
      tech: ["React", "Redux Toolkit", "Tailwind CSS", "REST APIs"],
      demoUrl: "https://swiggy-application.vercel.app",
       youtubeUrl: "https://youtu.be/F-mlkZfCQWY",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Personal <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gradient-card backdrop-blur-sm rounded-2xl p-8 border border-border shadow-card hover:shadow-glow transition-all hover:-translate-y-2 ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  className="bg-gradient-primary hover:shadow-glow transition-all"
                >
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </Button>

                {project.youtubeUrl && (
                  <Button
                    asChild
                    className="bg-red-600 hover:bg-red-700 text-white transition-all"
                  >
                    <a
                      href={project.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Youtube className="w-4 h-4" />
                      YouTube Demo
                    </a>
                  </Button>
                )}

                <Button
                  variant="outline"
                  asChild
                  className="border-primary/50 hover:bg-primary/10"
                >
                  <a
                    href="https://github.com/SriramBhagavan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
