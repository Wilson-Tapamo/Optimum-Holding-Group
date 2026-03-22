/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-blue-500/10 blur-[100px] rounded-full mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-indigo-500/10 blur-[120px] rounded-full mix-blend-multiply pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden glass p-2 w-full max-w-md mx-auto">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/boss.jpg"
                  alt="M. ETOUNDI OTTOU PATRICE"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-7/12"
          >
            <span className="text-blue-500 font-semibold uppercase tracking-wider text-sm">
              Mot de M. le Directeur Général
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-8 leading-tight">
              Ingénierie juridique et financière au <span className="text-gradient">service du développement</span>
            </h2>

            <div className="glass-card space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base">
              <p>
                Au cœur de la notion même de sociétés par actions et au-delà de l'ensemble du droit des sociétés et du droit financier se trouvent les valeurs mobilières encore appelés capitaux mobiliers, instruments financiers complexes.
              </p>
              <p>
                En effet depuis l'avènement de la dématérialisation des valeurs mobilières, le droit des sociétés commerciales, le droit financier en général et le droit boursier sont devenus particulièrement techniques et mouvants, faisant notamment appel à l'informatique pour la conservation et la possession de titres et une réglementation abondante émanant de différentes lois et de divers règlements, ceux-ci pouvant être pris par les instances de régulation des marchés.
              </p>
              <p>
                Ainsi, en marge des normes juridiques classiques on voit apparaître des normes particulières complexes dont les principes ne coïncident pas forcément avec ceux du droit commun.
              </p>
              <p>
                C'est dans l'optique de démystifier ces notions nouvelles ainsi que leurs techniques de mise en œuvre complexe que <strong>M. ETOUNDI OTTOU PATRICE</strong> Conseil Juridique et financier, certifié de l'Autorité des Marchés Financiers (AMF) français, doté d'une expérience de plus de 30 ans dans le domaine a créé le cabinet d'ingénierie juridique et financière <strong>OPTIMUM JURIDIS FINANCES</strong> spécialisé en droit des affaires et en finance de marchés.
              </p>
              <p>
                Après une expérience de plus de dix ans en cabinets qu'il quitte comme Directeur de mission 3 au cabinet ERNST & Young, <strong>Monsieur ETOUNDI</strong> va ensuite occuper pendant 21 ans les fonctions de Directeur à la caisse autonome d'amortissement, comme Directeur du dépositaire central, de la dématérialisation des valeurs mobilières et de la gestion de la dette structurée de l'état du Cameroun.
              </p>
              
              <div className="pt-4 border-t border-slate-200 dark:border-slate-700/50 mt-4">
                <p className="font-semibold mb-2">A travers cette dernière fonction il a notamment :</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 text-lg">•</span>
                    <span>Dirigé la création du dépositaire central Camerounais et présidé à sa destinée jusqu'à la fusion des marchés financiers de la CEMAC.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 text-lg">•</span>
                    <span>Initié et conduit jusqu'à son terme le processus de dématérialisation des valeurs mobilières au Cameroun et par laquelle il fait office d'expert dans l'espace intégré OHADA.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 text-lg">•</span>
                    <span>Reformé la gestion des effets publiques négociables, titres émis dans le cadre de l'apurement des arriérés de dette intérieure de l'Etat. En occurrence, il a initié et conduit le rachat de la dette bancaire titrisée auprès du crédit agricole Luxembourg.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <p className="text-lg font-bold text-slate-900 dark:text-white">
                  @ Mr ETOUNDI OTTOU
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
