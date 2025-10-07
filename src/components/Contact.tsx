import { Mail, Linkedin, Phone, FileText } from "lucide-react";
import { Button } from "./ui/button";
import bhagavanResume from "@/assets/Eatha_K_V_V_S_S_Rama_Bhagavan_Resume.pdf";
const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Srirambhagavan441@gmail.com",
      link: "mailto:Srirambhagavan441@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      link: "https://www.linkedin.com/in/eathakvvssramabhagavan",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "Contact for details",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 border border-border shadow-card">
            <p className="text-center text-lg text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision. Feel free to reach out!
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith("http") ? "_blank" : undefined}
                  rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="bg-background/50 rounded-xl p-6 border border-border hover:border-primary transition-all hover:-translate-y-1 text-center group"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2 text-primary">{info.label}</h3>
                  <p className="text-sm text-muted-foreground break-words">
                    {info.value}
                  </p>
                </a>
              ))}
            </div>

            <div className="flex justify-center">
              <Button
  asChild
  size="lg"
  className="bg-gradient-primary hover:shadow-glow transition-all"
>
  <a
    href="/Bhagavan_resume_2025.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2"
  >
    <FileText className="w-5 h-5" />
    View Resume
  </a>
</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
