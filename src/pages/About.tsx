import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 px-4">
        <section className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-semibold mb-2">About</h1>
          <p className="text-muted-foreground">Content coming soon.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;