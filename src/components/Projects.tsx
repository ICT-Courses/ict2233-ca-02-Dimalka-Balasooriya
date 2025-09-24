import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Café Management System',
      description:
        'I developed a Café Management System using Visual Studio WinForms. The system helps manage daily café operations such as adding, updating, and removing menu items, placing customer orders, and calculating totals. It provides a simple and user-friendly interface to improve efficiency and accuracy in order handling.',
      image: '/placeholder.svg', // replace with actual screenshot later
      technologies: ['C#', 'WinForms', 'Visual Studio'],
      githubUrl: 'https://github.com/ICT-Courses/application-development-ca1-DimalkaBalasooriya',
      liveUrl: '#',
      featured: true,
    },
    {
      title: 'EduNova Student Registration System',
      description:
        'EduNova Student Registration System is a group project developed using VS Code with Python, JavaScript, and MongoDB. The system simplifies student enrollment by replacing manual registration with an online platform, making the process faster, more accurate, and user-friendly.',
      image: '/placeholder.svg', // replace with actual screenshot later
      technologies: ['Python', 'JavaScript', 'MongoDB'],
      githubUrl: 'https://github.com/SD187/EduNova-Student-Registration-System',
      liveUrl: '#',
      featured: false,
    },
    {
      title: 'RhythmReplay React Project',
      description:
        'A React-based project that showcases interactive UI features and modern web development practices. Designed for smooth user experience and scalability.',
      image: '/placeholder.svg', // replace with actual screenshot later
      technologies: ['React.js', 'JavaScript', 'Tailwind CSS'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false,
    },
  ];



  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">My Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in 
            React.js, JavaScript, and modern web development technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`group card-hover border-primary/10 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-r from-primary/20 to-accent/20 h-48">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code2 className="h-16 w-16 text-primary/40" />
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent text-accent-foreground">Featured</Badge>
                  </div>
                )}
              </div>

              <CardHeader>
                <CardTitle className="flex items-center justify-between text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="text-xs bg-primary/10 text-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work? Check out my GitHub for additional projects and contributions.
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;