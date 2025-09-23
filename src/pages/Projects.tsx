import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <div className="max-w-3xl mx-auto px-4 py-20 text-center text-muted-foreground">
          <h1 className="text-3xl font-bold mb-4">Projects</h1>
          <p>Coming soon.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;


