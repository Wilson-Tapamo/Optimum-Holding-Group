"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, 
  Coins, 
  LineChart, 
  FileCheck2, 
  Building2, 
  Wallet, 
  BookOpen, 
  Landmark, 
  PieChart, 
  GraduationCap 
} from "lucide-react";

// Animation Variants
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const services = [
  {
    title: "Droit des affaires",
    icon: <Briefcase className="w-8 h-8 text-blue-500" />,
    items: [
      "Le droit commercial",
      "Le droit des sociétés",
      "Le droit de la concurrence",
      "Le droit de la distribution",
      "La propriété intellectuelle",
      "Conseil Mining - Oil - Gaz",
      "Opérations sur le Capital",
      "Contentieux Fiscal",
      "Expertise OHADA",
    ],
  },
  {
    title: "Droit financier",
    icon: <Coins className="w-8 h-8 text-indigo-500" />,
    items: [
      "Financement (Corporate, Acquisition, Immobilier, Projet)",
      "Services Financiers (Regulatory, Prudentiel, Transactionnel)",
      "Contentieux (Disciplinaire, Bancaire, Pénal, Boursier)",
      "Banque Digitale et Crypto-Finance",
    ],
  },
  {
    title: "Conseil en Investissements financiers",
    icon: <LineChart className="w-8 h-8 text-cyan-500" />,
    items: [
      "Construction de Portefeuille d'investissement en SCPI",
      "Placement de produits financiers",
      "Les options et contrats à terme",
      "Analyse financière des entreprises",
      "Veille Juridique",
    ],
  },
  {
    title: "Dématérialisation des valeurs",
    icon: <FileCheck2 className="w-8 h-8 text-sky-500" />,
    items: [
      "Procédures de collecte et vérification",
      "Dématérialisation (DCVM, adhérent teneur de compte)",
      "Destruction des titres",
      "Comptabilité titres des émetteurs",
      "Tenue des comptes Titres",
    ],
  },
  {
    title: "Opérations sur titre",
    icon: <Building2 className="w-8 h-8 text-violet-500" />,
    items: [
      "Offres Publiques (Acquisition, Échange, Achat, Retrait, Prix Minimal)",
      "Paiement de dividendes",
      "Émission de nouvelles actions",
      "Titrisation des créances (Emprunts obligataires, CDO)",
    ],
  },
  {
    title: "Gestion de patrimoine",
    icon: <Wallet className="w-8 h-8 text-fuchsia-500" />,
    items: [
      "Diagnostic patrimonial",
      "Analyse des risques",
      "Développement portefeuille clients",
      "Bilan patrimonial",
      "Fiscalité du patrimoine",
    ],
  },
  {
    title: "Gestion des backs offices titre",
    icon: <BookOpen className="w-8 h-8 text-blue-400" />,
    items: [
      "Gestion des stocks de titres",
      "Opérations sur titres",
      "Réconciliation des comptes",
      "Enregistrement des transactions",
      "Organisation des back offices",
    ],
  },
  {
    title: "Finance d'entreprise",
    icon: <Landmark className="w-8 h-8 text-emerald-500" />,
    items: [
      "Trésorerie d'entreprise",
      "Comptabilité d'entreprise",
      "Gestion des risques",
      "Stratégie financière",
      "Pilotage des performances",
      "Évaluation des investissements",
    ],
  },
  {
    title: "Finance de Marché",
    icon: <PieChart className="w-8 h-8 text-rose-500" />,
    items: [
      "Opérations sur le marché (Arbitrage, Couverture, Spéculation)",
      "Structuration d'Appel Public à l'Épargne",
      "Conseil en émission de titres",
      "Acquisitions d'actifs financiers",
    ],
  },
  {
    title: "Formation",
    icon: <GraduationCap className="w-8 h-8 text-amber-500" />,
    items: ["Catalogue de formations continues pour professionnels et cadres dirigeants."],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative z-10">
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
            Nos <span className="text-gradient">Activités</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariant} className="glass-card group h-full flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 shadow-sm border border-white/10 group-hover:bg-white/10 group-hover:scale-110 transition-all">
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
        </motion.div>
      </div>
    </section>
  );
}
