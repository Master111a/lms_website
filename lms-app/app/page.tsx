import Hero from "./components/ui/students/Hero";
import Navbar from "./components/ui/students/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white w-full">
      <Navbar />
      <Hero />
    </div>
  );
}
