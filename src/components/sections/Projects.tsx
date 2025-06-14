
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projectsData = [
  {
    title: "Real-time Threat Dashboard",
    description: "A web application to visualize live cyber threats and security alerts from various sources.",
    tags: ["SIEM", "React", "WebSockets"],
  },
  {
    title: "Automated Malware Sandbox",
    description: "Developed a system to automatically analyze suspicious files in an isolated environment.",
    tags: ["Python", "Cuckoo", "Virtualization"],
  },
  {
    title: "Phishing Email Analyzer",
    description: "A tool to dissect phishing emails, extract indicators of compromise (IOCs), and report them.",
    tags: ["Machine Learning", "NLP", "API"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => <span key={tag} className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-primary-foreground bg-primary/80">{tag}</span>)}
                </div>
              </CardContent>
              <div className="p-6 pt-0">
                <Button variant="outline">View Project</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
