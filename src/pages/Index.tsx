import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 px-4">
        <section className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Welcome to my portfolio
          </h1>
          <p className="text-muted-foreground text-lg">
            Building clean, accessible web experiences.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
