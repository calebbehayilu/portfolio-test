import Image from "next/image";
import Link from "next/link";
import Nav from "./components/nav";
import Hero from "./components/hero";
import AboutMe from "./components/aboutme";
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="">
      <Nav />
      <Hero />
      <AboutMe />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
