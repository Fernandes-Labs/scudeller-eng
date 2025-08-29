import HeroSection from "@/components/sections/HeroSection";
import {PilaresSection} from "@/components/sections/PilaresSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-2xl gap-4">
      <HeroSection />
      <PilaresSection />
      <p className="text-gray-dark">Áreas de Atuação</p>
      {/*<p className="text-white">Destaque de Projetos - (?)</p>*/}
      <p className="text-yellow">CTA</p>
    </div>
  );
}
