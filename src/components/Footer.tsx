import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Eatha K V V S S Rama Bhagavan. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/eathakvvssramabhagavan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/SriramBhagavan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:Srirambhagavan441@gmail.com"
              className="p-2 rounded-full hover:bg-primary/10 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
