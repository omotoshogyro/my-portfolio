import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <About />
        <Experience />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
