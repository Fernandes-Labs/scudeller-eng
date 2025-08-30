'use client'

import { motion } from "motion/react";
import Image from "next/image";

interface TimelineItem {
    year: string;
    title: string;
    image?: string;
}

const timeline: TimelineItem[] = [
    { year: "2010", title: "Fundação da Scudeller Engenharia" },
    { year: "2015", title: "Ampliação" },
    { year: "2022", title: "Primeiro projeto sustentável" },
];

export function TimelineSection() {
    return (
        <div className="relative border-l-4 rounded border-gray-dark pl-6 space-y-10">
            {timeline.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.3 }}
                    className="relative"
                >
                    {/* Bolinha da timeline */}
                    <span className="absolute -left-[14px] pt-1 w-6 h-6 rounded-full bg-blue border-4 border-white shadow" />

                    {/* Conteúdo do marco */}
                    <div className="bg-light-gray px-8 py-4 rounded shadow">
                        <h3 className="text-xl md:text-2xl font-semibold text-dark-gray">
                            {item.year}
                        </h3>
                        <p className="text-lg md:text-xl text-dark-gray">{item.title}</p>
                        {item.image && (
                            <Image
                                src={item.image}
                                alt={item.title}
                                className="mt-2 w-full max-w-xs rounded"
                            />
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
