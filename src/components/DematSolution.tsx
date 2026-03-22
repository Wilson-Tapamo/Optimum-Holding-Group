"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";

const features = [
  "Effectuez vos mouvements de titres numériquement",
  "Générez les ordres de mouvement",
  "Exportez le registre en ligne en 1 clic",
  "Conservez en double écriture les OST",
  "Table de capitalisation dynamique",
];

export default function DematSolution() {
  return (
    <section id="dematsolution" className="relative py-24 bg-slate-900 text-white overflow-hidden">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600/30 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-indigo-600/30 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 order-2 lg:order-1"
          >
            <div className="relative aspect-video lg:aspect-square max-h-[500px] w-full mx-auto">
              <Image
                src="/images/654e11b28a9ba72b1a570a42_Header Axiocap-08.svg"
                alt="DematSolution Dashboard"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 order-1 lg:order-2"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-400 font-semibold text-sm mb-6 border border-blue-500/30">
              DEMATSOLUTION
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Solution numérique de gestion des titres, dématérialisation des valeurs mobilières
            </h2>
            <div className="mb-6 inline-block bg-white/10 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-xl">
              <span className="text-slate-400 text-sm font-medium mr-2">Notre Client Principal :</span>
              <span className="text-white font-bold text-lg tracking-wide">SOCARTO</span>
            </div>
            
            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  key={index}
                  className="flex items-center text-slate-300 text-lg group"
                >
                  <CheckCircle2 className="w-6 h-6 mr-4 text-blue-500 group-hover:text-blue-400 transition-colors flex-shrink-0" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.9 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-100 transition-colors"
              >
                Contactez-nous <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
