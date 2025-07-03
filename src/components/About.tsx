import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Building scalable web applications with modern technologies"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Ensuring fast, efficient, and responsive applications"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Passionate developer with a love for creating exceptional digital experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience creating
                web applications that combine beautiful design with robust functionality.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey began with a curiosity for how things work, and has evolved into
                a career focused on building solutions that make a real difference in people's lives.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to
                open source projects, or sharing knowledge with the developer community.
              </p>
            </div>
            
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <Card key={index} className="border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}