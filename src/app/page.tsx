import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import DematSolution from "@/components/DematSolution";
import RecentWorks from "@/components/RecentWorks";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <RecentWorks images={[
        "/images/1.jpg", 
        "/images/2.jpg", 
        "/images/4.jpg"
      ]} />
      <DematSolution />
    </>
  );
}
