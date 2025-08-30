'use client'

import { SimpleCard } from "@/components/cards/SimpleCard";
import { ResponsiveGrid } from "@/components/ResponsiveGrid";
import { SimpleCardInfo } from "@/models/simple-card-info";

export function PilaresSection() {
    const pilares: SimpleCardInfo[] = [
        { emoji: "🚀", titulo: "Inovação", descricao: "Aplicamos tecnologia e metodologias de ponta para soluções avançadas." },
        { emoji: "🎯", titulo: "Precisão", descricao: "Atenção minuciosa a cada detalhe." },
        { emoji: "🌿", titulo: "Sustentabilidade", descricao: "Projetos que respeitam o meio ambiente." },
        { emoji: "💎", titulo: "Exclusividade", descricao: "Atendimento personalizado." },
        { emoji: "🤝", titulo: "Ética", descricao: "Transparência e integridade." },
    ]

    return (
        <div className="flex flex-col gap-10 items-center">
            <h2 className="text-3xl font-semibold lg:text-4xl">Como você pode ajudar?</h2>
            <ResponsiveGrid
                items={pilares}
                renderItem={(pilar) => <SimpleCard item={pilar} />}
                cols={3}
                gap={6}
            />
        </div>
    )
}