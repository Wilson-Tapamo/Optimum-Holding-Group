/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Key, Map, Paintbrush } from "lucide-react";
import RecentWorks from "@/components/RecentWorks";

const images = [
  "/images/bg-1.jpg",
  "/images/bg-2.jpg",
];

export default function SciPage() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      title: "Promotion immobilière",
      icon: <Home className="w-8 h-8 text-blue-500" />,
      items: ["Conception de projets immobiliers", "Construction de logements", "Vente et location"],
    },
    {
      title: "Aménagement foncier",
      icon: <Map className="w-8 h-8 text-indigo-500" />,
      items: ["Lotissement", "Viabilisation de terrains", "Études topographiques"],
    },
    {
      title: "Gestion locative",
      icon: <Key className="w-8 h-8 text-cyan-500" />,
      items: ["Recherche de locataires", "Rédaction de baux", "Encaissement des loyers", "Entretien du patrimoine"],
    },
    {
      title: "Rénovation & Décoration",
      icon: <Paintbrush className="w-8 h-8 text-sky-500" />,
      items: ["Aménagement d'intérieur", "Réhabilitation de bâtiments", "Conseils en aménagement"],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentImage]}
                alt="SCI Hero"
                fill
                className="object-cover brightness-[0.4]"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="container mx-auto px-4 z-10 text-center flex flex-col items-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card max-w-4xl w-full flex flex-col items-center gap-6 py-12 px-6 sm:px-12 backdrop-blur-xl bg-white/10 dark:bg-slate-900/40 border-white/20"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-2">
              MEGA IMMO PRESTIGE
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 font-light">
              L'immobilier de prestige et la gestion de votre patrimoine
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 w-full overflow-hidden bg-black/40 backdrop-blur-sm border-t border-white/10 py-4 z-10">
          <motion.div
            animate={{ x: ["100%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="whitespace-nowrap flex"
          >
            <span className="text-xl font-medium tracking-wide text-white/90">
              "Bâtir aujourd'hui, le prestige de demain"
            </span>
          </motion.div>
        </div>
      </section>

      <section className="py-24 relative z-10 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-blue-500 font-semibold uppercase tracking-wider text-sm">
              Services
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">
              Vos Solutions <span className="text-gradient">Immobilières</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-6 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card group h-full flex flex-col"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-all">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300 flex-grow">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <RecentWorks images={[
        "/images/sci.jpg", 
        "/images/boss.jpg", 
        "/images/bureau1.jpeg"
      ]} />
    </div>
  );
}
