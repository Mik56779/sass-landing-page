import Features from "./Section/Features";
import Header from "./Section/Header";
import Hero from "./Section/Hero";
import Pricing from "./Section/Pricing";
function App() {
  return (
    <>
      <main className="overflow-hidden">
        <Header />
        <Hero />
        <Features />
        <Pricing />
      </main>
    </>
  );
}

export default App;
