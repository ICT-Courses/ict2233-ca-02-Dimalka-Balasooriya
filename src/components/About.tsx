import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Palette, Zap, Users } from 'lucide-react';

const About = () => {
  const technicalSkills = [
    'React.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 
    'Tailwind CSS', 'Node.js', 'Git', 'GitHub', 'Responsive Design'
  ];

  const softSkills = [
    'Problem Solving', 'Team Collaboration', 'Communication', 
    'Time Management', 'Continuous Learning', 'Attention to Detail'
  ];

  const features = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, efficient, and well-documented code following best practices.'
    },
    {
      icon: Palette,
      title: 'UI/UX Focus',
      description: 'Creating intuitive and beautiful user interfaces with attention to user experience.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, accessibility, and cross-browser compatibility.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams using modern development workflows and tools.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          I’m Dimalka Balasooriya, an IT undergraduate at the University of Sri Jayewardenepura
          following a BSc in Information Technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Profile Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              My journey in software engineering began with curiosity about how websites work. 
              That curiosity has evolved into a passion for building web applications that solve 
              real problems and provide exceptional user experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in front-end development with React.js and modern JavaScript, 
              but I'm always eager to expand my skill set and learn new technologies. 
              I believe in writing clean, maintainable code and following industry best practices.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Education</h4>
                <p className="text-muted-foreground">BSC (Hons) in ICT in University of Sri Jayewardhenepura</p>
                <p className="text-sm text-muted-foreground">Year of Study (2024-2028)</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Location</h4>
                <p className="text-muted-foreground">Available for remote work and on-site opportunities</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="p-6 card-hover border-primary/10">
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <Card className="p-8 border-primary/10">
            <h3 className="text-xl font-bold text-foreground mb-6">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="px-3 py-1 text-sm bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Soft Skills */}
          <Card className="p-8 border-primary/10">
            <h3 className="text-xl font-bold text-foreground mb-6">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="outline" 
                  className="px-3 py-1 text-sm border-accent/30 text-accent hover:bg-accent/10 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;