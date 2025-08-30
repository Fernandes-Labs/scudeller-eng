'use client'

import { motion } from "motion/react";
import { SimpleCard } from "@/components/cards/SimpleCard";
import { SimpleCardInfo } from "@/models/simple-card-info";

export function MissaoVisaoValoresSection() {
    const cardInfos: SimpleCardInfo[] = [
        { emoji: "🎯", titulo: "Missão", descricao: "Transformar desafios complexos em soluções inovadoras e sustentáveis." },
        { emoji: "🌱", titulo: "Visão", descricao: "Ser referência em soluções de engenharia que melhoram a qualidade de vida urbana." },
        { emoji: "🔭", titulo: "Valores", descricao: "Inovação, Precisão, Sustentabilidade, Exclusividade e Ética." },
    ]

    return (
        <motion.section
            className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-6 lg:px-4"
            initial="hidden"
            whileInView="visible"
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } },
            }}
            >
            {cardInfos.map((item, i) => (
                <SimpleCard key={i} item={item} />
            ))}
        </motion.section>
    )
}