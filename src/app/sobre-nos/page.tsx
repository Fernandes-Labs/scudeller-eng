import { TimelineSection } from "@/components/sections/TimelineSection";
import { MissaoVisaoValoresSection } from "@/components/sections/MissaoVisaoValoresSection";

export default function SobreNos() {
    return (
        <div className="flex flex-col gap-12">
            <p className="text-xl lg:text-2xl text-center lg:px-32">Somos mais que uma empresa de engenharia civil. Atuamos como parceiro estratégico, combinando expertise técnica, inovação e compromisso com a sustentabilidade.</p>
            <MissaoVisaoValoresSection />
            <TimelineSection />
        </div>
    )
}