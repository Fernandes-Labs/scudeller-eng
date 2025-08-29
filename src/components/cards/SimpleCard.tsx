'use client'

import {motion} from "motion/react";

export interface SimpleCardProps {
    item: SimpleCardInfo;
}

export function SimpleCard({ item }: SimpleCardProps) {
    return (
        <motion.div
            key={item.titulo}
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
        >
            <div className="flex flex-col gap-4">
                <div>
                    <div className="text-4xl mb-2">{item.emoji}</div>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="font-bold text-blue">{item.titulo}</h4>
                    <p className="text-sm text-gray-dark">{item.descricao}</p>
                </div>
            </div>
        </motion.div>
    )
}