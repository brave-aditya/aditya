'use client'
import Image from "next/image";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Quotes from "./components/Quotes";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-16 mx-auto px-4 sm:px-12 py-4">
        <Herosection />
        <Quotes />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
