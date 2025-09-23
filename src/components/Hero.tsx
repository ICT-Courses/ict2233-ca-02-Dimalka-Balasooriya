import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBackground from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Hero background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 hero-bg opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center space-y-8">
          {/* Profile Image */}
          <div className="fade-in">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary to-accent p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                
                <img
                  src="/profile_img.png"  
                  alt="Profile"
                  className="w-28 h-28 rounded-full object-cover"
                />
                
              </div>
            </div>
          </div>


          {/* Main Heading */}
          <div className="fade-in-delay space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white typing-animation">
              Hi, I'm <span className="text-white">Dimalka Nethmini</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Software Engineering Student passionate about creating beautiful,
              functional web applications with React, JavaScript, and modern technologies.
            </p>
          </div>

          {/* Skills Tags */}
          <div className="fade-in-delay flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {['React.js', 'JavaScript', 'TypeScript', 'HTML & CSS', 'Tailwind CSS', 'Git'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="fade-in-delay flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="btn-glow group min-w-[200px]"
            >
              <Link to="/projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="group min-w-[200px] border-primary/30 hover:border-primary"
            >
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="fade-in-delay flex justify-center space-x-6 pt-8">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-200 hover:scale-110"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-200 hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-200 hover:scale-110"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;