"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function RecentWorks({ images }: { images: string[] }) {
  return (
    <section className="py-24 relative z-10 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-semibold uppercase tracking-wider text-sm">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Nos Récents <span className="text-gradient">Travaux</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-lg group"
            >
              <Image
                src={src}
                alt={`Recent work ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium text-lg px-4 py-2 border border-white/50 rounded-full backdrop-blur-sm">
                  Voir +
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
