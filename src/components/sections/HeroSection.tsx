"use client"

import { motion } from "motion/react";
import { Links } from "@/enums/links";
import { Button } from "@/components/Button";
// import {ComponentIds} from "@/enums/component-ids";

export default function HeroSection() {
    return (
        // <section className="relative w-full h-screen bg-[url('/banner.avif')] bg-cover bg-center flex items-end lg:items-center">
        <section className="relative w-full h-screen bg-cover bg-center flex items-end lg:items-center">
            <div className="absolute inset-0 bg-white bg-opacity-40 z-0" />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col flex-1 gap-4 md:px-32 z-10 text-light-gray">
                <div className="flex flex-col flex-1 gap-4 md:px-16 z-10 text-light-gray text-center lg:text-left pb-60 pt-0 lg:pb-0 lg:pt-32">
                    <h1 className="text-3xl md:text-5xl 2xl:text-7xl font-bold">
                        Transformamos Desafios em Soluções Inovadoras e Sustentáveis
                    </h1>
                    <h3 className="text-lg md:text-2xl 2xl:text-3xl font-semibold">
                        Projetos inteligentes, consultoria estratégica e gestão de obras com precisão, exclusividade e compromisso socioambiental.
                    </h3>
                    <Button
                        // id={ComponentIds.BUTTON_SECTION_COMO_AJUDAR}
                        id="button-id"
                        url={Links.BUTTON_CTA}
                        text="Conheça nossos projetos"
                        cssBlock="w-fit mx-auto lg:mx-0 bg-orange hover:bg-blue text-light-gray font-semibold py-3 px-6 rounded-xl shadow-lg transition"
                    />
                </div>
            </motion.div>
        </section>
    )
}
