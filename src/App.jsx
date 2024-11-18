import Features from "./Section/Features";
import Header from "./Section/Header";
import Hero from "./Section/Hero";
import Pricing from "./Section/Pricing";
import Faq from "./Section/Faq";
import Testimonials from "./Section/Testimonials";
import Download from "./Section/Download";
function App() {
  return (
    <>
      <main className="overflow-hidden">
        <Header />
        <Hero />
        <Features />
        <Pricing />
        <Faq />
        <Testimonials />
        <Download />
      </main>
    </>
  );
}

export default App;
