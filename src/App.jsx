import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { Toaster } from "@/components/ui/toaster"; // ✅ import Toaster
import Footer from "@/components/Footer"
import { TooltipProvider } from "@/components/ui/tooltip"

function App() {
  return (
    <div className="bg-background text-foreground min-h-screen scroll-smooth">
      <header className="sticky top-0 z-50 backdrop-blur-sm bg-background/80 shadow-sm">
        <Navbar />
      </header>

      <main>
        <section id="home"><Hero /></section>
        <TooltipProvider><section id="about"><About /></section></TooltipProvider>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
        <section id="footer"><Footer /></section>
      </main>

      {/* ✅ Add Toaster component once, preferably at root level */}
      <Toaster />
    </div>
  );
}

export default App;
